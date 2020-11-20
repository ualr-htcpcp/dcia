import { useSession } from "next-auth/client";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Nav } from "react-bootstrap";
import {
  RiBook2Fill,
  RiCalendarEventFill,
  RiFlag2Fill,
  RiGitRepositoryPrivateFill,
  RiGroupFill,
  RiLineChartFill,
} from "react-icons/ri";

export default function Navigation() {
  const router = useRouter();
  const [session] = useSession();

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
      <Link href="/courses" passHref={true}>
        <Nav.Link>
          <RiBook2Fill className="mr-2" />
          Courses
        </Nav.Link>
      </Link>

      {["admin", "root"].includes(session?.user.accessLevel) && (
        <>
          <Link href="/outcomes" passHref={true}>
            <Nav.Link>
              <RiFlag2Fill className="mr-2" />
              Outcomes
            </Nav.Link>
          </Link>
          <Link href="/semesters" passHref={true}>
            <Nav.Link>
              <RiCalendarEventFill className="mr-2" />
              Semesters
            </Nav.Link>
          </Link>
          <Link href="/instructors" passHref={true}>
            <Nav.Link>
              <RiGroupFill className="mr-2" />
              Instructors
            </Nav.Link>
          </Link>
        </>
      )}

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
