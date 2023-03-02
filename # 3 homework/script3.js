function deepCopy(obj) {
    if (typeof obj !== 'object' || obj === null) {
      return obj;
    }
    const newObj = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        newObj[key] = deepCopy(obj[key]);
      }
    }
    return newObj;
  }
  const originalObject = {
    a: 'gabo',
    b: {
      c: 'gurama',
      d: [3, 4],
    },
  };
  const copiedObject = deepCopy(originalObject);
  console.log(originalObject);
  console.log(copiedObject);