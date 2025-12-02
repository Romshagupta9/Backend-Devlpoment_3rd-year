const user=require('./model/user.model');
const app=require('./server');
//api p reuquest bhejne k lie npm i supertest
const request = require('supertest');

//pura ka pura model mock krdo
jest.mock('./model/user.model');

describe("POST /api/users/register",()=>{
   it("should return user already exits if email is romsha@gmail.com",async()=>{
        user.findOne.mockResolvedValueOnce(true);
        let response=await request(app).post('/api/users/register').send({
            name:"Romsha",
            email:"romsha@gmail.com",
            password:"1234"
        })
        expect(response.body.message).toBe("User already exists");
   })
   it("should create a new user with email romsha@gmail.com",async()=>{
        user.findOne.mockResolvedValueOnce(false);
        user.create.mockResolvedValueOnce({
            name:"Romsha",
            email:"romsha61116@gmail.com",
            password:"1234"
        })
        let response=await request(app).post('/api/users/register').send({
            name:"Romsha",
            email:"romsha61116@gmail.com",
            password:"1234"
        })
        expect(response.body.message).toBe("User registered successfully");
        expect(response.body.data).toEqual({
            name:"Romsha",
            email:"romsha61116@gmail.com",
            password:"1234"
        })
   })
})

