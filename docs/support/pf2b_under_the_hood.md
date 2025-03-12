This page provides an in-depth look at how PF2B processes plant imports, handling material setup and automated fixes to ensure compatibility.

## At a Glance

When a plant is imported, **PF2B** follows these steps:

1. [**Automated Setup**](#automated-setup)
    - Configures **materials, textures, and geometry** using predefined rules.
    - Attempts to match additional textures from the texture folder (not included in the `.fbx` file).

2. [**Plant Fixes System**](#plant-fixes-system)
    - Runs after the automated setup to fix known issues.
    - Uses a **compatibility database** to apply per-plant adjustments for materials, textures, and geometry.
    - Improves over time with **community feedback**.

---

## Automated Setup

### Materials

PF2B automatically sets up **additional textures** from **PlantFactory** that are **not** included in the `.fbx` file (the exchange format between PlantFactory and Blender) but exist in the texture folder. These include:

- **Roughness Textures**
- **Back Textures** (Base Color & Normal)
- **Translucency Textures**

Since this process relies on texture names, PF2B uses logic-based matching to identify them. This works well in **99% of cases**, but exceptions occur if textures do not follow a consistent naming scheme.

For successful automatic setup, **textures** should contain recognizable keywords:

- **Roughness Textures** → contain `"rough"`.
- **Back Textures** → contain `"back"`, along with `"color"` or `"normal"`.
- **Translucency Textures** → contain `"translucency"` or `"backlight"`.

Additionally, **materials** inside PlantFactory should include a keyword that indicates the type of material they represent. Recognized keywords include terms such as `leaf`, `bark`, `flower`, `fruit`, and other variants. Including these keywords helps the addon correctly identify and process materials during import.
Depending on the identification, a different shader is assigned to the material that is best suited for its purpose. Materials that are not recognized or do not fall into the above categories are assigned a generic all-purpose shader. For details about the available shaders, see the [shaders](../workflow/material_settings.md#shaders) section under the workflow section.


!!! info2 ""
    If you suspect missing textures due to inconsistent naming, refer to the [Plant Fixes System](#plant-fixes-system) section below for further details. That section explains how PF2B corrects common issues, and you can also find troubleshooting steps in the [FAQ: My plant materials look off. What can I do?](../support/faq.md#my-plant-materials-looks-off-what-can-i-do).

---

## Plant Fixes System

The **Plant Fixes System** is an automated compatibility layer designed to correct issues that may arise when importing plants.
!!! warning ""
    Please note that the **Plant Fixes System** is only active when using the "[Browse Via Blender](../workflow/browse_via_blender.md)" mode and is not applied when using the "[Browse via PlantFactory](../workflow/browse_via_plantfactory.md)" mode.

### Automated Adjustments for Common Issues

- Uses a **database of known issues** to fix **material, texture, or geometry problems**. To view the database, check the '[Plant Fixes](../preferences/misc.md#plant-fixes)' section in the preferences.
- Adjustments include:
    - Connecting, disconnecting, or remapping textures to the correct material sockets.
    - Modifying material socket values.
    - Adjusting geometry, such as scaling or applying transformations, to ensure correct proportions.
    - Applying other custom fixes as needed based on plant-specific issues.


### Community-Driven Compatibility Improvements

- The **Plant Fixes System** evolves over time based on user reports.
- If you encounter an issue, **report it!**
- Future imports of the same plant will be **automatically corrected**.


### Summary

The **Plant Fixes System** ensures better out-of-the-box compatibility for imported plants by automatically applying **known fixes**. With more community feedback, **seamless material and texture configurations** improve over time.


### Contributing

If you find a plant that isn’t importing correctly, **please report it!** The more reports received, the better the system becomes. For help getting started with finding what the issue might be, check out the
[FAQ: My plant materials look off. What can I do?](../support/faq.md#my-plant-materials-looks-off-what-can-i-do), which also includes information on how to report it.