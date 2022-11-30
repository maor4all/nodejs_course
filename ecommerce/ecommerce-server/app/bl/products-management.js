import { getCollections } from '../dal/getCollections.js'

export const initProductsBl = (connection) => {
    const productsCollection = getCollections(connection)
    const getProducts = async (filter) => {
        const where = Object.entries(filter).reduce((all, [key, value]) => {
            return {
                ...all,
                [key]: { $regex: value, $options: 'i' },
            }
        }, {})

        return productsCollection.products.find(where).toArray()
    }

    const addProduct = async ({ name, price }) => {
        if (!name || !price || !name.trim()) {
            throw 'Invalid object'
        }

        const created = await productsCollection.product.create({
            name,
            price,
        })

        return created
    }

    const getProductById = async (id) => {
        const product = await productsCollection.product.findById(id)
        return product
    }

    return {
        getProducts,
        addProduct,
        getProductById,
    }
}
