const hamburger = document.getElementById("hamburger-menu");
const sidebar = document.getElementById("sidebar");
const themeButton = document.getElementById("theme-toggle");


hamburger.addEventListener("click", ()=> {
    sidebar.classList.toggle("active");
});

// themeToggle.addEventListener("click", ()=>{
//     document.body.classList.toggle("dark-mode");
// })

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    themeButton.textContent = "☀️";
}

// Toggle theme
themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        themeButton.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        themeButton.textContent = "🌙";
    }

});


const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", searchVideos);

searchInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        searchVideos();
    }
});

function searchVideos() {

    const searchText = searchInput.value.trim().toLowerCase();

    const videos = document.querySelectorAll(".video-preview");

    if (searchText === "") {

        videos.forEach(video => {
            video.style.display = "block";
        });

        return;
    }

    videos.forEach(video => {

        const title = video.querySelector(".video-title").textContent.toLowerCase();
        const author = video.querySelector(".video-author").textContent.toLowerCase();

        if (
            title.includes(searchText) ||
            author.includes(searchText)
        ) {
            video.style.display = "block";
        } else {
            video.style.display = "none";
        }

    });

}
