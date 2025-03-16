export const getTest = async () => {
    const response = await fetch("http://localhost:3000/api/test");
    
    const text = await response.text();

    return JSON.parse(text); // JSONとしてパース
};
