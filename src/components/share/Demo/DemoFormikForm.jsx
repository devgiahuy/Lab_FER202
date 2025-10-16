import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Form, Button } from "react-bootstrap";

export default function DemoFormikForm() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      major: "",
      content: "",
      agree: false,
    },

    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("Name is required.")
        .min(2, "Must be 2 characters or more"),

      email: Yup.string()
        .required("Email is required.")
        .matches(/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/, "Invalid email format."),

      phone: Yup.string()
        .required("Phone is required.")
        .matches(/^[0-9]{9,11}$/, "Phone must be 9–11 digits."),

      major: Yup.string().required("Please select a major."),

      content: Yup.string()
        .required("Message is required.")
        .min(10, "Must be 10 characters or more"),

      agree: Yup.boolean(),
    }),

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} noValidate>
      {/* Name */}
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.name && !!formik.errors.name}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Email */}
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.email && !!formik.errors.email}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Phone */}
      <Form.Group className="mb-3" controlId="formPhone">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="text"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.phone && !!formik.errors.phone}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.phone}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Major */}
      <Form.Group className="mb-3" controlId="formMajor">
        <Form.Label>Major</Form.Label>
        <Form.Select
          name="major"
          value={formik.values.major}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.major && !!formik.errors.major}
        >
          <option value="">Select your major</option>
          <option value="CS">Computer Science</option>
          <option value="IT">Information Technology</option>
          <option value="DS">Data Science</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {formik.errors.major}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Content */}
      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="content"
          value={formik.values.content}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.content && !!formik.errors.content}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.content}
        </Form.Control.Feedback>
      </Form.Group>

      {/* Agree */}
      <Form.Group className="mb-3" controlId="formAgree">
        <Form.Check
          type="checkbox"
          label="I agree to the terms and conditions"
          name="agree"
          checked={formik.values.agree}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          isInvalid={formik.touched.agree && !!formik.errors.agree}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.agree}
        </Form.Control.Feedback>
      </Form.Group>

      <Button type="submit" variant="primary">
        Submit
      </Button>
    </Form>
  );
}
