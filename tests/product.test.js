const request = require('supertest')('http://localhost:3000/api');

const createProduct = async (body) => {
    return request.post(`/products`).send(
        {
            id_category: body.id_category,
            name: body.name,
            description: body.description,
            value: body.value,
        }
    );
};

const getAllProducts = async () => {
    return request.get(`/products`);
};

const getProductById = async (id) => {
    return request.get(`/products/${id}`);
};

const updateProduct = async (body, id) => {
    return request.put(`/products/${id}`).send(
        {
            name: body.name
        }
    );
};

const removeProductById = async (id) => {
    return request.delete(`/products/${id}`);
};

describe('# Products', () => {
    beforeAll(async () => {});

    it('## Create new Product', async () => {
        const _product = await createProduct({
            id_category: 1,
            name: 'green valley copo azul/vermelho especial natal 2022',
            description: 'i cant leave without you..',
            value: 15.58
        });
        expect(_product.status).toBe(201);
    });

    it('## Get all products', async () => {
        const _products = await getAllProducts();
        expect(_products.status).toBe(200);
    });

    it('## Get one Product by ID', async () => {
        const randomId = parseInt(Math.random() * 5);
        const _products = await getProductById(randomId);
        expect(_products.status).toBe(200);
    });

    it('## Update one Product by ID', async () => {
        const randomId = parseInt(Math.random() * 5);
        const _product = await updateProduct({
            id_category: 1,
            name: 'green valley copo azul/vermelho especial natal 2022',
            description: 'i cant leave without you..',
            value: 58.65
        }, randomId);
        expect(_product.status).toBe(200);
    });

    it('## Remove one Product by ID', async () => {
        const randomId = parseInt(Math.random() * 5);
        const _product = await removeProductById(randomId);
        expect(_product.status).toBe(200);
    });
});