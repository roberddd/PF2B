---
tags:
  - Release history
hide:
  - toc
# NOTE TO SELF: Remember to update version in version.json
---
Here, you can find a list of all updates, enhancements, and bug fixes made to PF2B over time. Date Format: YYYY-MM-DD.


### Versions

<div class="changelog" markdown>

<!-- ### 1.0.4 <small>2025-03-xx</small>

- **Improved Functionality**
    - The info button, available when browsing plants in the Gallery View or using the queue function, now shows if plant fixes are available and includes a button to display the specific fixes applied to the plant.

--- -->

### 1.0.3 <small>2025-03-19</small>

- **New Functionality**
    - Added a `Check Version Status` button in the preferences to check for available updates. If a newer version is found, a download link to the latest version on BlenderMarket and Gumroad will be provided. [More info](preferences/general.md#version-check)
- **Interface**
    - Improved error reporting in the interface. Now also displays error messages if the operating system is not supported or if the wrong PlantFactory version is installed.

---

### 1.0.2 <small>2025-03-17</small>

- **Interface**:
    - Miscellaneous minor interface tweaks.
- **Bugfixes**:
    - The `Open` button in the "Post Processing > Plant Details" now works with plants without presets.
- **Other**
    - The Python library **psutil** bundled with the addon did not load properly on some systems due to Blender incorrectly interpreting the Python version number for this package. The version has now been renamed to reflect that it is intended for Python 3.11, as used in Blender.

---

### 1.0.1 <small>2025-03-16</small>

- **Interface**:
    - When browsing plants via the **Gallery view**, the **Presets** button is now disabled for plants that do not have available presets.
    - Added a new `Hide 'Browse via PlantFactory' mode` setting in the preferences. If you only plan to use the **Browse via Blender** mode, you can enable this to hide the mode selection at the top and declutter the interface.
    - The `Plant Details` box in the `Post Processing` panel now displays the height and polygon count of the selected plant.
    - Miscellaneous minor interface tweaks.
- **Plant-Fixes**:
    - **New**:
        - `PlantFactory > Flowers > Sunflower`
        - `PlantFactory > Flowers > Tagetes`
        - `PlantFactory > Flowers > Snowdrop`
        - `PlantFactory > Palms > Mexican Fan Palm Young`
        - `PlantFactory > Palms > Date_Palm Phoenix Dactylifera`
        - `PlantFactory > Trees > Platanus x Acerifolia`
        - `PlantFactory > Trees > Quercus Rubra Mature`
        - `PlantFactory > Trees > Quercus Rubra Old`
        - `PlantFactory > Trees > Quercus Rubra Young`
- **Bugfixes**:
    - The `Plant Troubleshoot tools > Verify Textures` utility now works with plants that do not have presets.

---

### 1.0.0 <small>2025-03-12</small>

  > Compatibility: Blender 4.2 LTS, 4.3, 4.4

  - First public release.

</div> <!-- /Changelog -->