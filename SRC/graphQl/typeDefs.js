import { gql } from "apollo-server-express";

export const typeDefs = gql`
 scalar Upload

    type Query {
    getAllPost: [Post]!
    getPostById(id:ID!):Post!
}
type Mutation {
    createNewPost(newPost: PostInput !): Post!
    updatePostById(updatedPost: PostInput, id: ID!): Post!
    deletePostById(id: ID!): DeletionMessage!
    imageUploader(file: Upload!): String! 

}

input PostInput {
    title: String!
    content: String!
    image: String
}
type DeletionMessage{
    id:ID
    message:String
}

type Post {
    id:ID!
    title: String!
    content: String!
    image: String
    createdAt: String
    updatedAt: String
}
      
`