
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./SRC/graphQl/index.js";
import * as models from "./SRC/models/index.js"
export const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        ...models
    })
})