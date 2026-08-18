 //How to exit from event loop in Node.js
 const http = require('http');
 const server= http.createServer((req, res) => {
               console.log(req.url, req.method, req.headers);
               process.exit(1); // stop the event loop
            });
            
 server.listen(3000, () => {
     console.log('Server is running on port 3000');
 });