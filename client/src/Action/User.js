import * as Api from '../Api'

export const singup = async (userData,callback) => {
    try {
        let { data } = await Api.singup(userData)
        callback(data)
    } catch (error) {
        console.log(error)
    }
}

export const login = async (userData,callback) => {
    try {
        let { data } = await Api.login(userData)
        callback(data)
    } catch (error) {
        console.log(error)
    }
}