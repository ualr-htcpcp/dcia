import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import Teapot from "../components/Teapot";
import LoadingSpinner from "../components/LoadingSpinner";

const pageTitle = "Reset Password";

function PageLoading() {
  return (
    <Container>
      <Row className="vh-100 justify-content-center align-items-center">
        <LoadingSpinner />
      </Row>
    </Container>
  );
}

function MissingTokenWarning() {
  return (
    <Container>
      <Row className="vh-100 justify-content-center">
        <Col md={8} lg={6} xl={5} className="my-auto py-3 d-flex flex-column">
          <h1 className="dimmed text-center">{pageTitle}</h1>

          <Teapot className="mx-auto text-secondary mb-3" />
          <Card body className="mt-4">
            <Alert variant="danger">Invalid password reset token.</Alert>
            <p>Please verify your password reset link and try again.</p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function ResetPassword() {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [missingToken, setMissingToken] = useState(false);
  const [success, setSuccess] = useState(null);
  const [baseError, setBaseError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPageLoading, setIsPageLoading] = useState(true);
  const { register, handleSubmit, errors, reset, watch } = useForm({
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const clearSuccess = () => {
    if (success) setSuccess(null);
  };

  useEffect(() => {
    setIsPageLoading(false);
  }, []);

  useEffect(() => {
    if (router.query.token) {
      setToken(router.query.token);
      setMissingToken(false);
    } else {
      setMissingToken(true);
    }
  }, [router.query.token]);

  const onSubmit = async (data) => {
    setIsProcessing(true);
    try {
      const response = await fetch("/api/reset_password", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          token: token,
          password: data.password,
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

  if (isPageLoading) {
    return (
      <>
        <Head>
          <title>{pageTitle}</title>
        </Head>
        <PageLoading />
      </>
    );
  } else {
    if (missingToken) {
      return (
        <>
          <Head>
            <title>{pageTitle}</title>
          </Head>
          <MissingTokenWarning />
        </>
      );
    } else {
      return (
        <>
          <Head>
            <title>{pageTitle}</title>
          </Head>
          <Container>
            <Row className="vh-100 justify-content-center">
              <Col
                md={8}
                lg={6}
                xl={5}
                className="my-auto py-3 d-flex flex-column"
              >
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
                    <Form.Group controlId="password">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="password"
                        isInvalid={errors.password || baseError}
                        ref={register({
                          required: "Password is required",
                        })}
                      />
                      {errors.password && (
                        <Form.Control.Feedback type="invalid">
                          {errors.password.message}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>

                    <Form.Group controlId="confirmPassword">
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control
                        type="password"
                        name="confirmPassword"
                        isInvalid={errors.confirmPassword || baseError}
                        ref={register({
                          required: "Please confirm your new password",
                          validate: (value) =>
                            value === watch("password") ||
                            "Passwords don't match",
                        })}
                      />
                      {errors.confirmPassword && (
                        <Form.Control.Feedback type="invalid">
                          {errors.confirmPassword.message}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>

                    <Button
                      block
                      variant="primary"
                      type="submit"
                      className="mt-4"
                      disabled={isProcessing || errors.confirmPassword}
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
  }
}

export default ResetPassword;
