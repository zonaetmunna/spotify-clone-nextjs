const fs = require('fs');
const path = require('path');
const https = require('https');

const images = [
  {
    url: 'https://picsum.photos/400/400',
    filename: 'album1.jpg'
  },
  {
    url: 'https://picsum.photos/400/400',
    filename: 'album2.jpg'
  },
  {
    url: 'https://picsum.photos/400/400',
    filename: 'artist1.jpg'
  },
  {
    url: 'https://picsum.photos/400/400',
    filename: 'artist2.jpg'
  },
  {
    url: 'https://picsum.photos/400/400',
    filename: 'playlist1.jpg'
  },
  {
    url: 'https://picsum.photos/400/400',
    filename: 'playlist2.jpg'
  }
];

const publicDir = path.join(__dirname, '..', 'public', 'images');

// Create images directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Download each image
images.forEach(({ url, filename }) => {
  const filePath = path.join(publicDir, filename);
  const file = fs.createWriteStream(filePath);

  https.get(url, (response) => {
    response.pipe(file);

    file.on('finish', () => {
      file.close();
      console.log(`Downloaded ${filename}`);
    });
  }).on('error', (err) => {
    fs.unlink(filePath, () => {});
    console.error(`Error downloading ${filename}:`, err.message);
  });
}); 