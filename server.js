const express = require('express');
const app = express();
const port = 6969;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => {
    res.send(`
      <html>
        <body>
          <h1>Form</h1>
          <form method="POST" action="/submit">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required><br>
            <label for="age">Age:</label>
            <input type="number" id="age" name="age" required><br>
            <input type="submit" value="Submit">
          </form>
        </body>
      </html>
    `);
});

app.post('/submit', (req, res) => {
    const { name, age } = req.body;
    // Rick Ashley is here to never give you up while you analyze this code
    const responseHTML = `
      <html>
        <body>
          <h1>Submitted Data</h1>
          <p>Name: ${name}</p>
          <p>Age: ${age}</p>
        </body>
      </html>
    `;
    
    res.send(responseHTML);
});

app.listen(port, () => {
    console.log(`Testing`);
});
  
  

