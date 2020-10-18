import { Nav } from "react-bootstrap";
import {
  RiBook2Fill,
  RiBriefcase2Fill,
  RiCalendarFill,
  RiGroupFill,
  RiLineChartFill,
} from "react-icons/ri";

export default function Navigation() {
  return (
    <Nav variant="pills" defaultActiveKey="/" className="flex-column">
      <Nav.Link href="/">
        <RiLineChartFill className="mr-2" />
        Dashboard
      </Nav.Link>
      <Nav.Link href="#department">
        <RiBriefcase2Fill className="mr-2" />
        Department
      </Nav.Link>
      <Nav.Link href="#terms">
        <RiCalendarFill className="mr-2" />
        Terms
      </Nav.Link>
      <Nav.Link href="#courses">
        <RiBook2Fill className="mr-2" />
        Courses
      </Nav.Link>
      <Nav.Link href="#instructors">
        <RiGroupFill className="mr-2" />
        Instructors
      </Nav.Link>
    </Nav>
  );
}
