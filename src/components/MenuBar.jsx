import Link from "next/link";
import { Navbar } from "react-bootstrap";
import Teapot from "../components/Teapot.jsx";

export default function MenuBar() {
  return (
    <Navbar
      bg="primary"
      variant="dark"
      className="shadow-sm"
      style={{ zIndex: 1 }}
    >
      <Navbar.Brand href="/">
        <Teapot
          className="d-inline-block align-top mr-3 text-light"
          style={{ width: "1.5rem", height: "1.75rem" }}
        />
        DCIA
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <Link href="/signin">Sign out</Link>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
