#### Configuration File Formats

If there are multiple configuration files in the same directory, ESLint only uses one. The priority order is as follows:

```json
.eslintrc.js
.eslintrc.cjs
.eslintrc.yaml
.eslintrc.yml
.eslintrc.json
package.json
```

#### Using Configuration Files

There are two ways to use configuration files.

1) The first way to use configuration files is via .eslintrc.* and package.json files. ESLint automatically looks for them in the directory of the file to be linted, and in successive parent directories all the way up to the root directory of the filesystem (/), the home directory of the current user (~/), or when root: true is specified

  2) The second way to use configuration files is to save the file wherever you would like and pass its location to the CLI using the --config option, such as:

        `eslint -c myconfig.json myfiletotest.js`

#### Comments in configuration files ####

Same as javascript comments  use "//" for comments in configuration files.

#### Adding Shared Settings ####

Need to explore more in the future.(pending)

#### Cascading and Hierarchy ####

The configuration cascade works based on the location of the file being linted. If there is an .eslintrc file in the same directory as the file being linted, then that configuration takes precedence. ESLint then searches up the directory structure, merging any .eslintrc files it finds along the way until reaching either an .eslintrc file with root: true or the root directory.

ESLint stops looking in parent folders once it finds a configuration with "root": true.

```css
home
└── user
└── projectA
├── .eslintrc.json <- it will be not used because we declarecd root true in below
└── lib
├── .eslintrc.json <- { "root": true }
└── main.js
```

**Extending Configuration Files**

  A configuration file, once extended, can inherit all the  rules, plugins, and language options of another configuration file. It will merge with derived config file if exist.Derived config rules has higher precedence.

  we can extends shareable config file via npm

#### Using a shareable configuration package(extends property)

  A sharable configuration is an npm package that exports a configuration object

Note: The extends property value can omit the eslint-config- prefix of the package name.

syntax ->  

     extends : ["packageName1","packageName2"]
    

**Using a configuration from a plugin**

it adds more functionality and various extension
NOTE :The plugins property value can omit the eslint-plugin- prefix of the package name.

syntax:

```json
    plugins :[pluginName1,pluginName2]

   using plugin we can extends rules.The extends property look like this 
 
    extends : [ pulginName/packagename ]
```

example :


```json
    "plugins": [
        "react"
    ],
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
```



**Configuration Based on Glob Patterns**

   using the overrides key we can apply addition rule that having having higher precedence compare to regular configuration will apply for specific files mentioned inside overrides files and exludes file property  

How overrides work:
     
  [  https://eslint.org/docs/latest/use/configure/configuration-files#how-do-overrides-work](https://)


sample tested es lint file

```json
{
    "extends": "eslint:recommended",
    "root":true,  //main directory lint config rules will not mergerd
    "env": {
        "browser": true,
        "node": true,
        "es6":true
      },
    "rules": {
        // enable additional rules
        "indent": ["error", 4],
        "linebreak-style": ["error", "unix"],
        "semi": ["error", "always"],

        // override configuration set by extending "eslint:recommended"
        "no-empty": "warn",
        "no-cond-assign": ["error", "always"],

        // disable rules from base configurations
         "for-direction": "off"
    },
    "parserOptions": {
        "ecmaVersion": 6
    },
    "overrides": [
        {
          "files": ["*Handler.js"],
          "excludedFiles": "*Errors.js",
          "rules": {
            "quotes": ["error", "double"]
          }
        }
      ]
}
```






