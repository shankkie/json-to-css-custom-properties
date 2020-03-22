export const jsonToCssCustomPropeties = (
  json,
  includeInHtml,
  includeInLocalStorage
) => {
  try {
    let parseJson = JSON.parse(json);
    let customCssElements = "";
    // changing the keys to match the css custom elements syntax
    Object.keys(parseJson).map(key => {
      // key => navItemHeader
      let customKey = changeToCustomElementCSS(key);
      // 1.changed key => --nav-item-header
      // 2. delete the old key and replace it with new custom key
      delete Object.assign(parseJson, {
        [customKey]: parseJson[key]
      })[key];
    });
    /**
     * converting the result type object to a string to match CSS syntax so to include in <style> tag
     */
    for (let [key, value] of Object.entries(parseJson)) {
      customCssElements += `${key} : ${value};`;
    }
    if (includeInHtml) {
      includeStylesInHead(customCssElements);
    }
    if (includeInLocalStorage) {
      localStorage.setItem(
        "cssCustomElements",
        JSON.stringify(customCssElements)
      );
    }
    return customCssElements;
  } catch (error) {
    console.log("Possibly non-JSON format inserted");
    console.log("Error:", error);
  }
};

/**
 * create style element and append to document HTML
 * @param  {string}  css styles
 * @return {Promise}
 */

export const includeStylesInHead = cssStyles => {
  let rootStyle = document.createElement("style");
  rootStyle.type = "text/css";
  rootStyle.innerHTML = `:root { ${cssStyles.replace(/"/g, "")}  }`;
  document.head.appendChild(rootStyle);
};

/**
 * convert to css custom properties format
 * @param {*} str
 */

export const changeToCustomElementCSS = str => {
  let s = [...str];
  s.map((l, i) => {
    if (l === l.toUpperCase() && isNaN(l)) {
      s[i] = "-" + l.toLowerCase();
    }
  });
  return "--" + s.join("");
};
