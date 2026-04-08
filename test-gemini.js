const test = async () => {
  const payload = {
    contents: [{ parts: [{ text: "test" }] }],
    generationConfig: { 
      temperature: 0.8, 
      maxOutputTokens: 1024, 
      responseMimeType: "text/plain" 
    }
  };
  const r = await fetch("https://generativelanguage.googleapis.com/v1/models/gemini-2.0-flash:generateContent?key=AIzaSyFakeKey123", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  console.log(await r.json());
};
test();
