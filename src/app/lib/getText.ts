export const getTest = async () => {
    const response = await fetch("http://localhost:3000/api/test");

    console.log("Response status:", response.status);
    
    // まず生のレスポンスを確認する
    const text = await response.text();
    console.log("Raw Response:", text);

    // 空だったらエラーをスロー
    if (!text) {
        throw new Error("Empty response from server");
    }

    return JSON.parse(text); // JSONとしてパース
};
