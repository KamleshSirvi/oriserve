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
