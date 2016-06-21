# BasicGruntfile
Simple Gruntfile.js / package.json for general JS project


### Grunt tasks:

```sh
# Default Grunt task: 'concat:vendors', 'concat:main', 'less', 'watch'
$ grunt
```

```sh
# Concat your js libs (jsVendorsDependencies)
$ grunt concat:vendors
```

```sh
# Concat your js project (jsMain)
$ grunt concat:main
```

```sh
# Compile style.less in .css
$ grunt less
```

```sh
# Watch js in jsMain and all the less files to run 'concat:main', 'less' tasks
$ grunt watch
```
