const app=require('./index');
const request=require('supertest');

describe("POST /sum",()=>{ //describe block is used to group related test cases
    it("should return addition of two numbers",async()=>{ //it and test are same -- dono likh skte hai
        let response =await request(app).post("/sum").send({
            a:2,
            b:3
        })
        expect(response.body.data).toBe(5);
    })
    it("should return all arguments must be numbers", async()=>{
        let response=await request(app).post("/sum").send({
            a:2
        })
        expect(response.body.message).toBe("invalid arguments");
    })
    /*
    response={
    body:{
    api response
    }
    }
    */ 
})  
