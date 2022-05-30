const postData = async (server, data) => {
  const promise = await fetch(server, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: data,
  });

  return await promise.json();
};

const getResource = async (server) => {
  const promise = await fetch(server);

  if (promise.status !== 200 || !promise.ok) {
    throw new Error(
      `Could not fetch from ${server}. Status: ${promise.status}`
    );
  }

  return await promise.json();
};

export { postData, getResource };
