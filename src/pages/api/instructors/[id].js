import middleware from "middleware";
import Instructor from "models/Instructor";
import nextConnect from "next-connect";

const handler = nextConnect();
handler.use(middleware);

handler.put(async (req, res) => {
  const {
    query: { id },
    body: {
      name: { first, last },
    },
  } = req;

  const instructor = await Instructor.findOneAndUpdate(
    { _id: id },
    { name: { first, last } },
    { new: true }
  );
  res.json(instructor);
});

export default handler;
