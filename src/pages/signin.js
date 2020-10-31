import Head from "next/head";
import Link from "next/link";
import Teapot from "../components/Teapot.jsx";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { getCsrfToken } from "next-auth/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

const pageTitle = "Sign in to DCIA";

export default function Signin() {
  const [baseError, setBaseError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const router = useRouter();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async (data) => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/auth/callback/credentials", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          csrfToken: await getCsrfToken(),
          json: "true",
        }),
      });

      const { url } = await response.json();

      if (url.includes("error")) {
        const parsedURL = new URL(url);
        const errorMessage = parsedURL.searchParams
          .get("error")
          .split("Error: ")[1];
        setBaseError(errorMessage);
        setIsProcessing(false);
      } else {
        router.push("/");
      }
    } catch (error) {
      setBaseError("Unable to sign in. Please try again later.");
      setIsProcessing(false);
    }
  };

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

            {baseError && <Alert variant="danger">{baseError}</Alert>}

            <Card body className="mt-4">
              <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    isInvalid={errors.email || baseError}
                    ref={register({ required: true })}
                  />
                </Form.Group>

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    isInvalid={errors.password || baseError}
                    ref={register({ required: true })}
                  />
                </Form.Group>

                <Button
                  block
                  variant="primary"
                  type="submit"
                  className="mt-4"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Signing in..." : "Sign in"}
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
