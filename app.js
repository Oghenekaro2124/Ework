// app.js
const express = require('express');
const checkWorkingHours = require('./middleware');
const path = require('path');
const app = express();

app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));
app.use(checkWorkingHours);

// Routes
app.get('/', (req, res) => {
  const user  = {name:"Emmanuel"}
  res.render('home', {user});
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {

  res.render('contact');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
