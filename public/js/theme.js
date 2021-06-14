function changeTheme() {
    const elements = document.getElementsByClassName("mainContainer");
    for (let i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("dark-card");
    }
}