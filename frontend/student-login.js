async function login() {

    const user = {

        username:
            document.getElementById(
                "username"
            ).value,

        password:
            document.getElementById(
                "password"
            ).value

    };

    const response =
        await fetch(
            "http://localhost:3000/student-login",
            {
                method: "POST",
                headers: {
                    "Content-Type":
                        "application/json"
                },
                body:
                    JSON.stringify(user)
            }
        );

    const data =
        await response.json();
if (data.success) {

    localStorage.setItem(
        "role",
        "student"
    );

    localStorage.setItem(
        "studentId",
        data.studentId
    );

    window.location.href =
        "dashboard.html";

} else {

    alert(
        "Invalid credentials"
    );

}
}