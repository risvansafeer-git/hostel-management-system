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
        data.totalStudents;

    document.getElementById(
        "rooms"
    ).innerText =
        data.totalRooms;

    document.getElementById(
        "allocations"
    ).innerText =
        data.totalAllocations;

    document.getElementById(
        "complaints"
    ).innerText =
        data.pendingComplaints;

    document.getElementById(
        "leaves"
    ).innerText =
        data.totalLeaves;

}

loadDashboard();