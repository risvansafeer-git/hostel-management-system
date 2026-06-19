const role =
    localStorage.getItem("role");

if (role === "student") {

    document
        .querySelectorAll(".admin-btn")
        .forEach(btn => {

            btn.style.display =
                "none";

        });
    document
        .querySelectorAll(".admin-field")
        .forEach(field => {

            field.style.display = "none";

        });

}