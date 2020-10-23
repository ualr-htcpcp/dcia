import { Navbar } from "react-bootstrap";
import { signOut } from "next-auth/client";
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
          <button onClick={signOut} className="btn btn-link text-white">
            Sign out
          </button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
