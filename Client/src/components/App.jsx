import { useState } from "react";
import "../styles/App.css";
import "../services/athletes.js";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import AthleteGrid from "./AthleteGrid.jsx";
import AddForm from "./addForm.jsx";
import UpdateForm from "./updateForm.jsx";
import DeleteForm from "./deleteForm.jsx";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <h1 className="main-header">Sports database</h1>
      <br />
      <Stack direction="horizontal" gap={3} className="button-stack">
        <Button variant="primary" onClick={() => setPage("showAthletes")}>
          Open list
        </Button>
        <Button variant="secondary" onClick={() => setPage("addForm")}>
          Add
        </Button>
        <Button variant="secondary" onClick={() => setPage("updateForm")}>
          Update
        </Button>
        <Button variant="secondary" onClick={() => setPage("deleteForm")}>
          Delete
        </Button>
      </Stack>
      <br />
      {page === "showAthletes" && <AthleteGrid />}
      {page === "addForm" && <AddForm />}
      {page === "updateForm" && <UpdateForm />}
      {page === "deleteForm" && <DeleteForm />}
    </>
  );
}

export default App;
