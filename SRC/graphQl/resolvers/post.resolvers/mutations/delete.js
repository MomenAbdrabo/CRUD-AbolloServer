


export default {
    Mutation: {
        deletePostById: async (_, { id }, Post) => {
            let post = await Post.postModel.findOneAndDelete({ _id: id })
            return {
                id: post.id,
                message: "Post Deleted Successfully."
            }
        }
    }
}