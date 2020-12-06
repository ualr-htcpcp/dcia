import middleware from "middleware";
import nextConnect from "next-connect";
import Semester from "models/Semester";

const handler = nextConnect();
handler.use(middleware);

function sortTerms(a, b) {
  const termOrder = ["spring", "summer", "fall"];
  if (a.year === b.year) {
    return termOrder.indexOf(a.term) - termOrder.indexOf(b.term);
  }
  return a.year - b.year;
}

// Fetch terms to populate term selector component
handler.get(async (req, res) => {
  const terms = await Semester.find({})
    .select({ _id: 0, createdAt: 0, updatedAt: 0, __v: 0 })
    .lean();
  terms.sort(sortTerms);
  res.json(terms);
});

export default handler;
