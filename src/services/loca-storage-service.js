function setToStorage(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
}

function getFromStorage(key) {
    const data = window.localStorage.getItem(key);
    return data === undefined ? data : JSON.parse(data);
}

export {
    getFromStorage,
    setToStorage
};