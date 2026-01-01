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


    function openModal(title, description) {
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDesc").innerText = description;
    document.getElementById("projectModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("projectModal").style.display = "none";
}

/* Mobile tap detection */
if (window.innerWidth <= 768) {
    document.querySelector(".project1").addEventListener("click", () => {
        openModal(
            "A E-Commerce Website",
            "A E-Commerce Shopping Website made using only HTML & CSS."
        );
    });

    document.querySelector(".project2").addEventListener("click", () => {
        openModal(
            "A Calculator",
            "A working Calculator using HTML, CSS & JavaScript."
        );
    });
}

document.getElementById("calculatorcard").addEventListener("click", () => {
    window.open('https://karanpaidumkar.github.io/A-Calculator/', '_blank');
});
