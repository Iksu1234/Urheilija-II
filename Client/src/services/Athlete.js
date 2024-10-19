import { getAthletes } from "./athletes";

function formatBirthdate(birthdate) {
  // Regex to match the date part and ignore the time part
  const formattedDate = new Date(birthdate).toISOString().split("T")[0];
  return formattedDate;
}
class Athlete {
  constructor(
    athleteId,
    firstName,
    lastName,
    nickName,
    birthDate,
    weight,
    imageLink,
    sport,
    awards
  ) {
    this.athleteId = athleteId;
    this.firstName = firstName;
    this.lastName = lastName;
    this.nickName = nickName;
    this.birthDate = birthDate;
    this.weight = weight;
    this.imageLink = imageLink;
    this.sport = sport;
    this.awards = awards;
  }
  static async CreateAthletes() {
    let athleteJson = await getAthletes();
    let athletes = [];
    for (let i = 0; i < athleteJson.length; i++) {
      let athlete = new Athlete(
        athleteJson[i].athleteId,
        athleteJson[i].firstName,
        athleteJson[i].lastName,
        athleteJson[i].nickName,
        formatBirthdate(athleteJson[i].birthDate),
        athleteJson[i].weight,
        athleteJson[i].imageLink,
        athleteJson[i].sport,
        athleteJson[i].awards
      );
      athletes.push(athlete);
    }
    return athletes;
  }
}

export default Athlete;
