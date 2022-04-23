import json

print("Start:#### \n")

artifact_name = "NULL Name"
artifact_date = "NULL Date"
artifact_material = "NULL Material"
artifact_found_in = "NULL Date"
artifact_description = "NULL Desc"
artifact_target = "NULL Target"

with open("artifact_data.json", "r") as json_file:
    json_data = json.load(json_file)

example = {
  "Buddha_statue_Unified_Silla": {
    "name": "Buddha statue Unified Silla",
    "material": "Gilt bronze",
    "date": "8th century",
    "found_in": "Silla",
    "description": "The gilt-bronze statue is a typical small icon made for private devotion in the Unified Silla kingdom and exemplifies a high point in the production of Buddhist sculpture in Korea. The Buddha's hand gesture (mudra) symbolizes the dispelling of fear and the granting of wishes.",
    "target": "d237f8e61a5749a5be29398b16aa82a7/embed"
  },
  "Tombstone_of_King_Taejong_Muyeol_Gyeongju": {
    "name": "Tombstone of King Taejong Muyeol, Gyeongju",
    "material": "Large stone",
    "date": "7th century",
    "found_in": "Gyeongju, Gyeongsangbuk-do",
    "description": "The tortoise of the pedestal extends its head high upward and its legs forward. There are large honeycomb-shaped hexagonal carvings on its back, and lotus designs are carved around the stele's seat. The ornamental capstone is carved with three dragons on the left and three on the right, which coiled around each other to form a support for a \"magic pearl\".",
    "target": "963ee70d46e04c9cbbb81e7f2e63b564/embed"
  },
  "Jizo_Ojizo_sama": {
    "name": "Jizo (Ojizo-sama)",
    "material": "Granite",
    "date": "Unknown",
    "found_in": "Japanese",
    "description": "The Jizo statues are a common sight, especially by roadsides and in graveyards. Traditionally, he is seen as the guardian of children, and in particular, children who died before their parents. He has been worshipped as the guardian of the souls of mizuko, the souls of stillborn, miscarried or aborted foetuses, in the ritual of mizuko kuyō.",
    "target": "3f9bee4975bd47c984093631b90a8cf5/embed"
  },
  "Statue_of_a_man_smoking": {
    "name": "Statue of a man smoking",
    "material": "Carved boxwood, ivory and pearl accents",
    "date": "Meji period (1868-1912)",
    "found_in": "Japanese",
    "description": "A quality Meiji period Japanese bronze statue of a seated gentleman smoking a pipe,it is carved magnificently with fine detailling.",
    "target": "c03779126db440a4a2067dd8b2f2fa1c/embed"
  },
  "Bishamonten": {
    "name": "Bishamonten",
    "material": "Several pieces of wood",
    "date": "13th century",
    "found_in": "The temple Sekkenji in Shikoku",
    "description": "In Japan, Bishamonten (毘沙門天), or just Bishamon (毘沙門) is thought of as an armor-clad god of war or warriors and a punisher of evildoers. Bishamon is portrayed holding a spear in one hand and a small pagoda in the other hand, the latter symbolizing the divine treasure house, whose contents he both guards and gives away. In Japanese folklore, he is one of the Seven Lucky Gods.",
    "target": "b2035fdc71204b4b967796127f9fc8c7/embed"
  },
  "Wuying_Pagoda": {
    "name": "Wuying Pagoda",
    "material": "Stone",
    "date": "13th century",
    "found_in": "Wuchang, Wuhan, Hubei Province",
    "description": "The pagoda has eight sides and seven storeys, with four of the storeys including carvings of Buddhist figures carved in small niches. It is 11.25 meters tall, with a diameter of 4.25 meters at the \"Sumeru Throne\" (須彌座 xūmízuò) style base.",
    "target": "6138b5834341414eb819cf4b389ec25d/embed"
  },
  "Great_Wall": {
    "name": "Great Wall",
    "material": "Stone brick and mortal",
    "date": "14th century",
    "found_in": "Hebei Province",
    "description": "The Great Wall measure 8,850 km (5,500 mi) from Jiayu Pass in the west to the sea in Shanhai Pass, then looping over to terminate in Manchuria at the Hushan Great Wall. This is made up of 6,259 km (3,889 mi) sections of actual wall, 359 km (223 mi) of trenches and 2,232 km (1,387 mi) of natural defensive barriers such as hills and rivers.",
    "target": "405928f2624742d18408896d26fc0d28/embed"
  },
  "Celestial_Muscian_Jiyue_tian": {
    "name": "Celestial Muscian (Jiyue tian)",
    "material": "Sandstone",
    "date": "Before 480",
    "found_in": "Shanxi Province,",
    "description": "di ngu thui pp",
    "target": "82a3e0fab235495caa8fa1f74608bd04/embed"
  }
}

for i in example:
    print(i.lower())

    artifact_name = json_data[i]["name"]
    artifact_date  = json_data[i]["date"]
    artifact_material = json_data[i]["material"]
    artifact_found_in = json_data[i]["found_in"]
    artifact_description = json_data[i]["description"]
    artifact_target = json_data[i]["target"]
    print(f"\n ### {artifact_target[:-6]} ###\n ")
    
    html_content = f'''
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{artifact_name}</title>

    <!-- CSS Stylesheet -->
    <link rel="stylesheet" href="../style/style.css">
    <link rel="stylesheet" href="../style/3dview.css">
    <link rel="icon" type="image/x-icon" href="../assets/logo.png">

    <script src="https://use.fontawesome.com/releases/v6.1.1/js/all.js" data-auto-replace-svg="nest"></script>

</head>

<body>
    <div id="page3d">
        <!-- Header -->
        <header id="new-header"></header>

        <!-- Main -->
        <main>
            <div class="artifact-overview">
                <div class="sketchfab-embed-wrapper"> 
                    <iframe title="{artifact_name}"
                        frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true"
                        allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking
                        execution-while-out-of-viewport execution-while-not-rendered web-share width="500" height="350"
                        src="https://sketchfab.com/models/{artifact_target}"> 
                    </iframe>
                    <p style="font-size: 13px; font-weight: normal; margin: 5px; color: #FFFFFF;"> <a
                            href="https://sketchfab.com/3d-models/{artifact_target[:-6]}"
                            target="_blank" class="redirect-link"> {artifact_name}
                            </a> on <a
                            href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=fc6e731a0131471ba8e45511c7ea9996"
                            target="_blank" class="redirect-link">Sketchfab</a>
                    </p>
                </div>
                <div class="artifact-info">
                    <h1>{artifact_name}</h1>
                    <div class="">
                        <ul>
                            <li><b>Material: </b>{artifact_material}</li>
                            <li><b>Date: </b>{artifact_date}</li>
                            <li><b>Found in: </b>{artifact_found_in}</li>
                            <li><b>Description: </b>{artifact_description}</li>
                        </ul>
                    </div>
                 </div>
            </div>

        </main>

        <!-- Footer -->
        <footer id="footer"></footer>

    </div>

    <!-- JavaScript -->
    <script src="../script/footer.js"></script>
    <script src="../explore/newHeader.js"></script>

</body>

</html>

'''
    with open(f"artifact/{i.lower()}.html", "w+") as target_file:
        target_file.write(html_content)







