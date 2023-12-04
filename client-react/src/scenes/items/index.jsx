import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export const Index = () => {

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
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    clearForm();
    //addItems();
    console.log(values);
    console.log(items);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {setItems(res.data)})
      .catch(err => console.log(err));
  };

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
        <button type="submit">Add</button>
      </form>
      <br></br>
      <br></br>

      {items.map((item, index) => (
        <ul key={index}>
          <li key={index}>
            <img src={item.image}/>
            <div>
              <span data-field="id">ID: {item.id}</span>
              <span data-field="user_id">User: {item.userId}</span>
              <span data-field="keywords">Keywords: {item.title}</span>
              <span data-field="description">
                Description: {item.body}
              </span>
              {/* <span data-field="lat">Latitude: {item.lat}</span>
              <span data-field="lon">Longitude: {item.lon}</span>
              <span data-field="date_from">Date Form: {item.date_from}</span>
              <span data-field="date_to">Date To: {item.date_to}</span> */}
              <button class="btn btn-danger" data-action="delete">
                Delete
              </button>
            </div>

            userId

          </li>
        </ul>
      ))}
    </div>
  );
};

export default Index;