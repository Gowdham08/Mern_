const express = require("express");
const mdb = require("mongoose"); //mdb=>mongoDB
const dotenv = require("dotenv")
const signup_Schema = require("./models/signupSchema")
const bcrypt =require("bcrypt")
 const cors =require("cors"); //->npm i cors
const app = express();
app.use(cors())
app.use(express.json());
const PORT = 3001;
dotenv.config();

mdb
    .connect(process.env.MONGODB_URL)   //(it can be used another type to block visibilty=>process.env.MONGODB_URL). (localhost if not works use this ip: 127.0.0.1:27017)
    .then(() => {
        console.log("MDB Connection Successful");
    })
    .catch((err) => {
        console.log("Check yout Connection", err);
    });
app.get("/", (req, res) => {
    //req->request res->response.
    res.send("<h1> <i>Server Started Successfully!</i></h1>");
});

app.get("/static", (req, res) => {
    res.sendFile("E:\\MERN\\index.html");
});
app.post("/signup",async(req, res) => {
    try {
        console.log(req.body);
        const { firstName, lastName, email, password, phoneNumber } = req.body;
        const hashedPassword= await bcrypt.hash(password,10)
        const newSignup = new signup_Schema({
            firstName: firstName,
            lastName: lastName,
            email: email,
            phoneNumber: phoneNumber,
            password: hashedPassword
        });
        newSignup.save();
        console.log("SIGNUP SUCCESS");
        res.status(201).json({ message: "SIGNUP DONE", isSignup: true });
    } catch (error) {
        console.log("ERROR", error);
        res.status(201).json({ message: "SIGNUP FAILED", isSignup: false });
    }
});

app.get('/getsignupdet',(res,req)=>{
    const signup = signup_Schema.find()
    console.log(signup);
    res.send("Signup details fetched");

});

app.post("/login",async (req,res)=>{
    try{
        // console.log(req.body);
        // console.log(email,password);
        const{email,password} = req.body;
        const existingUser=await signup_Schema.findOne({email:email})
        console.log(existingUser);
        // res.json({message:"Login Fetched"});
        if(existingUser){
            const isValidPassword= await bcrypt.compare(password,existingUser.password);
            console.log(isValidPassword);
            if(isValidPassword){
                res.status(201).json({message:"Login Successful",isLoggedIn:true})

            }
            else{
                res.status(201).json({message:"Incorrect Passwords",isLoggedIn:false})
            }


        }else{
            res.status(201).json({message:"User not Found SignUp",isLoggedIn:false})
        }

    }
    catch(error){
        console.log("Login Error");
        res.status(400).json({message:"Login Error Check your Code",isLoggedIn:false})
    }


});

        

app.listen(PORT, () => console.log("Server Started Successfully"));
