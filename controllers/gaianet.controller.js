const axios = require("axios");

async function gaianetController(userPrompt) {
  console.log("User Prompt:", userPrompt);
  const url =
    "https://0xcb8c533af102bdd476019c84b249ebd0a4d4df6e.us.gaianet.network/v1/chat/completions";
  const data = {
    messages: [
      {
        role: "system",
        content: "You are a helpful assistant.",
      },
      {
        role: "user",
        content: userPrompt,
      },
    ],
  };

  try {
    const response = await axios.post(url, data, {
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    const gaianetResponse = response.data.choices[0].message.content;
    console.log("GaiaNet Response:", gaianetResponse);

    return gaianetResponse;
  } catch (error) {
    console.error("Error communicating with GaiaNet:", error);

    // Handle the error and send a response accordingly
    return "Sorry, I couldn't process your request right now.";
  }
}

module.exports = gaianetController;
