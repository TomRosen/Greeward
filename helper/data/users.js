const getUsersQuery = async (filter = {}) => {
  const data = await fetch("/api/users/get/query", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ filter }),
  }).then((res) => res.json());
  return data;
};

export { getUsersQuery };
