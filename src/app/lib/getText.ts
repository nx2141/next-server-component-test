export const getTest = async () => {
  const response = await fetch("http://localhost:3000/api/test");

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
};
