### Configure a Parser

Custom parsers convert JavaScript code into an abstract syntax tree for ESLint to evaluate.By default parser package is espree

we have to  install the parser package separately using npm.

stntax:

```json
{
    "parser": "@typescript-eslint/parser",
    "rules": {
        "semi": "error"
    }
}
```

```console
Note : when using a custom parser, the parserOptions configuration property is still required for ESLint to work properly with features not in ECMAScript 5 by default.
```