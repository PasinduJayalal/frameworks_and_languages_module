from wsgiref.simple_server import make_server

import falcon
import json
import random
from datetime import datetime


app = falcon.App()


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
      resp.content_type = falcon.MEDIA_TEXT
      resp.text = (
         'Hello World'
      )
class getItems:
   def on_get(self, req, resp):
      """Handles GET requests"""
      resp.status = falcon.HTTP_200
      resp.content_type = falcon.MEDIA_TEXT
      resp.body = json.dumps(items)

class postItems:
   def on_post(self, req, resp):
      data = json.loads(req.bounded_stream.read())
      if 'user_id' not in data or 'keywords' not in data or 'description' not in data or 'lat' not in data or 'lon' not in data:
         resp.status = falcon.HTTP_405
         resp.text = (
         'Missing Fields'
         )
      else:
         pitem = [
            {
               "id" : random.randint(100, 999),
               "user_id" : data['user_id'],
               "keywords" : data['keywords'],
               "description" : data['description'],
               "lat" : data['lat'],
               "lon" : data['lon'],
               "date_from" : datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
               "date_form" : datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
            }
         ]
         items.append(pitem)
         resp.status = falcon.HTTP_201
         resp.content_type = falcon.MEDIA_TEXT

app.add_route('/', get())
app.add_route('/items', getItems())
app.add_route('/item', postItems())

if __name__ == '__main__':
   with make_server('', 8000, app) as httpd:
      print('Serving on port 8000...')
# Serve until process is killed
      httpd.serve_forever()