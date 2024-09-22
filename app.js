const express = require("express");
const app = express();

//Middleware to parse JSON request bodies
app.use(express.json());

//Addition endpoint (POST/api/calculate/add)
app.post("/api/calculate/add", (req, res) => {
    const {num1, num2} = req.body;
    const sum = num1 + num2;
    res.json({result: sum});
});

//Subtraction endpoint (POST/api/calculate/subtract)
app.post("/api/calculate/subtract", (req, res) => {
    const {num1, num2} = req.body;
    const difference = num1 - num2;
    res.json({result: difference});
});

//Multiplication endpoint (POST/api/calculate/multiply)
app.post("/api/calculate/multiply", (req, res) =>{
const {num1, num2} = req.body;
const product = num1 * num2;
res.json({result: product});
});

//Division endpoint (POST/api/calculate/division)
app.post("/api/calculate/divide", (req, res) => {
    const {num1, num2} = req.body;
    if (num2 === 0){
        return res.status(400).json({error: "Division by zero is not allowed"});
    }
    const quotient = num1/num2;
    res.json({result: quotient});
});

//Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("Server is running on port ", PORT)
});