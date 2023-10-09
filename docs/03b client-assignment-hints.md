Client/Browser communication with ServerAPI (15min)
-------------------------------------------

Interacting with our API from client browser javascript

```javascript
// Open a blank browser tab and bring up devtools (F12)
//   NOTE: currently wont work in Firefox due to CSP policy - https://bugzilla.mozilla.org/show_bug.cgi?id=1789751
// Copy and paste the code below
//   These are javascript equivalent of `curl` statesmen's from previous session
// Start `example_server` api (suggest: `make run_example_server`)
// Set `urlAPI` to your server address. (It MUST not end with a `/` as path is appended e.g. `/items`)
// TASK: using the devtools console
//   - add 3 items
//   - get the item list (explore in devtools)
//   - delete the middle item

urlAPI = 'http://localhost:8000'

testItem = {
    user_id: "bob",
    lat: 1,
    lon: 1,
    image: "http://placekitten.com/100/100",
    keywords: "a, b, c",
    description: "a test item that is great",
}

let items = []

function getItems() {
    fetch(`${urlAPI}/items`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(json => {
            console.log("getItems", json)
            items = json  // save the json we got back into the variable `items`
        })
    .catch(err => console.error(err))
}

function createItem(data) {
    fetch(`${urlAPI}/item`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(json => console.log('createItems()', json))
    .catch(err => console.error(err));
}

function deleteItem(item_id) {
    fetch(`${urlAPI}/item/${item_id}`, {
        method: 'DELETE',
    })
        .then(json => console.log('deleteItem()', json))
    .catch(err => console.error(err));
}
```


Helpers for Assignment 1: Client (notes)
--------------------------------

### Helper HTML
```html
<h2>Create</h2>
<form>
    <input name="user_id" placeholder="user_id">
    <input name="lat" placeholder="lat">
    <input name="lon" placeholder="lon">
    <input name="image" placeholder="image">
    <input name="keywords" placeholder="keywords">
    <textarea name="description" placeholder="description"></textarea>
    <button data-action="create_item">Create Item</button>
</form>
<!-- Hints
    1.) Prevent default onSubmit behaviour
    2.) Bind all inputs to data model
    3.) Bind POST action to button
-->

<h2>Items</h2>
<ul>
    <li><!-- Somehow templated for each item -->
        <img src="item.image">
        <span data-field="id">??? item.id ???</span>
        <span data-field="lat">??? item.lat ???</span>
        ...
        <button data-action="delete" someKindOfOnClickAction="deleteItem(item.id)">Delete</button>
    </li>
</ul>
```

### Helper QueryString
```javascript
    // http://HOST:PORT/ADDRESS/OF/PAGE.HTML?query_param1=a&query_param2=b&api=http://localhost:8000
    // Get api url (default to `CURRENT_HOST/api/v1`) (and remove trailing slash if present)
    const urlParams = new URLSearchParams(window.location.search);
    const urlAPI = (urlParams.get('api') || '/api/v1').replace(/\/$/, '');
```
