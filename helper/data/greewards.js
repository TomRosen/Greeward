import { getUsersQuery } from "./users";

const getGreewardsAll = async (limit = 100, skip = 0) => {
  console.log("getGreewardsAll");
  const data = await (
    await fetch("/api/greewards/get/all", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ limit, skip }),
    })
  ).json();
  console.log("getGreewardsAll", data);
  return data;
};

const getGreewardsQuery = async (filter = {}) => {
  const data = await fetch("/api/greewards/get/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ filter }),
  }).then((res) => res.json());
  return data;
};

const redeem = async (greewardID, email) => {
  let data = await fetch("/api/greewards/redeem", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ greewardID, email }),
  });

  if (data.status === 406) {
    window.alert("Not enough carrots!");
  }

  data = await data.json();
  return data;
};

export { getGreewardsAll, getGreewardsQuery, redeem };
