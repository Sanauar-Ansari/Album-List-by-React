import axios from "axios";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddAlbum = (props) => {
  let history = useNavigate();
  const [data, setData] = useState({
    userId: "",
    id: "",
    title: "",
  });

  const { userId, id, title } = data;
  //We are storing all the data which is filling in userId,id,and title in data state
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("https://jsonplaceholder.typicode.com/albums", data);
    //Whatever new data is added into this api, i must have pass into users state by which our data is fetching.
    const newUsers = [data, ...props.users];
    props.handleUser(newUsers);
    alert("Added to your Album..");
    history("/");
  };

  return (
    <>
      <div className="addalbumpage">
        <form onSubmit={handleSubmit}>
          <div className="addAlbumLayout">
            <h1>Add A Album</h1>
            <input
              type="text"
              placeholder="Enter userId"
              className="input"
              name="userId"
              value={userId}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter Id"
              className="input"
              name="id"
              value={id}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Enter Title"
              className="input"
              name="title"
              value={title}
              onChange={handleChange}
            />
            <button>Add To Album</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAlbum;
