import { model } from 'mongoose'
import * as schemas from './schemas/index.js'

export const postModel = model('Post', schemas.postSchema);
