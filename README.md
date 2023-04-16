A plugin is an npm package that can add various extensions to ESLint. A plugin can perform numerous functions, including but not limited to adding new rules and exporting shareable configurations. Make sure the package has been installed in a directory where ESLint can require it.

The plugins property value can omit the **eslint-plugin-** prefix of the package name.

The extends property value can consist of:

plugin:
the package name (from which you can omit the prefix, for example, react is short for **eslint-plugin-plugin or package Name**)
/
the configuration name (for example, recommended)


{
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "rules": {
       "react/no-set-state": "off"
    }
}

