# Biomes & Collections

!!! warning ""
    The Biomes & Collections features are not yet released and will be available in version 1.1.7. Coming soon!

PF2B offers two ways to work with grouped plants: **Biomes** and **Collections**.
Both systems help you quickly bring plants from PlantFactory into Blender, but they serve slightly different purposes.




## Shared Library

Both systems write to the same `.blend` asset files, giving you a **unified library**.

- Plants imported with **Collections** are instantly available to **Biomes** and can also be accessed directly in the **Asset Browser**.
- Plants imported by **Biomes** are similarly available in the **Asset Browser** for direct use outside of biomes.




## [Biomes](biomes.md)

In PF2B, a **biome** is a ready-made collection of plants designed to quickly build natural environments. Biomes are more than just plant lists, they are structured setups designed to work exclusively with third-party scattering plugins developed by **bd3d**:

- **[Geo-Scatter](https://www.geoscatter.com/download.html#geo-scatter)** (commercial)
- **[Biome-Reader](https://www.geoscatter.com/download.html#biome-reader)** (free)

These plugins handle the actual scattering of plants in your scene, making it easy to generate meadows, forests, wetlands, and other natural landscapes.

!!! info2 "Choosing a Scattering Plugin"
    **Biome-Reader** is a free, simplified version best suited for hobbyists and beginners. **Geo-Scatter** is the full professional toolset with advanced controls, optimizations, and support.

    Since **Biome-Reader** is free, you can start using PF2B biomes immediately, it works perfectly for exploring and scattering your first biomes.

!!! info2 ""
    The number of available biomes will continue to grow over time as new ones are added.


## [Collections](collections.md)

Collections are **plant groups for bulk importing** into your Blender Asset Library. They let you quickly populate categories of plants for use in the Asset Browser, without waiting for on-demand imports.


!!! info2 ""
    The number of available collections will also continue to grow over time.



## When to Use

| Feature      | Best For | What You Get |
|--------------|----------|---------------|
| **Biomes**   | Ready-made scattering setups | Curated ecosystems integrated with Geo-Scatter or Biome-Reader |
| **Collections** | Bulk asset import | Direct access to plants in Blender’s Asset Browser |




## Notes

-  Both the Biomes and Collections importer are **smart**: they won’t import duplicate assets.
-  PF2B checks your existing Asset Library before importing to avoid unnecessary duplicates.
-  You can use menu options to **review the status of plants** in each category at any time.