import './App.css';
import axios from "axios";
import Button from "./Atoms/Button/Button";
import {useEffect, useState} from "react";
import AlbumOverview from "./Organisms/AlbumTable/AlbumOverview";

const API_URL = "http://localhost:8080";

const App = () => {
  const apiCall = () => {
    axios.get(API_URL).then((data) => {
      const albums = data.data;
      setAlbums(albums);
    });
  }
  const [albums, setAlbums] = useState([]);

  useEffect( () => {apiCall()}, []);

  useEffect(() => {
    console.log(albums);
  }, [albums])

  return (
      <>
        <AlbumOverview albums = {albums}></AlbumOverview>
        <Button cta={"refresh"} onClick={apiCall}/>
      </>
  );
}

export default App;
