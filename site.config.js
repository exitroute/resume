const resume = require('./src/data/resume');

module.exports = {
  site: {
    title: 'Resume',
    description: 'Micro Static Site Generator in Node.js',
    basePath: process.env.NODE_ENV === 'production' ? '/nanogen' : '',
    resume
  },
  build: {
    outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
  }
};