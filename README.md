### Rule Severities

```markdown
"off" or 0 - turn the rule off 
"warn" or 1 - turn the rule on as a warning (doesn’t affect exit code)
"error" or 2 - turn the rule on as an error (exit code is 1 when triggered)
```

Example
```json
"rules": {
    "indent": ["error", 4],
    "linebreak-style": ["error", "unix"],
    "quotes": ["error", "double"],
    "semi": ["error", "always"]
},
```

### Rules from Plugins

To configure a rule that is defined within a plugin, prefix the rule ID with the plugin name and /.

Example

```json
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
```

> Note: When specifying rules from plugins, make sure to omit eslint-plugin-. ESLint uses only the unprefixed name internally to locate rules.

### Disabling Rules

To disable rule warnings in a part of a file, use *block comments* in the following format:

For Refernce and examples :[https://eslint.org/docs/latest/use/configure/rules#disabling-rules]

There are serveral types to disable rules
 
```javascript
alert('foo'); // eslint-disable-line no-alert, quotes, semi

// eslint-disable-next-line no-alert, quotes, semi
alert('foo');

/* eslint-disable quotes, semi */
alert('foo');
/* eslint-enable quotes, semi */

/* eslint-disable no-alert, no-console */
alert('foo');
/* eslint-enable */
```


to disable eslint-plugin-example’s rule-name rule, combine the plugin’s name (example) and the rule’s name (rule-name) into example/rule-name:

```javascript
const name="disable pluguns rules" // eslint-disable-line example/rule-name
```

### Comment descriptions

// eslint-disable-next-line no-console -- Here's a description about why this configuration is necessary.

Example:

```javascript
//eslint-disable-next-line quotes -- double quotes style fine for me
const lint = "config throuh cli";
```
Need console for debug
```javascript
// eslint-disable-next-line no-console 
console.log("eslint-disable-next-line");
```


### Using configuration files to disbale rules

 disable rules inside of a configuration file for a group of files, use the overrides key along with a files key

```json
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
```

**To disbale Inline Comments [noInlineConfig] & report unused eslint-disable comments [reportUnusedDisableDirectives] in config files**

```json
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
```

Result :Disable all inline config 

Example :

    **In  decode.js**

```javascript
  //eslint-disable-next-line no-console
    var name="lint rule not workin for this line"
    
    console.log("eslint-disable via override proprty ")
```
  
```json
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
```

  Result :Throw warning  for "eslint-disable-next-line no-console"  because it is not used or effected in next line

sample es lint code 

```json
{
  "env": {
    "es2021": true,
    "commonjs": true,
    "node": true
  },
  "root": true,
  "extends": "standard",
  "rules": {
    // enable additional rules
    "indent": ["error", 4],
    "linebreak-style": ["error", "unix"],
    "semi": ["error", "always"]
  },
  "noInlineConfig": true,  //disable all inline rules or config
  "overrides": [
    {
      "files": ["*helpers/**"],
      "excludedFiles": "*decode.js",
      "rules": {
        "no-console": 2,
        "quotes": ["error", "double"]
      },
      "reportUnusedDisableDirectives": true   //shows unused inline rules
    }
  ]
}
```
