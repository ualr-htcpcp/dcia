import middleware from "middleware";
import nextConnect from "next-connect";
import { termData } from "fakeDashboardData";

const handler = nextConnect();
handler.use(middleware);

// Fetch terms to populate term selector component
handler.get(async (req, res) => {
  res.json(termData);
});

export default handler;
