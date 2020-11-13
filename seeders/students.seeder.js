import { Seeder } from "mongoose-data-seed";
import Student from "../src/models/Student";

const data = [
  {
    name: { first: "Billy", last: "Madison" },
    tNumber: 12345670,
  },
  {
    name: { first: "Johny", last: "Walker" },
    tNumber: 11165439,
  },
  {
    name: { first: "Some", last: "Guy" },
    tNumber: 11115647,
  },
  {
    name: { first: "Robert", last: "Boucher" },
    tNumber: 11111098,
  },
  {
    name: { first: "Robbie", last: "Hart" },
    tNumber: 11102302,
  },
  {
    name: { first: "Charlie", last: "Fineman" },
    tNumber: 10110123,
  },
  {
    name: { first: "Sonny", last: "Koufax" },
    tNumber: 10000231,
  },
  {
    name: { first: "Michael", last: "Newman" },
    tNumber: 10004522,
  },
  {
    name: { first: "Chuck", last: "Levine" },
    tNumber: 10010247,
  },
  {
    name: { first: "Skeeter", last: "Bronson" },
    tNumber: 10101028,
  },
  {
    name: { first: "Vicki", last: "Vallencourt" },
    tNumber: 10003384,
  },
  {
    name: { first: "Virginia", last: "Venit" },
    tNumber: 10003744,
  },
  {
    name: { first: "Veronica", last: "Vaughn" },
    tNumber: 10034628,
  },
  {
    name: { first: "Mia", last: "Wallace" },
    tNumber: 10054962,
  },
  {
    name: { first: "Ada", last: "Lovelace" },
    tNumber: 10003432,
  },
  {
    name: { first: "Grace", last: "Hopper" },
    tNumber: 10003947,
  },
  {
    name: { first: "Katherine", last: "Johnson" },
    tNumber: 10004899,
  },
  {
    name: { first: "Margaret", last: "Hamilton" },
    tNumber: 10005433,
  },
  {
    name: { first: "Stephanie", last: "Shirley" },
    tNumber: 10064341,
  },
  {
    name: { first: "Megan", last: "Smith" },
    tNumber: 12132843,
  },
  {
    name: { first: "Carla", last: "Jean" },
    tNumber: 10002326,
  },
  {
    name: { first: "Daniel", last: "Plainview" },
    tNumber: 10002623,
  },
  {
    name: { first: "Bob", last: "Marley" },
    tNumber: 23193124,
  },
  {
    name: { first: "Betty", last: "White" },
    tNumber: 10053212,
  },
  {
    name: { first: "Erykah", last: "Badu" },
    tNumber: 10043253,
  },
  {
    name: { first: "Gal", last: "Gadot" },
    tNumber: 10000011,
  },
  {
    name: { first: "Meredith", last: "Quill" },
    tNumber: 10000000,
  },
  {
    name: { first: "Johny", last: "Appleseed" },
    tNumber: 11111111,
  },
  {
    name: { first: "Ricky", last: "Bobby" },
    tNumber: 10101010,
  },
  {
    name: { first: "Zoe", last: "Saldana" },
    tNumber: 87654321,
  },
  {
    name: { first: "David", last: "Chappelle" },
    tNumber: 19283746,
  },
  {
    name: { first: "Mike", last: "Meyers" },
    tNumber: 10312020,
  },
];

class StudentsSeeder extends Seeder {
  async shouldRun() {
    return Student.countDocuments()
      .exec()
      .then((count) => count === 0);
  }

  async run() {
    return Promise.all(
      data.map(async (student) => {
        return Student.create(student);
      })
    );
  }
}

export default StudentsSeeder;
