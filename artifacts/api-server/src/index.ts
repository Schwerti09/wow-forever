import express from "express";

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.get("/health", (_req, res) => {
  res.json({ ok: true, service: "lagerfeuer-api" });
});

app.get("/", (_req, res) => {
  res.json({
    app: "Lagerfeuer API",
    status: "ready",
    message: "Ein erster tragfähiger Backend-Bau für die Feldhandbuch-API.",
  });
});

app.listen(port, () => {
  console.log(`Lagerfeuer API listening on http://localhost:${port}`);
});
