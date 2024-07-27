
/**
 * Prefix Tailwind classNames
 * 
 * @return {string}
**/
const twPrefixer = (codeStr = "", { prefixStr = "tw-", ignoreModClassNames = true } = {}) => {
  if (!codeStr) {
    return codeStr;
  }
  let resultCode = codeStr;

  const isArbitraryClass = (str, fullClassName) => {
    // code here
    return true;
  }

  const isModifier = (str, fullClassName) => {
    // todo: reverse the check : 
    // str.startsWith(modifierClassName)

    return MODIFIER_CLASS_NAMES.all.includes(str);
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
      const prefixedClassNames = $3.split(" ").filter(cn => cn != "").map(cName => {
        // todo: check arbitrary class instead of square bracket only

        // note: arbitrary value and arbitrary variants
        // https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values
        // https://tailwindcss.com/docs/adding-custom-styles#arbitrary-variants

        const addClassNamePrefix = (className) => {

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
                  return classNameModifiers.join(":") + ":" + (classNameNoAVNoM.startsWith("-") ? classNameNoAVNoM.substr(0, 1) + prefixStr + classNameNoAVNoM.substr(1) : prefixStr + classNameNoAVNoM) + "[" + className.split("[").slice(1).join("[");
                }
              }


            } else if (
              CRAWLED_CLASS_NAMES.some(defClass => defClass.startsWith(classNameNoAV) ||
                (classNameNoAV.slice(1) === "-" && defClass.startsWith(classNameNoAV.slice(1))))
            ) {
              return (classNameNoAV.startsWith("-") ? classNameNoAV.substr(0, 1) + prefixStr + classNameNoAV.substr(1) : prefixStr + classNameNoAV) + "[" + className.split("[").slice(1).join("[");
            }
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
                return classNameModifiers.join(":") + ":" + (classNameNoM.startsWith("-") ? classNameNoM.substr(0, 1) + prefixStr + classNameNoM.substr(1) : prefixStr + classNameNoM);
              }
            }

          } else if (CRAWLED_CLASS_NAMES.some(defClass => className.startsWith(defClass) || className.startsWith(`-${defClass}`))) {
            // class don't have arbitrary value nor modifier

            return (className.startsWith("-") ? className.substr(0, 1) + prefixStr + className.substr(1) : prefixStr + className);
          }

          return className;

        }

        if (!cName.startsWith("!")) {
          // no !important prefixed classnames

          return addClassNamePrefix(cName);

        } else if (cName.startsWith("!")) {
          // have !important prefixed classnames

          className = addClassNamePrefix(cName.slice(1));
          return "!" + className;
        }


        return className;
      })

      return $1 + $2 + prefixedClassNames.join(" ") + $4;
    });
  });

  return resultCode;
}
