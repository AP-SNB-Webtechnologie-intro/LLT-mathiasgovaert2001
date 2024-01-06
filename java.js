function getSkins() {
    const url = "https://bymykel.github.io/CSGO-API/api/en/skins.json";

    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

getSkins()
.then(data => {
    console.log(data);
    console.log(data.length);
    console.log(data[0]);
    randomSkinIndex = getRandomInt(data.length - 1);
    document.getElementById("randomSkinImg").src = data[randomSkinIndex].image;
    document.getElementById("randomSkinName").innerHTML = data[randomSkinIndex].name;
    document.getElementById("randomSkinInfo").innerHTML = data[randomSkinIndex].description;
})
.catch(error => console.error(error));