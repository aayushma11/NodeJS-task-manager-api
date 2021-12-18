const request = require('supertest')
const app = require('../src/app')
const User = require('../src/models/user')

const userOne = {
    name: 'Test',
    email: 'test@example.com',
    password: '123456!'
}
beforeEach(async () => {
   await User.deleteMany()
   await new User(userOne).save()
});

test('Should signup a new User', async() => {
    await request(app).post('/users').send({
        name: 'aalu',
        email: 'aalu@example.com',
        password: 'MyPass777!'
    }).expect(201)
});

test('Should log in existing user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: userOne.password
    }).expect(200)
});

test('Should not login in nonexistent user', async() => {
    await request(app).post('/users/login').send({
        email: userOne.email,
        password: 'thisisnotapass'
    }).expect(400)
});

const mongoose = require('mongoose')
afterAll(() => {
    mongoose.connection.close();
})