# Oriserve Backend System

This is the backend system for handling customer support summarization using OpenAI's API.

---

## Getting Started

### Install Dependencies

Navigate to the project folder and run:

```bash
npm install
```

### Set Up Environment Variables

Create a .env file in the root directory of the project and add the following:

```bash
OPEN_AI_API_KEY=openai_api_key
```

### Start the Server

```bash
npm run dev
```

The development server will start on the port 3000.

## API Endpoint

#### POST /api/v1/support/summarize

This endpoint receives a customer message and returns:

- A simple summary
- Classification (e.g., refund, delay, account access, etc.)
- Sentiment
- Urgency level

#### input

```bash
{
    "message" : "Thanks for letting me know about the shipping delay. I appreciate the update."
}
```

#### output

```bash
{
    "summary": "Customer acknowledges shipping delay and expresses gratitude for the update.",
    "category": "Delay",
    "urgency": "Low",
    "sentiment": "Positive"
}
```

### Important notes

- The prompt used to guide the AI response is stored in prompt/supportPrompt.txt.
- This file is read only once at server startup to improve performance.
- Store the loaded prompt in a variable and reuse it rather than re-reading the file on every API call.
- Use a low temperature (e.g., 0.2) for predictable, reliable AI responses.

### Technologies Used

- Node.js
- Express.js
- OpenAI API (gpt-3.5-turbo)
- Axios
