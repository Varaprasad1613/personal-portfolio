// Smooth scrolling for navigation links (if you have any navigation menu)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const toggleThemeButton = document.createElement('button');
toggleThemeButton.textContent = "Toggle Dark Mode";
toggleThemeButton.style.position = 'fixed';
toggleThemeButton.style.top = '10px';
toggleThemeButton.style.right = '10px';
toggleThemeButton.style.padding = '10px 20px';
toggleThemeButton.style.cursor = 'pointer';

document.body.appendChild(toggleThemeButton);

toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = "Toggle Light Mode";
    } else {
        toggleThemeButton.textContent = "Toggle Dark Mode";
    }
});

// Apply a dark mode style when enabled
document.head.insertAdjacentHTML(
    'beforeend',
    `<style>
        .dark-mode {
            background-color: #121212;
            color: #ffffff;
        }
        .dark-mode header {
            background-color: #1e1e1e;
        }
        .dark-mode footer {
            background-color: #333;
        }
    </style>`
);
