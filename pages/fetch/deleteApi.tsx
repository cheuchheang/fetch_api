import React from "react";

const deleteApi = async (url) => {
  try {
    const res = await fetch(url, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    });
    const data = await res.json();
	console.log(data);
	
  } catch (err) {
    console.error(err);
  }
};

export default deleteApi;
