import { Router } from "express";
import { SAMPLES } from "../data/samples.js";

/**
 * routes/samples.js
 * -------------------
 * GET /api/samples        -> list of samples (id, name, description only)
 * GET /api/samples/:id    -> full sample including before/after JSX source
 */
const router = Router();

router.get("/", (req, res) => {
  const list = SAMPLES.map(({ id, name, description }) => ({ id, name, description }));
  res.json({ samples: list });
});

router.get("/:id", (req, res) => {
  const sample = SAMPLES.find((s) => s.id === req.params.id);
  if (!sample) {
    return res.status(404).json({ error: `No sample found with id "${req.params.id}".` });
  }
  res.json({ sample });
});

export default router;
