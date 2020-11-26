import mongoose from "mongoose";
import RegistrationRequests from "./seeders/registrationrequests.seeder";
import Instructors from "./seeders/instructors.seeder";
import Students from "./seeders/students.seeder";
import Semesters from "./seeders/semesters.seeder";
import Users from "./seeders/users.seeder";
import StudentOutcomes from "./seeders/studentOutcomes.seeder";
import Courses from "./seeders/courses.seeder";
import StudentWorkProjects from "./seeders/studentWorkProjects.seeder";
import CourseInstances from "./seeders/courseInstances.seeder";
import Assessments from "./seeders/assessments.seeder";

mongoose.set("useCreateIndex", true);

const mongoURL = process.env.MONGO_URL || "mongodb://localhost:27017/dcia";

/**
 * Seeders List
 * order is important
 * @type {Object}
 */
export const seedersList = {
  RegistrationRequests,
  Instructors,
  Students,
  Semesters,
  StudentOutcomes,
  Courses,
  StudentWorkProjects,
  Users,
  CourseInstances,
  Assessments,
};

/**
 * Connect to mongodb implementation
 * @return {Promise}
 */
export const connect = async () =>
  await mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

/**
 * Drop/Clear the database implementation
 * @return {Promise}
 */
export const dropdb = async () => mongoose.connection.db.dropDatabase();
