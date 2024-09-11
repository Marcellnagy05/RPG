var API_URL = " https://pokeapi.co/api/v2/pokemon/pikachu";
fetch(API_URL).then(function (res) { return res.json(); }).then(function (data) {
    console.log("".concat(data.name, ": Magass\u00E1ga: ").concat(data.height, ", \n        Exp: ").concat(data.base_experience, "xp, \n        ").concat(data.stats.forEach(function (element) {
        console.log(element.base_stat);
    })));
});
