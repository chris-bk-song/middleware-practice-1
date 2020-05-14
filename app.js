// 1. Logging (middleware)
// ----------------------------------------------------------------------
// const express = require('express');

// const app = express();

// function radLogger(req, res, next) {
//   console.log('SIIIIICCK 🤙🏼: ', req.originalUrl);
//   next();
// }

// app.use(radLogger);

// app.get('/', (req, res) => {
//   res.send('Sweet!');
// });

// app.listen(3000, function () {
//   console.log('Todo List API is now listening on port 3000...')
// });



// 2. Route Specific (middleware)
// ----------------------------------------------------------------------
// const express = require('express');

// const app = express();

// function radLogger(req, res, next) {
//   console.log('SIIIIICCK 🤙🏼: ', req.originalUrl);
//   next();
// }

// app.use('/api/*', radLogger);

// app.get('/', (req, res) => {
//   res.send('Sweet!');
// });

// app.listen(3000, function () {
//   console.log('Todo List API is now listening on port 3000...')
// });



// 3. Handling Error (middleware)
// ----------------------------------------------------------------------
// const express = require('express');

// const app = express();

// function radLogger(req, res, next) {
//   console.log('SIIIIICCK 🤙🏼: ', req.originalUrl);
//   next();
// }

// function checkIfAuthenticated(req, res, next) {
//   if (req.query.password === 'SUPERSECRET') {
//     console.log('Request is Authenticated');
//     next();
//   } else {
//     next('NOT Authenticated!');
//   }
// }

// app.use('/api/*', radLogger);
// app.use(checkIfAuthenticated);

// app.get('/', (req, res) => {
//   res.send('Sweet!');
// });

// app.listen(3000, function () {
//   console.log('Todo List API is now listening on port 3000...')
// });



// 4. Static Files (Third-party middleware)
// ----------------------------------------------------------------------
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', (req, res, next) => {
  res.send('HOME!');
})

app.listen(3000, function () {
  console.log('Todo List API is now listening on port 3000...');
});

