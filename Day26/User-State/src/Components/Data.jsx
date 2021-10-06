import React from "react";
import { useSelector } from "react-redux";

export default function Data() {
  const username = useSelector((state) => state.username);
  const email = useSelector((state) => state.email);
  return (
    <div>
      <h3>Data</h3>
      <h5>Username : {username}</h5>
      <h5>Email : {email}</h5>
    </div>
  );
}
