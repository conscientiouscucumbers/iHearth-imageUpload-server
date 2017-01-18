// // server/app.js
// const express = require('express');
// const morgan = require('morgan');
// const path = require('path');

// const app = express();

// // Setup logger
// app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));

// // Serve static assets
// app.use(express.static(path.resolve(__dirname, '..', 'build')));

// // Always return the main index.html, so react-router render the route in the client
// app.get('*', (req, res) => {
//   console.log('what?');
//   res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
// });

// module.exports = app;


const express = require('express');
const router = express.Router();
const Multer = require('multer');
const imgUpload = require('./modules/imgUpload');

// Handles the multipart/form-data
// Adds a .file key to the request object
// the 'storage' key saves the image temporarily for in memory
// You can also pass a file path on your server and it will save the image there
const multer = Multer({
  storage: Multer.MemoryStorage,
  fileSize: 5 * 1024 * 1024
});

// the multer accessing the key 'image', as defined in the `FormData` object on the front end
// Passing the uploadToGcs function as middleware to handle the uploading of request.file
router.post('/image-upload', multer.single('image'), imgUpload.uploadToGcs, function(request, response, next) {
  const data = request.body;
  if (request.file && request.file.cloudStoragePublicUrl) {
    data.imageUrl = request.file.cloudStoragePublicUrl;
  }
  response.send(data);
})
