import { AsyncStorage } from 'react-native';
import { isLoginUser, userEmail, userPassword } from './Constants';
import { loginUser } from '../API/APIController';
import { User } from '../Prototypes/User';

export function isValidEmail(string) {

    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(string) === true) {
        return true
    }
    return false
}

export function isValidPassword(string) {

    let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}/;
    if (reg.test(string) === true) {
        return true
    }
    return false
}

export function APIControllerResponse(object, error) {
    this.object = object
    this.error = error
}

export function getCurrentUser() {
    return new Promise((resolve) => {
        AsyncStorage.multiGet([isLoginUser, userEmail, userPassword]).then((value) => {
            if (value[0][1] != null) {
                loginUser({ email: value[1][1], password: value[2][1] }).then(response => {
                    if (response.error === null) {
                        User.shared = new User(response.object)
                        resolve(true)
                    } else {
                        resolve(false)
                    }
                })
            } else {
                resolve(false)
            }
        }).catch(error => {
            resolve(false)
        })
    })

}

export function setCurrentUser({ email, password }) {
    const info = [[isLoginUser, "true"], [userEmail, email], [userPassword, password ]]
    return AsyncStorage.multiSet(info)
}