function replaceString(originalString, valueToReplace, valueToReplaceWith) {
    let result = "";
    for (let i = 0; i < originalString.length; i++) {
      if (originalString.substring(i, i + valueToReplace.length) === valueToReplace) {
        result += valueToReplaceWith;
        i += valueToReplace.length - 1;
      } else {
        result += originalString.charAt(i);
      }
    }
    return result;
  }
  
  
  const originalString = "Temos, sicocxle ";
const valueToReplace = "sicocxle";
const valueToReplaceWith = "milioni";
const newString = replaceString(originalString, valueToReplace, valueToReplaceWith);
console.log(newString);
