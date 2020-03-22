# JSON to CSS custom properties

Do you want to automate the conversion of JSON object to CSS custom property through a simple function?
This is the small light weight library to do it.

### Installation

```shell
npm install jsontocsscustomproperties --save
```

### ES2105 way

`import {jsonToCssCustomPropeties} from 'jsontocsscustomproperties';`

### Syntax

`jsonToCssCustomPropeties(<json>,<includeinhtmlhead>,<includeinlocalstorage>)`

### Example

```javascript
const targetJson = {
  navItemHeader: "#006688",
  navItemFooter: "#e7e7e7"
};
jsonToCssCustomPropeties(JSON.stringify(targetJson), true, true);
// output: --nav-item-header : #006688;--nav-item-footer : #e7e7e7;
```

### API Information

| Type                  |                             Description                              |
| --------------------- | :------------------------------------------------------------------: |
| json                  |                          insert JSON format                          |
| includeinhtmlhead     |              append the converted values into HTML head              |
| includeinlocalstorage | append the converted values into local storage as 'cssCustomElements |

### ERROR Information

Usually the below error happens only in case of non valid JSON format.

```shell
Error: TypeError: Cannot delete property '0' of [object String]
    at index.js:17
    at Array.map (<anonymous>)
    at jsonToCssCustomPropeties (index.js:10)
    at main.js:5
```
