import falcon
import json
import random
from datetime import datetime
from falcon.http_status import HTTPStatus

#app = falcon.App(cors_enable=True)
#app = falcon.App(middleware=[falcon.CORSMiddleware(allow_origins='*', allow_methods='GET, POST, PUT, DELETE', allow_headers='Content-Type')])
#https://github.com/falconry/falcon/issues/1220#issuecomment-363266844
class CORSMiddleware:
    def process_request(self, req, resp):
      resp.set_header('Access-Control-Allow-Origin', '*')
      resp.set_header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
      resp.set_header('Access-Control-Allow-Headers', 'Content-Type')
      resp.set_header('Access-Control-Max-Age', '1728000')  # 20 days
      if req.method == 'OPTIONS':
            raise HTTPStatus(falcon.HTTP_204, body='\n')

app = falcon.App(middleware=[CORSMiddleware()])

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


class get:
   def on_get(self, req, resp):
      """Handles GET requests"""
      resp.status = falcon.HTTP_200
      resp.content_type = 'text/html'
      with open('index.html', 'r') as f:
         resp.body = f.read()

class getItems:
   def on_get(self, req, resp):
      """Handles GET requests"""
      resp.status = falcon.HTTP_200
      resp.content_type = falcon.MEDIA_JSON
      resp.media = items

class postItems:
   def on_post(self, req, resp):
      """Handles POST requests"""
      data = json.load(req.bounded_stream)
      if 'user_id' not in data or 'keywords' not in data or 'description' not in data or 'lat' not in data or 'lon' not in data:
         resp.status = falcon.HTTP_405
         resp.text = (
         'Missing Fields'
         )
      else:
         pitem = {
            "id" : random.randint(100, 999),
            "user_id" : data['user_id'],
            "keywords" : data['keywords'],
            "description" : data['description'],
            "lat" : data['lat'],
            "lon" : data['lon'],
            "date_from" : datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            "date_form" : datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            }
         items.append(pitem)
         resp.status = falcon.HTTP_201
         resp.media = pitem
         #resp.content_type = falcon.MEDIA_JSON

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