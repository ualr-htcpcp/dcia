import React from "react";
import { getSession } from "next-auth/client";
import { Col, Row } from "react-bootstrap";
import MenuBar from "../components/MenuBar.jsx";
import Navigation from "../components/Navigation.jsx";

export default class AppLayout extends React.Component {
  async componentDidMount() {
    const session = await getSession();
    this.setState({ session });
  }

  render() {
    return (
      <div className="vh-100 d-flex flex-column">
        <MenuBar />

        <Row noGutters className="flex-fill">
          <Col md={3} xl={2} className="bg-white p-3 border-right">
            <Navigation session={this.state?.session} />
          </Col>
          <Col as="main" md={9} xl={10} className="px-3 py-4">
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}
