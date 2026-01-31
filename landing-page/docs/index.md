---
hide:
  - navigation
  - toc
  - title
  - footer
---
<meta name="darkreader-lock"> <!-- To fix parallax layer issue with darkreader -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap" rel="stylesheet">

<div class="content">
	<div class="paralax">
		<div class="layer mountain" style="filter:blur(0.1px);"></div>
        <div class="layer fog" style="opacity:0.9; height:100%;"></div>
        <div class="layer cloud"></div>
        <!-- <div class="overlay">
            <img src="images/Text-logo.png" class="logo">
        </div> -->
        <div class="overlay">
            <div class="pf2b-logo">
                <div class="logo-main">PF2B</div>
                <div class="logo-line"></div>
                <div class="logo-sub">PlantFactory to Blender</div>
            </div>
        </div>
		<div class="layer hills"></div>
        <div class="layer fog" style="opacity:0.1; filter:saturate(350%);"></div>
        <div class="layer foreground2"></div>
		<div class="layer foreground"></div>
    </div>
</div>


<div style="text-align: center;" markdown>

**PF2B** is an addon that enables the direct import of plants created in [PlantFactory](https://www.bentley.com/software/e-on-software-free-downloads/){ target="_blank" } by e-on software into Blender.
Since PlantFactory is now freely available as a **perpetual version**, anyone can generate detailed vegetation assets and bring them directly into Blender with PF2B.

</div>


<div class="top-header" markdown>

# **Who is this for?**

<div style="padding-left:1.75em" markdown>

Whether you're a **3D artist** looking for seamless Blender integration, an **environment designer** building large natural scenes, or an **archviz professional** perfecting exterior renders, PF2B streamlines your vegetation workflow.

</div>


# **Why use PF2B?**

<div class="feature-list" markdown>

- **Procedural variety** – Access over **200 plant species** and more than **10,000 unique presets** with infinite procedural variations.
- **Performance ready** – Choose between **low-poly** and **high-poly** options to perfectly match your scene's needs.
- **Instant setup** – PF2B automatically builds materials, fixes missing textures, and applies custom shaders, giving you perfect results right after import.
- **Biome support** – Includes ready-to-use **biomes** compatible with **Geo-Scatter** and **Biome-Reader**, allowing you to build natural landscapes in just a few clicks.

</div>

<!-- Bring the power of **PlantFactory** to **Blender** with **PF2B** and take your vegetation workflow to the next level! 🌿 -->

</div> <!-- top-header end -->

---

<video width="100%" loop autoplay muted style="margin:-1em 0 -1.5em 0">
    <source src="videos/turntable.mp4" type="video/mp4">
</video>

<!-- <div class="section-box" style="--accent-color: var(--main-section-color-import);" markdown> -->
<div class="section-box" markdown>

## One-Click Import

<video width="100%" loop autoplay muted>
    <source src="videos/import-single.mp4" type="video/mp4">
</video>

## Queue Import

Or take advantage of the queue system to efficiently import your plants in batches!
<video width="100%" loop autoplay muted>
    <source src="videos/import-queue.mp4" type="video/mp4">
</video>

> *Note: The import processes shown in the videos have been sped up for demonstration purposes. Actual speed vary depending on your computer's processing power.*

</div> <!-- section end -->


<!-- <div class="section-box" style="--accent-color: var(--main-section-color-plantbrowser);" markdown> -->
<div class="section-box" markdown>

## Plant Browser

Easily explore over 20,000 plant presets with a custom-built browser. Powerful search and filtering tools make it simple to find and preview the perfect vegetation for any scene.

<video width="100%" loop autoplay muted>
    <source src="videos/gallery.mp4" type="video/mp4">
</video>

<br>

PF2B also integrates with Blender's native Asset Browser as a supplementary workflow for fast reuse. Using the built-in **Biomes**, **Collections**, and **Plant Storer** tools, you build your own shared plant library once by importing the plants you need.


![Blender Asset Browser](images/biome_collection_library-example.webp){ .img-box }

After that, all imported plants are instantly available in the Blender Asset Browser across all projects, with no waiting and no re-importing. This provides a fast alternative to the regular PF2B browser.

</div> <!-- section end -->



<!-- <div class="section-box" style="--accent-color: var(--main-section-color-adjust);" markdown> -->
<div class="section-box" markdown>

## Adjust

Effortlessly adjust your plants to fit any scene. The Adjust tools let you refine the visual appearance of already imported plants by editing their materials and applying additional effects, all from a centralized panel without manual material editing.

<video width="100%" loop autoplay muted>
    <source src="videos/postprocessing.mp4" type="video/mp4">
</video>

!!! info2 "Go Further: Edit Your Plants in PlantFactory"
    Take customization further by editing your plants directly in **PlantFactory**. Adjust parameters, growth, and materials, or create entirely new variations with full procedural control. Whether you need detailed hero assets or optimized low-poly vegetation, **PlantFactory** gives you the flexibility to refine your plants to fit any project.



### Add Snow

<br>
Choose from multiple snow systems for different visual styles and performance needs, or combine them for richer results.

<video width="100%" loop autoplay muted>
    <source src="videos/snow_turntable.mp4" type="video/mp4">
</video>

Fully customizable and easy to integrate into your scene
<video width="100%" loop autoplay muted>
    <source src="videos/snow_example.mp4" type="video/mp4">
</video>

!!! info2 "Tip"
    You can also use these snow systems on non-PF2B plants, making them compatible with any of your own assets.

</div> <!-- section end -->



<div class="section-box" style="--accent-color: var(--main-accent-color-green);" markdown>

## :material-leaf:{style="color:var(--main-section-color-plants);"}   Plants & Presets

### Free Libraries

- The **PlantCatalog** library includes **194** unique plant species across **11** categories, offering a total of **10,377** presets. When factoring in multiple detail levels, this expands to **450** plants and **23,193** presets, providing you with an incredible range of options for your projects!

- The regular **PlantFactory** library features **41** plant species with **22** unique presets, primarily in Low Poly detail level.

=== "Plant Species"
    A selection of available plant species:
    ![PlantCatalog](images/plantcatalog.webp){ style="display:block; margin:auto;" }

=== "Example Presets"
    Each plant species comes with numerous presets, allowing for customization and versatility. Below is an example showcasing all **115 presets** for the 'Quercus robur forest HD' plant:
    ![Presets](images/presets.webp){ style="display:block; margin:auto;" }

=== "Plant List"
    <div class="library" markdown>

    The lists below show all available plant species for the **PlantCatalog** and **PlantFactory** libraries. For expanded details, see the [full lists](https://pf2b.roberd.net/plants/){ target="_blank" } on the documentation website.

    <!-- Each category is grouped for easy navigation. Expand the boxes to view individual plants. -->

    ??? plant "PlantCatalog Library"
        - **Presets**: Count shown is per detail level. A plant with 20 presets and two detail levels (HD, LD) has 40 total presets (20 for each level).
        - **Polycount**: Range includes all detail levels combined, showing the minimum and maximum across all presets.

        ??? plant broadleaf "Broadleaf Trees"
            | English Name | Latin Name | Detail Levels | Presets | Polycount |
            | -------------- | ------------ | --------------- | --------- | ----------- |
            | Baobab Tree | Adansonia digitata | HD, LD, RT | 20 | 4.6K - 410K |
            | Red Buckeye | Aesculus pavia | HD, LD | 20 | 12K - 180K |
            | Red Horse Chestnut | Aesculus x carnea | HD, LD | 30 | 17K - 490K |
            | Hong Kong Orchid Tree | Bauhinia blakeana | HD, LD, RT | 40 | 3.4K - 290K |
            | Hong Kong Orchid Tree | Bauhinia blakeana V2 | HD, LD | 40 | 13K - 480K |
            | Bitter Orange | Citrus x aurantium | HD, LD | 30 | 52K - 780K |
            | Lemon Tree | Citrus x limon | HD, LD | 30 | 33K - 370K |
            | Royal Poinciana (Flamboyant Tree) | Delonix regia | HD, LD, RT | 40 | 5.3K - 640K |
            | River Red Gum | Eucalyptus camaldulensis | HD, LD, RT | 40 | 0.91K - 800K |
            | Eucalyptus Leaf Litter | Eucalyptus leaf litter | HD | 24 | 0.36K - 69K |
            | Snow Gum | Eucalyptus pauciflora | HD, LD, RT | 40 | 4.4K - 950K |
            | Manna Gum | Eucalyptus viminalis | HD, LD, RT | 40 | 2.4K - 980K |
            | Common Fig Tree | Ficus carica | HD | 30 | 12K - 560K |
            | Blue Jacaranda | Jacaranda mimosifolia | HD, RT | 40 | 1.9K - 570K |
            | Chinese Flame Tree | Koelreuteria bipinnata | HD, LD, RT | 20 | 0.66K - 1200K |
            | Chinaberry Tree | Melia azedarach | HD, LD | 30 | 22K - 640K |
            | Olive Tree | Olea europaea | HD, LD, RT | 40 | 1.4K - 1100K |
            | Ornamental Olive Tree | Olea europaea ornamental | HD, LD, RT | 12 | 14K - 1700K |
            | Pink Frangipani | Plumeria rubra pink | HD, LD | 50 | 4.2K - 330K |
            | Black Poplar | Populus nigra | HD, LD | 105 | 13K - 1500K |
            | Lombardy Poplar | Populus nigra 'Italica' | HD, LD | 75 | 16K - 1800K |
            | Pin Oak | Quercus palustris | HD, LD | 118 | 12K - 1300K |
            | Green Pillar Pin Oak | Quercus palustris 'Green Pillar' | HD, LD | 75 | 20K - 1100K |
            | Dead English Oak | Quercus robur dead | HD, LD, RT | 100 | 0.62K - 260K |
            | Dead English Oak Branch | Quercus robur dead branch | HD, LD, RT | 24 | 0.97K - 23K |
            | Colonised Dead English Oak | Quercus robur dead colonised | HD, LD, RT | 85 | 3.5K - 2000K |
            | English Oak Forest | Quercus robur forest | HD, LD | 115 | 7.7K - 2300K |
            | Colonised English Oak Forest | Quercus robur forest colonised | HD, LD | 115 | 15K - 2500K |
            | English Oak Leaf Litter | Quercus robur leaf litter | HD, LD | 58 | 0.00K - 160K |
            | Lone English Oak | Quercus robur lone | HD, LD | 95 | 9.5K - 4000K |
            | English Oak Seedling | Quercus robur seedling | HD, LD | 12 | 0.37K - 57K |
            | Urban English Oak | Quercus robur urban | HD, LD | 45 | 39K - 4000K |
            | Northern Red Oak | Quercus rubra | HD, LD, RT | 138 | 9.2K - 1200K |
            | Northern Red Oak Branch | Quercus rubra branch | HD | 3 | 48K - 52K |
            | Northern Red Oak Leaf Litter | Quercus rubra leaf litter | HD | 36 | 0.01K - 150K |
            | Northern Red Oak Leaf Litter | Quercus rubra leaf litter V2 | HD | 36 | 0.01K - 160K |
            | Northern Red Oak Seedlings | Quercus rubra seedlings | HD | 12 | 0.80K - 50K |
            | Red Mangrove Forest | Rhizophora forest | HD, LD | 160 | 16K - 2700K |
            | Lone Red Mangrove | Rhizophora lone | HD, LD | 120 | 11K - 3200K |
            | Red Mangrove Seedling | Rhizophora seedling | HD, LD | 18 | 0.36K - 49K |
            | White Willow | Salix alba | HD, LD | 206 | 3.1K - 1300K |
            | Pollarded White Willow | Salix alba pollarded | HD, LD | 63 | 21K - 590K |
            | Weeping Willow | Salix babylonica | HD, LD | 129 | 6.6K - 2700K |
            | Pollarded Weeping Willow | Salix babylonica pollarded | HD, LD | 63 | 21K - 690K |
            | Umbrella Thorn Acacia | Vachellia tortilis | HD, LD | 15 | 9.8K - 5500K |

        ??? plant bushes "Bushes"
            | English Name | Latin Name | Detail Levels | Presets | Polycount |
            | -------------- | ------------ | --------------- | --------- | ----------- |
            | Angel's Trumpet | Brugmansia x insignis | HD, LD | 5 | 4.9K - 130K |
            | Bottle Brush | Callistemon laevis | HD, LD, RT | 20 | 0.03K - 290K |
            | Stiff Bottlebrush | Callistemon rigidus | HD, LD, RT | 20 | 0.03K - 230K |
            | Dwarf Bottlebrush | Callistemon viminalis 'Little John' | HD, LD, RT | 10 | 0.04K - 340K |
            | Dark Pink Heather | Calluna vulgaris dark pink | HD, LD | 105 | 0.67K - 1300K |
            | Light Pink Heather | Calluna vulgaris light pink | HD, LD | 105 | 0.69K - 1000K |
            | Silver Heather | Calluna vulgaris silver | HD, LD | 105 | 0.70K - 1400K |
            | White Heather | Calluna vulgaris white | HD, LD | 105 | 0.69K - 1100K |
            | Mexican Orange Blossom | Choisya ternata | HD, LD, RT | 10 | 0.10K - 140K |
            | Golden Dewdrop | Duranta repens | HD, LD, RT | 20 | 0.43K - 570K |
            | Dark Pink Winter Heath | Erica carnea dark pink | HD, LD | 105 | 0.85K - 1200K |
            | Light Pink Winter Heath | Erica carnea light pink | HD, LD | 105 | 0.85K - 1200K |
            | White Winter Heath | Erica carnea white | HD, LD | 105 | 0.85K - 1200K |
            | Upright English Ivy | Hedera helix 'Erecta' | HD, LD | 10 | 6.9K - 80K |
            | Chinese Hibiscus | Hibiscus rosa-sinensis | HD, LD, RT | 20 | 0.27K - 230K |
            | Red Chinese Ixora | Ixora chinensis red | HD, LD, RT | 10 | 0.78K - 200K |
            | Chinese Fringe Flower | Loropetalum chinense var rubrum | HD, LD, RT | 10 | 0.10K - 270K |
            | Tree Lupine | Lupinus arboreus | HD, LD | 25 | 16K - 780K |
            | Turk's Cap | Malvaviscus penduliflorus | HD, LD, RT | 20 | 0.26K - 320K |
            | Coleus | Plectranthus scutellarioides | HD, LD, RT | 40 | 0.12K - 640K |
            | Fairway Mosaic Coleus | Plectranthus scutellarioides 'Fairway Mosaic' | HD, LD, RT | 40 | 0.12K - 640K |
            | Fairway Yellow Coleus | Plectranthus scutellarioides 'Fairway Yellow' | HD, LD, RT | 40 | 0.12K - 640K |
            | Kong Rose Coleus | Plectranthus scutellarioides 'Kong Rose' | HD, LD, RT | 40 | 0.12K - 640K |
            | Dark Chocolate Coleus | Plectranthus scutellarioides 'Premium Sun Dark Chocolate' | HD, LD, RT | 40 | 0.12K - 640K |
            | Saturn Coleus | Plectranthus scutellarioides 'Saturn' | HD, LD, RT | 40 | 0.12K - 640K |
            | Vulcan Coleus | Plectranthus scutellarioides 'Vulcan' | HD, LD, RT | 10 | 0.06K - 380K |
            | Vulcan Coleus | Plectranthus scutellarioides 'Vulcan' V2 | HD, LD, RT | 40 | 0.12K - 640K |
            | Wizard Jade Coleus | Plectranthus scutellarioides 'Wizard Jade' | HD, LD, RT | 40 | 0.12K - 640K |
            | Wizard Velvet Red Coleus | Plectranthus scutellarioides 'Wizard Velvet Red' | HD, LD, RT | 40 | 0.12K - 640K |
            | Boule de Neige Rhododendron | Rhododendron 'Boule de neige' | HD, LD | 90 | 0.96K - 1300K |
            | Everestianum Rhododendron | Rhododendron 'Everestianum' | HD, LD | 90 | 0.96K - 1300K |
            | Nova Zembla Rhododendron | Rhododendron 'Nova Zembla' | HD, LD | 90 | 0.96K - 1300K |
            | Catawba Rhododendron | Rhododendron catawbiense | HD, LD | 150 | 1.5K - 950K |
            | Rusty-Leaved Alpenrose | Rhododendron ferrugineum | HD, LD | 125 | 0.23K - 620K |
            | Great Laurel | Rhododendron maximum | HD, LD | 100 | 3.2K - 1600K |
            | Elaeagnus Willow | Salix elaeagnos | HD, LD | 99 | 1.6K - 440K |
            | French Tamarisk | Tamarix gallica | HD | 20 | 4.5K - 190K |
            | Bilberry | Vaccinium myrtillus | HD, LD | 105 | 0.09K - 140K |

        ??? plant climbers "Climbers"
            | English Name | Latin Name | Detail Levels | Presets | Polycount |
            | -------------- | ------------ | --------------- | --------- | ----------- |
            | English Ivy | Hedera helix wall climber green | HD, LD | 35 | 0.19K - 830K |

        ??? plant coniferous "Coniferous"
            | English Name | Latin Name | Detail Levels | Presets | Polycount |
            | -------------- | ------------ | --------------- | --------- | ----------- |
            | Pine Cone | Generic pine cone | HD, LD | 15 | 3.1K - 37K |
            | Long-needle Pine Litter | Long-needle pine litter | HD, LD | 39 | 0.10K - 170K |
            | Norway Spruce | Picea abies | HD, LD | 43 | 2.2K - 320K |
            | Maxwell's Norway Spruce | Picea abies 'Maxwellii' | HD, LD | 10 | 6.5K - 140K |
            | Bird's Nest Spruce | Picea abies 'Nidiformis' | HD, LD | 10 | 2.3K - 75K |
            | Engelmann Spruce | Picea engelmannii | HD, LD | 43 | 1.5K - 350K |
            | Black Spruce | Picea mariana | HD, LD | 38 | 1.5K - 440K |
            | Heath-like Black Spruce | Picea mariana 'Ericoides' | HD, LD | 10 | 1.1K - 78K |
            | Colorado Blue Spruce | Picea pungens | HD, LD | 43 | 2.1K - 350K |
            | Globe Blue Spruce | Picea pungens 'Glauca Globosa' | HD, LD | 10 | 3.2K - 63K |
            | Koster Blue Spruce | Picea pungens 'Koster' | HD, LD | 43 | 1.5K - 180K |
            | Dead Lodgepole Pine Forest | Pinus contorta dead forest | HD, LD | 150 | 1.1K - 470K |
            | Dead Lodgepole Pine | Pinus contorta dead lone | HD, LD | 85 | 1.7K - 440K |
            | Lodgepole Pine Forest | Pinus contorta var latifolia forest | FG, HD, LD | 135 | 1.5K - 3500K |
            | Lodgepole Pine | Pinus contorta var latifolia lone | FG, HD, LD | 85 | 4.6K - 3600K |
            | Slash Pine Forest | Pinus elliottii forest | FG, HD, LD | 120 | 3.7K - 530K |
            | Slash Pine | Pinus elliottii lone | FG, HD, LD | 105 | 6.3K - 1000K |
            | Jeffrey Pine Forest | Pinus jeffreyi forest | FG, HD, LD | 135 | 5.3K - 2100K |
            | Young Jeffrey Pine | Pinus jeffreyi juvenile | FG, HD, LD | 102 | 0.06K - 120K |
            | Jeffrey Pine | Pinus jeffreyi lone | FG, HD, LD | 105 | 12K - 3100K |
            | Maritime Pine Forest | Pinus pinaster forest | FG, HD, LD | 135 | 2.1K - 1600K |
            | Maritime Pine | Pinus pinaster lone | FG, HD, LD | 125 | 10K - 1500K |
            | Ponderosa Pine Branch | Pinus ponderosa branch | HD, LD | 80 | 11K - 270K |
            | Dead Ponderosa Pine Forest | Pinus ponderosa dead forest | HD, LD | 150 | 3.7K - 1200K |
            | Dead Ponderosa Pine | Pinus ponderosa dead lone | HD, LD | 85 | 4.1K - 900K |
            | Ponderosa Pine Forest | Pinus ponderosa forest | FG, HD, LD | 135 | 5.7K - 2700K |
            | Young Ponderosa Pine | Pinus ponderosa juvenile | FG, HD, LD | 103 | 0.06K - 120K |
            | Ponderosa Pine | Pinus ponderosa lone | FG, HD, LD | 105 | 15K - 4000K |
            | Uprooted Ponderosa Pine | Pinus ponderosa uprooted | HD, LD | 245 | 0.56K - 890K |
            | Giant Sequoia | Sequoiadendron giganteum | LD, RT | 29 | 0.58K - 220K |
            | Short-needle Pine Litter | Short-needle pine litter | HD, LD | 39 | 0.14K - 180K |
            | Bald Cypress Forest | Taxodium distichum forest | HD, LD | 225 | 2.2K - 1800K |
            | Bald Cypress | Taxodium distichum lone | HD, LD | 200 | 4.8K - 2500K |
            | Urban Bald Cypress | Taxodium distichum urban | HD, LD | 150 | 7.2K - 2300K |
            | Western Red Cedar | Thuja plicata | HD, LD, RT | 27 | 1.2K - 280K |
            | Mountain Hemlock | Tsuga mertensiana | HD, LD | 43 | 0.96K - 400K |

        ??? plant ferns "Ferns"
            | English Name | Latin Name | Detail Levels | Presets | Polycount |
            | -------------- | ------------ | --------------- | --------- | ----------- |
            | Male Fern | Dryopteris filix-mas | HD, LD, RT | 50 | 3.2K - 190K |
            | Common Polypody | Polypodium vulgare | HD, LD, RT | 55 | 0.08K - 59K |

        ??? plant grass "Grass"
            | English Name | Latin Name | Detail Levels | Presets | Polycount |
            | -------------- | ------------ | --------------- | --------- | ----------- |
            | Umbrella Sedge | Cyperus alternifolius | HD, LD | 60 | 0.93K - 420K |
            | Papyrus | Cyperus papyrus | HD, LD | 60 | 3.8K - 1600K |
            | Tall Fescue | Festuca arundinacea | HD, LD | 55 | 0.33K - 670K |
            | Bear's Skin Fescue | Festuca gautieri | HD, LD | 50 | 1.2K - 180K |
            | Blue Fescue | Festuca glauca | HD, LD | 50 | 1.1K - 180K |
            | Red Fescue | Festuca rubra | HD, LD | 56 | 0.25K - 820K |
            | Lawn Grass | Generic grass lawn | HD, LD | 48 | 0.16K - 510K |
            | Perennial Ryegrass | Lolium perenne | HD, LD | 55 | 0.20K - 710K |
            | Reed Canary Grass | Phalaris arundinacea | HD, LD | 64 | 0.20K - 93K |
            | Common Reed | Phragmites australis | HD, LD | 60 | 0.22K - 140K |
            | Broadleaf Cattail | Typha latifolia | HD, LD | 60 | 0.49K - 180K |

        ??? plant groundcovers "Ground Covers "
            | English Name | Latin Name | Detail Levels | Presets | Polycount |
            | -------------- | ------------ | --------------- | --------- | ----------- |
            | Wild Peanut | Arachis duranensis | HD, LD, RT | 5 | 0.01K - 93K |
            | English Ivy Ground Cover | Hedera helix ground cover green | HD, LD, RT | 25 | 0.02K - 420K |
            | Common Periwinkle | Vinca minor | RT | 3 | 0.01K - 0.08K |

        ??? plant mushrooms "Mushrooms"
            | English Name | Latin Name | Detail Levels | Presets | Polycount |
            | -------------- | ------------ | --------------- | --------- | ----------- |
            | King Bolete | Boletus edulis | HD, LD, RT | 18 | 1.1K - 20K |
            | Red-Belted Conk | Fomitopsis pinicola | HD, LD, RT | 15 | 0.16K - 14K |
            | Oak Lichen | Quercus lichen | RT | 13 | 0.01K - 1.3K |

        ??? plant palms "Palms"
            | English Name | Latin Name | Detail Levels | Presets | Polycount |
            | -------------- | ------------ | --------------- | --------- | ----------- |
            | Christmas Palm | Adonidia merrillii | HD, LD | 35 | 16K - 500K |
            | Alexandra Palm | Archontophoenix alexandrae | HD, LD, RT | 30 | 1.8K - 87K |
            | Pindo Palm | Butia capitata | HD, LD, RT | 15 | 1.5K - 120K |
            | European Fan Palm | Chamaerops humilis | HD, LD, RT | 30 | 0.83K - 130K |
            | Sago Palm | Cycas revoluta | HD, LD, RT | 40 | 1.5K - 670K |
            | Areca Palm | Dypsis lutescens | HD, LD | 62 | 8.7K - 1600K |
            | Bottle Palm | Hyophorbe lagenicaulis | HD, LD, RT | 15 | 4.2K - 52K |
            | Canary Island Date Palm | Phoenix canariensis | HD, LD, RT | 40 | 3.5K - 620K |
            | Date Palm | Phoenix dactylifera | HD, LD, RT | 78 | 0.63K - 2200K |
            | Lady Palm | Rhapis excelsa | HD, LD, RT | 30 | 0.38K - 160K |
            | Royal Palm | Roystonea regia | HD, LD | 25 | 77K - 280K |
            | Windmill Palm | Trachycarpus fortunei | HD, LD, RT | 25 | 1.4K - 150K |
            | California Fan Palm | Washingtonia filifera | HD, LD, RT | 25 | 3.5K - 150K |
            | Mexican Fan Palm | Washingtonia robusta | HD, LD, RT | 10 | 3.6K - 220K |
            | Mexican Fan Palm | Washingtonia robusta V2 | HD, LD | 10 | 44K - 240K |

        ??? plant perennials "Perennials"
            | English Name | Latin Name | Detail Levels | Presets | Polycount |
            | -------------- | ------------ | --------------- | --------- | ----------- |
            | Hart's Tongue Fern | Asplenium scolopendrium | HD, LD | 21 | 4.6K - 250K |
            | Common Daisy | Bellis perennis | HD, LD, RT | 12 | 0.06K - 22K |
            | Deer Fern | Blechnum spicant | HD, LD | 21 | 1.5K - 63K |
            | Orange Canna Lily | Canna x generalis orange | HD, LD, RT | 12 | 0.33K - 45K |
            | Fireweed | Chamerion angustifolium | HD, LD | 21 | 0.79K - 610K |
            | Giant Crinum Lily | Crinum asiaticum | HD, LD, RT | 8 | 1.8K - 89K |
            | Horsetail | Equisetum hyemale | HD, LD | 60 | 0.09K - 270K |
            | Great Horsetail | Equisetum telmateia | HD, LD | 55 | 3.7K - 970K |
            | Fuchsia Guzmania | Guzmania lingulata fuchsia | HD, LD | 32 | 7.8K - 29K |
            | Pink Guzmania | Guzmania lingulata pink | HD, LD | 32 | 7.8K - 29K |
            | Red Guzmania | Guzmania lingulata red | HD, LD | 32 | 7.8K - 29K |
            | White Guzmania | Guzmania lingulata white | HD, LD | 32 | 7.8K - 29K |
            | Yellow Guzmania | Guzmania lingulata yellow | HD, LD | 32 | 7.8K - 29K |
            | Spiral Rush | Juncus effusus 'Spiralis' | HD | 4 | 28K - 61K |
            | Stiff Rush | Juncus rigidus | HD | 6 | 20K - 40K |
            | Bigleaf Lupine | Lupinus polyphyllus | HD, LD | 18 | 1K - 250K |
            | American Lotus | Nelumbo lutea | HD, LD | 32 | 0.65K - 190K |
            | Sacred Lotus | Nelumbo nucifera | HD, LD | 32 | 0.65K - 190K |
            | White Water Lily | Nymphaea alba | HD, LD | 27 | 0.13K - 230K |
            | Common Haircap Moss | Polytrichum commune | HD, LD, RT | 20 | 0.07K - 940K |
            | River Lily | Strelitzia juncea | HD, LD, RT | 10 | 0.20K - 87K |
            | Bird of Paradise | Strelitzia reginae | HD, LD, RT | 10 | 0.14K - 110K |
            | Tree Moss | Thuidium tamariscinum | HD, LD | 8 | 0.01K - 85K |
            | Spanish Moss | Tillandsia usneoides | HD, LD, RT | 10 | 0.22K - 870K |
            | Ball Moss | Tillandsia utriculata | HD, LD | 20 | 2.4K - 18K |
            | Lesser Periwinkle | Vinca minor | HD, LD | 12 | 0.14K - 18K |
            | Vriesea Carinata | Vriesea carinata | HD, LD | 36 | 13K - 71K |
            | Vriesea Splendens | Vriesea splendens | HD, LD | 36 | 13K - 60K |
            | Calla Lily | Zantedeschia aethiopica | HD, LD, RT | 12 | 0.82K - 69K |

        ??? plant succulents "Succulents"
            | English Name | Latin Name | Detail Levels | Presets | Polycount |
            | -------------- | ------------ | --------------- | --------- | ----------- |
            | Ponytail Palm | Beaucarnea recurvata | HD, LD | 40 | 3.2K - 1500K |
            | Saguaro Cactus | Carnegiea gigantea | HD, LD | 30 | 1K - 140K |
            | Saguaro Cactus | Carnegiea gigantea V2 | HD, LD | 30 | 1.1K - 150K |
            | Cabbage Tree | Cordyline australis | HD, LD | 50 | 1.6K - 630K |
            | Dragon Tree | Dracaena draco | HD, LD | 50 | 1.1K - 3900K |
            | Golden Barrel Cactus | Echinocactus grusonii | HD, LD, RT | 30 | 2.4K - 230K |
            | Candelabra Euphorbia | Euphorbia candelabrum | HD, LD, RT | 40 | 1.2K - 1700K |
            | Prickly Pear Cactus | Opuntia ficus-indica | HD, LD, RT | 54 | 0.46K - 860K |
            | Joshua Tree | Yucca brevifolia | HD, LD | 30 | 2.1K - 560K |
            | Spineless Yucca | Yucca elephantipes | HD, LD | 30 | 2.5K - 440K |
            | Beaked Yucca | Yucca rostrata | HD, LD | 30 | 6.9K - 150K |



    ??? plant "PlantFactory Library"
        <br>
        Listings show common names first, with Latin names in parentheses when known.

        <h5>Bushes</h5>

        - Red Currant ***(Ribes rubrum)***

        <h5>Flowers</h5>

        - Asian Lily ***(Lilium asiaticum)***
        - Common Yarrow ***(Achillea millefolium)***
        - Common Primrose ***(Primula vulgaris)***
        - Crocus ***(Crocus spp.)***
        - Dandelion ***(Taraxacum officinale)***
        - Hydrangea "Red" ***(Hydrangea paniculata)***
        - Lily of the Valley ***(Convallaria majalis)***
        - Oxeye Daisy ***(Leucanthemum vulgare)***
        - Red Clover ***(Trifolium pratense)***
        - Snowdrop ***(Galanthus nivalis)***
        - Sunflower ***(Helianthus annuus)***
        - Marigold ***(Tagetes spp.)***

        <h5>Grasses</h5>

        - Grass
        - Curly Dock ***(Rumex crispus)***
        - Broad-leaved Dock ***(Rumex longifolius)***

        <h5>Palms</h5>

        - Coconut Palm "Straight Long Bark" ***(Cocos nucifera)***
        - Date Palm ***(Phoenix dactylifera)***
        - Date Palm "HD" ***(Phoenix dactylifera)***
        - Mexican Fan Palm "Young" ***(Washingtonia robusta)***

        <h5>Sci-Fi</h5>

        - Pineapple Plant
        - Star Plant

        <h5>Trees</h5>

        - Acacia Dry "Green Mature" ***(Acacia spp.)***
        - Acacia Huge "Old HD" ***(Acacia spp.)***
        - Sugar Maple ***(Acer saccharum)***
        - Banana Plant ***(Musa spp.)***
        - Common Hazel ***(Corylus avellana)***
        - Crack Willow ***(Salix fragilis)***
        - English Oak ***(Quercus robur)***
        - Ficus Tree ***(Ficus spp.)***
        - Mediterranean Cypress ***(Cupressus sempervirens)***
        - London Plane ***(Platanus x acerifolia)***
        - London Plane "Season" ***(Platanus x acerifolia)***
        - Northern Red Oak "Mature" ***(Quercus rubra)***
        - Northern Red Oak "Old" ***(Quercus rubra)***
        - Northern Red Oak "Young" ***(Quercus rubra)***
        - Sassafras ***(Sassafras albidum)***
        - Scots Pine "Mature" ***(Pinus sylvestris)***
        - White Ash ***(Fraxinus americana)***
        - White Ash "Season" ***(Fraxinus americana)***
        - White Fir "Mature HD" ***(Abies concolor)***

    </div> <!-- /Library -->

</div> <!-- section end -->



<div class="section-box biome-section" style="--accent-color: var(--main-section-color-biome);" markdown>

## Biomes

PF2B includes a growing library of ready-made **biomes**, designed to work seamlessly with both **Geo-Scatter** and **Biome-Reader**.

These biomes let you transform empty terrain into rich, natural environments in just a few clicks, with realistic plant variety, natural density, and balanced ecosystem compositions.

<video width="100%" loop autoplay muted>
    <source src="videos/biome.mp4" type="video/mp4">
</video>

<div class="biome-section">
  <div class="biome-img-wrapper">
    <img src="images/biomes/blueberry_forest/Aerial.webp" class="img-box">
  </div>
  <div class="biome-img-wrapper">
    <img src="images/biomes/blueberry_forest/Main.webp"  class="img-box">
  </div>
  <div class="biome-img-wrapper">
    <img src="images/biomes/blueberry_forest/Closeup.webp"  class="img-box">
  </div>
  <div class="biome-img-wrapper">
    <img src="images/biomes/blueberry_forest/Secondary_1.webp"  class="img-box">
  </div>
  <div class="biome-img-wrapper">
    <img src="images/biomes/blueberry_forest/Secondary_2.webp"  class="img-box">
  </div>
  <div class="biome-img-wrapper">
    <img src="images/biomes/broadleaf_forest.webp" class="img-box">
  </div>
</div>

</div> <!-- section end -->



---


## ⚠️ Notes Before Purchasing ⚠️

### Requirements

- Blender 4.5 or newer
- PlantFactory 2024
- Operating System: Windows

!!! info2 ""
    PF2B 1.x (compatible with Blender 4.2+) remains available for download but does not include features from version 2.0 onward.

!!! warning ""
    Before purchasing, please ensure you fully understand what this addon does and its requirements. This addon relies on third-party software called **PlantFactory** (approximately 1.6 GB) to function. While PlantFactory is free, setting it up requires some additional steps, which are clearly outlined in the [Getting Started](https://pf2b.roberd.net/getting_started/){ target="_blank" } guide. For full functionality, it is also recommended to install the **PlantCatalog** library (approximately 20 GB), which significantly enhances the range of plants available for use but may take some time to download and install.


---


## Documentation

Comprehensive documentation can be found at [pf2b.roberd.net](https://pf2b.roberd.net/){ target="_blank" }. Start with the [Getting Started](https://pf2b.roberd.net/getting_started/){ target="_blank" } section for setup instructions, then explore detailed settings and troubleshooting information.

??? info "Changelog"
    {% include-markdown "../changelog.md.ignore" %}


---


<div class="section-box" markdown>

## Other Add-ons by Me

### BatchGenie {style="margin-bottom:0.1em;"}
An add-on designed to simplify and automate common asset-related tasks in Blender.

<div class="batchgenie-wrapper">
    <a href="https://blendermarket.com/products/batchgenie" target="_blank"><img src="images/batchgenie.webp" class="img-box"></a>
</div>

</div> <!-- section end -->


---


<div style="text-align: center;" markdown>

*PF2B is a third-party addon and is not an official product of Bentley Systems, E-on Software, or PlantFactory. It is not affiliated with or endorsed by these companies.*{style="color:var(--md-default-fg-color--light)"}

</div>



