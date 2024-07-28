# TailwindCSS ClassNames Prefixer

Give Prefix like "tw-" to your Tailwind CSS Class Names

Website : https://tw-prefixer.vercel.app

## Features

 - [x] For **TailwindCSS v3**
 - [x] HTML or JSX codebase or list of ClassNames
 - [x] Default ClassNames
 - [x] Negative ClassNames
 - [x] `!important` marked ClassNames
 - [x] Simple Variant/Modifier ClassNames (only match with `:` and modifier classNames list)
 - [x] Simple Arbitrary value ClassNames (only match with `[`)
 - [ ] Complex Variant/Modifier ClassNames
 - [ ] Complex Arbitrary value ClassNames
 - [ ] [Arbitrary variants](https://tailwindcss.com/docs/hover-focus-and-other-states#using-arbitrary-variants) and [arbitrary properties](https://tailwindcss.com/docs/adding-custom-styles#arbitrary-properties)
 - [ ] ClassNames not in HTML attribute or JSX classNames property (e.g. inside a variable)

## Data Sources

ClassNames are crawled from https://tailwindcss.com/docs/

Variants / Modifiers classNames crawled from https://tailwindcss.com/docs/hover-focus-and-other-states#quick-reference

Additional classNames : `transform`, `transform-none`, `transform-gpu`, `transform-cpu`, `group`, `peer`

## Examples

This is your code and you want to add prefix `tw-`

Initial :

```jsx
<p className="fixed -left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
	<span class='special:bg-slate-800 lg:dark:myother-text'>Get started by editing</span>
	<code className="font-mono foo:bar-baz font-bold dark:some:thing-here text-[10px] before:content-[''] before:-top-2">this text</code>
	<span className={`myother-[class] hover:font-bold dark:hover:text-[#e5e5e5]`}>or paste your code here</span>
</p>
```

Tailwind ClassNames will be prefixed and leave your other class as it is

Result :

```jsx
<p className="tw-fixed -tw-left-0 tw-top-0 tw-flex tw-w-full tw-justify-center tw-border-b tw-border-gray-300 tw-bg-gradient-to-b tw-from-zinc-200 tw-pb-6 tw-pt-8 tw-backdrop-blur-2xl dark:tw-border-neutral-800 dark:tw-bg-zinc-800/30 dark:tw-from-inherit lg:tw-static lg:tw-w-auto lg:tw-rounded-xl lg:tw-border lg:tw-bg-gray-200 lg:tw-p-4 lg:dark:tw-bg-zinc-800/30">
	<span class='special:bg-slate-800 lg:dark:myother-text'>Get started by editing</span>
	<code className="tw-font-mono foo:bar-baz tw-font-bold dark:some:thing-here tw-text-[10px] before:tw-content-[''] before:-tw-top-2">this text</code>
	<span className={`myother-[class] hover:tw-font-bold dark:hover:tw-text-[#e5e5e5]`}>or paste your code here</span>
</p>
```

> You can also copy paste full jsx file

## Similar Projects

- https://github.com/vesper8/vue-tailwind-prefix-applicator
- https://github.com/small-tou/tailwind-prefixer
- https://github.com/leomarcel/tailwind_prefixer

#### VS Code Plugin

- https://github.com/yensubldg/prefix-class-vscode
- https://github.com/alexanderchan/tw-prefix-grammar

## LICENSE

MIT License