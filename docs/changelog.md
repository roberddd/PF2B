---
tags:
  - Release history
hide:
  - toc
# NOTE TO SELF: Remember to update version in version.json
---
<!--landingpage-start-->
Here, you can find a list of all updates, enhancements, and bug fixes made to PF2B over time. Date Format: `YYYY-MM-DD`.



## Versions

<div class="changelog" markdown>

### 2.0.0 <small>2026-01-31</small>

> Compatibility: This version requires Blender 4.5 or newer and has been verified with Blender 4.5 LTS and 5.0.

This is a big update with lots of new features & improvements. Most notably: **[Biomes & Collections](workflow/biomes_and_collections.md)**, **[Snow](workflow/post_processing.md#snow)**, **[Wind](workflow/browse_via_blender.md#wind)** and an overhauled **[Import Overrides](workflow/browse_via_blender.md#import-overrides)** section for more granular control of the plants.

- **New Functionality**
    - **Biomes & Collections**: [More info](workflow/biomes_and_collections.md)
        - Introduction to a brand new way to work with grouped plants: **Biomes** and **Collections**. Both systems help you quickly bring plants from PlantFactory into Blender, but each serves a slightly different purpose. This initial release introduces the core Biomes workflow with a **small, curated set of biomes**, laying the foundation for a system that will be **expanded with additional biomes in future updates**.
        - **Biomes** are ready-made, structured plant setups designed for natural environments like forests, meadows, and wetlands.
        - **Collections** are curated groups of plants designed for **bulk importing** into your Blender Asset Library. Unlike biomes, they are not structured scattering setups, but convenient bundles for building up your library quickly.
    - **Snow**: Allows you to add winter effects such as snow accumulation and frost to existing assets. Multiple approaches are provides, including geometry-based and shader-based solutions, allowing you to balance visual fidelity and performance depending on the use case. [More info](workflow/post_processing.md#snow)
    - **Wind**: Now you can import wind from PlantFactory. The animation is applied by generating an armature rig with bones that contain baked motion. [More info](workflow/browse_via_blender.md#wind)
    [More info](workflow/post_processing.md#snow)
    - **Import Overrides** overhaul: [More info](workflow/browse_via_blender.md#import-overrides)
        - New type **Mesh Resolution**, which lets you create "Hero" plants with higher mesh detail when increased.
        - New **Plant Specific** overrides: a powerful way to harness a bit of the procedural power from PlantFactory directly inside Blender. These overrides correspond to individual nodes that exist within the plant's original PlantFactory graph, enabling fine-tuned customization.
    - **Resume Functionality**: If an import fails after plants have already been exported from PlantFactory, you no longer need to re-export them. A new **Resume Import** button will appear, allowing you to continue the process directly with the already exported files.
	- **Import Naming Options**: [More info](workflow/import_settings.md#name-settings)
		- New **Advanced Mode** available for full customization of names.
		- **Skip LOD0 Label** option now available. When enabled, the base LOD0 version of the plant will not include 'LOD0' in its name. Higher LODs (LOD1, LOD2, etc.) are unaffected.
        - **Group Wrappers** added. This enables you to wrap the parameters inside one wrapper, such as: `Baobab Tree [Standard mat 0 | Seed 761869182 | HD]`.
		- Wrapper `|` added.
        - Wrapper `_` has been modified to ignore spaces.
        - Height option now has **Include unit** setting available.
		- Formatting options added for LOD.
        - These settings are also available in the new **Plant Renamer** utility.
    - **Utilities Panel**: New panel added with tools: [More info](workflow/utilities.md)
        - **Plant Details**: Previously located in the **Post Processing** panel, this existing functionality has been moved to the **Utilities** panel for improved discoverability and workflow consistency.
        - **LOD Importer**: Import selected plants with specific LODs while maintaining identical seeds to preserve their appearance.
        - **Plant Storer**: This utility lets you save selected plants from your scene into the structured biome `.blend` files. This allows you to access them directly from your Asset Library.
        - **Plant Renamer**: Renames selected plant objects in the scene after import. The naming follows the same settings used during import but is applied retroactively.
        - **Reset Asset Thumbnails**: This utility allows you to restore the original thumbnails (asset previews) for any plant assets imported through the PF2B addon.
        - **Setup PlantFactory Shortcuts**: Lets you set up your PlantFactory navigation shortcuts (Orbit, Pan, Zoom) to match Blender's controls for a consistent workflow.
    - New **Open in PF** button available in the **Plant Info Popup**. This allows you to open a specific plant directly in PlantFactory for inspection. [More info](workflow/browse_via_blender.md#plant-info-popup)
    - When using the **Mark as Asset** feature now the Asset automatically retrieves an Asset Preview thumbnail, the same image from the Plant Browser will be used.
    - The **Edit Plant Materials** buttons in the **Post Processing** panel now display the number of materials assigned to the plant when **Shift + Click** is used.
    - Added a **Shader Editor right-click menu** for inserting PF2B node groups and shaders into existing materials. [More info](../workflow/material_settings.md#shader-editor-right-click-menu)
    - New **Retry on Geometry Timeout** option in `Preferences > Misc > Troubleshooting > Import` to help resolve import issues with large batches.
- **Improved Functionality**
    - Materials for specific plant variations are now selectively renamed with variation-specific prefixes to ensure uniqueness and prevent unintended merging, even when base names are shared. This should result in fewer material merging issues during import for certain plants.
    - Imported plants now automatically receive viewport colors for both the object and all materials, based on the dominant color of the main texture. This improves visual clarity when using Solid viewport shading with color set to **Material** or **Object**. Only for **Browse via Blender** mode.
    - For plants imported via **Browse via PlantFactory**, the plant name stored in **Plant Details** can now be edited.
    - **Queue**: [More info](workflow/browse_via_blender.md#queue)
        - **Save & Load**: Added `Add Selected Plants to Queue` option that adds all selected plants in the scene to the queue.
        - **Group**: Added a grouping function for organizing queued items.
        - **Show English Names**: Added an option to display English plant names in the queue.
        - **Avoid Duplicates**: Added an option to prevent duplicate entries from being added to the queue.
    - **Verify Textures** tool under **Plant Troubleshoot Tools** has been improved: [More info](preferences/misc.md#troubleshooting)
        - Now also prints the Blender image name (not only the file on disk).
        - Displays the image file size.
    - When using the **Mark as Asset** in tandem with 'Import Overrides' the Asset description will be modified slightly from the default as well as a extra 'Import Overrides used' tag added to differentiate regular preset plants vs custom.
    - When using the **Mark as Asset** now the plant category will also be added to the metadata tags, such as "Broadleaf Trees".
    - The **Open Documentation** button in the main interface is now multifunctional and opens the PlantFactory Reference Manual when holding **Shift** while clicking.
    - Editing Materials via the **Post Processing** panel now supports Undo (Ctrl + Z)
- **Interface**
    - The main interface panel is now more responsive due to optimized background processes.
	- The **The Plant Gallery Browser** size is no longer related to the size of your **3D View** and should now always be the same size.
    - Main Interface layout has been improved with an additional dropdown list of the presets for the current plant. This lets you switch presets more quickly, alongside the two existing methods: using the arrow buttons or browsing via the Presets Gallery.
    - The **Plant Details** section in the **Post Processing** panel now has **copy to clipboard** button for the seed value of the plant. [More info](workflow/post_processing.md#plant-details)
    - The **Plant Info Popup**: design & layout improved. [More info](workflow/browse_via_blender.md#plant-info-popup)
		- Now always shows the **Search for plant info** button regardless context.
        - Includes **copy to clipboard** buttons when **Debug To Console** is active, aiding troubleshooting.
		- Now also displays the preset number of the selected plant.
	- The `Preferences > General > Interface` section has been slightly organized and new options for the **Plant Gallery Browser** has been added: `Fill Rows First`, `Max Width` `Max Height` &  `Ignore resolution scaling` settings for the popup.
    - **Fill Rows First** setting is now enabled by default, so the gallery is populated row by row instead of column by column.
    - The **Browse Presets** button is now disabled in the main plant browser for plants without presets.
    - **PlantFactory Library** plants now display their **English name** in the interface when only a Latin name was previously available.
    - The **Plant Troubleshoot Tools** (that can be enabled via `Preferences -> Misc`) has been moved from the **Post Processing** panel to the new **Utilities** panel.
    - Confirm dialogs has have added to the **Open documentation** and **Reset Import** function.
    - **Open Changelog** button now available in Preferences.
    - Moved the **Plant Details** box from the **Post Processing** panel to the **Utilities** panel.
    - The plant name in the **Post Processing** panel can now be clicked to display a popup with the **Plant Details**.
    - **Display in Imperial Units** setting available in the Preferences for the Plant-Details function.
    - All PF2B shaders are now imported with the node-group name dropdown hidden for a more compact layout. The name can still be accessed via the N-panel or by right-clicking the shader and selecting **Show/Hide > Node Options**.
    - Removed the **Socket Port** setting from Preferences, as it never needed and only added unnecessary clutter.
    - Presets Gallery now displays the preset number before each preset name.
- **Other**
    - Internal changes to the `.pf2bqueue` files were made to support the new biomes system. Queue files from earlier releases may not be fully compatible with this version.
    - Miscellaneous internal adjustments to import logic.
    - Miscellaneous minor adjustments to Custom Shaders and Node Groups.
- **Bug Fixes**
    - **The Plant Gallery Browser** popup could spawn larger than the screen resolution, making it unusable on some setups.
    - **Create Missing Thumbnail Cache** for `PlantFactory Library` plants was creating thumbnails in the wrong location.
    - **Plant Info Popup** had issues displaying thumbnails for some PlantCatalog plants containing forward slashes in their names.
    - **Import Naming Options**: Wrapper `-` behaved incorrectly.
- **Plant-Fixes**
    - **New**:
        - `PlantCatalog > Broadleaf Trees > Koelreuteria bipinnata HD` - Fixed wrong color texture for a leaf material.

	- **Updated**:

        *Materials now use the same tiling mode as in PlantFactory, fixing visible texture seams for the following plants:*

		- `PlantCatalog > Broadleaf Trees > Eucalyptus camaldulensis HD`
		- `PlantCatalog > Broadleaf Trees > Eucalyptus camaldulensis LD`
		- `PlantCatalog > Broadleaf Trees > Eucalyptus viminalis HD`
		- `PlantCatalog > Broadleaf Trees > Eucalyptus viminalis LD`

        *Fixed incorrectly assigned color & Alpha textures for leaf materials:*

        - `PlantCatalog > Bushes > Hedera helix 'Erecta' HD`
        - `PlantCatalog > Bushes > Hedera helix 'Erecta' LD`

---

### 1.1.6 <small>2025-08-26</small>

- **New Functionality**
    - Added a new **Categorize into Collections** option that automatically places imported plants into sub-collections (e.g. Broadleaf Trees, Bushes, Grass) for easier scene organization. [More info](workflow/import_settings.md#general-settings)
- **Improved Functionality**
    - **Import Settings > Name Settings**: [More info](workflow/import_settings.md#name-settings)
        - Completely revamped with a clearer interface and additional options. You can now choose different wrappers `() [] <>` around parameters for better customization of plant names.
        - Added an option to include the **Detail Level** in plant names.
    - **Plant Info Popup**: [More info](workflow/browse_via_blender.md#plant-info-popup)
        - Now displays plant maturity for presets.
        - The **Info** button in the main interface is now context-dependent: it shows plant information if a plant is selected, and preset information if a plant preset is selected.
        - Layout and design have been improved for consistency.
    - **Asset Tags & Metadata**: [More info](workflow/import_settings.md#general-settings)
        - The plant **Detail Level** (FG, HD, LD, RT) is now stored as an Asset Tag when using **Mark as Asset**.
        - Asset tags and descriptions stored when using **Mark as Asset** have been improved for better searchability in the Asset Browser.
            - The following values are no longer stored as tags (since they are rarely used for searching) but are now appended to the **Asset description** instead: *Maturity, Health, Height*.
            - This makes the information easily accessible when hovering over an asset in the browser, as it is displayed directly in the description after the preset description.
    - The plant **Detail Level** (FG, HD, LD, RT) is now stored with the plant object and accessible via the **Plant Details** panel after import. [More info](workflow/post_processing.md#plant-details)
    - Added a new **XL** size to the **Grid Size Adjustment**. The hover tooltip has also been updated to clarify that this setting acts as a spacing multiplier. [More info](workflow/import_settings.md#general-settings)
- **Bug Fixes**
    - Fixed an issue in **Import Settings > Name Settings** where some options could incorrectly be highlighted in red even when there were no problems with the selected configuration.

---

### 1.1.5 <small>2025-08-20</small>

- **Improved Functionality**
    - The **plant filter** now supports searching by Latin name, English name, and continent, making it easier to find plants. [More info](workflow/browse_via_blender.md#gallery-view)
    - The **Import Plant** button is now disabled during active imports, making it clearer when an import is already in progress.
    - Added a new **Import Reset** button to recover if an import gets stuck. [More info](workflow/browse_via_blender.md#general-settings)
- **Bug Fixes**
    - Fixed an incorrect documentation link for *LODs* in the interface.

---

### 1.1.4 <small>2025-08-17</small>

- **New Functionality**
    - **LODs**: Import models at different Levels of Detail to control polygon count and optimize performance, giving you more flexibility to fit plants into your scene. [More info](workflow/browse_via_blender.md#lods)
    - **Improved Plant Info Popup**: Now shows information about the plant's global distribution, including continents and countries. [More info](workflow/browse_via_blender.md#plant-info-popup)
    - **Queue Save & Load**: Added the ability to save and load the import queue from external `.pf2bqueue` files for easy backup and reuse. [More info](workflow/browse_via_blender.md#queue)
    - **Grid Size Adjustment**: You can now control the distance between plants in the import grid when importing multiple plants at once. [More info](workflow/import_settings.md#general-settings)
- **Improved Functionality**
    - **Import Settings > Name Settings**: Added new options, including Seed and LOD. [More info](workflow/import_settings.md#name-settings)
    - Seed is now added as an asset tag when using the `Mark as Asset` option.
- **Interface**
    - Improved visibility for active Import Overrides or LODs by adding an asterisk (*) to the interface box when they are active.
    - The `Clear Queue` button has been moved to the new :material-menu:`Queue Actions` menu.
    - Miscellaneous tooltip adjustments and fixes.
    - **Seed**: Maximum seed value increased from 9,999,999 to 999,999,999.
- **Other**
    - Blender 4.5 has updated its 'preset' icon from :blender_icon_preset_old: to :blender_icon_preset:, so the documentation now uses the new icon as well.
- **Plant-Fixes**
    - **New**:
        - `PlantCatalog > Grass > Cyperus alternifolius HD`
        - `PlantCatalog > Grass > Cyperus alternifolius LD`

---

### 1.1.3 <small>2025-08-05</small>

> Compatibility: This version and previous versions have been verified to work with Blender 4.2 LTS, 4.3, 4.4, and 4.5 LTS.

- **New Functionality**
    - New option `Merge Duplicate Materials` to reduce material clutter when importing plants. When enabled, Blender will reuse existing materials with matching names instead of creating duplicates like Leaf.001, Bark.002, etc. This helps keep the scene cleaner and more optimized during batch imports. [More info](workflow/import_settings.md#general-settings)

---

### 1.1.2 <small>2025-05-03</small>

- **New Functionality**
    - Added an `Import Name Settings` section that lets you customize how plant objects are named during import. You can now append details such as maturity, health, height, and more to the object name. [More info](workflow/import_settings.md#name-settings)
- **Improved Functionality**
    - The `Mark as Asset` option now also adds plant details (such as preset name, maturity, health, season, etc.) as asset tags for better organization and searchability. [More info](workflow/import_settings.md)
- **Other**
    - Plants imported via the bridge in `Browse via PlantFactory` mode no longer include the file extension (such as `.tpf` or `.tpfp`) in the imported name.
- **Plant-Fixes**
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
- **Interface**
    - The `Plant Details` section and the information gathered from imported plants have been restructured for clarity. [More info](workflow/post_processing.md#plant-details). Examples include:
        - `Age` and `Age Max`, previously shown as arbitrary values, are now used to derive the plant's **maturity** value (used internally by PlantFactory), which ranges from 0 to 100%.
        - `Season` is no longer shown as a raw float (e.g., 1.0), but instead displayed as a **percentage** along with an **approximate day of the year** (1–365).
        - `Health` is now shown as a **percentage from 0 to 100**, instead of a float like 1.0.
        - If import overrides were used, the `Plant Details` section will now also display those override values for the selected plant.

---

### 1.1.0 <small>2025-04-07</small>

- **Interface**
    - `Check Version Status` link label has been updated to say "SuperHive" to match the new name of BlenderMarket.
    - Miscellaneous minor interface tweaks.
- **Other**
    - Improved error handling for edge cases when displaying presets in the interface.
- **Plant-Fixes**
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

- **Plant-Fixes**
    - **New**:
        - `PlantCatalog > Palms > Adonidia merrillii HD.`
- **Bug Fixes**
    - Fixed an issue where, for some users, the library cache was not detected when starting a new file in Blender. Previously, you had to manually go to the preferences and click "Verify" or update the path to resolve this. This should no longer be necessary.

---

### 1.0.8 <small>2025-03-27</small>

- **Plant-Fixes**
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

- **Bug Fixes**
    - Fixed issues with plant libraries that were not installed in the default location, where their paths were not being used correctly, which prevented you from using the plants.

---

### 1.0.6 <small>2025-03-26</small>

- **Other**
    - The `Re-Index Plants` function no longer indexes the personal library by default; it is now only indexed when the personal library is enabled.
- **Plant-Fixes**
    - **New**:
        - `PlantCatalog > Broadleaf Trees > Adansonia digitata HD`
        - `PlantCatalog > Broadleaf Trees > Adansonia digitata LD`
- **Bug Fixes**
    - Fixed an issue where the `PlantFactory` library plants were incorrectly indexed by the re-index function (also affecting the 'verify' cache function), which prevented you from using the plants.

---

### 1.0.5 <small>2025-03-24</small>

- **Bug Fixes**
    - The previous `Separate Plant Library Paths` change caused issues when plant libraries were installed in custom folders, preventing the cache and indexing from working properly. This issue has now been fixed.

---

### 1.0.4 <small>2025-03-22</small>

- **Improved Functionality**
    - **Improved Info Button:** The info button, available when browsing plants in the Gallery View or using the queue function, now shows if plant fixes are available and includes a button to display the specific fixes applied to the plant.
    - **Separate Plant Library Paths**: The Plant Library paths for PlantCatalog and PlantFactory are now separated, allowing you to store them in different locations while still using them within PF2B.
    - **Improved Cache Creation**: Creating Plant & Preset Cache now automatically triggers plant re-indexing and thumbnail reloading. Previously, only the "Verify" function triggered this. This should provide a smoother user experience by eliminating the need to manually perform these steps after caching custom plants.
- **Plant-Fixes**
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

- **Interface**
    - Miscellaneous minor interface tweaks.
- **Bug Fixes**
    - The `Open` button in the "Post Processing > Plant Details" now works with plants without presets.
- **Other**
    - The Python library **psutil** bundled with the addon did not load properly on some systems due to Blender incorrectly interpreting the Python version number for this package. The version has now been renamed to reflect that it is intended for Python 3.11, as used in Blender.

---

### 1.0.1 <small>2025-03-16</small>

- **Interface**
    - When browsing plants via the **Gallery view**, the **Presets** button is now disabled for plants that do not have available presets.
    - Added a new `Hide 'Browse via PlantFactory' mode` setting in the preferences. If you only plan to use the **Browse via Blender** mode, you can enable this to hide the mode selection at the top and declutter the interface.
    - The `Plant Details` box in the `Post Processing` panel now displays the height and polygon count of the selected plant.
    - Miscellaneous minor interface tweaks.
- **Plant-Fixes**
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
- **Bug Fixes**
    - The `Plant Troubleshoot tools > Verify Textures` utility now works with plants that do not have presets.

---

### 1.0.0 <small>2025-03-12</small>

  > Compatibility: Blender 4.2 LTS, 4.3, 4.4

  - First public release.

</div> <!-- /Changelog -->
<!--landingpage-end-->