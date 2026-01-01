var typed = new Typed('#element', {
    strings: ['Web Developer', 'Python Developer', 'C Programmer', 'MySQL Developer'],
    typeSpeed: 50,
    backspeed: 50,
    loop: true,
});

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

const links = document.querySelectorAll("#navLinks a");

    links.forEach(link => {
        link.addEventListener("click", () => {
            document.getElementById("navLinks").classList.remove("active");
        });
    });


    function openModal(title, description, link = null) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = description;

const modalLink = document.getElementById("modalLink");

        if (link) {
            modalLink.href= link;
            modalLink.style.display = "inline";
        } else {
            modalLink.style.display = "none";
        }

    document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

const project1 = document.querySelector(".project1");
const project2 = document.querySelector(".project2");

function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}

if (isMobile()) {
    project1.addEventListener("click", (e) => {
        e.preventDefault();
        openModal(
            "A E-Commerce Website",
            "A E-Commerce Shopping Website made using only HTML & CSS.",
            "#"
        );
    });

    project2.addEventListener("click", (e) => {
        if (e.target.tagName === "A") return;

        e.preventDefault();
        openModal(
            "A Calculator",
            "A working Calculator using HTML, CSS & JavaScript.",
            "https://karanpaidumkar.github.io/A-Calculator/"
        );
    });
}
