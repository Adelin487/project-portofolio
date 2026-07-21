/* ===================================
        THEME PANEL
=================================== */

const themeToggle = document.getElementById("themeToggle");

const themePanel = document.getElementById("themePanel");

themeToggle.addEventListener("click",()=>{

    themePanel.classList.toggle("show");

});

/* ===================================
        CHANGE COLOR THEME
=================================== */

const colorButtons = document.querySelectorAll(".color");

console.log(colorButtons.length);

const themes = [
    "theme-blue",
    "theme-purple",
    "theme-green",
    "theme-red",
    "theme-orange"
];

colorButtons.forEach((button) => {

    button.addEventListener("click", () => {

        console.log("Klik:", button.dataset.theme);

        // Hapus semua tema
        document.body.classList.remove(...themes);

        // Tambahkan tema yang dipilih
        const selectedTheme = "theme-" + button.dataset.theme;
        document.body.classList.add(selectedTheme);

        // Tandai warna yang aktif
        colorButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

    });

});

/* ===================================
        LIGHT / DARK MODE
=================================== */

const modeButtons = document.querySelectorAll(".mode-btn");

modeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const mode = button.dataset.mode;

        if(mode === "dark"){

            document.body.classList.add("dark-mode");

        }else{

            document.body.classList.remove("dark-mode");

        }

        modeButtons.forEach(btn => btn.classList.remove("active"));

        button.classList.add("active");

    });

});