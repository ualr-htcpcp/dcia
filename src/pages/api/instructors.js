import middleware from "middleware";
import Instructor from "models/Instructor";
import nextConnect from "next-connect";

const handler = nextConnect();
handler.use(middleware);

handler.get(async (req, res) => {
  const query = await Instructor.find({});
  res.json(query);
});

export default handler;
