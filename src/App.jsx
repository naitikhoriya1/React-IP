import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [ip, setIp] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      // const data = await fetch();
      const data = await fetch("https://ipapi.co/json/");
      const jsonData = await data.json();
      console.log(jsonData);
      setIp(jsonData);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>{ip.ip}</h1>
    </>
  );
}

export default App;
