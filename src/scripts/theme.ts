let isDarkTheme = localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);

document.documentElement.classList.toggle("dark", isDarkTheme);

const themeToggle = document.getElementById("theme-toggle") as HTMLInputElement;
if (themeToggle) {
    themeToggle.checked = isDarkTheme;
    themeToggle.addEventListener("change", (e) => toggleTheme());
}

async function toggleTheme() {
    if (typeof localStorage !== "undefined" && typeof document !== "undefined") {
        isDarkTheme = !isDarkTheme;

        const theme = isDarkTheme ? 'dark' : 'light';
        localStorage.setItem('theme', theme);

        document.documentElement.classList.toggle('dark', isDarkTheme);
    }
}