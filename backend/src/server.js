import "dotenv/config";
import express from "express";
import cors from "cors";
import { clerkMiddleware, requireAuth, getAuth } from "@clerk/express";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",").map((s) => s.trim()) || "*",
    credentials: true,
  })
);
app.use(express.json());
app.use(clerkMiddleware());

app.get("/health", (req, res) => {
  res.json({ ok: true });
});

app.get("/api/public", (req, res) => {
  res.json({ message: "This is a public endpoint" });
});

app.get("/api/user", requireAuth(), (req, res) => {
  const auth = getAuth(req);
  res.json({ userId: auth.userId, sessionId: auth.sessionId });
});

const port = Number(process.env.PORT || 4000);
app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`API listening on :${port}`);
});
