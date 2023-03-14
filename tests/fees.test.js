const request = require('supertest')('http://localhost:3000/api');

const getFeesByProduct = async (id, num) => {
    return request.get(`/fees/product/${id}?num_parcelas=${num}`);
};

describe('# Fees', () => {
    it('## Get Fees value by product', async () => {
        const randomNum = parseInt(Math.random() * 12);
        const _category = await getFeesByProduct(2, randomNum);
        expect(_category.status).toBe(200);
    });
});