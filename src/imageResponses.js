const fs = require('fs');

const meme = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(meme);
  response.end();
};

module.exports = {
  getImage,
};
