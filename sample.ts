const API_URL = " https://pokeapi.co/api/v2/pokemon/pikachu";

type Pokemon = {
    id: number,
    name: string,
    base_experience: number,
    height: number,
    forms: Forms
    ,
    is_default: boolean
}

type Forms = {
    name: string,
    url: string
}

fetch(API_URL).then(res => res.json()).then((data: Pokemon) => {
    console.log(`${data.name}: Magassága: ${data.height}, Exp: ${data.base_experience}xp, Forms: ${data.forms.name} / ${data.forms.url}`);
    
})