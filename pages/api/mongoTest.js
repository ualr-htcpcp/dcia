import nextConnect from "next-connect";
import middleware from "../../middleware";
import Test from "../../models/Test";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  const query = await Test.find({});
  res.json(query);
});

export default handler;
