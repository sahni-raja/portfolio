
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop &&
            pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});


const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.4)";
    } else {
        header.style.boxShadow = "none";
    }
});


const profileBtn = document.getElementById("openProfile");
const profileModal = document.getElementById("profileModal");
const closeModal = document.querySelector(".close-modal");

profileBtn.addEventListener("click", () => {
    profileModal.style.display = "flex";
});

closeModal.addEventListener("click", () => {
    profileModal.style.display = "none";
});

profileModal.addEventListener("click", (e) => {
    if (e.target === profileModal) {
        profileModal.style.display = "none";
    }
});
