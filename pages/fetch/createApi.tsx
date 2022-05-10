import React from "react";

const createApi = async (url, body) => {
  try {
    const res = await fetch(url, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(body),
    });
    console.log(res);
    const data = await res.json();
    console.log(JSON.stringify(body), data);
  } catch (err) {
    console.error(err);
  }
};

export default createApi;
