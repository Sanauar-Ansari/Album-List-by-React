import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  return (
    <>
      <div className="container">
        {props.users.map((eachdata, index) => {
          const { id, title, userId } = eachdata;
          return (
            <div className="card" key={index}>
              <div className="id_heading">
                <p>User Id:{userId}</p>
                <p> Id:{id}</p>
              </div>

              <span id="title_heading">{eachdata.title}</span>
              <div className="btns">
                <Link to={`/edit/${id}`}>
                  <button className="edit_btn">Edit</button>
                </Link>

                <button
                  className="delete_btn"
                  onClick={() => props.deleteUser(id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
