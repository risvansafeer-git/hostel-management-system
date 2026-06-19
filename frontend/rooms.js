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
function hideAdminButtons() {

    const role =
        localStorage.getItem("role");

    if (role === "student") {

        document
            .querySelectorAll(".admin-btn")
            .forEach(btn => {

                btn.style.display =
                    "none";

            });

    }

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

            <button
                class="admin-btn"
                onclick="
                editRoom(
                    ${room.id},
                    '${room.room_number}',
                    '${room.capacity}'
                )">

                Edit

            </button>

            <button
                class="admin-btn"
                onclick="
                deleteRoom(
                    ${room.id}
                )">

                Delete

            </button>

        </li>
    `;

});
hideAdminButtons();

}

loadRooms();
function editRoom(
    id,
    room_number,
    capacity
) {

    document.getElementById(
        "roomId"
    ).value = id;

    document.getElementById(
        "room_number"
    ).value = room_number;

    document.getElementById(
        "capacity"
    ).value = capacity;

}
async function updateRoom() {

    const id =
        document.getElementById(
            "roomId"
        ).value;

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
        `http://localhost:3000/rooms/${id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type":
                    "application/json"
            },
            body:
                JSON.stringify(room)
        }
    );

    loadRooms();

}
async function deleteRoom(id) {

    await fetch(
        `http://localhost:3000/rooms/${id}`,
        {
            method: "DELETE"
        }
    );

    loadRooms();

}