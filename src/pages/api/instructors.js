import middleware from "middleware";
import Instructor from "models/Instructor";
import nextConnect from "next-connect";

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  const {
    body: {
      name: { first, last },
    },
  } = req;

  const query = await Instructor.create({ name: { first, last } });
  res.json(query);
});

handler.get(async (req, res) => {
  const instructors = await Instructor.find().sort("name.last name.first");
  res.json(instructors);
});

export default handler;
