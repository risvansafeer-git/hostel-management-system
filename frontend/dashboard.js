async function loadDashboard() {

    const response =
        await fetch(
            "http://localhost:3000/dashboard"
        );

    const data =
        await response.json();

    document.getElementById(
        "students"
    ).innerText =
        data.students;

    document.getElementById(
        "rooms"
    ).innerText =
        data.rooms;

    document.getElementById(
        "allocations"
    ).innerText =
        data.allocations;

    document.getElementById(
        "complaints"
    ).innerText =
        data.pendingComplaints;

    document.getElementById(
        "leaves"
    ).innerText =
        data.leaves;

}

loadDashboard();