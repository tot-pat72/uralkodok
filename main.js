const array = [ //Az array tömb létrehozása.
    { //Az array 1. és 2.elemének a létrehozása.
        uralkodo: "I. István", //Értékadás az array 1.elem uralkodójának.
        esemeny_1: "Koronázás", //Értékadás az array 1.elem eseményének.
        evszam_1: "1000", //Értékadás az array 1.elem évszámának.
        esemeny_2: "Pannonhalmi apátság megalapítása", //Értékadás az array 2.elem eseményének.
        evszam_2: "1001" //Értékadás az array 2.elem évszámának.   
    },
    
    { //Az array 3.elemének a létrehozása.
        uralkodo: "IV. Béla", //Értékadás az array 3.elem uralkodójának.
        esemeny_1: "tatárjárás", //Értékadás az array 3.elem eseményének.
        evszam_1: "1241-1242" //Értékadás az array 3.elem évszámának.
    },
    
    { //Az array 4. és 5.elemének a létrehozása.
        uralkodo: "Mátyás Király", //Értékadás az array 4.elem uralkodójának.
        esemeny_1: "Bécs elfoglalása", //Értékadás az array 4.elem eseményének.
        evszam_1: "1485", //Értékadás az array 4.elem évszámának.
        esemeny_2: "Kenyérmezei csata", //Értékadás az array 5.elem eseményének.
        evszam_2: "1479" //Értékadás az array 5.elem évszámának.
    },
    
    { //Az array 6. és 7.elemének a létrehozása.
        uralkodo: "II. Rákóczi Ferenc", //Értékadás az array 6.elem uralkodójának.
        esemeny_1: "A szabadságharc kezdete", //Értékadás az array 6.elem eseményének.
        evszam_1: "1703", //Értékadás az array 6.elem évszámának.
        esemeny_2: "A szabadságharc vége", //Értékadás az array 7.elem eseményének.
        evszam_2: "1711" //Értékadás az array 7.elem évszámának.
    }
]

const head = { //A fejléc objektum létrehozása.
    uralkodo: "Uralkodó", //Értékadás az objektum uralkodójának.
    esemeny: "Esemény", //Értékadás az objektum eseményének.
    evszam: "Évszám" //Értékadás az objektum évszámának.
}

const table = document.createElement('table'); //Táblázat lértehozása.
document.body.appendChild(table); //Táblázat hozzáadása a dokumentumhoz.

const colgroup = document.createElement('colgroup'); //Colgroup létrehozása.
table.appendChild(colgroup); //Colgroup hozzáadása a táblázathoz.

const colSpan_1 = document.createElement('col'); //1.oszlop létrehozása.
colSpan_1.className = "columns"; //className megadása az 1.oszlopnak.
colgroup.appendChild(colSpan_1); //1.oszlop hozzáadása a Colgouphoz.

const colSpan_2 = document.createElement('col'); //2.oszlop létrehozása.
colgroup.appendChild(colSpan_2); //2.oszlop hozzáadása a Colgouphoz.

const colSpan_3 = document.createElement('col'); //3.oszlop létrehozása.
colSpan_3.className = "columns"; //className megadása a 3.oszlopnak.
colgroup.appendChild(colSpan_3); //3.oszlop hozzáadása a Colgouphoz.

const thead = document.createElement('thead'); //Fejléc létrehozása.
table.appendChild(thead); //Fejléc hozzáadása a táblázathoz.

const tr = document.createElement('tr'); //Fejlécben lévő sor létrehozása.
thead.appendChild(tr); //Fejlécben lévő sor hozzáadása a fejléchez.

const th_1 = document.createElement('th'); //A fejléc sorában lévő 1.cella létrehozása.
th_1.innerHTML = head.uralkodo; //A cella tartalmának megadása az array 0.elem uralkodójának az értékével.
tr.appendChild(th_1); //A fejléc sorában lévő 1.cella hozzáadása a fejlécben lévő sorhoz.

const th_2 = document.createElement('th'); //A fejléc sorában lévő 2.cella létrehozása.
th_2.innerHTML = head.esemeny; //A cella tartalmának megadása az array 0.elem eseményének az értékével.
tr.appendChild(th_2); //A fejléc sorában lévő 2.cella hozzáadása a fejlécben lévő sorhoz.

