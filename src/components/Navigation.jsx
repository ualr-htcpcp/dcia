import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Nav } from "react-bootstrap";
import {
  RiBook2Fill,
  RiBriefcase2Fill,
  RiCalendarEventFill,
  RiGitRepositoryPrivateFill,
  RiGroupFill,
  RiLineChartFill,
} from "react-icons/ri";

export default function Navigation({ session }) {
  const router = useRouter();

  return (
    <Nav
      variant="pills"
      defaultActiveKey="/"
      activeKey={router.pathname}
      className="flex-column"
    >
      <Link href="/" passHref={true}>
        <Nav.Link>
          <RiLineChartFill className="mr-2" />
          Dashboard
        </Nav.Link>
      </Link>
      <Nav.Link href="#department">
        <RiBriefcase2Fill className="mr-2" />
        Department
      </Nav.Link>
      <Link href="/semesters" passHref={true}>
        <Nav.Link>
          <RiCalendarEventFill className="mr-2" />
          Semesters
        </Nav.Link>
      </Link>
      <Nav.Link href="#courses">
        <RiBook2Fill className="mr-2" />
        Courses
      </Nav.Link>
      <Nav.Link href="#instructors">
        <RiGroupFill className="mr-2" />
        Instructors
      </Nav.Link>
      {session?.user.accessLevel === "root" && (
        <Link href="/user-access" passHref={true}>
          <Nav.Link>
            <RiGitRepositoryPrivateFill className="mr-2" />
            User Access
          </Nav.Link>
        </Link>
      )}
    </Nav>
  );
}
