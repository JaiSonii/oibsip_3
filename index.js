import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
var ans;
var con;

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

app.get("/", (req,res)=>{
    res.render("index.ejs",{
        answer : ans,
        con : con
    });
})

app.post("/convert", (req,res)=>{
    con = req.body.to;
    if(req.body.from == req.body.to){
        ans = req.body.degree + req.body.to;
    }
    else if(req.body.from == "°C" && req.body.to == "F"){
        var celcius = parseFloat(req.body.degree);
        ans = ((celcius * 9/5) + 32)  + req.body.to;
    }
    else if(req.body.from == "°C" && req.body.to == "K"){
        var celcius = parseFloat(req.body.degree);
        ans = (celcius + 273.15)  + req.body.to;
    }
    else if(req.body.from == "F" && req.body.to == "°C"){
        var fahrenheit = parseFloat(req.body.degree);
        ans = ((fahrenheit - 32) * 5/9)  + req.body.to;
    }
    else if(req.body.from == "F" && req.body.to == "K"){
        var fahrenheit = parseFloat(req.body.degree);
        ans = ((fahrenheit - 32) * 5/9 + 273.15)  + req.body.to;
    }
    else if(req.body.from == "K" && req.body.to == "°C"){
        var kelvin = parseFloat(req.body.degree);
        ans = (kelvin - 273.15)  + req.body.to;
    }
    else if(req.body.from == "K" && req.body.to == "F"){
        var kelvin = parseFloat(req.body.degree);
        ans = ((kelvin - 273.15) * 9/5 + 32)  + req.body.to;
    }

    
    
    res.redirect("/");
})

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})



