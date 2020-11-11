import { Navbar } from "react-bootstrap";
import { signOut } from "next-auth/client";
import { useRouter } from "next/router";
import Link from "next/link";
import Teapot from "../components/Teapot.jsx";

export default function MenuBar() {
  const router = useRouter();
  const signOutHandler = async () => {
    await signOut();
    router.push("/signin");
  };

  return (
    <Navbar
      bg="primary"
      variant="dark"
      className="shadow-sm"
      style={{ zIndex: 1 }}
    >
      <Link href="/">
        <Navbar.Brand href="/">
          <Teapot
            className="d-inline-block align-top mr-3 text-light"
            style={{ width: "1.5rem", height: "1.75rem" }}
          />
          DCIA
        </Navbar.Brand>
      </Link>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <button onClick={signOutHandler} className="btn btn-link text-white">
            Sign out
          </button>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}
