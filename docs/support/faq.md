# Frequently Asked Questions

<div class="faq" markdown>

### Why is my Plant Gallery View so small when using the "Browse Via Blender" mode?

:   Check that your `3D View` is large enough, as the gallery size depends on it. If you have the view split (for example, with the `Shader Editor`), it may cause the gallery to appear smaller.


---


### What Normal Map format does PlantFactory use?

:   PlantFactory uses the **OpenGL** normal map format, which is the same as the one used in Blender, so no conversion is required.


---


### PlantFactory starts, but nothing happens, and no plant is imported into Blender

:   ![Addon Location](../images/pf_display-preview.webp){ .img-box align=right  }
:   Check that the **"Preview"** window under **"Display"** in PlantFactory is enabled, as shown in the screenshot here:

<div style="clear:both"></div>


---


### I receive a "Are you sure you want to abort the export" popup during import

:    ![Preferences - Misc](../images/abort-export-popup.webp){ .img-box align=right }
:   This is usually caused by PlantFactory not having enough time to load the geometry of the plant before the export is attempted. Try adjusting the [Geometry Load Buffer](../preferences.md#misc) under preferences to resolve this issue. As an alternative workaround, in cases where this persists, hold down the "Escape" key for 2-3 seconds to make the popup disappear.


---


### My plant appears too dark and some textures show black backgrounds

:    This issue is often caused by the `Transparency Bounces` setting in Blender being set too low. Increasing its value should help ensure proper light distribution and eliminate the dark areas.

    !!! abstract inline end "Example"
        ![Transparency light bounce example](../images/troubleshooting/troubleshoot_light-paths_example-4bounces.webp){ .on-glb width=49% data-description="Example of a value being too low, in this case, 4." }
        ![Transparency light bounce example](../images/troubleshooting/troubleshoot_light-paths_example-32bounces.webp){ .on-glb width=49% data-description="Example of a value being high enough. In this case, it is set to 32, which is more than required for most needs." }

    1. Navigate to the **Render Properties** tab.
    - Scroll down to the **Light Paths** section.
    - Locate the **Transparency Bounces** setting.
    - Increase the value for Transparency Bounces.
    - Re-render your scene to see if the issue is resolved.

    ![Preferences - Misc](../images/troubleshooting/troubleshoot_light-paths.webp){ .img-box  }

<div style="clear:both"></div>


---


### What is the difference between a Backlight texture and a Translucency texture?

:   There is no difference, both refer to the same type of texture used to simulate light passing through thin surfaces like leaves.


---


### My plant Materials looks off. What can I do?

#### The translucency looks off

:   This might be caused by a low-quality translucency map that is not normalized and is either too bright or too dark, causing too much or too little translucency for the plant. If this is the case, you can:

    1. If you want to disable the translucency texture altogether, you can do this easily via the [Post Processing panel](../workflow/post_processing.md) by selecting the plant, editing the leaf material, and disabling it there.
    2. Manually go into the material and adjust the texture by, for example, adding a `Color Ramp` or a `Map Range` node between the texture and the shader and adjusting the brightness until the translucency looks correct.

    If you believe the translucency texture setup is incorrect, please [get in touch](../support.md) with me and provide the plant details, and I'll investigate further.

    !!! info2 "Tip"
        You can also disable the translucency texture import by unchecking the `Import Translucency Map` option under the [import settings](../workflow/material_settings.md) to use a static translucency value instead.

#### The normals look off

:   ![Troubleshoot - Clear Custom Split Normals](../images/clear-custom-split-normals%20copy.webp){ .img-box align=right }
:   Try clearing **Custom Split Normals** to see if this helps. This can be done easily by selecting the plant and navigating to `Properties Panel > Data > Geometry Data > Clear Custom Split Normals Data`, as shown in the image:

    If the issue persists, please [get in touch](../support.md) with me and provide the plant details, and I'll investigate further.

<div style="clear:both"></div>

#### Other Textures Look Off / Missing Textures

This might be caused by inconsistent texture names, as mentioned under [PF2B: Under the Hood](../support/pf2b_under_the_hood.md#automated-setup). Please try to troubleshoot the issue using the [Troubleshoot Guide: Missing or Incorrect Textures](../support/guides.md#missing-or-incorrect-textures) first to pinpoint the problem.

!!! info2 ""
    If there are textures that are not connected or are incorrectly connected for a specific plant, please [get in touch](../support.md) with me and provide the plant details, such as the name of the plant and the preset used, and I'll investigate further.



---


### Plant Geometry looks incorrect. What can I do?

:   Please [get in touch](../support.md) with me and provide the plant details, and I'll investigate further.

</div>