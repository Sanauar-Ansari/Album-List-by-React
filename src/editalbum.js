import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditAlbum = (props) => {
  const { z } = useParams();

  let history = useNavigate();
  const [data, setData] = useState({
    userId: "",
    id: "",
    title: "",
  });

  const { userId, id, title } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post("https://jsonplaceholder.typicode.com/albums", data);
    const newUsers = [data, ...props.users];
    props.handleUser(newUsers);
    console.log(newUsers);
    alert("Updated Succsesfully");
    history("/");
  };

  const loadUser = async () => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/albums/${z}`
    );
    setData(result.data);
    console.log(data);
  };

  return (
    <>
      <div className="addalbumpage">
        <form onSubmit={handleSubmit}>
          <div className="addAlbumLayout">
            <h1>Edit Your Album</h1>
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
            <button>Update</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditAlbum;
