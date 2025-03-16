export const getStarWarsPeoples = async () => {
  const response = await fetch("https://swapi.dev/api/people");

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
};
