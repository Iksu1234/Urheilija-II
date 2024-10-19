import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import FormGroup from "react-bootstrap/esm/FormGroup";

function AthleteForm() {
  return (
    <>
      <FormGroup id="athleteForm">
        <FloatingLabel label="first name *">
          <Form.Control
            required
            id="idFirst"
            type="text"
            placeholder="first name"
          />
        </FloatingLabel>
        <FloatingLabel label="last name *">
          <Form.Control
            required
            id="idLast"
            type="text"
            placeholder="last name"
          />
        </FloatingLabel>
        <FloatingLabel label="nickname">
          <Form.Control id="idNick" type="text" placeholder="nickname" />
        </FloatingLabel>
        <FloatingLabel label="date of birth *">
          <Form.Control
            required
            id="idDate"
            type="date"
            placeholder="date of birth"
          />
        </FloatingLabel>
        <FloatingLabel label="weight *">
          <Form.Control required id="idWeight" type="text" placeholder="0" />
        </FloatingLabel>
        <FloatingLabel label="sport *">
          <Form.Control required id="idSport" type="text" placeholder="sport" />
        </FloatingLabel>
        <FloatingLabel label="awards">
          <Form.Control id="idAwards" type="text" placeholder="awards" />
        </FloatingLabel>
        <FloatingLabel label="image link">
          <Form.Control id="idLink" type="text" placeholder="image link" />
        </FloatingLabel>
      </FormGroup>
      <p>* required fields</p>
    </>
  );
}

export default AthleteForm;
