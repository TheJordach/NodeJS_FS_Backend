
const connectTo = async () => {
    console.log("MongoDB mocked connection")

};

const disconnectFrom = async () => {
    console.log("MongoDB mocked disconnection")
};

//Add two const one for finding a user and another for saving the user
//obj is any json obj {firstName:request.body.firstName, email : request.body.email}
const findUser = async (query) => {
    return Promise.resolve({
        firstName: 'jordach',
        lastName: 'makaya',
        address: '123 Main St',
        city: 'Casablanca',
        state: 'GC',
        zipCode: '5555',
        email: 'jordach@makaya.io',
        password: '123',
    })
};

const saveUser = async (newUser) => {
    return Promise.resolve(
        {
        firstName: 'jordach',
        lastName: 'makaya',
        address: '123 Main St',
        city: 'Casablanca',
        state: 'GC',
        zipCode: '5555',
        email: 'jordach@makaya.io',
        password: '123',
       }
    )
};

module.exports = {
    connectTo, disconnectFrom, findUser, saveUser, };
