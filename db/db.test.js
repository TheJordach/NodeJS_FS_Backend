

const { describe } = require('node:test');
const modelUser = require('../models/userModel');
const { connectTo, disconnectFrom, saveUser, findUser } = require('./db');
const { expect, beforeAll, afterAll, test} = require('@jest/globals');


jest.mock('./db') //added for mocking

beforeAll(async () => {
   // console.log('Connecting to the db');
    return await connectTo();
});

describe('Database Functionality test', () => {

    //Test SaveUser
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

    //Test FindUser
    test("As a user I want to find a user by any property", async ()=>{
        //create the property

        const obj = {email : "jordach@makaya.io"}
        const query = modelUser.where(obj)

        await findUser(query)
            //If everything goes well we got back a user
            .then((user)=> {
                console.log(user.firstName)
                expect(user.firstName).toBe('jordach');
                expect(user.lastName).toBe('makaya');
                expect(user.address).toBe('123 Main St');
                expect(user.city).toBe('Casablanca');
                expect(user.state).toBe('GC');
                expect(user.zipCode).toBe('5555');
                expect(user.email).toBe('jordach@makaya.io');
                expect(user.password).toBe('123');



        })
            //If everything goes wrong we got back an error
            .catch((error)=>{
                console.log(error.message)

            })
    })
});

afterAll(async () => {
    return await disconnectFrom();
});
