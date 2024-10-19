import { useState, useEffect } from "react";
import Athlete from "../services/Athlete.js";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/esm/Button.js";
import AthleteForm from "./AthleteForm.jsx";
import { updateAthlete } from "../services/athletes.js";

let selectedAthleteId = null;
let isLoading = true;

function checkform(form) {
  var inputs = form.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].hasAttribute("required")) {
      if (inputs[i].value == "") {
        alert("Please fill all required fields");
        return false;
      }
    }
  }
  return true;
}

function UpdateForm() {
  const [showUpdateForm, setUpdateForm] = useState("listing");
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

  function AthleteListing() {
    return (
      <ListGroup>
        {athletes.map((athlete, index) => (
          <ListGroup.Item
            key={index}
            action
            onClick={() =>
              setUpdateForm("updateForm") +
              setTimeout(() => {
                setupUpdateForm(athlete);
              }, 100)
            }
          >
            {athlete.firstName} {athlete.lastName}
          </ListGroup.Item>
        ))}
      </ListGroup>
    );
  }
  async function sendData() {
    if (checkform(document.getElementById("athleteForm"))) {
      const number = parseFloat(document.getElementById("idWeight").value);
      if (isNaN(number)) {
        alert("Please enter a valid weight");
      } else {
        try {
          const res = await updateAthlete(
            new Athlete(
              selectedAthleteId,
              document.getElementById("idFirst").value,
              document.getElementById("idLast").value,
              document.getElementById("idNick").value,
              document.getElementById("idDate").value,
              document.getElementById("idWeight").value,
              document.getElementById("idLink").value,
              document.getElementById("idSport").value,
              document.getElementById("idAwards").value
            )
          );
          if (res === 200) {
            alert("Athlete updated");
          } else {
            alert("Error updating athlete");
          }
        } catch (error) {
          console.log(error);
          alert("Network error");
        }
      }
    }
  }

  function setupUpdateForm(athlete) {
    selectedAthleteId = athlete.athleteId;
    document.getElementById("idFirst").value = athlete.firstName;
    document.getElementById("idLast").value = athlete.lastName;
    document.getElementById("idNick").value = athlete.nickName;
    document.getElementById("idDate").value = athlete.birthDate;
    document.getElementById("idWeight").value = athlete.weight;
    document.getElementById("idLink").value = athlete.imageLink;
    document.getElementById("idSport").value = athlete.sport;
    document.getElementById("idAwards").value = athlete.awards;
  }

  return (
    <>
      {isLoading && <p>{loadMessage}</p>}
      {showUpdateForm === "listing" && <AthleteListing />}
      {showUpdateForm === "updateForm" && <AthleteForm />}
      <br />
      <Button className="m-1" variant="success" onClick={() => sendData()}>
        Update
      </Button>
      <Button
        className="m-1"
        variant="secondary"
        onClick={() => setUpdateForm("listing")}
      >
        Reset
      </Button>
    </>
  );
}

export default UpdateForm;
