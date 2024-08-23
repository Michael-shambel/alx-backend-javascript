const express = require('express');
const app = express();
const port = 7865;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

app.get('/available_payments', (req, res) => {
    res.json({
      payment_methods: {
        credit_cards: true,
        paypal: false
    }
  });
});


app.post('/login', (req, res) => {
  const username = req.body.userName;
    if (username) {
      res.send(`Welcome ${username}`);
    } else {
      res.status(400).send('Bad Request');
    }
});
  
app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
  
module.exports = app;