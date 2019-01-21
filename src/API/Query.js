import gql from 'graphql-tag'

export const loginUserQuery = gql`
query($email: String!, $password: String!) {
  loginUser(email: $email, password: $password){
    id
    name
    email
  }
}`

export const signUpUserQuery = gql`
mutation($name: String!, $email: String!, $password: String!) {
  addUser(name: $name, email: $email, password: $password){
    id
    name
    email
  }
}`

export const userDetailQuery = gql`
query($id: String!){
  user(id: $id) {
    name
    email
    address
    city
    gender
    phoneNumber
  }
}`

export const updateUserQuery = gql`
mutation($id: String!, $name: String!, $email: String!, $address: String!, $city: String!, $gender: String!, $phoneNumber: String!){
  editUser(id: $id, name: $name, email: $email, address: $address, city: $city, gender: $gender, phoneNumber: $phoneNumber) {
    name
    email
    address
    city
    gender
    phoneNumber
  }
}`

export const changePasswordQuery = gql`
mutation($id: String!, $currentPassword: String!, $newPassword: String!) {
  changePasswordUser(id: $id, currentPassword: $currentPassword, newPassword: $newPassword){
    id
    name
    email
  }
}`

export const userServiceDetailsQuery = gql`
query($id: String!){
  user(id: $id) {
    receiveNotification
    receiveNewsletters
		receiveSpecialOffer
    participateBetaProgramme
  }
}`

export const changeUserServiceQuery = gql`
mutation($id: String!, $receiveNotification: Boolean!, $receiveNewsletters: Boolean!, $receiveSpecialOffer: Boolean!, $participateBetaProgramme: Boolean! ) {
  changeUserService(id: $id, receiveNotification: $receiveNotification, receiveNewsletters: $receiveNewsletters, receiveSpecialOffer: $receiveSpecialOffer, participateBetaProgramme: $participateBetaProgramme  ){
    receiveNotification
    receiveNewsletters
		receiveSpecialOffer
    participateBetaProgramme
  }
}`