async function addNotice() {

    const notice = {
        title: document.getElementById("title").value,
        description: document.getElementById("description").value
    };

    const response = await fetch(
        "http://localhost:3000/notices",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(notice)
        }
    );

    console.log(await response.json());

    loadNotices();
}
async function loadNotices() {

    const response =
        await fetch(
            "http://localhost:3000/notices"
        );

    const notices =
        await response.json();

    const list =
        document.getElementById(
            "noticeList"
        );

    list.innerHTML = "";

    notices.forEach(notice => {

        list.innerHTML += `
            <li>
                <strong>
                    ${notice.title}
                </strong>

                <br>

                ${notice.description}
            </li>
        `;

    });

}
loadNotices();