import os
import re

def natural_key(s):
    """
    Return a list of strings and integers that will sort the input string in "natural order".
    For example, "7._Citrus_x_limon_HD.webp" will be split so that the number 7 is compared numerically.
    """
    return [int(text) if text.isdigit() else text.lower()
            for text in re.split(r'(\d+)', s)]

base_dir = "docs/images/plants/Quercus_robur_forest_HD"
thumb_dir = os.path.join(base_dir, "thumbs")

remove_brackets = True  # Remove or keep text inside brackets "[]"

images = [f for f in os.listdir(base_dir) if f.endswith(".webp")]

images = sorted(images, key=natural_key)

for image in images:
    thumb_path = f"{thumb_dir}/{image}".replace("docs/", "")  # Remove "docs/"
    full_path = f"{base_dir}/{image}".replace("docs/", "")

    # Ensure forward slashes are used
    thumb_path = thumb_path.replace("\\", "/")
    full_path = full_path.replace("\\", "/")

    description = image.replace(".webp", "").replace("_", " ")

    if remove_brackets:
        description = re.sub(r"\[.*?\]", "", description).strip()

    print(f"[![plant]({thumb_path})]({full_path}){{ .glightbox data-description=\"{description}\" }}")
