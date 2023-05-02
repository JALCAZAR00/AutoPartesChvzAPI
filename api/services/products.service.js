import db from "../config/db.js";

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM productos';
        db.execute(query)
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
};

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'SELECT * FROM productos WHERE id = ?';
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
};

export const createProduct = (producto) => {
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO productos (image, precio, nombre, descripcion, categoria) VALUES (?, ?, ?, ?, ?)';
        const {image, precio, nombre, descripcion, categoria} = producto;
        db.execute(query, [image, precio, nombre, descripcion, categoria])
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
};

export const updateProduct = (id, producto) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE productos SET image = ?, precio = ?, nombre = ?, descripcion = ?, categoria = ? WHERE id = ?';
        const {image, precio, nombre, descripcion, categoria} = producto;
        db.execute(query, [image, precio, nombre, descripcion, categoria, id])
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
};

export const deleteProduct = (id) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM productos WHERE id = ?';
        db.execute(query, [id])
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
};