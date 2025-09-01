!!! warning ""
    Biomes feature is not yet released. Coming soon...

## What are Biomes?

In PF2B, a **biome** is a ready-made collection of plants that can be used to quickly build natural environments.
Biomes are more than just plant lists, they are structured setups designed to work exclusively with third-party scattering plugins developed by **bd3d**:

- **[Geo-Scatter](https://www.geoscatter.com/download.html#geo-scatter)** (commercial)
- **[Biome-Reader](https://www.geoscatter.com/download.html#biome-reader)** (free)

These plugins handle the actual scattering of plants in your scene, making it easy to generate meadows, forests, wetlands, and other natural landscapes.

!!! info2 ""
    **Biome-Reader** is a free, simplified version best suited for hobbyists and beginners, while **Geo-Scatter** is the full professional toolset with advanced controls, optimizations, and support.

    Since **Biome-Reader** is free, you can use it to get started with PF2B biomes right away, it works perfectly for exploring and scattering your first biomes.

---

## How Biomes Work in PF2B

Inside PF2B, the **Biomes button** acts as a **browser** where you can preview and manage available biomes.
For each biome, you are presented with a **Build Biome** button.

### Building a Biome
When you click **Build Biome**, PF2B will:

1. **Export plants** from PlantFactory based on the biome definition.
2. **Store the exported models** inside `.blend` files for Blender.
3. **Prepare biome-specific files** required by Geo-Scatter or Biome-Reader.

Once the process is complete, the biome becomes available inside the scattering plugin of your choice. This means you can immediately scatter the biome in your Blender scene to generate rich, natural environments.

As a bonus, the `.blend` files are stored in your Asset Library, so each individual plant can also be accessed directly from the **Asset Browser**, outside of the biome system.

---

## Summary

- **Biomes** in PF2B = collections of plants bundled with setup files.
- PF2B itself is primarily a **biome browser**: it organizes, prepares, and exports assets.
- The actual scattering in your scene is handled by **Geo-Scatter** or **Biome-Reader**.
- The **Build Biome** button automates the process of exporting plants and preparing the files needed to make the biome available in those plugins.
