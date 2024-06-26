const mongoose = require('mongoose');
const ShortUrl = require('./models/shortUrl');

require('dotenv').config();

describe('ShortUrl Model', () => {

  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB, { 
      useNewUrlParser: true, useUnifiedTopology: true
    });
  });

  afterAll(async () => {
    await mongoose.disconnect();
  });

  it('should create a new short URL with a default short code', async () => {
    const url = new ShortUrl({ full: 'https://www.example.com' });
    await url.save();
    expect(url.short).toBeTruthy();
    expect(url.clicks).toBe(0);
  });

});