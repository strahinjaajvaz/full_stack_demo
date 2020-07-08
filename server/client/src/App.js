import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import { addUser } from "./redux/actions";
import { getUserBaseOnToken } from "./api/auth";

import { Routes } from "./components/routes";

function App({ dispatch }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token)
      getUserBaseOnToken(token).then((res) => {
        dispatch(addUser(res.data.data));
        setLoading(false);
      });
    else setLoading(false);
  }, []);

  if (loading) return <p>Loading....</p>;

  return (
    <div className="container">
      <Routes />
    </div>
  );
}

export default connect()(App);
