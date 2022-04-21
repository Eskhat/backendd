import express from 'express'

const PORT=1547;
const app=express();


import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
console.log('directory-name 👉️', __dirname);

console.log(path.join(__dirname, '/dist', 'indexB.ejs','styleB.css'));
app.use(express.static('public'));
app.use(express.static(__dirname + '/public'));
app.use('/img', express.static('img'));
app.set("view engine", "ejs" );
app.get('/',(req,res)=>{
    res.render('indexB');
})
app.get('/index2',(req,res)=>{
    res.render('index2');
})
app.get('/index6',(req,res)=>{
    res.render('index6');
})
app.get('/index4',(req,res)=>{
    res.render('index4');
})
app.get('/index5',(req,res)=>{
    res.render('index5');
})
app.get('/index7',(req,res)=>{
    res.render('index7');
})
app.get('/index3',(req,res)=>{
    res.render('index3');
})


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/indexB.ejs','/styleB.css')
})
app.get('/', function (req, res) {
    res.render('pages/index');
});
app.listen(PORT, ()=>console.log('Server started'))