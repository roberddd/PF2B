![Preferences - Misc](../images/preferences_misc.webp){ .img-box align=left }

## Plant Fixes

The '**Plant Fixes System**' automatically corrects issues when importing plants from PlantFactory into Blender. If materials, textures, or geometry are incorrectly configured or missing, the system applies known fixes for better compatibility. These fixes are stored in a database and applied automatically during import after the automatic setup.

Read more about it under the [PF2B: Under the Hood](../support/pf2b_under_the_hood.md) page.

!!! info2 ""
    If you find a plant that isn't importing correctly, report it so it can be added to the database. The more reports are submitted, the better the system becomes over time!

- **Show plants list**: This displays a popup with all plants in the database that have fixes applied, along with details of the fixes for each plant. This feature is for informational purposes only.

    ![Plant Troubleshoot Tools](../images/plant-fixes-database_example.webp){ .img-box .on-glb width=45% }

<div style="clear:both"></div>


## Troubleshooting

#### General

- **Plant Troubleshoot Tools**: Adds tools to help troubleshoot certain plant issues. Currently only one tool is added: 'Verify Textures' and is found in the 'Post Processing' panel.
    ![Plant Troubleshoot Tools](../images/plant-troubleshooting-tools.webp){ .img-box }

    - **Tools**:
        1. **Verify Textures**: Prints out texture details to the console. Opens a popup for additional options.
            - :blender_icon_console:: Opens the console.

#### Plants & Thumbnails

- **Re-Index Plants**: Re-indexes plants by checking what plants are available in your library. Use this to update your plant list if any new plants are missing.
- **Reload Thumbnails**: Reload all thumbnails visible in the interface, useful if thumbnails are not displaying correctly.


#### Import

- **Remove Non-Mesh Elements**: This is useful for cleaning up imported plant assets that may have unnecessary elements like empties or other non-mesh objects attached.
- **Geometry Load Buffer**: Adds extra time (in seconds) before exporting to allow PlantFactory to fully load the geometry. This helps prevent the "*[Are you sure you want to abort the export?](../support/faq.md#i-receive-a-are-you-sure-you-want-to-abort-the-export-popup-during-import)*" popup that may appear if the geometry isn't fully loaded before the export starts. This setting affects only the [Browse via Blender](../workflow/browse_via_blender.md) mode and while importing one plant at a time without the queue functionality. Type in a custom value to go below or above the minimum or maximum value


#### Bridge

- **Bridge Socket Port**: The port used by the  `PF2B Bridge` to manage the internal connection between Blender and PlantFactory.


#### Debug

- **Debug To Console**: Outputs debug information to the console, useful for troubleshooting. To view the console, go to `Window > Toggle System Console`.

    !!! warning "Performance Note"
        This should only be enabled if you need to troubleshoot, as it may have a slight performance hit.

- **Log to File**: When enabled, all debug information and error messages are saved to a log file for easier troubleshooting and analysis. Useful for tracking issues.