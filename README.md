**Specifying Globals**

    To configure global variables inside of a configuration file, set the globals configuration property to an object containing keys named for each of the global variables you want to use. For each global variable key, set the corresponding value equal to "writable" to allow the variable to be overwritten or "readonly" to disallow overwriting.

    we can use global variable disabled by setting their value to "off"

   3 values we can use ["off" ,"readonly","writeonly"]

For example:

 "globals": {
    "nameOfUser": "readonly",
    "Promise": "off"
  },

Password can be modified global varibale but nameofUser cannot be modified in code.


**using plugin we can import global variables of plugin**

  syntax :
    {
        "plugins": ["example"],
        "env": {
            "example/custom": true
        }
    }


**Specifying Parser Options**

ESLint allows you to specify the JavaScript language options you want to support. By default, ESLint expects ECMAScript 5 syntax. You can override that setting to enable support for other ECMAScript versions and JSX using parser options.

Example

`"parserOptions": {
    "ecmaVersion": "version of ECMAScript syntax you want to use [defalut="5"] ",
    "sourceType": "module" if your code is is ES modules [defalut="script"] ,
    "ecmaFeatures": {
        globalReturn - allow return statements in the global scope
        impliedStrict - enable global strict mode (if ecmaVersion is 5 or greater)
        jsx - enable JSX
    }
},`



