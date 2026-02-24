import express from "express";
import { config } from "../src/config";
import webhookRouter from "../src/routes/webhook";

const app = express();

app.use(express.json());

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Webhook routes
app.use(webhookRouter);

// For local development
if (process.env.NODE_ENV !== "production") {
  app.listen(config.PORT, () => {
    console.log(`WhatsApp Agent server running on port ${config.PORT}`);
  });
}

export default app;
