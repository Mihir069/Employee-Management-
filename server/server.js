const express = require("express");
const userRecords = require("./userdb");
const router = express();
const cors = require("cors");

router.use(cors());
router.use(express.json());

//Get user records 
router.get(`/userdb`,(req,res)=>{
    res.json(userRecords)
})
router.post('/login',(req,res)=>{
    res.json({
        status: 'sucess',
        username,
        email,
    });
})
//post the user data 
router.post(`/userdb`,(req,res)=>{
    const {body} = req;
    const {username,email,password} = body;
    const user = {
        username,
        email,
        password
    }
    userRecords.push(user);
    // res.json(user)
    res.json({
        status:'sucess'
    })
})
//creating a server
router.listen(3000,()=>{
    console.log(`Listening at http://localhost:3000/userdb`)
});