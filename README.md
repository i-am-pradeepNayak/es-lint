A plugin is an npm package that can add various extensions to ESLint. A plugin can perform numerous functions, including but not limited to adding new rules and exporting shareable configurations.

The plugins property value can omit the `eslint-plugin-` prefix of the package name.

```json
{
  "plugins": ["plugin1", "eslint-plugin-plugin2"]
}
```

The extends property value can consist of:

plugin:
the package name (from which you can omit the prefix, for example, react is short for `eslint-plugin-pluginName`)
/
The configuration name (for example, recommended)

```json
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
```

### Use a plugin

Rules, environments, and configurations defined in plugins must be referenced with the following convention:

```javascript
const value=["Rules", "environment","config"]

    eslint-plugin-foo → foo/${value}
    @foo/eslint-plugin → @foo/${value}
    @foo/eslint-plugin-bar → @foo/bar/${value}
```

## Specify a Processor 

Plugins may provide processors. Processors can extract JavaScript code from other kinds of files, then let ESLint lint the JavaScript code. Alternatively, processors can convert JavaScript code during preprocessing.

More info :[https://eslint.org/docs/latest/use/configure/plugins#specify-a-processor](https://)

```json
  {
    "plugins": ["a-plugin"],
    "overrides": [
        {
            "files": ["*.md"],
            "processor": "a-plugin/markdown"
        }
    ]
}
```


Sample es lint code 

```json
{
  "plugins": [
    "jquery", // eslint-plugin-jquery
  //scoped plugins
    "@foo/foo", // @foo/eslint-plugin-foo 
    "@bar" // @bar/eslint-plugin
  ],
  "extends": [
    "eslint-config-standard",
    "plugin:jquery/packageName",
    "plugin:@bar/packageName",
    "plugin:@foo/foo/packageName"
  ],
  "rules": {
    "jquery/rule": "off",
    "@foo/foo/rule": "warn",
    "@bar/rule": "error"
  },
  "env": {
    "@foo/foo/env": "true"
  }
}
```


