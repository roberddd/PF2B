/**
 * Dynamically adds icons to changelog category titles.
 *
 * Note to self: Remember to update the same js for landing page
 */
document$.subscribe(() => {
    const iconMap = {
        "New Functionality": "✨",
        "Improved Functionality": "💪",
        "Interface": "💻",
        "Other": "🔧",
        "Bug Fixes": "🐛",
        "Plant-Fixes": "🌿"
    };
    document.querySelectorAll(".changelog li > strong").forEach(el => {
        const text = el.textContent.trim();
        if (iconMap[text]) {
            el.innerHTML = `${iconMap[text]} ${el.innerHTML}`;
        }
    });
});
