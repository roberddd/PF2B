# Browse via Blender

![Browse via Blender](../images/browse-via-blender-panel.webp){ .img-box align=left }

##### General Settings

- **Library**:
    - PlantCatalog
    - PlantFactory
    - Personal: visible if enabled in the preferences.
- **Category**: Shows plant categories for the selected library.
- **Detail Filter**: Filter plant catalog items by detail level (Only available for the `PlantCatalog` library).
    - **All**: Show all detail levels.
    - **FG Only**: Show full geometry only.
    - **HD Only**: Show high detail only.
    - **LD Only**: Show low detail only.
    - **RT Only**: Show real-time detail only.
- **Plant Browser**:
    <br>Above the thumbnail, the plant name is displayed (`Ficus carica HD`) along with its English name (`Common Fig Tree`), and below it, the preset name (`Standard (0)`).
    - :blender_icon_snap_vertex:: Opens the plant gallery, see [gallery view](#gallery-view) below.
    - :blender_icon_preset:: Opens the preset gallery, see [gallery view](#gallery-view) below.
    - :octicons-triangle-left-24:: Navigates to the previous plant or preset.
    - :octicons-triangle-right-24:: Navigates to the next plant or preset
    - **Browse Mode**: Plants or Presets.
    <!-- ![Browse via Blender](../images/browse-via-blender-panel_plant-browser.webp){ .img-box align=left } -->

<div style="clear:both"></div>

- **Import**:
    - **Current Preset**
    - **All Presets**: Import all available preset variations for the selected plant. When enabled, the number of presets will be displayed below.
    - **Quantity**
- **Seed**:
    - **Random**
    - **Custom**
- **Import Overrides** These settings allow you to manually define the Age/Maturity, Health and Season of imported plants. See the [Import Overrides](#import-overrides) section below for details.
- :blender_icon_import: **Import Plant**: Starts importing the selected plant(s).
- :octicons-stack-24:: **Use import Queue**, see the [Queue](#queue) section for details.


### Import Overrides

These settings allow you to manually define the **Age/Maturity**, **Health**, and **Season** of imported plants. Each property has its own **checkbox** and **slider**. To activate an override for a specific property, tick the checkbox next to it and adjust the slider to your desired value.

![plant gallery top panel](../images/import-overrides.webp){ .img-box align=left }

When an override is enabled, it will replace the plant's default preset value for that property during import. If left unticked, the original preset value will be used instead.

- **Settings**:
    - **Maturity**: Controls the plant's maturity, representing its current age as a ratio of its maximum potential age. A value of 0 represents a young plant, while 100 indicates the plant has reached its maximum age.
    - **Health**: Controls the plant's health from 0 to 100. A value of 0 represents a dying plant, while 100 indicates a thriving, fully healthy plant.
    - **Season**: Select the day of the year (1-365) to determine the season based on northern hemisphere meteorological standards.

The override settings are stored in the [Plant Details](./post_processing.md#plant-details) section after import, in case you need to reference them later.

!!! abstract "Override Examples"
    Here is the **Ficus carica (Common Fig Tree)** plant exported with different override settings, all using the same seed for consistency. These are just examples, since you have fine-grained control over the override values, you can generate any variation in between.

    **Maturity:**
    ![Import Override example](../images/plants/overrides/Maturity.webp){ .on-glb data-description="Import Override: Maturity" }

    **Health:**
    ![Import Override example](../images/plants/overrides/Health.webp){ .on-glb data-description="Import Override: Health" }

    **Season:**
    ![Import Override example](../images/plants/overrides/Season.webp){ .on-glb data-description="Import Override: Season" }

!!! info2 "Note"
    When using these overrides, values such as plant height and polygon count shown in the preset descriptions may not be accurate, as the override settings affect how the plant is generated.

<div style="clear:both"></div>



### Queue

The queue system lets you add multiple plants to a queue, which you can then import in a single batch, simplifying the process of importing various species and presets.

![plant gallery top panel](../images/queue.webp){ .img-box align=left }

- :octicons-info-16:: Opens a popup that displays information about the plant. ![plant gallery top panel](../images/queue_info-popup.webp){ .img-box .on-glb align=right width=27% data-description="Info popup"}
    - **Open**: Open this plant in the Plant Browser.
    - **Plant-Fixes available**: This button will appear if there are [Plant-Fixes](../support/pf2b_under_the_hood.md#plant-fixes-system) available for the plant. When clicked, it will display all the fixes applied during the import of this plant.
    - **Search on Wikipedia**: lets you search for the plant species on Wikipedia; hold down Shift while clicking to search on DuckDuckGo instead.
- **Quantity**: The number field lets you specify how many of this plant will be imported.
- :fontawesome-regular-trash-can:: Delete the plant from the queue.
- **Clear Queue**: Removes all plants from the queue.

<div style="clear:both"></div>



### Gallery View

In this view, you can see all available plants and presets. To exit the gallery view, click the `X` in the top right corner or press `Escape` on your keyboard.

!!! info2 inline "Plants"
    ![Plant Gallery](../images/gallery_plants.webp){ .img-box .on-glb align=left }

!!! info2 inline "Presets"
    ![Preset Gallery](../images/gallery_presets.webp){ .img-box .on-glb align=left }

<div style="clear:both"></div>

Below is a breakdown of every button and function inside the gallery.



#### Plants

![plant gallery top panel](../images/gallery_plants_top-panel.webp){ .img-box .on-glb }
At the top, you'll find the same library and filtering section as in the main panel, along with these additional settings:

- **Size**: Adjusts the thumbnail size of the plants and presets in the gallery.
    - Example of zoom set to a lower number:<br>
        ![Preset Gallery](../images/gallery_plants_zoomed.webp){ .img-box .on-glb  width=35% }
- **Search**: Lets you perform a free-text search to filter items.

<br>

![plant gallery top panel](../images/gallery_plants_plant-example.webp){ .img-box align=left }

If we look at an individual plant inside the gallery we have the following buttons below the thumbnail:

- **Presets**: Opens the presets gallery for this plant.
- **Select**: Selects the plant and closes down the plant gallery.
- **:octicons-info-16:**: Opens a popup that displays information about the plant. ![plant gallery top panel](../images/gallery_plants_plant-example_popup.webp){ .img-box }
    - **Plant-Fixes available**: This button will appear if there are [Plant-Fixes](../support/pf2b_under_the_hood.md#plant-fixes-system) available for the plant. When clicked, it will display all the fixes applied during the import of this plant.
    - **Search on Wikipedia**: lets you search for the plant species on Wikipedia; hold down Shift while clicking to search on DuckDuckGo instead.

<div style="clear:both"></div>



#### Presets

![preset Gallery top panel](../images/gallery_presets_top-panel.webp){ .img-box .on-glb }
Here you will also find the Size & Search fields and if you are browsing the `PlantCatalog library` there are additional filters available:

- **Min Height** & **Max Height**: Lets you filter presets based on the plant height.
- **Min Polygons** & **Max Polygons**: Lets you filter presets based on the plant polygon count.
- **Reset Filters**
- **Use import Queue**: Enables the queue functionality and adds an additional 'Add to Queue' button to each preset. For more information about the queue system, please see the [Queue](#queue) section.

<br>

If we look at an individual presets inside the gallery we are presented with depending on if you have the `Use import Queue` active:

=== "Default"
    ![Preset example](../images/gallery_presets_preset-example.webp){ .img-box align=left  }

    - **Select**: Selects the plant and closes down the plant gallery.
    - **:octicons-info-16:**: Opens a popup that displays information about the plant. ![plant gallery top panel](../images/gallery_presets_preset-example_popup.webp){ .img-box  }
        - **Plant-Fixes available**: This button will appear if there are [Plant-Fixes](../support/pf2b_under_the_hood.md#plant-fixes-system) available for the plant. When clicked, it will display all the fixes applied during the import of this plant.

=== "With 'Queue' button"
    ![Preset example with queue button](../images/gallery_presets_preset-example-with-queue-button.webp){ .img-box align=left  }

    - **Add to Queue**: Adds the preset to the queue. For more information about the queue system, please see the [Queue](#queue) section.
    - **Select**: Selects the plant and closes down the plant gallery.
    - **:octicons-info-16:**: Opens a popup that displays information about the plant. ![plant gallery top panel](../images/gallery_presets_preset-example_popup.webp){ .img-box  }
        - **Plant-Fixes available**: This button will appear if there are [Plant-Fixes](../support/pf2b_under_the_hood.md#plant-fixes-system) available for the plant. When clicked, it will display all the fixes applied during the import of this plant.