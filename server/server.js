const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

// Middleware to parse JSON requests
app.use(express.json())
// Use CORS middleware
app.use(cors())

// Data storage (In-memory for demonstration purposes)
let ITEMS=[{
  id: 0,
  user_id: "user1234",
  keywords: [
    "hammer",
    "nails",
    "tools"
  ],
  description: "A hammer and nails set",
  image: "https://placekitten.com/200/300",
  lat: 51.2798438,
  lon: 1.0830275,
  date_from: "2023-10-25T21:39:22.733Z",
  date_to: "2023-10-25T21:39:22.733Z"
},]


app.get('/', (req, res) => {
  //res.status(200).sendFile('/workspaces/frameworks_and_languages_module/client/client.html');
  res.status(200).sendFile("client.html", {root: __dirname});
})
app.get('/items', (req, res) => {
  res.status(200).json(ITEMS)
})

// Create a new item
app.post('/item', (req, res) => {
  if(Object.keys(req.body).toString() != "user_id,keywords,description,lat,lon"){
    return res.status(405).json({message: 'missing fields'})
  }
  else{
    const dFrom = new Date().toISOString();
    const dTo = new Date().toISOString();
    let testItems = {
      id : Math.floor(Math.random() * 10000),
      user_id : req.body.user_id,
      keywords : req.body.keywords,
      description : req.body.description,
      lat : req.body.lat,
      lon : req.body.lon,
      date_from : dFrom,
      date_to : dTo
    }
    ITEMS.push(testItems);
    return res.status(201).json(testItems);
  }
})
app.get('/item/:id', (req, res) => {
   //const getID = ITEMS.filter((item) => item.id == req.params.id)
   const getID = req.params.id;
   let itemFound = false;

   for (const item of ITEMS) {
      if (item.id == getID) {
         res.status(200).json(item);
         itemFound = true;
         break; // Exit the loop once the item is found
      }
   }

   if (!itemFound) {
      res.status(404).json({ message: "ID NOT FOUND" });
   }
})

app.delete('/item/:id', (req, res) => {
  const del = req.params.id;
   let itemFound = false;

   for (let i = 0; i < ITEMS.length; i++) {
      if (ITEMS[i].id == del) {
         ITEMS.splice(i, 1); 
         itemFound = true;
         break; 
      }
   }

   if (itemFound) {
      res.status(204).json();
   } else {
      res.status(404).json({ message: "ID is Not Found" });
   }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('SIGINT', function() {process.exit()})