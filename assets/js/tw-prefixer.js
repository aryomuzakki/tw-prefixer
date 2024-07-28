
/**
 * Prefix Tailwind classNames
 * @param {string} codeStr html/jsx code or list of className
 * 
 * @return {string} html/jsx code or list of className already prefixed
**/
const twPrefixer = (codeStr, { prefixStr = "tw-", ignoreModClassNames = true, checkAllStr = false } = {}) => {
  if (!codeStr) {
    return codeStr;
  }
  let resultCode = codeStr;

  if (checkAllStr) {
    // match space separated class name https://regex101.com/r/e6CCVZ/1
    const regex = /(?<=[ "'`]|^)([\w\-.:\\/[\]#_']{3,})(?=[  "'`]|$)/gm;
    resultCode = resultCode.replace(regex, (matched) => {
      return addClassNamePrefix(matched, { prefixStr, ignoreModClassNames });
    })
    return resultCode;
  }

  const regexes = [
    // using double quote or jsx interpolation string {``}
    /(class(?:Name|)=)("|{`)([^"`]*)?("|`})/g,
    // using single quote
    /(class(?:Name|)=)(')([^']*)?(')/g,
  ];

  regexes.forEach(rgx => {
    resultCode = resultCode.replace(rgx, (matched, $1, $2, $3, $4) => {

      if (!$3) {
        return matched;
      }

      // append prefix for each classname
      const prefixedClassNames = $3.split(/\s/).filter(cn => cn != "").map(cNameStr => {
        return addClassNamePrefix(cNameStr, { prefixStr, ignoreModClassNames });
      })

      return $1 + $2 + prefixedClassNames.join(" ") + $4;
    });
  });

  return resultCode;
}


const isArbitraryClass = (str, fullClassName) => {
  // code here
  return true;
}

const isModifier = (str, fullClassName) => {
  // todo: reverse the check : 
  // str.startsWith(modifierClassName)

  return MODIFIER_CLASS_NAMES.all.includes(str);
}

/**
   * Compare to tailwind className and add new prefix
   * 
   * @param {string} className 
   * @returns {string} className with new prefix
   */
const addPrefixWithoutImportant = (className, { prefixStr = "tw-", ignoreModClassNames = true } = {}) => {
  // todo: check arbitrary class instead of square bracket only

  // note: arbitrary value, arbitrary properties, and arbitrary variants
  // https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values
  // https://tailwindcss.com/docs/adding-custom-styles#arbitrary-properties
  // https://tailwindcss.com/docs/hover-focus-and-other-states#using-arbitrary-variants

  if (className.startsWith("[")) {
    // class have an arbitrary variants/modifiers or arbitary properties

    return className;
  }

  if (className.startsWith(":[")) {
    // class have an arbitrary properties with a modifiers

    return className;
  }

  if (className.includes("[")) {
    // class have an arbitrary value

    const classNameNoAV = className.split("[")[0];
    if (classNameNoAV.includes(":")) {

      const classNameModifiers = classNameNoAV.split(":").slice(0, -1);
      const isAllModifier = ignoreModClassNames ? true : classNameModifiers.every(modifier => {
        return isModifier(modifier);
      })

      const classNameNoAVNoM = classNameNoAV.split(":").pop();
      isArbitraryClass(classNameNoAVNoM);

      if (isAllModifier) {

        // check if the default class starts with classname without modifier
        if (
          CRAWLED_CLASS_NAMES.some(defClass => defClass.startsWith(classNameNoAVNoM) ||
            (classNameNoAVNoM.slice(1) === "-" && defClass.startsWith(classNameNoAVNoM.slice(1))))
        ) {
          return classNameModifiers.join(":") + ":" + (classNameNoAVNoM.startsWith("-") ? classNameNoAVNoM.slice(0, 1) + prefixStr + classNameNoAVNoM.slice(1) : prefixStr + classNameNoAVNoM) + "[" + className.split("[").slice(1).join("[");
        }
      }


    } else if (
      CRAWLED_CLASS_NAMES.some(defClass => defClass.startsWith(classNameNoAV) ||
        (classNameNoAV.slice(1) === "-" && defClass.startsWith(classNameNoAV.slice(1))))
    ) {
      return (classNameNoAV.startsWith("-") ? classNameNoAV.slice(0, 1) + prefixStr + classNameNoAV.slice(1) : prefixStr + classNameNoAV) + "[" + className.split("[").slice(1).join("[");
    }
    console.log("somewhere");
  }

  if (className.includes(":")) {
    // class don't have arbitrary value, but have modifier

    const classNameNoM = className.split(":").pop();

    const classNameModifiers = className.split(":").slice(0, -1);
    const isAllModifier = ignoreModClassNames ? true : classNameModifiers.every(modifier => {
      return isModifier(modifier);
    })

    if (isAllModifier) {

      // check if classname without modifier is starts with the default class
      if (CRAWLED_CLASS_NAMES.some(defClass => classNameNoM.startsWith(defClass) || classNameNoM.startsWith(`-${defClass}`))) {
        return classNameModifiers.join(":") + ":" + (classNameNoM.startsWith("-") ? classNameNoM.slice(0, 1) + prefixStr + classNameNoM.slice(1) : prefixStr + classNameNoM);
      }
    }

  } else if (CRAWLED_CLASS_NAMES.some(defClass => className.startsWith(defClass) || className.startsWith(`-${defClass}`))) {
    // class don't have arbitrary value nor modifier

    return (className.startsWith("-") ? className.slice(0, 1) + prefixStr + className.slice(1) : prefixStr + className);
  }

  return className;
}

/**
 * Check for css important (!) prefix before compare to tailwind className and add new prefix
 * 
 * @param {string} cName 
 * @returns {string} className with new prefix and css important (!) prefix if exist
 */
const addClassNamePrefix = (cName, { prefixStr = "tw-", ignoreModClassNames = true } = {}) => {

  if (cName.startsWith("!")) {
    // have !important prefixed classnames

    className = addPrefixWithoutImportant(cName.slice(1), { prefixStr, ignoreModClassNames });
    return "!" + className;
  } else {
    // no !important prefixed classnames

    return addPrefixWithoutImportant(cName, { prefixStr, ignoreModClassNames });
  }

}