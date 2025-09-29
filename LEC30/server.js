const { WebSocketServer } = require( 'ws');

const ws = new WebSocketServer({ port: 8015 });

// app.get("/",(req,res)=>{})


// event handler    
ws.on("connection",function(socket){      // on is to listen the event
    console.log(socket);
    setInterval(() => {
       socket.send("Reliance stock price is" + " " + Math.random());
    }, 500);
    socket.on('message', function message(data) {
        console.log( data.toString());
    });
})

