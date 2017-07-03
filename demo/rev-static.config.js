module.exports = {
  inputFiles: [
    'demo/**/index.bundle.js',
    'demo/**/index.ejs.html',
    'demo/*.bundle.css'
  ],
  json: false,
  outputFiles: file => file.replace('.ejs', ''),
  ejsOptions: {
    rmWhitespace: true
  },
  sha: 256,
  customNewFileName: (filePath, fileString, md5String, baseName, extensionName) => baseName + '-' + md5String + extensionName,
  base: 'demo'
}
