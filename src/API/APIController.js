import apolloClient from './connection';
import { loginUserQuery, getUsersQuery, signUpUserQuery, userDetailQuery, updateUserQuery, changePasswordQuery, userServiceDetails, userServiceDetailsQuery, changeUserServiceQuery } from './Query';
import { APIControllerResponse } from '../common/Utility';

export function loginUser({ email, password }) {
    return new Promise((resolve) => {
        apolloClient.query({
            query: loginUserQuery,
            variables: {
                email,
                password
            }
        }).then(response => {
            resolve(new APIControllerResponse(response.data.loginUser, null))
        }).catch(error => {
            resolve(new APIControllerResponse(null, error))
        });
    })
}

export function signUpUser({ email, password, name }) {
    return new Promise((resolve) => {
        apolloClient.mutate({
            mutation: signUpUserQuery,
            variables: {
                name,
                email,
                password
            }
        }).then(response => {
            resolve(new APIControllerResponse(response.data.addUser, null))
        }).catch(error => {
            resolve(new APIControllerResponse(null, error))
        });
    })
}

export function getUserDetails({ id }) {
    return new Promise((resolve) => {
        apolloClient.query({
            query: userDetailQuery,
            variables: {
                id
            }
        }).then(response => {
            console.log(response)
            resolve(new APIControllerResponse(response.data.user, null))
        }).catch(error => {
            resolve(new APIControllerResponse(null, error))
        });
    })
}

export function updateUserDetails({ id, name, email, address, city, gender, phoneNumber }) {
    return new Promise((resolve) => {
        apolloClient.mutate({
            mutation: updateUserQuery,
            variables: {
                id,
                name,
                email,
                address,
                city,
                gender,
                phoneNumber
            }
        }).then(response => {
            resolve(new APIControllerResponse(response.data.editUser, null))
        }).catch(error => {
            resolve(new APIControllerResponse(null, error))
        });
    })
}

export function changeUserPassword({ id, currentPassword, newPassword }) {
    return new Promise((resolve) => {
        apolloClient.mutate({
            mutation: changePasswordQuery,
            variables: {
                id,
                currentPassword,
                newPassword
            }
        }).then(response => {
            if (response.errors) {
                resolve(new APIControllerResponse(null, response.errors[0]))
            } else {
                resolve(new APIControllerResponse(response.data.changePasswordUser, null))
            }

        }).catch(error => {
            resolve(new APIControllerResponse(null, error))
        });
    })
}

export function getUserServiceDetails({ id }) {
    return new Promise((resolve) => {
        apolloClient.query({
            query: userServiceDetailsQuery,
            variables: {
                id
            }
        }).then(response => {
            console.log(response)
            resolve(new APIControllerResponse(response.data.user, null))
        }).catch(error => {
            resolve(new APIControllerResponse(null, error))
        });
    })
}

export function changeUserService({ id, receiveNotification, receiveNewsletters, receiveSpecialOffer, participateBetaProgramme }) {
    return new Promise((resolve) => {
        apolloClient.mutate({
            mutation: changeUserServiceQuery,
            variables: {
                id,
                receiveNotification,
                receiveNewsletters,
                receiveSpecialOffer,
                participateBetaProgramme
            }
        }).then(response => {
            console.log(response)
            resolve(new APIControllerResponse(response.data.changeUserService, null))
        }).catch(error => {
            resolve(new APIControllerResponse(null, error))
        });
    })
}
