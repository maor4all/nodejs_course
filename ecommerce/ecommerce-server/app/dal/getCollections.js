import { createProductsCollection } from './collections/products.js'

export const getCollections = (connection) => {
    return {
        products: createProductsCollection(connection),
        product: connection.model('product', {
            name: String,
            price: Number,
        }),
    }
}
