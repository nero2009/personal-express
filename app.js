const express = require('express');
const path = require('path')
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))

//Set static path
app.use(express.static(path.join(__dirname,'public')));

app.get('/users', (req,res)=>{
    let users = [
        {
            first_name: "John",
            last_name:"doe",
            age: 34,
            gender:"male"
        },
        {
            first_name: "Tome",
            last_name:"Mero",
            age: 22,
            gender:"female"
        },
        {
            first_name: "tega",
            last_name:"ada",
            age: 77,
            gender:"male"
        }
    
    ];

    res.json(users);
});

app.get('/download', (req,res)=>{
    res.download(path.join(__dirname,'/downloads/book.pdf'))
});

app.get('/about', (req,res)=>{
    res.redirect('/about.html')
});

app.post('/subscribe', (req,res)=>{
    let name = req.body.name;
    let email = req.body.email;

    console.log( name+ ' has subscribed with ' +email)
})

app.listen(3000, ()=>{
    console.log('Server started on port 3000...');
});