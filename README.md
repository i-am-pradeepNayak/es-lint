### Ignore Files
 
 There are 2 ways to ignore file

1) Add ignorePatterns to a configuration file.
2) Creating .eslintignore in directory.



Step 1:=>
    In .eslintrc.json config file add `ignorePatterns`  

Example :

```json
    {
    "ignorePatterns": ["glob patterns or file Names"],
    "rules": {
        //...
    }
}
```


```console
Note :If a config is provided via the --config CLI option, the ignore patterns that start with / in the config are relative to the current working directory rather than the base directory of the given config. For example, if --config configs/.eslintrc.json is present, the ignore patterns in the config are relative to . rather than ./configs.
```

Step 2 :=> The .eslintignore File
  
```markdown
decode.js
 #negated pattern or negated igonore rule(!)
!.build
.build/*
!.build/app.controller.js
```


> Imp notes
    Patterns defined in .eslintignore take precedence over the ignorePatterns property of config files.

we can pass ignore files or pattern through command line [with multiple args]

   ` npx eslint --ignore-pattern /lib/ --ignore-pattern /src/vendor/* file.js ` 

**--no-ignore**  flag disables excluding of files from .eslintignore files, --ignore-path flags, --ignore-pattern flags, and the ignorePatterns property in config files.

    `npx eslint --no-ignore file.js`


> Note :
.eslintignore file follows some implicit rules 
1) node modules
2) .dot files and folder 

There are also some exceptions to these rules for 
for more ref [(https://eslint.org/docs/latest/use/configure/ignore#the-eslintignore-file)](https://)





 