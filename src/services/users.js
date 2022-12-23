export const saveUser = (data) => {
    const oldLocalStorage = JSON.parse(localStorage.getItem('users')) || [];
    const newLocalStorage = JSON.stringify(oldLocalStorage.concat(data));
    localStorage.setItem('users', newLocalStorage);
}