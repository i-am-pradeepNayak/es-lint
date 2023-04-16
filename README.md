**Rule Severities**

"off" or 0 - turn the rule off
"warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
"error" or 2 - turn the rule on as an error (exit code is 1 when triggered)

Example
"rules": {
    "indent": ["error", 4],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
},

**Rules from Plugins**

To configure a rule that is defined within a plugin, prefix the rule ID with the plugin name and /.

Example

{
"plugins": [
    "plugin1"
],
"rules": {
    "eqeqeq": "off",
    "curly": "error",
    "quotes": ["error", "double"],
    "plugin1/rule1": "error"
    }
}

> Note: When specifying rules from plugins, make sure to omit eslint-plugin-. ESLint uses only the unprefixed name internally to locate rules.

**Disabling Rules**

To disable rule warnings in a part of a file, use *block comments* in the following format:

For Refernce and examples :[https://eslint.org/docs/latest/use/configure/rules#disabling-rules]


to disable eslint-plugin-example’s rule-name rule, combine the plugin’s name (example) and the rule’s name (rule-name) into example/rule-name:

const name="disable pluguns rules" // eslint-disable-line example/rule-name

**Comment descriptions**

// eslint-disable-next-line no-console -- Here's a description about why this configuration is necessary.

Example:

//eslint-disable-next-line quotes -- double quotes style fine for me
const lint = "config throuh cli";

/* eslint-disable-next-line no-console --
 * nedd console for debug
**/
console.log("eslint-disable-next-line");


**Using configuration files to disbale rules**

 disable rules inside of a configuration file for a group of files, use the overrides key along with a files key

  "overrides": [
    {
      "files": ["**/*decode.js"],
      "excludedFiles": "*parser.js",
      "rules": {
        "quotes": ["error", "single"],
        "no-console": 0
      }
    }
  ]

**To disbale Inline Comments [noInlineConfig] & report unused eslint-disable comments [reportUnusedDisableDirectives] in config files**

{
"plugins": [
    "plugin1"
],
"rules": {
    "eqeqeq": "off",
    "curly": "error",
    "quotes": ["error", "double"],
    "plugin1/rule1": "error",
    "noInlineConfig":0
    }
}

Result :Disable all inline config 

Example :

   #####  decode.js
  //eslint-disable-next-line no-console
    var name="lint rule not workin for this line"
    
    

    console.log("eslint-disable via override proprty ")
  
  "overrides": [
    {
      "files": ["**/*decode.js"],
      "excludedFiles": "*parser.js",
      "rules": {
        "quotes": ["error", "single"],
         "no-console": 0,
        "reportUnusedDisableDirectives": 1
      }

    }
  ]

  result :through warning  for *eslint-disable-next-line no-console*

