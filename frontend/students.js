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
async function deleteStudent(id) {

    await fetch(
        `http://localhost:3000/students/${id}`,
        {
            method: "DELETE"
        }
    );

    loadStudents();

}