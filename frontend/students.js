async function addStudent() {

    const student = {
        name: document.getElementById("name").value,
        department: document.getElementById("department").value,
        phone: document.getElementById("phone").value
    };

    await fetch(
        "http://localhost:3000/students",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        }
    );

    loadStudents();
}

async function loadStudents() {

    const response =
        await fetch(
            "http://localhost:3000/students"
        );

    const students =
        await response.json();

    const list =
        document.getElementById(
            "studentList"
        );

    list.innerHTML = "";

   students.forEach(student => {

    list.innerHTML += `
        <li>

            ${student.name}

            -

            ${student.department}

            <button
                onclick="
                editStudent(
                    ${student.id},
                    '${student.name}',
                    '${student.department}',
                    '${student.phone}'
                )">

                Edit

            </button>

            <button
                onclick="
                deleteStudent(
                    ${student.id}
                )">

                Delete

            </button>

        </li>
    `;

});
}

loadStudents();
function editStudent(
    id,
    name,
    department,
    phone
) {

    document.getElementById(
        "studentId"
    ).value = id;

    document.getElementById(
        "name"
    ).value = name;

    document.getElementById(
        "department"
    ).value = department;

    document.getElementById(
        "phone"
    ).value = phone;

}
async function updateStudent() {

    const id =
        document.getElementById(
            "studentId"
        ).value;

    const student = {

        name:
            document.getElementById(
                "name"
            ).value,

        department:
            document.getElementById(
                "department"
            ).value,

        phone:
            document.getElementById(
                "phone"
            ).value

    };

    await fetch(
        `http://localhost:3000/students/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type":
                    "application/json"
            },
            body:
                JSON.stringify(student)
        }
    );

    loadStudents();

}
async function deleteStudent(id) {

    await fetch(
        `http://localhost:3000/students/${id}`,
        {
            method: "DELETE"
        }
    );

    loadStudents();

}