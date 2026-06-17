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

async function submitLeave() {

    const leave = {

        student_id:
            document.getElementById(
                "studentSelect"
            ).value,

        from_date:
            document.getElementById(
                "from_date"
            ).value,

        to_date:
            document.getElementById(
                "to_date"
            ).value,

        reason:
            document.getElementById(
                "reason"
            ).value

    };

    await fetch(
        "http://localhost:3000/leave",
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json"
            },
            body:
                JSON.stringify(
                    leave
                )
        }
    );

    loadLeaves();

}

async function loadLeaves() {

    const response =
        await fetch(
            "http://localhost:3000/leave"
        );

    const leaves =
        await response.json();

    const list =
        document.getElementById(
            "leaveList"
        );

    list.innerHTML = "";

    leaves.forEach(leave => {

        list.innerHTML += `
            <li>
                From:
                ${leave.from_date}
                |
                To:
                ${leave.to_date}
                |
                Status:
                ${leave.status}
                <br>
                ${leave.reason}
            </li>
        `;

    });

}

loadStudents();
loadLeaves();