const express = require('express');
const AWS = require('aws-sdk');

const app = express();
const port = 3000;

// Initialize AWS S3
const s3 = new AWS.S3({
  accessKeyId: 'AKIAQ3EGVKIJWEW7V2IC',
  secretAccessKey: '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',
  region: 'eu-north-1'
});

// S3 bucket and object key
const bucketName = 'clinic-project';
const objectKey = 'ASSIG3/img1.webp'; // Make sure to provide the correct key for your image

// Params for getObject operation
const params = {
  Bucket: bucketName,
  Key: objectKey
};

// Route to display the image
app.get('/image', (req, res) => {
  // Retrieve the image from S3
  s3.getObject(params, (err, data) => {
    if (err) {
      console.error('Error retrieving image from S3:', err);
      res.status(500).send('Error retrieving image from S3');
    } else {
      // Set appropriate content type header
      res.setHeader('Content-Type', data.ContentType);
      // Send the image data
      res.send(data.Body);
    }
  });
});

// Route to serve HTML page with image
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Image Display</title>
    </head>
    <body>
      <h1>Image Display</h1>
      <img src="/image" alt="Image from S3">
    </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
