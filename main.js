let array = [ 
    { //Az array 1. és 2.elemének a létrhozása.
        uralkodo: "I. István", //Értékadás az array 1.elem uralkodójának.
        esemeny_1: "Koronázás", //Értékadás az array 1.elem eseményének.
        evszam_1: "1000", //Értékadás az array 1.elem évszámának.
        esemeny_2: "Pannonhalmi apátság megalapítása", //Értékadás az array 2.elem eseményének.
        evszam_2: "1001" //Értékadás az array 2.elem évszámának.   
    },
    
    { //Az array 3.elemének a létrhozása.
        uralkodo: "IV. Béla", //Értékadás az array 3.elem uralkodójának.
        esemeny_1: "tatárjárás", //Értékadás az array 3.elem eseményének.
        evszam_1: "1241-1242" //Értékadás az array 3.elem évszámának.
    },
    
    { //Az array 4. és 5.elemének a létrhozása.
        uralkodo: "Mátyás Király", //Értékadás az array 4.elem uralkodójának.
        esemeny_1: "Bécs elfoglalása", //Értékadás az array 4.elem eseményének.
        evszam_1: "1485", //Értékadás az array 4.elem évszámának.
        esemeny_2: "Kenyérmezei csata", //Értékadás az array 5.elem eseményének.
        evszam_2: "1479" //Értékadás az array 5.elem évszámának.
    },
    
    { //Az array 6. és 7.elemének a létrhozása.
        uralkodo: "II. Rákóczi Ferenc", //Értékadás az array 6.elem uralkodójának.
        esemeny_1: "A szabadságharc kezdete", //Értékadás az array 6.elem eseményének.
        evszam_1: "1703", //Értékadás az array 6.elem évszámának.
        esemeny_2: "A szabadságharc vége", //Értékadás az array 7.elem eseményének.
        evszam_2: "1711" //Értékadás az array 7.elem évszámának.
    }
]

const head = { //Az array 0.elemének a létrhozása.
    uralkodo: "Uralkodó", //Értékadás az array 0.elem uralkodójának.
    esemeny: "Esemény", //Értékadás az array 0.elem eseményének.
    evszam: "Évszám" //Értékadás az array 0.elem évszámának.
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

for(let i = 0; i < array.length; i++) { //Ciklus segítségével végighaladás az arrayen.
    const currentElement = array[i]; //Változó definiálása, amibe az array aktuális számú elemét belerakom.

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

    const tr_2 = document.createElement('tr'); //Még egy új sor létrehozása a táblázatba.
    tbody.appendChild(tr_2); //Az adott sor hozzáfűzése a táblázathoz.

    const esemeny_2 = document.createElement('td'); //Új cella létrehozása az adott sorban.
    esemeny_2.innerHTML = currentElement.esemeny_2; //A cella tartalmának megadása az aktuális elem eseményének az értékével.
    tr_2.appendChild(esemeny_2); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.

    const evszam_2 = document.createElement('td'); //Új cella létrehozása az adott sorban.
    evszam_2.innerHTML = currentElement.evszam_2; //A cella tartalmának megadása az aktuális elem évszámának az értékével.
    tr_2.appendChild(evszam_2); //A létrehozott cellát hozzáadom a már korábban létrehozott sorhoz.
}