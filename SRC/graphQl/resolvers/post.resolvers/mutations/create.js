


export default {
    Mutation: {
        createNewPost: async (_, { newPost: args }, Post) => {
            let result = await Post.postModel.create(args)
            return result
        }
    }
}