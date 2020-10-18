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

const pageTitle = "Register for DCIA";

export default function Register() {
  const [success, setSuccess] = useState(null);
  const { register, handleSubmit, setError, errors, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
      accessLevel: "",
    },
  });

  const clearSuccess = () => {
    if (success) setSuccess(null);
  };
  const onSubmit = async (data) => {
    try {
      const postForm = await fetch("/api/register", {
        method: "post",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(data),
      });
      const res = await postForm.json();
      if (postForm.ok) {
        setSuccess(res.message);
        reset();
      } else {
        // validation error from server
        setError("email", { type: "manual", message: res.message });
      }
    } catch (err) {
      //TODO: This only catches network failure etc, should probably handle this better
      setError("email", { type: "manual", message: err.message });
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
              Already have any account? <Link href="/signin">Sign In</Link>
            </p>

            {success && <Alert variant="success">{success}</Alert>}

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
                    isInvalid={errors.email}
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

                <Form.Group controlId="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    isInvalid={errors.password}
                    ref={register({ required: "Password is required" })}
                  />
                  {errors.password && (
                    <Form.Control.Feedback type="invalid">
                      {errors.password.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Form.Group controlId="accessLevel">
                  <Form.Label>Access Level</Form.Label>
                  <Form.Control
                    as="select"
                    name="accessLevel"
                    isInvalid={errors.accessLevel}
                    custom
                    ref={register({ required: "Access Level is required" })}
                  >
                    <option disabled defaultValue></option>
                    <option value="instructor">Instructor</option>
                    <option value="admin">Administrator</option>
                  </Form.Control>
                  {errors.accessLevel && (
                    <Form.Control.Feedback type="invalid">
                      {errors.accessLevel.message}
                    </Form.Control.Feedback>
                  )}
                </Form.Group>

                <Button block variant="primary" type="submit" className="mt-4">
                  Register
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
