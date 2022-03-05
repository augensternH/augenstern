import React from "react";

const get = (api, callbackGetData) => {
  fetch(api)
    .then((reponsive) => reponsive.json())
    .then(callbackGetData)
    .catch((err) => console.warn("error: ", err));
};

const post = (api, datas) => {
  const options = {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datas),
  };
  fetch(api, options)
    .then((response) => response.json())
    .then((data) => console.log("-------->", data))
    .catch((err) => console.warn("<-----:", err));
};

const put = (api, datas, id) => {
  const options = {
    method: "PUT", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(datas),
  };
  const apiLast = api + "/" + id;
  fetch(apiLast, options)
    .then((response) => response.json())
    .then((data) => console.log("-------->", data))
    .catch((err) => console.warn("<-----:", err));
};
const deleteId = (api, id) => {
  const apiLast = api + "/" + id;
  const options = {
    method: "DELETE",
  };
  fetch(apiLast, options).catch((err) => {
    console.warn("error delete: ", err);
  });
};
const deleteAll = (api) => {
  const options = {
    method: "DELETE",
  };
  fetch(api, options).catch((err) => {
    console.warn("error delete: ", err);
  });
};

export { post, get, put, deleteId, deleteAll };
