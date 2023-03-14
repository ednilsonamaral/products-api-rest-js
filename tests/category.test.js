const request = require('supertest')('http://localhost:3000/api');

const createCategory = async (body) => {
    return request.post(`/categories`).send(
        {
            name: body.name
        }
    );
};

const getAllCategories = async () => {
    return request.get(`/categories`);
};

const getCategoryById = async (id) => {
    return request.get(`/categories/${id}`);
};

const updateCategory = async (body, id) => {
    return request.put(`/categories/${id}`).send(
        {
            name: body.name
        }
    );
};

const removeCategoryById = async (id) => {
    return request.delete(`/categories/${id}`);
};

describe('# Categories', () => {
    beforeAll(async () => {});

    it('## Create new category', async () => {
        const _category = await createCategory({ name: 'james hype assets 2k23' });
        expect(_category.status).toBe(201);
    });

    it('## Get all categories', async () => {
        const _categories = await getAllCategories();
        expect(_categories.status).toBe(200);
    });

    it('## Get one category by ID', async () => {
        const randomId = parseInt(Math.random() * 5);
        const _categories = await getCategoryById(randomId);
        expect(_categories.status).toBe(200);
    });

    it('## Update one category by ID', async () => {
        const randomId = parseInt(Math.random() * 5);
        const _category = await updateCategory({ name: 'james hype assets 2k23' }, randomId);
        expect(_category.status).toBe(200);
    });

    it('## Remove one category by ID', async () => {
        const randomId = parseInt(Math.random() * 5);
        const _category = await removeCategoryById(randomId);
        expect(_category.status).toBe(200);
    });
});