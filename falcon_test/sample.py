import falcon


class QuoteResource:
    def on_get(self, req, resp):
        """Handle GET requests."""
        quote = {
            'author': 'Grace Hopper',
            'quote': (
                "I've always been more interested in "
                "the future than in the past."
            ),
        }

        resp.media = quote


app = falcon.App()
app.add_route('/quote', QuoteResource())