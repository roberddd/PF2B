# Importing Plants

PF2B offers two modes for importing plants from **The PlantFactory** into Blender, each tailored for different workflows. You can either work directly with PlantFactory in the background or manage imports entirely from within Blender. Here’s how each mode works:

## Mode 1: Browse via PlantFactory

In this mode, PF2B connects Blender to a running instance of PlantFactory, allowing you to work on custom or library plants in PlantFactory and import them directly into Blender.

- **Setup**: Select **Browse via PlantFactory** in PF2B within Blender and click on the `Start Bridge` button that will start PlantFactory and keep it open in the background.
- **Workflow**: As you edit or create a plant in PlantFactory, PF2B will allow you to import the current plant directly into Blender whenever you’re ready. Simply click the **Import** button within Blender to bring in the active plant from PlantFactory.
<!-- - **Batch Import Options**:
  - **Randomized Imports**: PF2B can generate multiple versions of the same plant, each with a unique random seed, for added variety.
  - **Preset Variants**: If the selected plant has multiple preset variations, you can choose to import all available presets at once. -->

This mode is ideal for scenarios where you’re actively working on plant designs in PlantFactory and want to test or use them in Blender without closing PlantFactory.

## Mode 2: Browse via Blender

This mode is designed for users who primarily work within Blender and do not need PlantFactory continuously running in the background. PF2B caches all plant assets and presets, enabling users to browse and import directly from Blender.

- **Setup**: Select **Browse via Blender** in PF2B. PlantFactory does not need to be running.
- **Workflow**: In Blender, PF2B displays a thumbnail gallery of cached plants and their presets, allowing you to browse and select plants for import.
- **Importing Plants**: When you click **Import** in this mode, PF2B will launch PlantFactory in the background, import the selected plant(s), and then close PlantFactory automatically once the import completes.
<!-- - **Batch Import Options**:
  - **Randomized Imports**: As with the first mode, you can import multiple unique variations of a plant by applying random seeds.
  - **Preset Variants**: You can also import all preset variations for a selected plant if available. -->

This mode is useful for users who prefer a Blender-centric workflow but occasionally need to add PlantFactory vegetation to their scenes.
