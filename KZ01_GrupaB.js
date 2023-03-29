//1 (3 BODA)
//Napisi funkciju koja ispisuje neparne brojeve od 0 do 100
function nepar(x) {
    for (let i = 0; i < 100; i++) {
        if( i%2 == 1)
        {
            console.log(i)
        }
        
    }
}

console.log(nepar(100));
//2 (3 BODA)
//Napisi funkciju koja koristi switch selekciju za pretvaranje numerickog unosa u godisnje u doba. Za neispravan unos ispisi prikladnu poruku.
//INPUT: 1; OUTPUT: "Jesen";
//INPUT: 3; OUTPUT: "Ljeto"; 

function godisnje(y){
    switch (y) {
        case 1:
            console.log("Jesen");
            break;
    
        case 2:
            console.log("Zima");
            break;

        case 3:
            console.log("Ljeto")
            break;

        case 4:
            console.log("Proljeće")
            break;

        default: 
            console.log("krivi upis!!!")
           break;

            
    }

}
console.log(godisnje(5));

//3 (4 BODA)
//Napisi funkciju koja okrece uneseni string i broji charactere uzimajuci u obzir prazna mjesta (eng. whitespaces)
//INPUT: "Pisanje zadataka nije jednostavan posao"
//OUTPUT: ("oasop navatsondej ejin akatadaz ejnasiP", 39)

/*
function broji(c){

}
*/
//4 (4 BODA)
//Napisi funkciju koja odreduje najdulju vrijednostu u danom objektu
const peopleYouShouldKnow = {
    Donald: "Knuth",
    Bjarne: "Stroustrup",
    Ada: "Lovelace",
    Kent: "Beck",
    Martin: "Fowler",
    Erich: "Gamma"
}



//console.log(najdulji(peopleYouShouldKnow))
/*
if(a.length<r[i].length){
    a=r[i];
}
*/
//INPUT: somePeople
//OUTPUT: "Stroustrup"

//5 (4 BODA)
//Napisi funkciju u obliku function expressiona koja vraca neproste brojeve
//INPUT: [3, 4, 5, 8, 11]
//OUTPUT: [4, 5, 8]


function prost(je) {
    
    
}

//ZAMJENA ZA 5 (4 BODA)
//Napisi funkciju u obliku arrow functiona koja pretvara mala slova danih inputa u velika slova
//INPUT: ["aa", "b1", "", null, "AAA"]
//OUTPUT: ["AA","B1", "", null, "AAA"]

 

//6 (4 BODA)
//Napisi funkciju koja vraca sve drzave koji su imali manju temperaturu od one iz ulaznog parametra
const someEvents = [
    {
        stateName: "SAD",
        measuredTemperature: 56.7,
    },
    {
        stateName: "Tunis",
        measuredTemperature: 55,
    },
    {
        stateName: "Irak",
        measuredTemperature: 53.9,
    },
    {
        stateName: "Argentina",
        measuredTemperature: 48.9,
    },
    {
        stateName: "Grcka",
        measuredTemperature: 48.0,
    },
];


function temp(a,b){
someEvents.forEach(x => {

    if(b.measuredTemperature<someEvents.measuredTemperature){
        console.log(someEvents.stateName && someEvents.measuredTemperature)
    }
});

}

console.log(temp("Irak", 53.9));
//INPUT: (someStates, 48.5)
//OUTPUT: [{stateName: "Grcka", measuredTemperature: 48.0}]
