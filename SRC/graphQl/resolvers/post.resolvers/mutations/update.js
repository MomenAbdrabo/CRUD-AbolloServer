


export default {
    Mutation: {
        updatePostById: async (_, { updatedPost, id }, Post) => {
            let editedPost = await Post.postModel.findByIdAndUpdate(id,
                { ...updatedPost }
                , { new: true })
            return editedPost
        },
    }
}