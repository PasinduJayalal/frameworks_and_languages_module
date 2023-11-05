const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

app.use(express.json())
app.use(cors())

let ITEMS=[{
  "id": 0,
  "user_id": "user1234",
  "keywords": [
    "hammer",
    "nails",
    "tools"
  ],
  "description": "A hammer and nails set",
  "image": "https://placekitten.com/200/300",
  "lat": 51.2798438,
  "lon": 1.0830275,
  "date_from": "2023-10-25T21:39:22.733Z",
  "date_to": "2023-10-25T21:39:22.733Z"
}]

app.get('/', (req, res) => {
  //res.sendFile("client.html",{root : __dirname});
  res.status(200).sendFile("/workspaces/frameworks_and_languages_module/client/client.html");
})

app.get('/items', (req, res) => {
  res.status(200).json(ITEMS)
})

app.post('/item/', (req, res) => {
  if (Object.keys(req.body).toString() != "user_id,keywords,description,lat,lon") {
    return res.status(405).json({message: 'missing fields'})
  }
  const date = new Date().toISOString()
  req.body['Date From'] = date
  req.body.id = Math.random()
  ITEMS.push(req.body)
  res.status(201).json(req.body)
})
app.get('/item/:id', (req, res) => {
   //const getID = ITEMS.filter((item) => item.id == req.params.id)
   const getID = req.params.id
    if(ITEMS[getID]){
      res.status(200).json(ITEMS[getID]);
    }
    else{
      res.status(404).json({message :"ID NOT FOUND"})
    }
})

app.delete('/item/:id', (req, res) => {
  //ITEMS = ITEMS.filter((item) => item.id != req.params.id)
  //res.status(204).json();
  //if(!ff){
    //console.log("${id} not found")
    //return res.status(404).json();
  //}
    let del = req.params.id
    if(ITEMS[del]){
      delete ITEMS[del]
      res.status(204).json();
    }
    else{
      res.status(404).json({message :"ID NOT FOUND"});
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('SIGINT', function() {process.exit()})