// index.js
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());

// Varsayılan isim: ortama USER_NAME olarak verilebilir.
// Burada örnek olarak senin adını DEFAULT_NAME olarak koydum; istersen değiştir.
const DEFAULT_NAME = process.env.USER_NAME || 'Melike Nur Çotak';

app.post('/hello', (req, res) => {
  // Eğer body içinde { "name": "..." } gönderilirse onu kullan, yoksa DEFAULT_NAME
  const name = (req.body && req.body.name) ? req.body.name : DEFAULT_NAME;
  res.json({ message: `Hello, ${name}!` });
});

// (isteğe bağlı) GET endpoint de ekleyelim
app.get('/hello', (req, res) => {
  res.json({ message: `Hello, ${DEFAULT_NAME}!` });
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
