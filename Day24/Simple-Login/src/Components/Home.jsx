import React from "react";

export default function Home({ auth, dispatch }) {
  return (
    <div className="container">
      <h3>Home</h3>
      <h5>In order to access Profile & Dashboard you need to login</h5>
      {auth.value ? (
        <button
          onClick={() => {
            setTimeout(() => <p>Loading...</p>, 3000);
            dispatch({ type: "logout" });
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setTimeout(() => <p>Loading...</p>, 3000);
            dispatch({ type: "login" });
          }}
        >
          Login
        </button>
      )}
    </div>
  );
}
