import express from "express";
import cors from "cors";
import samplesRouter from "./routes/samples.js";

/**
 * server.js
 * -----------
 * Deliberately small: the reconciliation simulation itself (parsing,
 * diffing, layout) runs entirely client-side in the browser via Babel
 * Standalone, so nothing sensitive or heavy needs a server round trip.
 * This backend's only job is to serve the sample component library over a
 * REST API, keeping the door open for persistence (a real DB, user-saved
 * snippets, etc.) later without touching the frontend's core logic.
 */
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", service: "reconcile-backend" });
});

app.use("/api/samples", samplesRouter);

app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

app.listen(PORT, () => {
  console.log(`Reconcile backend listening on http://localhost:${PORT}`);
});
