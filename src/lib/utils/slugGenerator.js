export function generateSlug(str) {
    let res = str;

    res = res.toLowerCase(); // Convert to lowercase
    res = res.replace(/ +(?= )/g, ""); // Purge multiple spaces
    res = res.replace(/[^A-Za-z0-9]/g, " ").trim(); // Convert to alphanumeric
    res = res.replaceAll(" ", "_"); // Replace spaces with underscores

    return res;
}