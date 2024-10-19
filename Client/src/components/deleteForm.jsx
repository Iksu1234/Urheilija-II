import { useState, useEffect } from "react";
import Athlete from "../services/Athlete";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button.js";
import { deleteAthlete } from "../services/athletes";

let isLoading = true;

function DeleteForm() {
  const [athletes, setAthletes] = useState([]);
  const [selectedAthleteId, setSelectedAthleteId] = useState(null);
  const [loadMessage, setMessage] = useState([]);

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
  useEffect(() => {
    fetchAthletes();
  }, []);

  const handleDelete = async () => {
    if (selectedAthleteId) {
      await deleteAthlete(selectedAthleteId);
      alert("Selected athlete deleted");
      fetchAthletes();
    } else {
      alert("No athlete selected");
    }
  };

  return (
    <>
      {isLoading && <p>{loadMessage}</p>}
      <ListGroup>
        {athletes.map((athlete, index) => (
          <ListGroup.Item
            key={index}
            href={`#link${index}`}
            action
            onClick={() => setSelectedAthleteId(athlete.athleteId)}
          >
            {athlete.firstName} {athlete.lastName}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <br />
      <Button variant="danger" onClick={handleDelete}>
        Delete selected
      </Button>
    </>
  );
}

export default DeleteForm;
