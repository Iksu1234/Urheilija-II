import Athlete from "../services/Athlete";
import Button from "react-bootstrap/Button";
import { addAthlete } from "../services/athletes";
import AthleteForm from "./AthleteForm";

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

function AddForm() {
  async function sendData() {
    if (checkform(document.getElementById("athleteForm"))) {
      const number = parseFloat(document.getElementById("idWeight").value);
      if (isNaN(number)) {
        alert("Please enter a valid weight");
      } else {
        try {
          const res = await addAthlete(
            new Athlete(
              null,
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
            alert("Athlete added");
          } else {
            alert("Error adding athlete");
          }
        } catch (error) {
          console.log(error);
          alert("Network error");
        }
      }
    }
  }

  return (
    <>
      <AthleteForm></AthleteForm>
      <br />
      <Button onClick={sendData}>Send</Button>
    </>
  );
}

export default AddForm;
