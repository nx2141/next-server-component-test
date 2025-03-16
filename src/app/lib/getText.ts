export const getTest = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/test`);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
};
