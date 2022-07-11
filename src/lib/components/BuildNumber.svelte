<script>
    let buildNumber = "";

    fetch("https://api.github.com/repos/triangle100/triangle100-com/releases/latest")
        .then((response) => response.json())
        .then((data) => {
            buildNumber = data.tag_name;
        })
        .catch((err) => console.error(err));
</script>

{buildNumber}
