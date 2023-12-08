# Importing necessary modules
import falcon
import json
import random
from datetime import datetime
from falcon.http_status import HTTPStatus


# Middleware for handling CORS
# Using the URL below, I have written the code for "CORS Middleware" here.
#https://github.com/falconry/falcon/issues/1220#issuecomment-363266844
class CORSMiddleware:
    def process_request(self, req, resp):
      resp.set_header('Access-Control-Allow-Origin', '*')
      resp.set_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
      resp.set_header('Access-Control-Allow-Headers', 'Content-Type')
      resp.set_header('Access-Control-Max-Age', '1728000')  # 20 days
      if req.method == 'OPTIONS':
            raise HTTPStatus(falcon.HTTP_204, body='\n') #I have to modify the "OPTIONS" to return 204 status code as it returns 200 by default. 

# Falcon application setup
app = falcon.App(middleware=[CORSMiddleware()])

# Sample item data
items = [
    {
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
    }
]

# class for handling root endpoint
class get:
   def on_get(self, req, resp):
      """Handles GET requests"""
      resp.status = falcon.HTTP_200
      resp.content_type = 'text/html'
      with open('index.html', 'r') as f:
         resp.body = f.read()

# class for handling item collection endpoint
class getItems:
   def on_get(self, req, resp):
      """Handles GET requests"""
      resp.status = falcon.HTTP_200
      resp.content_type = falcon.MEDIA_JSON
      resp.media = items

# class for handling item post endpoint
class postItems:
   # def on_post(self, req, resp):
   #  """Handles POST requests"""
   #  data = json.load(req.bounded_stream)
   #  if data['user_id'] and data['keywords'] and data['description'] and data['lat'] and data['lon']:
   #      pitem = {
   #          "id": random.randint(100, 999),
   #          "user_id": data['user_id'],
   #          "keywords": data['keywords'],
   #          "description": data['description'],
   #          "lat": data['lat'],
   #          "lon": data['lon'],
   #          "date_from": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
   #          "date_to": datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
   #      }
   #      items.append(pitem)
   #      resp.status = falcon.HTTP_201
   #      resp.media = pitem
   #  else:
   #      resp.status = falcon.HTTP_405
   #      resp.media = {'error': 'Missing Fields'}
         #resp.content_type = falcon.MEDIA_JSON
   def on_post(self, req, resp):
      """Handles POST requests"""
      data = json.load(req.bounded_stream)
      #required_fields = ["user_id", "keywords", "description", "lat", "lon"]
      if 'user_id' not in data or 'keywords' not in data or 'description' not in data or 'lat' not in data or 'lon' not in data:
      #if data.get("user_id") is None or data.get("keywords") is None or data.get("description") is None or data.get("lat") is None or data.get("lon") is None:
      #if not all(field in data for field in required_fields):
      #if data['user_id'] and data['keywords'] and data['description'] and data['lat'] and data['lon']:
         resp.status = falcon.HTTP_405
         resp.media = (
         'Missing Fields'
         )
      else:
         pitem = {
            "id" : random.randint(100, 999),
            #"id" : len(items)+1,
            "user_id" : data['user_id'],
            "keywords" : data['keywords'],
            "description" : data['description'],
            #"image" : data['image'],
            "lat" : data['lat'],
            "lon" : data['lon'],
            "date_from" : datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            "date_to" : datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            }
         items.append(pitem)
         resp.status = falcon.HTTP_201
         resp.media = pitem
         #resp.content_type = falcon.MEDIA_JSON

# class for handling individual get item endpoint
class getItemID:
   def on_get(self, req, resp, id):
      """Handles GET BY ID requests"""
      itemFOUND = False
      for item in items:
         if item['id'] == int(id):
            resp.status = falcon.HTTP_200
            resp.content_type = falcon.MEDIA_JSON
            resp.media = item
            itemFOUND = True
      if not itemFOUND:
         resp.status = falcon.HTTP_404
         resp.media = 'ID NOT FOUND'

# class for handling individual delete item endpoint
   def on_delete(self, req, resp, id):
      """Handles DELETE BY ID requests"""
      itemFOUND = False
      for i, item in enumerate(items):
         if item['id'] == int(id):
            resp.status = falcon.HTTP_204
            resp.media = 'ITEM DELETED'
            del items[i]
            itemFOUND = True
      if not itemFOUND:
         resp.status = falcon.HTTP_404
         resp.media = 'ID NOT FOUND'

# Add routes
app.add_route('/', get())
app.add_route('/items', getItems())
app.add_route('/item', postItems())
app.add_route('/item/{id}', getItemID())

if __name__ == '__main__':
   from wsgiref.simple_server import make_server
   with make_server('', 8000, app) as httpd:
      print('Serving on port 8000...')
# Serve until process is killed
      httpd.serve_forever()