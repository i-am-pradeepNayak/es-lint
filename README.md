ES lint

Use configuration files is to save the file wherever you would like and pass its location to the CLI using the --config option

    eslint -c [Path to eslint config file] [file which has to be lint]

*Note:*
If you are using one configuration file and want ESLint to ignore any .eslintrc.* files, make sure to use --no-eslintrc along with the --config flag.

**Comments in configuration files**
Both the JSON and YAML configuration file formats support comments

**Adding Shared Settings**
You can add a settings object to the ESLint configuration file and it is supplied to every executed rule

**Cascading and Hierarchy** (tested)

The configuration cascade works based on the location of the file being linted. If there is an .eslintrc file in the same directory as the file being linted, then that configuration takes precedence. ESLint then searches up the directory structure, merging any .eslintrc files it finds along the way until reaching either an .eslintrc file with root: true or the root directory.


**Imp Note**
In the same way, if there is a package.json file in the root directory with an eslintConfig field, the configuration it describes is applied to all subdirectories beneath it. However, the configuration described by the .eslintrc file in the tests/ directory overrides conflicting specifications.

home
└── user
    └── projectA
        ├── .eslintrc.json  <- Not used
        └── lib
            ├── .eslintrc.json  <- { "root": true }
            └── main.js


**Configuration Based on Glob Patterns**
note:
If a config is provided via the --config CLI option, the glob patterns in the config are relative to the current working directory rather than the base directory of the given config. For example, if --config configs/.eslintrc.json is present, the glob patterns in the config are relative to . rather than ./configs.

**Using a shareable configuration package**

A sharable configuration is an npm package that exports a configuration object. Make sure that you have installed the package in your project root directory, so that ESLint can require it.

The extends property value can omit the [eslint-config] prefix of the package name.

The npm init @eslint/config command can create a configuration so you can extend a popular style guide (for example, [eslint-config-standard] ).

> Process
 npm i eslint-config-standard

 in config file,extends property value can be
  "extends": ["standard"] or  "extends": ["eslint-config-standard"] 





