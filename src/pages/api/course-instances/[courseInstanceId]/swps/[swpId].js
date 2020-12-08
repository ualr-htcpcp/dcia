import middleware from "middleware";
import Assessment from "models/Assessment";
import StudentWorkProject from "models/StudentWorkProject";
import nextConnect from "next-connect";
import { authenticate } from "utils/auth";

const handler = nextConnect();
handler.use(middleware);
handler.use(authenticate);

handler.put(async (req, res) => {
  const {
    query: { swpId },
    body: { name, studentOutcomes },
  } = req;

  try {
    const student = await StudentWorkProject.findOneAndUpdate(
      { _id: swpId },
      { name, studentOutcomes },
      { new: true }
    );
    res.json(student);
  } catch {
    res.status(422).json({ error: true });
  }
});

handler.delete(async (req, res) => {
  const {
    query: { swpId },
  } = req;

  const isLocked = await Assessment.exists({ studentWorkProject: swpId });

  if (isLocked) {
    res.status(403).json({ error: true, message: "Forbidden" });
  } else {
    const swp = await StudentWorkProject.findByIdAndDelete(swpId);
    res.json(swp);
  }
});

export default handler;
