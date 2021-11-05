const express = require("express");
const app = express();
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('pages/index'))

app.get('/product/:id', (req, res) => res.render('pages/product'))

app.get('/cart', (req, res) => res.render('pages/cart'))

app.get('/checkout', (req, res) => res.render('pages/checkout'))

app.get('/register', (req, res) => res.render('pages/register'))

app.get('/login', (req, res) => res.render('pages/login'))

app.listen(3000, () => console.log('toy ready'))