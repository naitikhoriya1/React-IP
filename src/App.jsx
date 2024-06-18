import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [ip, setIp] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      // const data = await fetch();
      const data = await fetch("https://api.zippopotam.us/IN/301028");
      const jsonData = await data.json();
      console.log(jsonData);
      setIp(jsonData);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Country: {ip.country}</h1>

      {ip.places && ip.places.length > 0 && (
        <h1>State: {ip.places[0]["state"]}</h1>
      )}
      {ip.places && ip.places.length > 0 && (
        <h1>Place Name: {ip.places[0]["place name"]}</h1>
      )}
      {/* <h1>State: {ip.places[0].state}</h1> */}
      {/* <h1>location: {ip.places[0].place}</h1> */}
    </>
  );
}

export default App;