const th_3 = document.createElement('th'); //A fejléc sorában lévő 3.cella létrehozása.
th_3.innerHTML = head.evszam; //A cella tartalmának megadása az array 0.elem évszámának az értékével.
tr.appendChild(th_3); //A fejléc sorában lévő 3.cella hozzáadása a fejlécben lévő sorhoz.

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

function render(){ //A render függvény meghatározása.
    for(const currentElement of array) { //Végighaladás az arrayen, a currentElement az aktuális elem.
        const tr_1 = document.createElement('tr'); //Egy új sor létrehozása a táblázatba.
        tbody.appendChild(tr_1); //Az adott sor hozzáfűzése a táblázathoz.

        const uralkodo = document.createElement('td'); //Új cella létrehozása az adott sorban.
        uralkodo.innerHTML = currentElement.uralkodo; //A cella tartalmának megadása az aktuális elem uralkodójának az értékével.
        tr_1.appendChild(uralkodo); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

        const esemeny_1 = document.createElement('td'); //Új cella létrehozása az adott sorban.
        esemeny_1.innerHTML = currentElement.esemeny_1; //A cella tartalmának megadása az aktuális elem eseményének az értékével.
        tr_1.appendChild(esemeny_1); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

        const evszam_1 = document.createElement('td'); //Új cella létrehozása az adott sorban.
        evszam_1.innerHTML = currentElement.evszam_1; //A cella tartalmának megadása az aktuális elem évszámának az értékével.
        tr_1.appendChild(evszam_1); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

        if(currentElement.esemeny_2 !== undefined && currentElement.evszam_2 !== undefined){ //Ha a currentElement.esemeny_2 és a currentElement.evszam_2 nem egyenlő undefineddal, akkor végig megy az elágazáson.
            const tr_2 = document.createElement('tr'); //Még egy új sor létrehozása a táblázatba.
            tbody.appendChild(tr_2); //Az adott sor hozzáfűzése a táblázathoz.
            uralkodo.rowSpan = 2; //Ha idáig lefut, akkor összevonjuk az uralkodó 2 sorát.

            const esemeny_2 = document.createElement('td'); //Új cella létrehozása az adott sorban.
            esemeny_2.innerHTML = currentElement.esemeny_2; //A cella tartalmának megadása az aktuális elem eseményének az értékével.
            tr_2.appendChild(esemeny_2); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

            const evszam_2 = document.createElement('td'); //Új cella létrehozása az adott sorban.
            evszam_2.innerHTML = currentElement.evszam_2; //A cella tartalmának megadása az aktuális elem évszámának az értékével.
            tr_2.appendChild(evszam_2); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.
        }   
    }
}
render(); //A render függvényt meghívása.

