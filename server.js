
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

app.post("/rooms", (req, res) => {

    const { room_number, capacity } = req.body;

    const sql =
        "INSERT INTO rooms(room_number, capacity) VALUES (?, ?)";

    db.query(sql, [room_number, capacity], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Room added successfully"
        });

    });

});
app.get("/rooms", (req, res) => {

    db.query("SELECT * FROM rooms", (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

app.post("/allocate", (req, res) => {

    const { student_id, room_id } = req.body;

    const sql =
        "INSERT INTO room_allocations(student_id, room_id) VALUES (?, ?)";

    db.query(sql, [student_id, room_id], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Room allocated successfully"
        });

    });

});
app.post("/complaints", (req, res) => {

    const { student_id, description } = req.body;

    const sql =
        "INSERT INTO complaints(student_id, description) VALUES (?, ?)";

    db.query(sql, [student_id, description], (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json({
            message: "Complaint submitted"
        });

    });

});

app.get("/complaints", (req, res) => {

    db.query("SELECT * FROM complaints",
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);

        });

});
app.post("/leave", (req, res) => {

    const {
        student_id,
        from_date,
        to_date,
        reason
    } = req.body;

    const sql =
        "INSERT INTO leave_requests(student_id, from_date, to_date, reason) VALUES (?, ?, ?, ?)";

    db.query(
        sql,
        [student_id, from_date, to_date, reason],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Leave request submitted"
            });

        });

});

app.get("/leave", (req, res) => {

    db.query(
        "SELECT * FROM leave_requests",
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);

        });

});

app.post("/notices", (req, res) => {

    const { title, description } = req.body;

    db.query(
        "INSERT INTO notices(title, description) VALUES (?, ?)",
        [title, description],
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json({
                message: "Notice created"
            });

        });

});

app.get("/notices", (req, res) => {

    db.query(
        "SELECT * FROM notices",
        (err, result) => {

            if (err) {
                return res.status(500).json(err);
            }

            res.json(result);

        });

});