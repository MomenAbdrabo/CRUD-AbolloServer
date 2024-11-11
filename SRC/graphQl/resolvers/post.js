

export default {
    Query: {
        getAllPost: async (_, { }, Post) => {
            let posts = await Post.postModel.find()
            return posts
        },
        getPostById: async (_, { id }, Post) => {
            let post = await Post.postModel.findById(id)
            return post
        }
    },
    Mutation: {
        createNewPost: async (_, { newPost: args }, Post) => {
            let result = await Post.postModel.create(args)
            return result
        },
        updatePostById: async (_, { updatedPost, id }, Post) => {
            let editedPost = await Post.postModel.findByIdAndUpdate(id,
                { ...updatedPost }
                , { new: true })
            return editedPost
        },
        deletePostById: async (_, { id }, Post) => {
            let post = await Post.postModel.findOneAndDelete({ _id: id })
            return {
                id: post.id,
                message: "Post Deleted Successfully."
            }
        }
    }
}