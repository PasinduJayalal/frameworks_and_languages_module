import React from "react";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export const Index = () => {
  // const urlParams = new URLSearchParams(window.location.search);
  // const urlAPI = (urlParams.get('api') || '/api/v1').replace(/\/$/, '');

  // if (!urlAPI) {
  //   const missingItem = document.createElement('h2')
  //   missingItem.textContent = "You need to connect the Client to Server "
  //   document.body.append(missingItem)
  // }
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const api = (params.get('api')|| '/api/v1').replace(/\/$/, '');
  const [items, setItems] = useState([]);

  const [values, setValues] = useState({
    user_id: "",
    keywords: "",
    description: "",
    image: "",
    lat: "",
    lon: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({ ...prev, [event.target.name]: event.target.value }));
  };

  // const addItems = () => {
  //   setItems((prevItems) => [...prevItems, values]);
  // };

  const clearForm = () => {
    const fields = Object.keys(values);
    for (const field of fields) {
      const item = document.getElementById(field);
      item.value = "";
    }
    const newvalues = {
      user_id: "",
      keywords: "",
      description: "",
      image: "",
      lat: "",
      lon: "",
    }
    setValues(newvalues)
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isAnyValueEmpty = Object.values(values).every(
      (value) => value !== ""
    );

    if (!isAnyValueEmpty) {
      alert(" Some fields are empty");
    } else {
      clearForm();
    // console.log(api)
    //addItems();
    //console.log(values);
    //console.log(items);
    // console.log(api+'/item')
    axios.post(api+'/item',values)
      .then(res => {console.log("Post successful ",{res}); displayitems()})
      .catch(err => console.log(err));
    }
  };
  const displayitems = () => {
    axios.get(api+'/items')
      .then(res => {setItems(res.data)})
      .catch(err => console.log(err));
  }
  const deleteitems = (event) => {
    axios.delete(api+`/item/${event.target.id}`)
      .then(response => {
        console.log(`Deleted post with ID ${event.target.id}`);
        displayitems()
      })
      .catch(error => {
        console.error(error);
      });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            name="user_id"
            id="user_id"
            placeholder="User ID"
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            name="keywords"
            id="keywords"
            placeholder="Keywords"
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            name="description"
            id="description"
            placeholder="Description"
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            name="image"
            id="image"
            placeholder="Image URL"
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            name="lat"
            id="lat"
            placeholder="Latitude"
            onChange={handleInput}
          />
        </div>
        <div>
          <input
            name="lon"
            id="lon"
            placeholder="Longitude"
            onChange={handleInput}
          />
        </div>
        <button type="submit" data-action="create_item">Add</button>
      </form>
      <br></br>
      <br></br>

      {items.map((item, index) => (
        <ul key={index}>
          <li key={index}>
            <img src={item.image} alt={item.id}/>
            <div>
              <span data-field="id">ID: {item.id}</span>
              <span data-field="user_id">User: {item.user_id}</span>
              <span data-field="keywords">Keywords: {item.keywords}</span>
              <span data-field="description">
                Description: {item.description}
              </span>
              <span data-field="lat">Latitude: {item.lat}</span>
              <span data-field="lon">Longitude: {item.lon}</span>
              <span data-field="date_from">Date Form: {item.date_from}</span>
              <span data-field="date_to">Date To: {item.date_to}</span> 
              <button className="btn btn-danger" data-action="delete" id={item.id} onClick={deleteitems} >
                Delete
              </button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Index;