# eslint-plugin-eslint-demo

A demo plugin

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-eslint-demo`:

```
$ npm install eslint-plugin-eslint-demo --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-eslint-demo` globally.

## Usage

Add `eslint-demo` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
  "plugins": ["eslint-demo"]
}
```

Then configure the rules you want to use under the rules section.

```json
{
  "rules": {
    "eslint-demo/rule-name": 2
  }
}
```

## Supported Rules

- Fill in provided rules here

# resources

- https://github.com/Quramy/eslint-plugin-tutorial
- https://www.frontendmayhem.com/writing-your-own-eslint-plugins/
- https://www.frontendmayhem.com/writing-your-own-eslint-plugin-autofix-code/
