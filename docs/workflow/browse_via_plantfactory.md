# Browse via PlantFactory

In this mode, PF2B connects Blender to a running instance of PlantFactory, enabling you to work on plant designs in PlantFactory and seamlessly import them into Blender for testing or use without needing to close PlantFactory.

![Browse via PlantFactory](../images/browse-via-plantfactory_bridge-disconnected_cropped.webp){ .img-box align=left }

- **Start Bridge**: launch the PF2B Bridge along with PlantFactory that lets you import plants from PlantFactory.

<div style="clear:both"></div>

Once the bridge has started, the interface will look like this:

![Browse via PlantFactory](../images/browse-via-plantfactory_bridge-connected.webp){ .img-box align=left }

##### General Settings

At the top, the scene or plant name is displayed (shown as `My Plant` in the example).

- **Import**:
    - **Current Plant**
    - **All Presets**: Import all available preset variations for the selected plant. When enabled, the number of presets will be displayed below.
    - **Quantity**
- **Seed**:
    - **Random**: Generates a new seed for the import. *NOTE: this updates the seed of your current plant.*
    - **Current**: Keeps the current seed of your plant
    - **Custom**
- :blender_icon_import: **Import Plant**: Starts importing the selected plant.

<div style="clear:both"></div>


#### Bridge

Below the main PF2B panel is the Bridge panel, which displays information about the bridge status.

=== "Connected"
    ![Bridge](../images/bridge_connected.webp){ .img-box }

=== "Disconnected"
    ![Bridge](../images/bridge_disconnected.webp){ .img-box }

=== "Disconnected with PF running"
    ![Bridge](../images/bridge_disconnected_pf-running.webp){ .img-box }

- :blender_icon_file_refresh:: Check Bridge status.
- **Close Bridge**: Closes the PF2B Bridge between Blender and PlantFactory. To import plants again, you will need to restart the bridge along with a new instance of PlantFactory.
- **Close PlantFactory**: Force close all PlantFactory instances.