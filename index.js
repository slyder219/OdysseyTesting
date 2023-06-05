// express
const express = require('express');
const app = express();
// session
const session = require('express-session');
// path 
const path = require('path');

const { getHomePage } = require('./controllers/getHomePage');
const { getQuestions } = require('./controllers/getQuestions');


// --------------------------------------------------------------------------------------------------------------

// set up ejs 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Serve static files from directory
app.use(express.static('public'));

// set up sessions
app.use(session({
  secret: process.env.SESSION_SECRET || "buftycgvgvycgvhbi",
  resave: false,
  saveUninitialized: false,
}));

// Route to serve assets
app.get('/assets/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, 'assets', filename);

  // Send the asset file to the client
  res.sendFile(filePath);
});

// --------------------------------------------------------------------------------------------------------------
// Routes

// Home page
app.get('/', getHomePage);

app.get('/questions', getQuestions);


// --------------------------------------------------------------------------------------------------------------
// Start the server
// define port from environment variable or 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}/`);
});