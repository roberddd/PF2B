![Material Settings](../images/material-settings.webp){ .img-box align=right }

These settings allows you to configure the default settings that are used when importing the plants. Just click on any of the tabs to maximize them to see the settings as seen below.



<div style="clear:both"></div>

=== "Leaf"
    ![Material Settings](../images/material-settings_leaf.webp){ .img-box align=left }

    - **Translucency**
    - **Hue**
    - **Saturation**
    - **Brightness**
    - **Color Variation Random Per Leaf**: Applies subtle hue variations to each leaf. using random colors per geometry island, enhancing natural diversity.
    - **Normal Strength:** This controls the Normal or Bump Strength. If no Normal is present, it uses Bump. If no Bump is present, it derives Bump from the Color texture.
    - **Wetness**: The Wetness parameter simulates the effect of moisture on the leaf surface by reducing roughness. As wetness increases, the leaf's surface becomes smoother and glossier, mimicking the appearance of a wet leaf.
    - **Wetness affected by Normal**: Determines whether the wetness effect is influenced by the surface orientation. When enabled, the shader adjusts the roughness based on the surface's normal, applying the effect primarily to top-facing surfaces (along the positive Z-axis). When disabled, the wetness effect is applied uniformly across all surfaces regardless of their orientation.
    - **Roughness from Color**: Generates a Roughness map from the Color texture, breaking uniform roughness. Since most PlantFactory assets do not include dedicated Roughness maps and have a static value set, this feature provides an effective solution.

=== "Stalk"
    ![Material Settings](../images/material-settings_stalk.webp){ .img-box align=left }

    - **Translucency**
    - **Subsurface Weight**
    - **Subsurface Scale**
    - **Hue**
    - **Saturation**
    - **Brightness**
    - **Normal Strength:** This controls the Normal or Bump Strength. If no Normal is present, it uses Bump. If no Bump is present, it derives Bump from the Color texture.
    - **Wetness**: The Wetness parameter simulates the effect of moisture on the stalk surface by reducing roughness. As wetness increases, the stalk's surface becomes smoother and glossier.
    - Wetness affected by Normal
    - **Roughness from Color**: Generates a Roughness map from the Color texture, breaking uniform roughness. Since most PlantFactory assets do not include dedicated Roughness maps and have a static value set, this feature provides an effective solution.

=== "Flower"
    ![Material Settings](../images/material-settings_flower.webp){ .img-box align=left }

    - **Translucency**
    - **Hue**
    - **Saturation**
    - **Brightness**
    - **Color Variation Random Per Flower**: Applies subtle hue variations to each flower using random colors per geometry island, enhancing natural diversity.
    - Normal Strength
    - **Wetness**: The Wetness parameter simulates the effect of moisture on the stalk surface by reducing roughness. As wetness increases, the stalk's surface becomes smoother and glossier.
    - Wetness affected by Normal
    - **Roughness from Color**: Generates a Roughness map from the Color texture, breaking uniform roughness. Since most PlantFactory assets do not include dedicated Roughness maps and have a static value set, this feature provides an effective solution.

=== "Fruit"
    ![Material Settings](../images/material-settings_fruit.webp){ .img-box align=left }

    - **Translucency**
    - **Subsurface Weight**
    - **Subsurface Scale**
    - **Hue**
    - **Saturation**
    - **Brightness**
    - **Color Variation Random Per Fruit**: Applies subtle hue variations to each fruit using random colors per geometry island, enhancing natural diversity.
    - **Normal Strength:** This controls the Normal or Bump Strength. If no Normal is present, it uses Bump. If no Bump is present, it derives Bump from the Color texture.
    - **Wetness**: The Wetness parameter simulates the effect of moisture on the flower surface by reducing roughness. As wetness increases, the flower's surface becomes smoother and glossier.
    - Wetness affected by Normal
    - **Roughness from Color**: Generates a Roughness map from the Color texture, breaking uniform roughness. Since most PlantFactory assets do not include dedicated Roughness maps and have a static value set, this feature provides an effective solution.

=== "Bark"
    ![Material Settings](../images/material-settings_bark.webp){ .img-box align=left }

    - Hue
    - Saturation
    - Brightness
    - **Normal Strength**: This controls the Normal Strength. If no Normal is present, it uses Bump. If no Bump is present, it derives Bump from the Color texture.
    - **No Normal: Bump Strength**: This controls the Bump Strength if no Normal map is present.
    - **Roughness from Color**: Generates a Roughness map from the Color texture, breaking uniform roughness. Since most PlantFactory assets do not include dedicated Roughness maps and have a static value set, this feature provides an effective solution.

=== "General Settings"
    These settings affect all material types.

    - Color Variation By Location: Introduces subtle hue variations based on plant location to reduce uniformity and enhance realism when multiple plants of the same species are nearby.
    - **Import Translucency Map**: Uses the translucency texture(if found) instead of a static translucency value.
    - **User 'Add Shader'**: Use a Add Shader node to combine translucency with the main shader, instead of using a standard Mix Shader. This approach can provide more artistic control by directly adding light contributions from both shaders. However, it may sacrifice physical accuracy and break energy conservation, potentially resulting in unrealistic brightness or lighting behavior. This affects Leafs, Stalks and Flowers.
    - **Handle Vertex Colors**: Automatically adds a 'Color Attribute' node to the materials of plants with a 'Vertex Color Set' setup in PlantFactory.
        - **Add Vertex Color Node Groups**: Adds node groups to assist with color randomization based on Vertex Colors.
        - **Smart Vertex Identification**: Enable smarter vertex color identification by detecting meaningful (non-uniform) vertex colors. When disabled, a simpler algorithm checks for any use of vertex colors, which may include single-color meshes.


!!! info2  "Tip"
    - You can reset the settings to default by clicking on :blender_icon_recover_last: in the top right corner.
    -  Remember that you can always edit these settings for the plants after import by going to the [Post Processing](post_processing.md) panel.


PF2B will automatically attempt to set up additional textures from PlantFactory that are not included in the `.fbx` file (the exchange format between PlantFactory and Blender) but are found in the textures folder. This includes:

- Back Textures (Base Color & Normal)
- Translucency Textures
<!--

!!! warning  "Disclaimer"
    **NOTE that PF2B does not quarantee a 100% support for all plants.**

    PF2B is mainly focused on supporting the "PlantCatalog" library and your custom plants.

    While importing plants will work for 99% of cases there might be issues with the material & texture setup in some cases. PF2B tries to connect all found textures but unfortunately some plants might not follow correct naming standards that causes PF2B to miss them.

    So with that said the `PlantCatalog` library (which is the bulk of the Assets if you have downloaded all plants distributed by Bentley) works great overall and I would estimate around 95% of these plants should work without any manual intervention.

    The `PlantFactory` library (that are the original plants that come built in) has a much lower

    NOTE that this is dependent that the textures are named correctly inside PlantFactory and should include correct keywords for identification.

    - Back Textures: the word "back" as well as the corresponding type such as "color" or "normal" for back textures or "Translucency"
    - Translucency Textures

    PF2B tries to connect all found textures but unfortunately some plants might not follow correct naming standards that causes PF2B to miss these back textures. If you think your plant has some missing textures you can use the [Use a custom Export path](material_settings.md) to export your plants to a custom location for inspection.

 -->


## Shaders

The materials use carefully crafted custom Node Groups that are highly customizable.

![Shaders](../images/shaders.webp){ .img-box align=left .on-glb  }