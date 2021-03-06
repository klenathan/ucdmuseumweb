import json

print("Start:#### \n")

# artifact_name = "NULL Name"
# artifact_date = "NULL Date"
# artifact_material = "NULL Material"
# artifact_found_in = "NULL Date"
# artifact_description = "NULL Desc"
# artifact_target = "NULL Target"

# with open("artifact_data.json", "r") as json_file:
#     json_data = json.load(json_file)

cultures = ["Chinese", "Korean", "Japanese"]

for i in cultures:
    print(i.lower())
    
    html_content = f'''
    <!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{i}</title>

  <!-- CSS Stylesheet -->
  <link rel="stylesheet" href="../style/style.css">
  <link rel="stylesheet" href="../style/artifact.css">
  <link rel="icon" type="image/x-icon" href="../assets/logo.png">

  <script src="https://use.fontawesome.com/releases/v6.1.1/js/all.js" data-auto-replace-svg="nest"></script>

</head>

<body>
  <div id="artifact-page">
    <!-- Header -->
    <header id="new-header"></header>

    <!-- Main -->
    <main>
      <div id="overview">
        <div class="dynasty-desc">
          <h1 id="explore_page">{i} Artifacts</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin non eros rhoncus suscipit. Duis
            non ante sit amet magna feugiat auctor vel in nulla. Phasellus vel risus a nibh fringilla aliquet et
            accumsan libero. In sem orci, accumsan a maximus non, consequat eget urna. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque et erat sed erat porttitor tempor.
            Morbi dictum elit non nibh porttitor rutrum. Quisque consequat volutpat scelerisque. Maecenas ac sem varius,
            rutrum massa at, placerat nibh. Nulla quis quam elementum eros vestibulum volutpat. In hac habitasse platea
            dictumst. Donec pretium ac est ut mattis. Nullam a libero interdum, rhoncus urna vel, vulputate nisi. Nam
            hendrerit quis arcu a iaculis. Ut velit augue, imperdiet a vulputate quis, auctor eget sapien. Phasellus
            iaculis, arcu in fringilla lobortis, elit mauris euismod magna, et tincidunt sapien tellus eget dui.
          </p>
        </div>
        <div id="img-container">

          <div class="img-row" id="artifact-list">
          </div>
          </div>
        </div>

      </div>

    </main>

    <!-- Footer -->
    <footer id="footer"></footer>

    <!-- JavaScript -->
    <script src="../script/footer.js"></script>
    <script src="newHeader.js"></script>
    <script src="./exploreArtifactListing.js"></script>
  </div>
</body>

</html>

    '''
    with open(f"../{i.lower()}.html", "w+") as target_file:
        target_file.write(html_content)







