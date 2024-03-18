export const getToken = () => {
    return window.localStorage.getItem('token')
}

export const setToken = (token) => {
    window.localStorage.setItem('token', token)
}

export const removeToken = () => {
    window.localStorage.removeItem('token')
}

export const setID = (id) => {
    window.localStorage.setItem('user_id', id)
}

export const getID = () => {
    return window.localStorage.getItem('user_id')
}

export const removeID = () => {
    window.localStorage.removeItem('user_id')
}