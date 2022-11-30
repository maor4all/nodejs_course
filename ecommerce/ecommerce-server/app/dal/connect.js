import mongoose from 'mongoose'

export const connect = async (uri) => {
    try {
        const connection = mongoose.createConnection()

        // connect to database
        await connection.openUri(uri)

        console.log('Connected successfully to server')
        return connection
    } catch (error) {
        console.error(error)
        throw error
    }
}
