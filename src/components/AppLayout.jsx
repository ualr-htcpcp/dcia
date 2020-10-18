import { Col, Row } from "react-bootstrap";
import MenuBar from "../components/MenuBar.jsx";
import Navigation from "../components/Navigation.jsx";

export default function AppLayout({ children }) {
  return (
    <div className="vh-100 d-flex flex-column">
      <MenuBar />

      <Row noGutters>
        <Col md={3} xl={2} className="bg-white p-3 border-right">
          <Navigation />
        </Col>
        <Col as="main" md={9} xl={10} className="px-3 py-4">
          {children}
        </Col>
      </Row>
    </div>
  );
}
