
import { join, parse } from 'path';

import { createWriteStream } from 'fs';
import { ApolloError } from 'apollo-server-express';

export default {

    Mutation: {
        imageUploader: async (_, { file }) => {
            try {
                const { filename, createReadStream } = await file;

                let stream = createReadStream();

                let { ext, name } = parse(filename);

                name = name.replace(/([^a-z0-9 ]+)/gi, '-').replace(' ', '_');

                let appFile = join(__dirname, `../../uploads/${name}-${Date.now()}${ext}`);

                appFile = appFile.replace(' ', '_');

                let writeStream = await createWriteStream(appFile);

                await stream.pipe(writeStream);

                appFile = `${process.env.BASE_URL}${appFile.split('uploads')[1]}`;

                return appFile;
            } catch (err) {
                throw new ApolloError(err.message);
            }
        },
    }
}