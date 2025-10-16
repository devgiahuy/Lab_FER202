import React, { useState } from "react";
import { Form } from "react-bootstrap";

export default function DemoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [major, setMajor] = useState("");
  const [agree, setAgree] = useState(false);
  const [content, setContent] = useState("");

  const handleSbmit = (e) => {
    e.preventDefault;
    const format = {
      //  data satate
      name: name,
      email: email,
      phone: phone,
      major: major,
      content: content,
      agree,
    };
    alert(JSON.stringify(format, null, 2));
  };

  return (
    <Form onSubmit={handleSbmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          onChange={(v) => setName(v.target.name)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          onChange={(v) => setEmail(v.target.email)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Phone</Form.Label>
        <Form.Control
          type="number"
          name="phone"
          onChange={(v) => setPhone(v.target.phone)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Select
          aria-label="Default select example"
          onChange={(v) => setMajor(v.target.major)}
        >
          <option>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="content"
          onChange={(v) => setContent(v.target.content)}
        />
      </Form.Group>
      <Form.Group>
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label="Check this switch"
          onChange={(v) => setAgree(v.target.agree)}
        />
      </Form.Group>
    </Form>
  );
}
