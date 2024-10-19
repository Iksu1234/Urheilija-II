//GET ALL
export function getAthletes() {
  return fetch("http://localhost:3000/athletes").then((data) => data.json());
}

//GET ONE
export function getAthlete(input) {
  return fetch(`http://localhost:3000/athletes/${input}`).then((data) => {
    if (data.status == 200) {
      return data.json();
    } else {
      return null;
    }
  });
}

//ADD
export function addAthlete(athlete) {
  return fetch("http://localhost:3000/athletes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(athlete),
  }).then((data) => {
    return data.status;
  });
}

//UDPDATE
export function updateAthlete(athlete) {
  return fetch("http://localhost:3000/athletes", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(athlete),
  }).then((data) => {
    return data.status;
  });
}

//DELETE
export function deleteAthlete(athleteId) {
  return fetch(`http://localhost:3000/athletes/${athleteId}`, {
    method: "DELETE",
  }).then((data) => {
    return data.status;
  });
}
