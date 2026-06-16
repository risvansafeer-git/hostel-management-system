async function addRoom() {

    const room = {

        room_number:
            document.getElementById(
                "room_number"
            ).value,

        capacity:
            document.getElementById(
                "capacity"
            ).value

    };

    await fetch(
        "http://localhost:3000/rooms",
        {
            method: "POST",
            headers: {
                "Content-Type":
                    "application/json"
            },
            body: JSON.stringify(room)
        }
    );

    loadRooms();
}

async function loadRooms() {

    const response =
        await fetch(
            "http://localhost:3000/rooms"
        );

    const rooms =
        await response.json();

    const roomList =
        document.getElementById(
            "roomList"
        );

    roomList.innerHTML = "";

    rooms.forEach(room => {

        roomList.innerHTML += `
            <li>
                Room:
                ${room.room_number}
                |
                Capacity:
                ${room.capacity}
            </li>
        `;

    });

}

loadRooms();