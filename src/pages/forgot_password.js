import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import Teapot from "../components/Teapot.jsx";
import { emailRegex } from "../utils/validation";

const pageTitle = "Forgot Password";

export default function ForgotPassword() {
  const [success, setSuccess] = useState(null);
  const [baseError, setBaseError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const clearSuccess = () => {
    if (success) setSuccess(null);
  };

  const onSubmit = async (data) => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/request_token", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
        }),
      });
      const msg = await response.json();
      if (response.ok) {
        setSuccess(msg.message);
        setIsProcessing(false);
        reset();
      } else {
        setBaseError(msg.message);
        setIsProcessing(false);
      }
    } catch (error) {
      setBaseError("Unable to submit password reset. Please try again later.");
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
              Don&rsquo;t have an account?{" "}
              <Link href="/register">Register</Link>
            </p>

            {success && <Alert variant="success">{success}</Alert>}
            {baseError && <Alert variant="danger">{baseError}</Alert>}

            <Card body className="mt-4">
              <Form
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                onChange={clearSuccess}
              >
                <Form.Group controlId="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    isInvalid={errors.email || baseError}
                    ref={register({
                      required: "Email is required",
                      pattern: {
                        value: emailRegex,
                        message: "Not a valid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <Form.Control.Feedback type="invalid">
                      {errors.email.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Button
                  block
                  variant="primary"
                  type="submit"
                  className="mt-4"
                  disabled={isProcessing}
                >
                  {isProcessing ? "Submitting" : "Submit"}
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
