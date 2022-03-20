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
  console.log("getGreewardsQuery", filter);
  const data = await (
    await fetch("/api/greewards/get/query", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ filter }),
    })
  ).json();
  console.log("getGreewardsQuery", data);
  return data;
};

export { getGreewardsAll, getGreewardsQuery, redeem };
