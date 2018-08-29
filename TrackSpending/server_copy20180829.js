var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);

// const webpack = require('webpack');
// const webpackDevMiddleware = require('webpack-dev-middleware');
// const config = require('./build/webpack.dev');
// const compiler = webpack(config);


var MongoClient = require('mongodb').MongoClient;


//  not work
// const socketHander = require('./socket/index');
// 寫在 connection 裡面

var fs = require('fs');
var url = require('url');
const path = require('path')


app.get('/', function (request, response) { //我們要處理URL為 "/" 的HTTP GET請求
    // response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('Hello, World.\n');
    console.log('server connected');
    // response.write('你好！'); //作出回應
    response.end();
});

app.get('/socket.html', function (request, response) {

    var path = url.parse(request.url).pathname;

    fs.readFile(__dirname + path, function (error, data) {
        if (error) {
            response.writeHead(404);
            console.log(__dirname, path);
            response.write("opps this doesn't exist - 404");
        } else {
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(data, "utf8");
        }
        response.end();
    });
})



// app.use(webpackDevMiddleware(compiler, {
//     publicPath: config.output.publicPath
// }));








const io = require('socket.io')(server);




var serv_io = io.listen(server);


// ？？？？
// io.on('connection', function (socket) {
//     console.log('a user connected');
//     socketHander = new SocketHander();
//     socketHander.connect();
// })


serv_io.sockets.on('connection', function (socket) {
    // 傳送時間訊息給瀏覽器
    console.log('an io connected   and   save will happen');
    socket.on('saveRecord', function (data) {
        console.log('receive save Record');
    })
    setInterval(function () {
        socket.emit('date', { 'date': new Date() });
    }, 100);
    socket.on('client_data', function (data) {
        // process.stdout.write(data)
        console.log(data);
    })

    // test js and socket
    socket.on('test', function (test) {
        console.log(test);
    })

    // socket.on('save', function (data) {
    //     // Connect to the db
    //     MongoClient.connect("mongodb://localhost:27017", function (err, db) {
    //         if (err) throw err;
    //         //Write databse Insert/Update/Query code here..
    //         console.log('mongodb is running!');

    //         const myAwesomeDB = db.db('local')
    //         myAwesomeDB.collection('Persons', function (err, collection) {

    //             collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
    //             collection.insert(data);
    //             // collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });

    //             collection.count(function (err, count) {
    //                 if (err) throw err;
    //                 console.log('Total Rows:' + count);
    //             });
    //         });

    //         db.close(); //關閉連線
    //     });
    // })


});



server.listen(8080, '192.168.59.130', function () {
    console.log('HTTP伺服器在 http://192.168.59.130:8080/ 上運行');
});



/*

// serv_io.set('log level', 1); // 關閉 debug 訊息


var serv_io = io.listen(server);

serv_io.sockets.on('connection', function (socket) {
    // 傳送時間訊息給瀏覽器
    setInterval(function () {
        socket.emit('date', { 'date': new Date() });
    }, 100);
    socket.on('client_data', function (data) {
        // process.stdout.write(data)
        console.log(data);
    })
});

*/
