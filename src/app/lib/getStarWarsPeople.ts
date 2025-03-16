export const getStarWarsPeople = async () => {
  const response = await fetch("https://swapi.dev/api/people/1");

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
};
