export const createProductsCollection = (connection) => {
    return connection.collection('products')
}

/*
    name,
    id,
    price
*/
