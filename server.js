let express = require('express');
let bodyParser = require('body-parser')
let app = express();
let http = require('http').Server(app);
let io = require('socket.io')(http);
let mongoose = require('mongoose');

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

let Message = mongoose.model('Message',{
  name : String,
  message : String
})

// let dbUrl = 'mongodb://username:password@ds257981.mlab.com:57981/simple-chat'
let dbUrl = "mongodb://localhost/project-3-practice"

app.get('/messages', (req, res) => {
  Message.find({},(err, messages)=> {
    res.send(messages);
  })
})

// app.get('/messages', (req, res) => {
//   Message.find({},(err, messages)=> {
//     res.send(messages);
//   })
// })

app.post('/messages', (req, res) => {
  let message = new Message(req.body);
  message.save((err) =>{
    if(err)
      sendStatus(500);
    io.emit('message', req.body);
    res.sendStatus(200);
  })
})

io.on('connection', () =>{
  console.log('a user is connected')
})

mongoose.connect(dbUrl, (err) => {
  console.log('mongodb connected', err);
})

let server = http.listen(3000, () => {
  console.log('server is running on port', server.address().port);
});
