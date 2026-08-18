//create a simple server using node js
const http = require("http");
const server = http.createServer((req, res) => {
  //
  res.setHeader("Content-Type", "text/html"); // set the content type to HTML
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  res.write("<body><h1>Like / Share / Subscribe</h1></body>");
  res.write("</html>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
