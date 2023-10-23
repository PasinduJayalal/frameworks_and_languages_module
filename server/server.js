const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000

app.use(express.json())
app.use(cors())

let ITEMS=[{
  "id": 0,
  "user_id": "user1234",
  "keywords": ["hammer","nails","tools"],
  "description": "A hammer and nails set",
  "lat": 51.2798438,
  "lon": 1.0830275,
}]

app.get('/items', (req, res) => {
  res.status(200).json(ITEMS)
})

app.post('/item/', (req, res) => {
  if (Object.keys(req.body).toString() != "id,user_id,keywords,description,lat,lon") {
    return res.status(405).json({message: 'missing fields'})
  }
  const date = new Date().toISOString()
  req.body['Date From'] = date
  ITEMS.push(req.body)
  res.status(201).json(req.body)
})

app.delete('/item/:id', (req, res) => {
  ITEMS = ITEMS.filter((item) => item.id != req.params.id)
  res.status(204).json();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('SIGINT', function() {process.exit()})