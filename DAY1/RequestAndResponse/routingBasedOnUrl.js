const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>Complete Coding</title></head>');

  if (req.url === '/') {
    res.write('<h1>Welcome to Home page</h1>');
    return res.end();  // stop the execution of the function after sending the response
  } 
  else if (req.url.toLowerCase() === '/products') {
    res.write('<h1>Products</h1>');
     return res.end();  // stop the execution of the function after sending the response
  }
  else {
    res.write('<body><h1>Like / Share / Subscribe</h1></body>');
  }
  res.write('</html>');
  res.end();
});