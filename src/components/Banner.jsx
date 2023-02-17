import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "UX/UI Designer"];
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [text, setText] = useState("");
  const period = 2000;

  useEffect(() => {
    let ticker = setTimeout(() => {
      tick();
    }, delta);
    return () => {
      clearTimeout(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => {
        return prevDelta / 2;
      });
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(300);
    }
  };
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Portfolio</span>
            <h1>
              Hi I'm Dang Nguyen <span className="wrap">{text}</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
              inventore dolorum magni hic laudantium, assumenda facilis maiores
              deleniti perferendis tenetur minus, eos quam voluptas saepe. Hic
              ratione sunt eligendi quo.
            </p>
            <button
              onClick={() => {
                console.log("connect");
              }}
            >
              Let's Connect <ArrowRightCircle />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="header img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
