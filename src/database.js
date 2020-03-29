import mongoose, { mongo } from 'mongoose'

const dbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost/graphqltest', dbOptions)
        console.log('DB is connected')
    } catch (e) {
        console.log(e)
    }
}

module.exports = connect()