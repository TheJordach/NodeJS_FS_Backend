const { describe } = require('node:test');
const mongoose = require('mongoose');
const modelUser = require('../models/userModel');
const { connectTo, disconnectFrom, saveUser, findUser } = require('./db');
const { expect, beforeAll, afterAll } = require('@jest/globals');

beforeAll(async () => {
    console.log('Connecting to the db');
    return await connectTo();
});

describe('Database Functionality test', () => {
    test('As a user I want to save a user to the database', async () => {
        //Create new user
        const newUser = new modelUser({
            firstName: 'jordach',
            lastName: 'makaya',
            address: '123 Main St',
            city: 'Casablanca',
            state: 'GC',
            zipCode: '5555',
            email: 'jordach@makaya.io',
            password: '123',
        });

        const user = await saveUser(newUser);
        expect(user.firstName).toEqual('jordach');
        expect(user.lastName).toEqual('makaya');
        expect(user.address).toEqual('123 Main St');
        expect(user.city).toEqual('Casablanca');
        expect(user.state).toEqual('GC');
        expect(user.zipCode).toEqual('5555');
        expect(user.email).toEqual('jordach@makaya.io');
        expect(user.password).toEqual('123');
    });
});

afterAll(async () => {
    return await disconnectFrom();
});
