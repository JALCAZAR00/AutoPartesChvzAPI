import * as productServices from "../services/products.service.js";


//Obtener todos los productos
export const getProducts = (req, res) => {
    productServices.getProducts()
    .then((result) => {
        res.status(200).json({
            data: result[0]
        })
    })
    .catch((err) => {
        res.status(500).json(err);
    })
};

//Obtener un producto
export const getProduct = (req, res) => {
    const {id} = req.params;
    productServices.getProduct(id)
    .then((result) => {
        res.status(200).json({
            data: result[0]
        })
    })
    .catch((err) => {
        res.status(500).json(err);
    })
};

//Crear un producto
export const createProduct = (req, res) => {
    const producto = req.body;
    productServices.createProduct(producto)
    .then(() => {
        res.status(200).json({ producto });
    })
    .catch((err) => {
        res.status(500).json({ error: err.message });
    });
};

//Actualizar un producto
export const updateProduct = (req, res) => {
    const producto = req.body;
    const {id} = req.params;
    productServices.updateProduct(id, producto)
    .then(() => {
        res.status(200).json({ producto });
    })
    .catch((err) => {
        res.status(500).json({ error: err.message });
    });
};

//Eliminar un producto
export const deleteProduct = (req, res) => {
    const {id} = req.params;
    productServices.deleteProduct(id)
    .then(() => {
        res.status(200).json('Producto eliminado!');
    })
    .catch((err) => {
        res.status(500).json('Producto no encontrado');
    });
};
