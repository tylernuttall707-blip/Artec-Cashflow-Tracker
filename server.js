const path = require('path');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('index', {
    pageTitle: 'Cash Flow Forecaster — 2025',
    forecastYear: '2025',
    bodyClass: '',
    headContent: '',
    bodyScripts: ''
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
