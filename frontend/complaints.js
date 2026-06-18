async function loadStudents() {

    const response =
        await fetch(
            "http://localhost:3000/students"
        );

    const students =
        await response.json();

    const select =
        document.getElementById(
            "studentSelect"
        );

    select.innerHTML = "";

    students.forEach(student => {

        select.innerHTML += `
            <option value="${student.id}">
                ${student.name}
            </option>
        `;

    });

}

async function submitComplaint() {

    const complaint = {

        student_id:
            document.getElementById(
                "studentSelect"
            ).value,

        description:
            document.getElementById(
                "description"
            ).value

    };

    await fetch(
        "http://localhost:3000/complaints",
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json"
            },
            body:
                JSON.stringify(
                    complaint
                )
        }
    );

    loadComplaints();

}

async function loadComplaints() {

    const response =
        await fetch(
            "http://localhost:3000/complaints"
        );

    const complaints =
        await response.json();

    const list =
        document.getElementById(
            "complaintList"
        );

    list.innerHTML = "";

    complaints.forEach(complaint => {

        list.innerHTML += `
            <li>
                Complaint ID:
                ${complaint.id}
                <br>
                ${complaint.description}
                <br>
                Status:
                ${complaint.status}
                <br>
                <button onclick="resolveComplaint(${complaint.id})">
                    Resolve
                </button>
                <br><br>
            </li>
        `;

    });

}

loadStudents();
loadComplaints();
async function resolveComplaint(id) {

    await fetch(
        `http://localhost:3000/complaints/${id}`,
        {
            method: "PUT"
        }
    );

    loadComplaints();

}