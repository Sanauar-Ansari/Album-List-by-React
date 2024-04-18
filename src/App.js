import "./App.css";
import Navigation from "./navigation";
import Home from "./home";
import AddAlbum from "./addAlbum";
import EditAlbum from "./editalbum";
import { useState, useEffect } from "react";
import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [users, setUsers] = useState([]);
  //Use useEffect and there dipendency bacoz we want want at initial rendering all data should be fetched from api.
  useEffect(() => {
    loadAlbumList();
  }, []);

  const handleUser = (newData) => {
    setUsers(newData);
  };
  //To fetch the data from API
  const loadAlbumList = async () => {
    const result = await axios("https://jsonplaceholder.typicode.com/albums");
    console.log(result.data);
    setUsers(result.data.reverse());
  };
  //Used to delete the data from API
  const deleteUser = async (id) => {
    await axios
      .delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then(() => {
        const updatedAlbums = users.filter((a) => a.id !== id);
        setUsers(updatedAlbums);
      });
  };

  //Used routing here and passing through props whatever needed.
  const router = createBrowserRouter([
    {
      //I kept the navigation as a Parent component so it will appear on every components(addalbum,editalbum)
      path: "/",
      element: <Navigation />,
      children: [
        {
          index: true,
          element: (
            //users,loadAlbumList and deleteUser passed as a props to Home page
            <Home
              users={users}
              loadAlbumList={loadAlbumList}
              deleteUser={deleteUser}
            />
          ),
        },
        {
          //users and loadAlbumList passed as a props to Home page
          path: "/addalbum",
          element: <AddAlbum handleUser={handleUser} users={users} />,
        },

        {
          //users and loadAlbumList passed as a props to Home page
          path: "/edit/:z",
          element: <EditAlbum handleUser={handleUser} users={users} />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
