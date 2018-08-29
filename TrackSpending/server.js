const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const socketIO = require('socket.io')
const io = socketIO(server)

const port = 5000;

const MongoClient = require('mongodb').MongoClient;

io.on('connection', function (socket) {
    console.log("connect socket");
    socket.on('test', function (msg) {
        // console.log on server side
        console.log(msg);
    })
    socket.on('save', function (data) {
        // Connect to the db
        MongoClient.connect("mongodb://localhost:27017", function (err, db) {
            if (err) throw err;
            //Write databse Insert/Update/Query code here..
            console.log('mongodb is running!');

            const myAwesomeDB = db.db('local')
            myAwesomeDB.collection('Persons', function (err, collection) {

                collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
                // collection.insert(data);
                // collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });

                collection.count(function (err, count) {
                    if (err) throw err;
                    console.log('Total Rows:' + count);
                });
            });

            db.close(); //關閉連線
        });
    })
})

server.listen(port, () => {
    console.log(`Listening on ${port}`);
});






// app.get('/', function (request, response) { //我們要處理URL為 "/" 的HTTP GET請求
//     // response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.write('Hello, World.\n');
//     console.log('server connected');
//     // response.write('你好！'); //作出回應
//     response.end();
// });

// app.get('/socket.html', function (request, response) {

//     var path = url.parse(request.url).pathname;

//     fs.readFile(__dirname + path, function (error, data) {
//         if (error) {
//             response.writeHead(404);
//             console.log(__dirname, path);
//             response.write("opps this doesn't exist - 404");
//         } else {
//             response.writeHead(200, { "Content-Type": "text/html" });
//             response.write(data, "utf8");
//         }
//         response.end();
//     });
// })





























// // const port
// // 
// var serv_io = io.listen(server);

// // var MongoClient = require('mongodb').MongoClient;

// var fs = require('fs');
// var url = require('url');
// // const path = require('path')


// app.get('/', function (request, response) { //我們要處理URL為 "/" 的HTTP GET請求
//     // response.writeHead(200, { 'Content-Type': 'text/html' });
//     response.write('Hello, World.\n');
//     console.log('server connected');
//     // response.write('你好！'); //作出回應
//     response.end();
// });

// app.get('/socket.html', function (request, response) {

//     var path = url.parse(request.url).pathname;

//     fs.readFile(__dirname + path, function (error, data) {
//         if (error) {
//             response.writeHead(404);
//             console.log(__dirname, path);
//             response.write("opps this doesn't exist - 404");
//         } else {
//             response.writeHead(200, { "Content-Type": "text/html" });
//             response.write(data, "utf8");
//         }
//         response.end();
//     });
// })


// serv_io.sockets.on('connection', function (socket) {
//     // 傳送時間訊息給瀏覽器
//     console.log('an io connected   and   save will happen');
//     socket.on('saveRecord', function (data) {
//         console.log('receive save Record');
//     })
//     setInterval(function () {
//         socket.emit('date', { 'date': new Date() });
//     }, 100);
//     socket.on('client_data', function (data) {
//         // process.stdout.write(data)
//         console.log(data);
//     })

//     // test js and socket
//     socket.on('test', function (test) {
//         console.log(test);
//     })
// });



// server.listen(8080, '127.0.0.1', function () {
//     console.log('HTTP伺服器在 http://127.0.0.1:8080/ 上運行');
// });
