import contactImg from "../assets/img/contact-img.svg";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});
  const onformUpdate = (field, value) => {
    setFormDetails((prev) => {
      return { ...prev, [field]: value };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let res = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = res.json();
    setFormDetails(formInitialDetails);
    if (result.code === 200) {
      setStatus({
        success: true,
        message: "Message sent successfully",
      });
    } else {
      setStatus({
        success: false,
        message: "Something went wrong, plz try again!",
      });
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md="6">
            <img src={contactImg} alt="" />
          </Col>
          <Col md="6">
            <h2>Get in touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm="6" className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onformUpdate("firstName", e.target.value)}
                  />
                </Col>
                <Col sm="6" className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="First Name"
                    onChange={(e) => onformUpdate("lastName", e.target.value)}
                  />
                </Col>
                <Col sm="6" className="px-1">
                  <input
                    type="text"
                    value={formDetails.email}
                    placeholder="First Name"
                    onChange={(e) => onformUpdate("email", e.target.value)}
                  />
                </Col>
                <Col sm="6" className="px-1">
                  <input
                    type="text"
                    value={formDetails.phone}
                    placeholder="First Name"
                    onChange={(e) => onformUpdate("phone", e.target.value)}
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    value={formDetails.message}
                    placeholder="First Name"
                    onChange={(e) => onformUpdate("message", e.target.value)}
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.success === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
