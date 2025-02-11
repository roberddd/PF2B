# Browse via PlantFactory

In this mode, PF2B connects Blender to a running instance of PlantFactory, enabling you to work on plant designs in PlantFactory and seamlessly import them into Blender for testing or use without needing to close PlantFactory.

=== "Not connected"
    ![Browse via PlantFactory](../images/browse-via-plantfactory_bridge-disconnected.webp){ .img-box align=left }
=== "Connected"
    ![Browse via PlantFactory](../images/browse-via-plantfactory_bridge-connected.webp){ .img-box align=left }

##### Settings

- Click on the `Start Bridge` button to launch the PF2B Bridge along with PlantFactory and keep it running in the background
<!-- - **Batch Import Options**:
  - **Randomized Imports**: PF2B can generate multiple versions of the same plant, each with a unique random seed, for added variety.
  - **Preset Variants**: If the selected plant has multiple preset variations, you can choose to import all available presets at once. -->

<div style="clear:both"></div>


#### Bridge

=== "Connected"
    ![Bridge](../images/bridge_connected.webp){ .img-box }

=== "Disconnected"
    ![Bridge](../images/bridge_disconnected.webp){ .img-box }

=== "Disconnected with PF running"
    ![Bridge](../images/bridge_disconnected_pf-running.webp){ .img-box }

- :blender_icon_file_refresh:: Check Bridge status.
- **Close Bridge**: Closes the PF2B Bridge between Blender and PlantFactory. To import plants again, you will need to restart the bridge along with a new instance of PlantFactory
- **Close PlantFactory**: Force close all PlantFactory instances