# Frequently Asked Questions

<div class="faq" markdown>

### Why is my Plant Gallery View so small when using the "Browse Via Blender" mode?

:   Check that your `3D View` is large enough, as the gallery size depends on it. If you have the view split (for example, with the `Shader Editor`), it may cause the gallery to appear smaller.

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

### The translucency for my plant looks off. What can I do?

:   This might be caused by a low-quality translucency map that is not normalized and is either too bright or too dark, causing too much or too little translucency for the plant. If this is the case, you can:

    1. If you want to disable the translucency texture altogether, you can do this easily via the [Post Processing panel](../workflow/post_processing.md) by selecting the plant, editing the leaf material, and disabling it there.
    2. Manually go into the material and adjust the texture by, for example, adding a `Map Range` node between the texture and the shader and adjusting the brightness until the translucency looks correct.

    You can also disable the texture import by unchecking the `Import Translucency Map` option under the [import settings](../workflow/material_settings.md) to use a static translucency value instead.

</div>