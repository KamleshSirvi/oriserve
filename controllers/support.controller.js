const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

let supportPrompt = "";

const supportPromptController = (prompt) => {
  supportPrompt = prompt;
};

const supportController = async (req, res) => {
  const { message } = req.body;

  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  try {
    const prompt = supportPrompt.replace("{customer_message}", message);
    // api call to the llm model
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 300,
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPEN_AI_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    // console.log(`response : `, response);

    const output = response.data.choices[0].message.content.trim();

    // console.log(`output : `, output);

    let result;

    try {
      result = JSON.parse(output);

      //   console.log(`result : `, result);
    } catch (error) {
      return res
        .status(502)
        .json({ error: "Invalid JSON from LLM", raw: output });
    }

    return res.status(200).json(result);
  } catch (error) {
    console.error("Error summarizing message:", error);
    return res.status(500).json({ error: "Error summarizing message" });
  }
};

module.exports = { supportController, supportPromptController };
