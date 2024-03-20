const { test, expect } = require('@jest/globals');
const app = require('../app');
const request = require('supertest');
const { User } = require('../models');
const { signToken } = require('../helpers/token');
const { Op } = require('sequelize');

let access_token;

beforeAll(async () => {
    const admin = await User.findOne({ 
        where: {
            role: 'admin'
        }
    });

    access_token = signToken({ id: admin.id });
});

afterAll(async () => {
    await User.destroy({ 
        where: {
            role: {
                [Op.ne]: 'admin'
            }
        }
    });
});

describe('POST /login', () => {
    test('User should be able to login with valid credentials', async () => {
        const user = {
            email: 'user@mail.com',
            password: 'userpassword',
        };

        const response = await request(app)
            .post('/login')
            .send(user);

        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('token');
    });

    test('User should not be able to login with invalid credentials', async () => {
        const user = {
            email: 'invaliduser@mail.com',
            password: 'invalidpassword',
        };

        const response = await request(app)
            .post('/login')
            .send(user);

        expect(response.statusCode).toBe(401);
        expect(response.body).toHaveProperty('error');
    });
});




