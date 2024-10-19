import { useState, useEffect } from "react";
import Athlete from "../services/Athlete";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

let isLoading = true;

function AthleteGrid() {
  const [athletes, setAthletes] = useState([]);
  const [loadMessage, setMessage] = useState([]);

  useEffect(() => {
    async function fetchAthletes() {
      setMessage("Loading...");
      try {
        const athletesData = await Athlete.CreateAthletes(Athlete.getAthletes);
        isLoading = false;
        setAthletes(athletesData);
      } catch (error) {
        console.log(error);
        isLoading = true;
        setMessage("Error fetching athletes");
      }
    }
    fetchAthletes();
  }, []);

  return (
    <>
      {isLoading && <p>{loadMessage}</p>}
      <Row xs={1} md={4} className="g-2 justify-content-center">
        {athletes.map((athlete, index) => (
          <Col key={index}>
            <Card key={athlete.athleteId}>
              <a href={athlete.imageLink}>
                <Card.Img variant="top" src={athlete.imageLink} />
              </a>
              <Card.Body>
                <Card.Title>
                  {athlete.firstName + " " + athlete.lastName}
                </Card.Title>
                <Card.Text>
                  <b>Nickname: </b>
                  {athlete.nickName}
                  <br />
                  <b>Birthdate: </b>
                  {athlete.birthDate}
                  <br />
                  <b>Weight: </b>
                  {athlete.weight} kg
                  <br />
                  <b>Sport: </b>
                  {athlete.sport}
                  <br />
                  <b>Awards: </b>
                  {athlete.awards}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AthleteGrid;
