![Preferences - Plant Library](../images/preferences_plant-library.webp){ .img-box align=left }

## Libraries

Here you can adjust the locations of your plant libraries. These usually don’t need to be changed if you’ve installed everything in the default location, but you can adjust them if needed. The interface will indicate if the libraries are found.

- **PlantCatalog**: The location of the [PlantCatalog library](../plants.md#plantcatalog-library) folder, which should contain categorized subfolders for each plant type. Within these subfolders, you should find the actual `.tpf` plant files. Read more [here](../getting_started.md#installation-plantcatalog-plant-library) about how to install this library.
- **PlantFactory**: The location of the [PlantFactory library](../plants.md#plantfactory-library) folder, which should contain multiple subfolders, including the `Species` folder that holds the actual `.tpf` plant files. This library contains the plants that ship with the PlantFactory application itself.
- **Personal**: Enable this option if you have custom plants to include, and select the folder containing them. This folder can contain subfolders to organize the plants into categories.

    !!! info2 ""
        Only plants that are saved in `.tpf` file format are handled, so if you have plants that you have saved in the default PlantFactory `.tpfp` format, please save them inside PlantFactory as a `.tpf` file by going to `File > Export > Export as Species`.


    !!! warning "Note on paths"
        The library folders must be named 'PlantCatalog', 'PlantFactory' and 'Personal' respectively. Case does not matter.

<div style="clear:both"></div>




## Library Cache

To use the [Browse via Blender](../workflow/browse_via_blender.md) mode, a cache must be generated. See [First time use & Importing cache](../getting_started.md#first-time-use-importing-cache) for instructions, and refer to [What is the PF2B cache?](../support/faq.md#what-is-the-pf2b-cache) in the FAQ for more details.

The **Presets Cache** and **Plant Thumbnails Cache** are required, while the **Preset Thumbnails Cache** is optional. If not generated, presets will be displayed as a list instead of thumbnails.


!!! info2 ""
    Generally, you won't need to adjust these settings if you're only using the built-in plants and libraries from PlantFactory. These settings are only necessary if you want to expand your library with custom plants.


#### Presets Cache

- **Verify**: Checks if all presets in your Plant Library are cached and provides an estimate of the time required to generate any missing presets. Shows a popup where you can specify which libraries to check.

    ![Cache Verify](../images/cache_verify.webp){ .img-box }

    ??? abstract "Examples"
        Here are a few examples of different states: first, with a full cache and no missing thumbnails, then with a few missing thumbnails, and finally with no cache at all.

        ![Cache Verify](../images/cache_presets_verified-no-missing.webp){ .img-box align=left }
        ![Cache Verify](../images/cache_presets_verified-few-missing.webp){ .img-box align=left }
        ![Cache Verify](../images/cache_presets_verified-all-missing.webp){ .img-box align=left }

- **Cache Missing Plants**: Will show a prompt to select which libraries to target and then launches PlantFactory to check your plants and cache any missing presets.

    ![Cache Missing Presets](../images/cache_presets_cache-missing-plants.webp){ .img-box  }


#### Thumbnails Cache

=== "Plants"
    - **Verify**: Checks the thumbnails cache for any missing plant thumbnails and provides an estimate of the time required to generate them.  Shows a popup where you can specify which libraries to check.

        ![Cache Verify](../images/cache_verify.webp){ .img-box }

        ??? abstract "Examples"
            Here are a few examples of different states: first, with a full cache and no missing thumbnails, then with a few missing thumbnails, and finally with no cache at all.

            ![Cache Verify](../images/cache_thumbnails_plants_verified_no-missing.webp){ .img-box align=left }
            ![Cache Verify](../images/cache_thumbnails_plants_verified_few-missing.webp){ .img-box align=left }
            ![Cache Verify](../images/cache_thumbnails_plants_verified_all-missing.webp){ .img-box align=left }

    - **Create Missing**: Generates thumbnails for all missing items. Generating thumbnails involves PlantFactory rendering each plant or preset individually and saving the results as thumbnail images. Preset thumbnails also include details like plant height and polygon count.

        ![Cache Missing Plants](../images/cache_thumbnails_plants_create-missing.webp){ .img-box  }

=== "Presets (Optional)"
    - **Verify**: Checks the thumbnails cache for any missing preset thumbnails and provides an estimate of the time required to generate them.  Shows a popup where you can specify which libraries to check.

        ![Cache Verify](../images/cache_verify.webp){ .img-box }

        ??? abstract "Examples"
            Here are a few examples of different states: first, with a full cache and no missing thumbnails, then with a few missing thumbnails, and finally with no cache at all.

            ![Cache Verify](../images/cache_thumbnails_presets_verified-no-missing.webp){ .img-box align=left }
            ![Cache Verify](../images/cache_thumbnails_presets_verified-few-missing.webp){ .img-box align=left }
            ![Cache Verify](../images/cache_thumbnails_presets_verified-all-missing.webp){ .img-box align=left }

    - **Create Missing**: Generates thumbnails for all missing items. Generating thumbnails involves PlantFactory rendering each plant or preset individually and saving the results as thumbnail images. Preset thumbnails also include details like plant height and polygon count.

        ![Cache Missing Plants](../images/cache_thumbnails_presets-create-missing.webp){ .img-box  }


#### Import / Export Cache

To avoid rebuilding the entire cache, you can import or export an existing cache.

- **Import Cache**: Imports a `.pf2b` cache file.
- **Export Cache**: Exports a `.pf2b` cache file.
- **Open Cache Folder**: Opens the folder containing the cache files for manual management.



## Biomes & Collections

!!! warning ""
    The Biomes & Collections features are not yet released and will be available in version 1.1.7. Coming soon!


### Scatter add-on

Displays a verification of whether Geo-Scatter or Biome-Reader is installed, and provides links if they are not found.

- **PF2B Scatter-Library Location**: Only change this setting if you have modified the "Scatter-Library Location" in the Geo-Scatter or Biome-Reader add-on. Otherwise, leave it unchanged. If you did change the location, this path must point to a subfolder within the add-on’s selected path, and that subfolder must be named "PF2B".


### Blend Storage

Specifies the location for storing exported plant `.blend` files so that Biome-Reader or Geo-Scatter can find them. These files can usually be stored in any of the Asset Library locations set in Blender preferences.

- **Keep blend1 files**: Blender automatically creates `.blend1` backup files whenever data is stored in biome blend files. These backups are not used by PF2B and can take up significant space in large libraries. Enable this option if you wish to keep them.

### Biome Contributor Tools

Enable this mode if you want to contribute new biomes to PF2B. It provides additional options such as:

- Adding example biomes to the biome collection.
- A shortcut to the internal biome folder.
- Links to [specific documentation](../support/create_your_own_biome.md) for creating your own biomes to distribute with PF2B.

![Biome Contributor Tools](../images/preferences_plant-library_biome_biome-contributor-tools.webp){ .img-box }

