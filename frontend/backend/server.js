var http = require('http');

http.createServer(function(request, response) {
    // Website you wish to allow to connect
    response.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    response.setHeader('Access-Control-Allow-Methods', 'GET');

    // Request headers you wish to allow
    response.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    response.writeHead(
        200,
        {
            'content-Type': 'text/plain'
        }
    );
   response.end(JSON.stringify('Hello world from nodejs server'));
}).listen(1212);

// var readline = require('readline');
// var stringArray  = new Array();

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
//   terminal: false
// });

// rl.on('line', function (line) {
//   if(line.length > 0){
//       stringArray.push(line.toString());
//   }
//   rl.question('do you want to exit', (ans) => {
//       if(ans.toLowerCase() === 'y') {
//           console.log("Length of string array is : " + stringArray.length);
//           rl.close();
//       }
//   })
// });







