const projects = require('./src/data/projects');
const resume = require('./src/data/resume');

module.exports = {
  site: {
    title: 'Resume',
    description: 'Micro Static Site Generator in Node.js',
    basePath: process.env.NODE_ENV === 'production' ? '/nanogen' : '',
    projects,
    resume
  },
  build: {
    outputPath: process.env.NODE_ENV === 'production' ? './docs' : './public'
  }
};