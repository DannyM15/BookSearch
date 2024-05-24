import { gql } from '@apollo/client'

export const ADD_USER = gql `
mutation AddUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
    }
  }
  `

  export const LOGIN = gql `
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
  `

  export const SAVE_BOOK = gql  `
  mutation SaveBook($newBook: BookInput) {
    saveBook(newBook: $newBook) {
      savedBooks {
        Link
        _id
        authors
        bookId
        description
        image
        title
      }
    }
  }
  `

  export const REMOVE_BOOK = gql `
  mutation RemoveBook($bookId: ID!) {
    removeBook(bookId: $bookId) {
      savedBooks {
        Link
        _id
        authors
        bookId
        description
        image
        title
      }
    }
  }
  `