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

### 1.1.2 <small>2025-05-03</small>

- **New Functionality**
    - Added an `Import Name Settings` section that lets you customize how plant objects are named during import. You can now append details such as maturity, health, height, and more to the object name. [More info](workflow/import_settings.md#name-settings)
- **Improved Functionality**
    - The `Mark as Asset` option now also adds plant details (such as preset name, maturity, health, season, etc.) as asset tags for better organization and searchability. [More info](workflow/import_settings.md)
- **Other**
    - Plants imported via the bridge in `Browse via PlantFactory` mode no longer include the file extension (such as `.tpf` or `.tpfp`) in the imported name.
- **Plant-Fixes**:
    - **New**:
        - `PlantCatalog > Broadleaf Trees > Populus nigra 'Italica' HD`
        - `PlantCatalog > Broadleaf Trees > Populus nigra 'Italica' LD`
        - `PlantCatalog > Coniferous > Pinus contorta dead forest HD`
        - `PlantCatalog > Coniferous > Pinus contorta dead forest LD`
        - `PlantCatalog > Coniferous > Pinus contorta dead lone HD`
        - `PlantCatalog > Coniferous > Pinus contorta dead lone LD`
        - `PlantCatalog > Coniferous > Pinus jeffreyi lone FG`
    - **Updated**:
        - `PlantCatalog > Broadleaf Trees > Eucalyptus camaldulensis HD`
        - `PlantCatalog > Coniferous > Pinus jeffreyi lone HD`
        - `PlantCatalog > Coniferous > Pinus jeffreyi lone LD`

---

### 1.1.1 <small>2025-04-26</small>

- **New Functionality**
    - Added `Import Overrides` that allow you to manually define the Age/Maturity, Health and Season of imported plants. When enabled, the selected values will override the plant's default preset settings during import. [More info](workflow/browse_via_blender.md#import-overrides).
- **Interface**:
    - The `Plant Details` section and the information gathered from imported plants have been restructured for clarity. [More info](workflow/post_processing.md#plant-details). Examples include:
        - `Age` and `Age Max`, previously shown as arbitrary values, are now used to derive the plant's **maturity** value (used internally by PlantFactory), which ranges from 0 to 100%.
        - `Season` is no longer shown as a raw float (e.g., 1.0), but instead displayed as a **percentage** along with an **approximate day of the year** (1–365).
        - `Health` is now shown as a **percentage from 0 to 100**, instead of a float like 1.0.
        - If import overrides were used, the `Plant Details` section will now also display those override values for the selected plant.

---

### 1.1.0 <small>2025-04-07</small>

- **Interface**:
    - `Check Version Status` link label has been updated to say "SuperHive" to match the new name of BlenderMarket.
    - Miscellaneous minor interface tweaks.
- **Other**
    - Improved error handling for edge cases when displaying presets in the interface.
- **Plant-Fixes**:
    - **New**:
        - `PlantCatalog > Broadleaf Trees > Eucalyptus pauciflora RT`
        - `PlantCatalog > Broadleaf Trees > Vachellia tortilis HD`
        - `PlantCatalog > Coniferous > Picea abies HD`
        - `PlantCatalog > Coniferous > Picea abies LD`
        - `PlantCatalog > Coniferous > Picea engelmannii HD`
        - `PlantCatalog > Coniferous > Picea engelmannii LD`
        - `PlantCatalog > Coniferous > Picea mariana HD`
        - `PlantCatalog > Coniferous > Picea mariana LD`
        - `PlantCatalog > Coniferous > Picea pungens HD`
        - `PlantCatalog > Coniferous > Picea pungens LD`
        - `PlantCatalog > Coniferous > Picea pungens 'Koster' HD`
        - `PlantCatalog > Coniferous > Picea pungens 'Koster' LD`
        - `PlantCatalog > Coniferous > Pinus jeffreyi lone HD`
        - `PlantCatalog > Coniferous > Pinus jeffreyi lone LD`
        - `PlantCatalog > Coniferous > Tsuga mertensiana HD`
        - `PlantCatalog > Ground Covers > Hedera helix ground cover green HD`
        - `PlantCatalog > Ground Covers > Hedera helix ground cover green LD`
        - `PlantCatalog > Perennials > Vinca minor HD`
        - `PlantCatalog > Perennials > Vinca minor LD`

---

### 1.0.9 <small>2025-03-29</small>

- **Plant-Fixes**:
    - **New**:
        - `PlantCatalog > Palms > Adonidia merrillii HD.`
- **Bugfixes**
    - Fixed an issue where, for some users, the library cache was not detected when starting a new file in Blender. Previously, you had to manually go to the preferences and click "Verify" or update the path to resolve this. This should no longer be necessary.

---

### 1.0.8 <small>2025-03-27</small>

- **Plant-Fixes**:
    - **New**:
        - `PlantCatalog > Broadleaf Trees > Aesculus pavia HD`
        - `PlantCatalog > Broadleaf Trees > Aesculus pavia LD`
        - `PlantCatalog > Broadleaf Trees > Aesculus x carnea HD`
        - `PlantCatalog > Broadleaf Trees > Aesculus x carnea LD`
        - `PlantCatalog > Broadleaf Trees > Bauhinia blakeana HD`
        - `PlantCatalog > Broadleaf Trees > Bauhinia blakeana LD`
        - `PlantCatalog > Broadleaf Trees > Citrus x limon HD`
        - `PlantCatalog > Broadleaf Trees > Citrus x limon LD`
        - `PlantCatalog > Broadleaf Trees > Delonix regia HD`
        - `PlantCatalog > Broadleaf Trees > Delonix regia RT`
        - `PlantCatalog > Bushess > Brugmansia x insignis HD`
        - `PlantCatalog > Bushess > Brugmansia x insignis LD`
        - `PlantCatalog > Bushess > Duranta repens HD`
        - `PlantCatalog > Bushess > Duranta repens LD`
        - `PlantCatalog > Bushess > Hedera helix 'Erecta' HD`
        - `PlantCatalog > Bushess > Hedera helix 'Erecta' LD`

---

### 1.0.7 <small>2025-03-26</small>

- **Bugfixes**
    - Fixed issues with plant libraries that were not installed in the default location, where their paths were not being used correctly, which prevented you from using the plants.

---

### 1.0.6 <small>2025-03-26</small>

- **Other**
    - The `Re-Index Plants` function no longer indexes the personal library by default; it is now only indexed when the personal library is enabled.
- **Plant-Fixes**:
    - **New**:
        - `PlantCatalog > Broadleaf Trees > Adansonia digitata HD`
        - `PlantCatalog > Broadleaf Trees > Adansonia digitata LD`
- **Bugfixes**
    - Fixed an issue where the `PlantFactory` library plants were incorrectly indexed by the re-index function (also affecting the 'verify' cache function), which prevented you from using the plants.

---

### 1.0.5 <small>2025-03-24</small>

- **Bugfixes**
    - The previous `Separate Plant Library Paths` change caused issues when plant libraries were installed in custom folders, preventing the cache and indexing from working properly. This issue has now been fixed.

---

### 1.0.4 <small>2025-03-22</small>

- **Improved Functionality**
    - **Improved Info Button:** The info button, available when browsing plants in the Gallery View or using the queue function, now shows if plant fixes are available and includes a button to display the specific fixes applied to the plant.
    - **Separate Plant Library Paths**: The Plant Library paths for PlantCatalog and PlantFactory are now separated, allowing you to store them in different locations while still using them within PF2B.
    - **Improved Cache Creation**: Creating Plant & Preset Cache now automatically triggers plant re-indexing and thumbnail reloading. Previously, only the "Verify" function triggered this. This should provide a smoother user experience by eliminating the need to manually perform these steps after caching custom plants.
- **Plant-Fixes**:
    - **New**:
        - `PlantCatalog > Broadleaf Trees > Bauhinia blakeana HD V2`
        - `PlantCatalog > Broadleaf Trees > Bauhinia blakeana LD V2`
        - `PlantCatalog > Broadleaf Trees > Rhizophora forest HD`
        - `PlantCatalog > Broadleaf Trees > Rhizophora forest LD`
        - `PlantCatalog > Broadleaf Trees > Rhizophora lone HD`
        - `PlantCatalog > Broadleaf Trees > Rhizophora lone LD`
        - `PlantCatalog > Broadleaf Trees > Rhizophora seedling HD`
        - `PlantCatalog > Broadleaf Trees > Rhizophora seedling LD`
        - `PlantCatalog > Climbers > Hedera helix wall climber green HD`
        - `PlantCatalog > Climbers > Hedera helix wall climber green LD`

---

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