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
  const api = (params.get("api") || "/api/v1").replace(/\/$/, "");
  const [items, setItems] = useState([]);

  const [values, setValues] = useState({
    user_id: "",
    keywords: null,
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
      keywords: null,
      description: "",
      image: "",
      lat: "",
      lon: "",
    };
    setValues(newvalues);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isAnyValueEmpty = Object.entries(values).every(
      ([key, value]) => key === "image" || value !== ""
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
      values.keywords = values.keywords.split(",");
      axios
        .post(api + "/item", values)
        .then((res) => {
          console.log("Post successful ", { res });
          displayitems();
        })
        .catch((err) => console.log(err));
    }
  };
  const displayitems = () => {
    axios
      .get(api + "/items")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => console.log(err));
  };
  const deleteitems = (event) => {
    axios
      .delete(api + `/item/${event.target.id}`)
      .then((response) => {
        console.log(`Deleted post with ID ${event.target.id}`);
        displayitems();
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <form onSubmit={handleSubmit}>
        <h3 className="text-4xl font-bold tracking-tight text-gray-900 ">Item Store</h3>
        <div className="mt-2">
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1.5 max-w-md"
            name="user_id"
            id="user_id"
            placeholder="User ID"
            onChange={handleInput}
          />
        </div>
        <div className="mt-2">
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1.5 max-w-md"
            name="keywords"
            id="keywords"
            placeholder="Keywords"
            onChange={handleInput}
          />
        </div>
        <div className="mt-2">
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1.5 max-w-md"
            name="description"
            id="description"
            placeholder="Description"
            onChange={handleInput}
          />
        </div>
        <div className="mt-2">
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1.5 max-w-md"
            name="image"
            id="image"
            placeholder="Image URL"
            onChange={handleInput}
          />
        </div>
        <div className="mt-2">
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1.5 max-w-md"
            name="lat"
            id="lat"
            placeholder="Latitude"
            onChange={handleInput}
          />
        </div>
        <div className="mt-2">
          <input
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-1.5 max-w-md"
            name="lon"
            id="lon"
            placeholder="Longitude"
            onChange={handleInput}
          />
        </div>
        <button
          type="submit"
          data-action="create_item"
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 my-5 max-w-xs"
        >
          Add
        </button>
      </form>
      <br></br>
      <br></br>

      {/* {items.map((item, index) => (
        <ul key={index}>
          <li key={index}>
            <img src={item.image} alt={item.id} />
            <div>
              <span data-field="id">ID: {item.id}</span>
              <span data-field="user_id">User: {item.user_id}</span>
              <span data-field="keywords">
                Keywords: {JSON.stringify(item.keywords)}
              </span>
              <span data-field="description">
                Description: {item.description}
              </span>
              <span data-field="lat">Latitude: {item.lat}</span>
              <span data-field="lon">Longitude: {item.lon}</span>
              <span data-field="date_from">Date Form: {item.date_from}</span>
              <span data-field="date_to">Date To: {item.date_to}</span>
              <button
                className="btn btn-danger"
                data-action="delete"
                id={item.id}
                onClick={deleteitems}
              >
                Delete
              </button>
            </div>
            <div key={index}>
              <div className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={item.image}
                    alt={item.description}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      {item.description}
                    </h3>
                    <p className="text-sm font-medium text-gray-900">
                      key words : {item.keywords}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 ">
                      Longitude : {item.lat}
                    </p>
                    <p className="mt-1 text-sm text-gray-500 ">
                      Longitude : {item.lon}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  onClick={deleteitems}
                  className="mt-2 p-2 text-sm text-red-500 hover:text-red-700 focus:outline-none"
                  id={index}
                >
                  Delete
                </button>
              </div>
            </div>
          </li>
        </ul>
      ))} */}
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Item List
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {items.map((item, index) => (
              <ul key={index}>
                <li key={index}>
                  <div key={index}>
                    <div className="group relative">
                      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                        <img
                          src={item.image}
                          alt={item.description}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <div>
                            <span className="text-sm font-medium text-gray-900" data-field="id">
                              ID : {item.id}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-900" data-field="user_id">
                              User ID : {item.user_id}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-900" data-field="description">
                              Description : {item.description}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-900" data-field="keywords">
                              Keywords : {JSON.stringify(item.keywords)}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-900" data-field="lat">
                              Latitude : {item.lat}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-900" data-field="lon">
                              Longitude : {item.lon}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-900" data-field="date_from">
                              Date From : {item.date_from}
                            </span>
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-900" data-field="date_to">
                              Date To : {item.date_to}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <button data-action="delete"
                        onClick={deleteitems}
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        id={item.id}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
