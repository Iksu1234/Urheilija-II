require("dotenv").config();
const express = require("express");
const router = express.Router();
const mariadb = require("mariadb");

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  dateStrings: true,
});

//GET all athletes from database
router.get("/athletes", async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query("SELECT * FROM athletes");
    res.json(result);
    conn.release();
  } catch (err) {
    console.log("error: " + err);
  }
});

//GET athlete by id from database
router.get("/athletes/:id", async (req, res) => {
  let conn;
  const { id } = req.params;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(
      `SELECT * FROM athletes WHERE athleteId = ${id}`
    );
    if (result.length === 0) {
      res.status(404).send("Athlete not found");
    } else {
      res.json(result);
    }
    conn.release();
  } catch (err) {
    console.log("error: " + err);
  }
});

//POST new athlete to database
router.post("/athletes/", async (req, res) => {
  let conn;
  let newAthlete = req.body;
  try {
    conn = await pool.getConnection();
    const response = await conn.query(
      `INSERT INTO athletes (firstName, lastName, nickName, birthDate, weight, imageLink, sport, awards) VALUES (?,?,?,?,?,?,?,?)`,
      [
        newAthlete.firstName,
        newAthlete.lastName,
        newAthlete.nickName,
        newAthlete.birthDate,
        parseFloat(newAthlete.weight),
        newAthlete.imageLink,
        newAthlete.sport,
        newAthlete.awards,
      ]
    );
    if (response.affectedRows === 1) {
      res.status(200).send("Athlete added successfully");
    } else {
      res.status(500).send("Error adding athlete");
    }
    conn.release();
  } catch (err) {
    console.log("error: " + err);
  }
});

//UPDATE athlete by id in database
router.patch("/athletes/", async (req, res) => {
  let conn;
  let newAthlete = req.body;
  try {
    conn = await pool.getConnection();
    const response = await conn.query(
      `UPDATE athletes SET firstName = ?, lastName = ?, nickName = ?, birthDate = ?, weight = ?, imageLink = ?, sport = ?, awards = ? WHERE athleteId = ?`,
      [
        newAthlete.firstName,
        newAthlete.lastName,
        newAthlete.nickName,
        newAthlete.birthDate,
        parseFloat(newAthlete.weight),
        newAthlete.imageLink,
        newAthlete.sport,
        newAthlete.awards,
        newAthlete.athleteId,
      ]
    );
    if (response.affectedRows === 1) {
      res.status(200).send("Athlete updated successfully");
    } else {
      res.status(500).send("Error updating athlete");
    }
    conn.release();
  } catch (err) {
    console.log("error: " + err);
  }
});

//DELETE athlete by id from database
router.delete("/athletes/:id", async (req, res) => {
  let conn;
  const { id } = req.params;
  try {
    conn = await pool.getConnection();
    const result = await conn.query(
      `DELETE FROM athletes WHERE athleteId = ${id};`
    );
    if (result.affectedRows === 1) {
      res.status(200).send("Athlete deleted successfully");
    } else {
      res.status(404).send("Athlete not found");
    }
    conn.release();
  } catch (err) {
    console.log("error: " + err);
  }
});

module.exports = router;
