function dispVal(obj, key) {
    if (obj.hasOwnProperty(key)) {
        return obj[key];
    } else {
        return `Key '${key}' not found in the object`;
    }
}