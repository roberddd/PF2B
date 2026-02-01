/**
 * Dynamically adds icons to changelog category titles.
 *
 * This version uses a MutationObserver to handle changelogs that are
 * appended or loaded asynchronously (e.g., via the mkdocs-include-markdown-plugin),
 * unlike the simpler version which runs only once on page load.
 */
const iconMap = {
    "New Functionality": "✨",
    "Improved Functionality": "💪",
    "Interface": "💻",
    "Other": "🔧",
    "Bug Fixes": "🐛",
    "Plant-Fixes": "🌿"
};

function addChangelogIcons(root = document) {
    root.querySelectorAll(".changelog li > strong").forEach(el => {
        const text = el.textContent.trim();
        if (iconMap[text] && !el.dataset.iconAdded) { // prevent double-adding
            el.innerHTML = `${iconMap[text]} ${el.innerHTML}`;
            el.dataset.iconAdded = "true";
        }
    });
}

// Observe the entire document for added nodes
const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
        mutation.addedNodes.forEach(node => {
            if (node.nodeType === 1) {
                addChangelogIcons(node);
            }
        });
    }
});

observer.observe(document.body, { childList: true, subtree: true });

// Run once on initial load in case changelog is already present
addChangelogIcons();
