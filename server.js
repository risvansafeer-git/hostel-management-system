
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/students", (req, res) => {
    const { name, department, phone } = req.body;

    const sql =
        "INSERT INTO students(name, department, phone) VALUES (?, ?, ?)";

    db.query(sql, [name, department, phone], (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Student added successfully"
        });
    });
});

app.get("/students", (req, res) => {
    db.query("SELECT * FROM students", (err, result) => {
        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});