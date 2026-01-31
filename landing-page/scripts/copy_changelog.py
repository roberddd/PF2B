"""
copy_changelog.py

Copies the changelog section from the main documentation into the landing-page docs, rewriting relative links to absolute URLs and adding `target="_blank"` for iframe safety.
Writes the processed changelog to 'landing-page/changelog.md.ignore' (.ignore to make mkdocs ignore it).
This ensures the landing-page version of the changelog is up-to-date and can be included in pages via {% include-markdown %}.


This is called in the 'mkdocs.yml' under plugins:
  - mkdocs-simple-hooks:
      hooks:
        on_pre_build: "scripts.copy_changelog:run_copy"
"""
import re
from pathlib import Path

def run_copy(*args, **kwargs):
    SRC = Path("../docs/changelog.md").resolve()
    DST = Path("changelog.md.ignore").resolve() #Copy to root of landing-page site and not inside /docs.
    MAIN_DOCS_URL = "https://pf2b.roberd.net"

    if not SRC.exists():
        print(f"copy_changelog: ERROR: Could not find source changelog: {SRC}")
        return

    text = SRC.read_text(encoding="utf-8")

    #Extract marked section
    match = re.search(r"<!--landingpage-start-->(.*?)<!--landingpage-end-->", text, re.S)
    if match:
        text = match.group(1).strip()

    #Rewrite relative links - only match markdown link syntax [text](url)
    def replace_relative_links(match):
        link_text = match.group(1)
        url = match.group(2)
        print(f"DEBUG: Found markdown link - text: '{link_text}', url: '{url}'")

        if url.startswith("http"):
            return f"[{link_text}]({url}){{ target=\"_blank\" }}"

        clean = url.replace(".md", "").lstrip("./")
        return f"[{link_text}]({MAIN_DOCS_URL}/{clean}){{ target=\"_blank\" }}"

    # Match markdown links: [text](url)
    text = re.sub(r"\[([^\]]+)\]\(([^\)]+)\)", replace_relative_links, text)

    DST.parent.mkdir(parents=True, exist_ok=True)
    if DST.exists():
        current = DST.read_text(encoding="utf-8")
        if current != text:
            DST.write_text(text, encoding="utf-8")
            print("copy_changelog: Copied and patched changelog")
        else:
            print("copy_changelog: Changelog unchanged, skipping write")
    else:
        DST.write_text(text, encoding="utf-8")
        print("copy_changelog: Copied and patched changelog")