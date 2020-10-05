const http = require("http")
const url = require("url")
const fs = require("fs")

http.createServer(mukhya).listen(8780)

function mukhya(req, res){
    fs.readFile('index.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.write("Requested URL : "+req.url+"<br/>")
        var q = url.parse(req.url, true)
        var qry = q.query
        var txt = qry.year
        res.write("Host : " + q.host + "<br/>")
        res.write("Path : " + q.path + "<br/>")
        res.write("Passed Values : (Year) " + txt + " <br/>")
        res.write(data);
        return res.end();
      });
}
