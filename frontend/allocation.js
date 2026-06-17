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

async function loadRooms() {

    const response =
        await fetch(
            "http://localhost:3000/rooms"
        );

    const rooms =
        await response.json();

    const select =
        document.getElementById(
            "roomSelect"
        );

    select.innerHTML = "";

    rooms.forEach(room => {

        select.innerHTML += `
            <option value="${room.id}">
                ${room.room_number}
            </option>
        `;

    });

}

async function allocateRoom() {

    const allocation = {

        student_id:
            document.getElementById(
                "studentSelect"
            ).value,

        room_id:
            document.getElementById(
                "roomSelect"
            ).value

    };

    await fetch(
        "http://localhost:3000/allocate",
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json"
            },
            body: JSON.stringify(allocation)
        }
    );

    loadAllocations();

}

async function loadAllocations() {

    const response =
        await fetch(
            "http://localhost:3000/allocations"
        );

    const allocations =
        await response.json();

    const list =
        document.getElementById(
            "allocationList"
        );

    list.innerHTML = "";

    allocations.forEach(allocation => {

        list.innerHTML += `
            <li>
                ${allocation.name}
                →
                ${allocation.room_number}
            </li>
        `;

    });

}

loadStudents();
loadRooms();
loadAllocations();