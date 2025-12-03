const User= require('./model/user.model');
const mongoose = require('mongoose');

let {MongoMemoryServer} = require('mongodb-memory-server');
let mongoServer;
let app = require('./server'); 
let request = require('supertest');
const express = require('express');

beforeAll(async()=>{
    mongoServer = await MongoMemoryServer.create();
    let uri=mongoServer.getUri();
    await mongoose.connect(uri) 
})

afterEach(async()=>{
    await User.deleteMany();
})

afterAll(async()=>{
    await mongoose.disconnect();
    await mongoServer.stop();
})  
describe("POST /api/users/register",()=>{
    it("should return user already exist if email is romsha@gmail.com",async()=>{
        await User.create({
            name:"Romsha",
            email:"romsha@gmail.com",
            password:"1234"
        })
        let response=await request(app).post('/api/users/register')
        .send({
            name:"Romsha",
            email:"romsha@gmail.com",
            password:"1234"
        }) ;
        expect(response.body.message).toBe("User already exists");
    }) 
    it("should create a new user with email romsha@gmail.com",async()=>{
        let response=await request(app).post('/api/users/register')
        .send({
            name:"Romsha",
            email:"romsha@gmail.com",
            password:"1234"
        })
        let userData = await User.findById(response.body.data._id);
        expect(response.body.data._id).toBe(userData._id.toString());
        expect(response.body.data.name).toBe(userData.name);
        expect(response.body.data.email).toBe(userData.email);
    }) 
}) 