const form = document.getElementById('form'); //Az űrlapban lévő formnak az id-jének az elkérése.
form.addEventListener('submit', function(e) { //A függvény meghívódik, a submit használatakor.
    e.preventDefault(); //A böngésző alapértelmezett lefutásának a megakadályozása.
    const uralkodoHtmlElement = document.getElementById('uralkodo_nev'); //A HtmlElement elkérése, amelynek az uralkodo_nev az id-je.
    const esemeny_1HtmlElement = document.getElementById('esemeny1'); //A HtmlElement elkérése, amelynek az esemeny1 az id-je.
    const evszam_1HtmlElement = document.getElementById('evszam1'); //A HtmlElement elkérése, amelynek az evszam1 az id-je.
    const esemeny_2HtmlElement = document.getElementById('esemeny2'); //A HtmlElement elkérése, amelynek az esemeny2 az id-je.
    const evszam_2HtmlElement = document.getElementById('evszam2'); //A HtmlElement elkérése, amelynek az evszam2 az id-je.

    const thisForm = e.currentTarget; //Az e.currentTarget tulajdonsága, amely a formot tartalmazza, ennek eltárolása egy változóba.
    const errorHtmlElements = thisForm.querySelectorAll('.error'); //A formon belüli összes error classal ellátott html element elkérése.
    for(const errorElement of errorHtmlElements){ //Végighaladás a visszakapott errorHtmlElementen.
        errorElement.innerHTML = ''; //Az aktuális elem tartalmának kitörlése.
    }
    let valid = true; //A valid valtozó kezdő értéke igaz.

    const uralkodoValue = uralkodoHtmlElement.value; //Az uralkodoHtmlElement értékének belerakása egy változóba.
    const esemeny_1Value = esemeny_1HtmlElement.value; //Az esemeny_1HtmlElement értékének belerakása egy változóba.
    const evszam_1Value = evszam_1HtmlElement.value; //Az evszam_1HtmlElement értékének belerakása egy változóba.
    const esemeny_2Value = esemeny_2HtmlElement.value === "" ? undefined : esemeny_2HtmlElement.value; //Az esemeny_2HtmlElement értékének belerakása egy változóba. Amennyiben az esemeny_2HtmlElement-nek nincs értéke, akkor undefined lesz.
    const evszam_2Value = evszam_2HtmlElement.value === "" ? undefined : evszam_2HtmlElement.value; //Az evszam_2HtmlElement értékének belerakása egy változóba. Amennyiben az evszam_2HtmlElement-nek nincs értéke, akkor undefined lesz.

    if(uralkodoValue === ''){ //Ha az uralkodó beviteli mezője üres.
        const parentElement = uralkodoHtmlElement.parentElement; //Az uralkodó beviteli mező parentElement property-jének az eltárolása egy változóban.
        const errorplace = parentElement.querySelector('.error'); //Az uralkodó beviteli mező parentElement div-jében az error classal ellátott elem megkeresése és annak eltárolása egy változóban.
        if (errorplace != undefined){ //Ha talál ilyen mezőt(nem undefined).
            errorplace.innerHTML = 'Az uralkodó megadása kötelező'; //Akkor az uralkodó megadása kötelező hibaüzenetet dobja ki.
        }
        valid = false; //A valid változó értéke hamis lesz.
    }
    if(esemeny_1Value === ''){ //Ha az esemény beviteli mezője üres.
        const parentElement = esemeny_1HtmlElement.parentElement; //Az esemény beviteli mező parentElement property-jének az eltárolása egy változóban.
        const errorplace = parentElement.querySelector('.error'); //Az esemény beviteli mező parentElement div-jében az error classal ellátott elem megkeresése és annak eltárolása egy változóban.
        if (errorplace != undefined){ //Ha talál ilyen mezőt(nem undefined).
            errorplace.innerHTML = 'Az esemény megadása kötelező'; //Akkor az esemény megadása kötelező hibaüzenetet dobja ki.
        }
        valid = false; //A valid változó értéke hamis lesz.
    }
    if(evszam_1Value === ''){ //Ha az évszám beviteli mezője üres.
        const parentElement = evszam_1HtmlElement.parentElement; //Az évszám beviteli mező parentElement property-jének az eltárolása egy változóban.
        const errorplace = parentElement.querySelector('.error'); //Az évszám beviteli mező parentElement div-jében az error classal ellátott elem megkeresése és annak eltárolása egy változóban.
        if (errorplace != undefined){ //Ha talál ilyen mezőt(nem undefined).
            errorplace.innerHTML = 'Az évszám megadása kötelező'; //Akkor az évszám megadása kötelező hibaüzenetet dobja ki.
        }
        valid = false; //A valid változó értéke hamis lesz.
    }
    if(valid){
        const newElement = { //A newElement létrehozása.
            uralkodo: uralkodoValue, //Az objektum urakodo tulajdonságának értéke az uralkodoValue lesz.
            esemeny_1: esemeny_1Value, //Az objektum esemeny_1 tulajdonságának értéke az esemeny_1Value lesz.
            evszam_1: evszam_1Value, //Az objektum evszam_1 tulajdonságának értéke az evszam_1Value lesz.
            esemeny_2: esemeny_2Value, //Az objektum esemeny_2 tulajdonságának értéke az esemeny_2Value lesz.
            evszam_2: evszam_2Value //Az objektum evszam_2 tulajdonságának értéke az evszam_2Value lesz.
        }
        array.push(newElement); //A newElement hozzáadása az arrayhez.
        tbody.innerHTML = ''; //A táblázat tartalmának kitörlése.
        render(); //A render függvény újra renderelése.
        thisForm.reset(); //A form visszaállítása alaphelyzetbe.
    }
})