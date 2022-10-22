var seed = 22

function randomInt() {
    var seed_str = (seed * seed).toString()

    while (seed_str.length < 6) seed_str = "0" + seed_str

    seed_str = seed_str.slice(1, 5)

    seed = Number(seed_str)

    console.log(seed)

    return seed;
}

function rollTheDice() {
    setTimeout(function () {

        var randomNumber1 = Math.floor(randomInt() % 6) + 1;
        var randomNumber2 = Math.floor(randomInt() % 6) + 1;

        document.querySelector(".img1").setAttribute("src",
            "../img/dice" + randomNumber1 + ".png");

        document.querySelector(".img2").setAttribute("src",
            "../img/dice" + randomNumber2 + ".png");

        document.querySelector(".total").innerHTML = `${randomNumber1 + randomNumber2}`;
    }, 0);
}

module.exports = randomInt;