import { frontend_url } from '../constant/constant'

export const isLogin = () => {
    // console.log('Check login');
    if(localStorage.getItem('token')){
        return true
    }
    return false
}

export const login = (token, user) => {
    localStorage.setItem('token', token)
    console.log(user);
    localStorage.setItem('UserInfo', JSON.stringify(user))
}

export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('UserInfo')
    window.location = `${frontend_url}/login`
}

export const getToken = () => {
    return localStorage.getItem('token')
}

export const getUserInfo = () => {
    return JSON.parse(localStorage.getItem('UserInfo'))
}