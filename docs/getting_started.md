## Requirements

- Blender 4.2 or newer
- PlantFactory 2024
- Operating System: Windows




## Installation

=== "Addon"
    To start using PF2B, you need to install the add-on in Blender. Follow these steps:

    1. Download the PF2B add-on zip file from the store you purchased it from.
    2. Open Blender and go to `Edit > Preferences`.
    3. In the Preferences window, navigate to the `Add-ons` tab.
    4. Locate the `Add-ons Settings` (:octicons-chevron-down-12: icon) in the top right corner.
    5. Click on `Install from Disk` and select the downloaded PF2B zip file.

    !!! info2 "Updates"
        For updates, simply download the updated add-on manually from the store where you purchased it, uninstall the old version and reinstall the new using the same steps outlined in the instructions above.


=== "PlantFactory & Libraries"
    Follow these steps to install PlantFactory and the necessary libraries:

    1. If you haven’t already installed PlantFactory, download it from [Bentley’s official website](https://www.bentley.com/software/e-on-software-free-downloads/).
    2. The `PlantCatalog` Library can also be downloaded from the same link. It is divided into multiple parts and requires 19.6 GB of space. I highly recommend downloading all parts to access the full plant library.
    3. For additional information about PlantFactory, check out Bentley's FAQ section [here](https://www.bentley.com/software/e-on-software-free-downloads/#faq).




## Finding PF2B and Using the Documentation

PF2B is located in the N-Panel inside the `3D Viewport` under a tab named `PF2B`, as shown in the image below.

![Addon Location](images/addon-location.webp){ .img-box align=left }

Every feature includes hover-over tooltips, providing quick and detailed explanations directly within the add-on interface, making it easy to understand functionality without needing to leave the workspace. Some areas also have an extra :octicons-question-24: icon, which opens a popup with additional information and a link to the relevant section of the documentation for further instructions.

For more comprehensive guidance, you can access the full documentation by clicking the :blender_icon_help:icon in the main panel.

<div style="clear:both"></div>




## First time use & Importing cache

![Addon Location](images/import-cache-example.webp){ .img-box .on-glb align=right width=40%  }

To get the most out of the PF2B addon and browse plants directly within the addon, you need to import the thumbnail and presets cache.

1. Download the cache file provided alongside the addon from the store where you purchased it.
- Inside Blender, navigate to the addon preferences by clicking the :blender_icon_preferences: icon in the PF2B panel. Alternatively, go to `Edit > Preferences`, find PF2B under the Add-ons tab.
- In the `Plant Library` tab, click the "**Import Cache**" button.
- Locate and select the downloaded cache file, which should be named `PF2B Cache Complete.pf2b` or something similar.
- Once the import is complete, click the 'Verify' button on all caches to ensure everything is properly cached.
- Now you're ready to start using the addon!


<div style="clear:both"></div>




## Tips

![Addon Location](images/pf_welcome-screen.webp){ .img-box .on-glb align=right width=20% }

- To ensure a smoother workflow, it’s **recommended** to disable the "**Welcome**" screen that appears at startup in PlantFactory. If left enabled, you’ll need to manually close this window each time you perform an import into Blender. You can disable it easily by clicking "Don’t show again" in the bottom-left corner.

<!-- <div style="clear:both"></div> -->

- For a slight speed boost during imports, you can set the **Mesh Preview** option in PlantFactory to **Draft Only**, as shown in the screenshot below.

    ![Addon Location](images/pf_mesh-preview.webp){ .img-box }