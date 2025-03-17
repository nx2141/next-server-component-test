type GetKeyTextProps = {
  key: string;
};

export const getKeyText = async ({ key }: GetKeyTextProps) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/test/${key}`,
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return await response.json();
};
