import express from 'express'
import bodyParser from 'body-parser'
import { initProductsBl } from './bl/products-management.js'
import { connect } from './dal/connect.js'


const server = async ({ port, uri }) => {
    const app = express()
    app.use(bodyParser.json())

    const middle = (req, res, next) => {
        const { token } = req.headers
        if (!token) {
            res.status(401).json({ message: 'Unauthorize' })
        } else {
            next()
        }
    }

    const connection = await connect(uri)
    const productsBl = initProductsBl(connection)

    app.get('/', (req, res) => {
        res.send('Welcome to e-commerce server')
    })

    app.post('/products', middle, async (req, res) => {
        try{
            const { body } = req
            const product = await productsBl.addProduct(body)
            res.json({ message: 'Product saved', product })
        } catch(e) {
            console.error(e)
            res.json({ message: e.message })
        }

        
    })

    app.get('/products/:id', middle, async (req, res) => {
        const { id } = req.params
        const product = await productsBl.getProductById(id)
        res.json({ product })
    })

    app.get('/products', middle, async (req, res) => {
        const { query } = req
        const products = await productsBl.getProducts(query)
        res.json({ products })
    })

    app.listen(port, () => {
        console.log(`E-commerce server is up, on port: ${port} `)
    })

}

server({ port: 4545, uri: 'mongodb://localhost:27017/ecommerce' })

