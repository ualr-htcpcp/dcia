import Head from "next/head";
import Link from "next/link";
import Teapot from "../components/Teapot.jsx";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const pageTitle = "Sign in to DCIA";

export default function Home() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Container>
        <Row className="vh-100 justify-content-center">
          <Col md={8} lg={6} xl={5} className="my-auto py-3 d-flex flex-column">
            <Teapot className="mx-auto text-secondary mb-3" />
            <h1 className="dimmed text-center">{pageTitle}</h1>
            <p className="text-center text-secondary">
              Don&rsquo;t have any account?{" "}
              <Link href="/register">Register</Link>
            </p>

            <Card body className="mt-4">
              <Form>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" />
                </Form.Group>

                <Button block variant="primary" type="submit" className="mt-4">
                  Sign in
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
