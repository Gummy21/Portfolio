const express = require("express"),
path = require("path"),
app = express();



app.use(express.static(__dirname))


app.get("/", function(req,res){
    res.sendFile(path.join(__dirname + '/index.html'))
});

app.listen(process.env.PORT || 8080);