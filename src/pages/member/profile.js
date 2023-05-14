import MainLayout from "../../components/mainLayout";
import s from "../../styles/Wikidoc.module.css";
import { useState, useEffect } from "react";

function WikiDocHistory() {
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/user", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <MainLayout>
      <div>{user}</div>
    </MainLayout>
  );
}

export default WikiDocHistory;
