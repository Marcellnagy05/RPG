const API_URL = " https://pokeapi.co/api/v2/pokemon/pikachu";

type Pokemon = {
    id: number,
    name: string,
    stats: Stat[],
    base_experience: number,
    height: number,
    forms: Forms,
    is_default: boolean
}

type Stat ={
    base_stat: number,
    stat:{
        name: string
    }
}

type Forms = {
    name: string,
    url: string
}

fetch(API_URL).then(res => res.json()).then((data: Pokemon) => {
    console.log(`${data.name}: Magassága: ${data.height}, 
        Exp: ${data.base_experience}xp, 
        ${data.stats.forEach(element => {
        console.log(element.base_stat);
        
    })}`);
    
})