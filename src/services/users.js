export const saveUser = (data) => {
    const oldLocalStorage = JSON.parse(localStorage.getItem('users')) || [];
    const newLocalStorage = JSON.stringify(oldLocalStorage.concat(data));
    localStorage.setItem('users', newLocalStorage);
}

export const getUsers = () => {
    return JSON.parse(localStorage.getItem('users'));
}

export const getUser = (index) => {
    const userList = JSON.parse(localStorage.getItem('users'));
    return userList[index];
}

export const updateUser = (data, index) => {
    const userList = JSON.parse(localStorage.getItem('users'));
    userList[index] = data;
    localStorage.setItem('users', JSON.stringify(userList));
}
