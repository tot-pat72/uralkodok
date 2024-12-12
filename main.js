let array = [
    { //Az array 0.elemének a létrhozása.
        uralkodo: "Uralkodó", //Értékadás az array 0.elem uralkodójának.
        esemeny: "Esemény", //Értékadás az array 0.elem eseményének.
        evszam: "Évszám" //Értékadás az array 0.elem évszámának.
    },
    
    { //Az array 1.elemének a létrhozása.
        uralkodo: "I. István", //Értékadás az array 1.elem uralkodójának.
        esemeny: "Koronázás", //Értékadás az array 1.elem eseményének.
        evszam: "1000" //Értékadás az array 1.elem évszámának.
    },
    
    { //Az array 2.elemének a létrhozása.
        esemeny: "Pannonhalmi apátság megalapítása", //Értékadás az array 2.elem eseményének.
        evszam: "1001" //Értékadás az array 2.elem évszámának.
    },
    
    { //Az array 3.elemének a létrhozása.
        uralkodo: "IV. Béla", //Értékadás az array 3.elem uralkodójának.
        esemeny: "tatárjárás", //Értékadás az array 3.elem eseményének.
        evszam: "1241-1242" //Értékadás az array 3.elem évszámának.
    },
    
    { //Az array 4.elemének a létrhozása.
        uralkodo: "Mátyás Király", //Értékadás az array 4.elem uralkodójának.
        esemeny: "Bécs elfoglalása", //Értékadás az array 4.elem eseményének.
        evszam: "1485" //Értékadás az array 4.elem évszámának.
    },
    
    { //Az array 5.elemének a létrhozása.
        esemeny: "Kenyérmezei csata", //Értékadás az array 5.elem eseményének.
        evszam: "1479" //Értékadás az array 5.elem évszámának.
    },
    
    { //Az array 6.elemének a létrhozása.
        uralkodo: "II. Rákóczi Ferenc", //Értékadás az array 6.elem uralkodójának.
        esemeny: "A szabadságharc kezdete", //Értékadás az array 6.elem eseményének.
        evszam: "1703" //Értékadás az array 6.elem évszámának.
    },
    
    { //Az array 7.elemének a létrhozása.
        esemeny: "A szabadságharc vége", //Értékadás az array 7.elem eseményének.
        evszam: "1711" //Értékadás az array 7.elem évszámának.
    }
]

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
th_1.innerHTML = array[0].uralkodo; //A cella tartalmának megadása az array 0.elem uralkodójának az értékével.
tr.appendChild(th_1); //A fejléc sorában lévő 1.cella hozzáadása a fejlécben lévő sorhoz.

const th_2 = document.createElement('th'); //A fejléc sorában lévő 2.cella létrehozása.
th_2.innerHTML = array[0].esemeny; //A cella tartalmának megadása az array 0.elem eseményének az értékével.
tr.appendChild(th_2); //A fejléc sorában lévő 2.cella hozzáadása a fejlécben lévő sorhoz.

const th_3 = document.createElement('th'); //A fejléc sorában lévő 3.cella létrehozása.
th_3.innerHTML = array[0].evszam; //A cella tartalmának megadása az array 0.elem évszámának az értékével.
tr.appendChild(th_3); //A fejléc sorában lévő 3.cella hozzáadása a fejlécben lévő sorhoz.

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

const tr_1 = document.createElement('tr'); //Törzsben lévő 1.sor létrehozása.
tbody.appendChild(tr_1); //Törzsben lévő 1.sor hozzáadása a törzshöz.

const td_1_1 = document.createElement('td'); //A törzs 1.sorában lévő 1.cella létrehozása.
td_1_1.innerHTML = array[1].uralkodo; //A cella tartalmának megadása az array 1.elem uralkodójának az értékével.
tr_1.appendChild(td_1_1); //A törzs 1.sorában lévő 1.cella hozzáadása a törzsben lévő 1.sorhoz.
td_1_1.rowSpan = 2; //A törzs 1.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_1_2 = document.createElement('td'); //A törzs 1.sorában lévő 2.cella létrehozása.
td_1_2.innerHTML = array[1].esemeny; //A cella tartalmának megadása az array 1.elem eseményének az értékével.
tr_1.appendChild(td_1_2); //A törzs 1.sorában lévő 2.cella hozzáadása a törzsben lévő 1.sorhoz.

const td_1_3 = document.createElement('td'); //A törzs 1.sorában lévő 3.cella létrehozása.
td_1_3.innerHTML = array[1].evszam; //A cella tartalmának megadása az array 1.elem évszámának az értékével.
tr_1.appendChild(td_1_3); //A törzs 1.sorában lévő 3.cella hozzáadása a törzsben lévő 1.sorhoz.

const tr_2 = document.createElement('tr'); //Törzsben lévő 2.sor létrehozása.
tbody.appendChild(tr_2); //Törzsben lévő 2.sor hozzáadása a törzshöz.

const td_2_1 = document.createElement('td'); //A törzs 2.sorában lévő 1.cella létrehozása.
td_2_1.innerHTML = array[2].esemeny; //A cella tartalmának megadása az array 2.elem eseményének az értékével.
tr_2.appendChild(td_2_1); //A törzs 2.sorában lévő 1.cella hozzáadása a törzsben lévő 2.sorhoz.

const td_2_2 = document.createElement('td'); //A törzs 2.sorában lévő 2.cella létrehozása.
td_2_2.innerHTML = array[2].evszam; //A cella tartalmának megadása az array 2.elem évszámának az értékével.
tr_2.appendChild(td_2_2); //A törzs 2.sorában lévő 2.cella hozzáadása a törzsben lévő 2.sorhoz.

const tr_3 = document.createElement('tr'); //Törzsben lévő 3.sor létrehozása.
tbody.appendChild(tr_3); //Törzsben lévő 3.sor hozzáadása a törzshöz.

const td_3_1 = document.createElement('td'); //A törzs 3.sorában lévő 1.cella létrehozása.
td_3_1.innerHTML = array[3].uralkodo; //A cella tartalmának megadása az array 3.elem uralkodójának az értékével.
tr_3.appendChild(td_3_1); //A törzs 3.sorában lévő 1.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_2 = document.createElement('td'); //A törzs 3.sorában lévő 2.cella létrehozása.
td_3_2.innerHTML = array[3].esemeny; //A cella tartalmának megadása az array 3.elem eseményének az értékével.
tr_3.appendChild(td_3_2); //A törzs 3.sorában lévő 2.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_3 = document.createElement('td'); //A törzs 3.sorában lévő 3.cella létrehozása.
td_3_3.innerHTML = array[3].evszam; //A cella tartalmának megadása az array 3.elem évszámának az értékével.
tr_3.appendChild(td_3_3); //A törzs 3.sorában lévő 3.cella hozzáadása a törzsben lévő 3.sorhoz.

const tr_4 = document.createElement('tr'); //Törzsben lévő 4.sor létrehozása.
tbody.appendChild(tr_4); //Törzsben lévő 4.sor hozzáadása a törzshöz.

const td_4_1 = document.createElement('td'); //A törzs 4.sorában lévő 1.cella létrehozása.
td_4_1.innerHTML = array[4].uralkodo; //A cella tartalmának megadása az array 4.elem uralkodójának az értékével.
tr_4.appendChild(td_4_1); //A törzs 4.sorában lévő 1.cella hozzáadása a törzsben lévő 4.sorhoz.
td_4_1.rowSpan = 2; //A törzs 4.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_4_2 = document.createElement('td'); //A törzs 4.sorában lévő 2.cella létrehozása.
td_4_2.innerHTML = array[4].esemeny; //A cella tartalmának megadása az array 4.elem eseményének az értékével.
tr_4.appendChild(td_4_2); //A törzs 4.sorában lévő 2.cella hozzáadása a törzsben lévő 4.sorhoz.

const td_4_3 = document.createElement('td'); //A törzs 4.sorában lévő 3.cella létrehozása.
td_4_3.innerHTML = array[4].evszam; //A cella tartalmának megadása az array 4.elem évszámának az értékével.
tr_4.appendChild(td_4_3); //A törzs 4.sorában lévő 3.cella hozzáadása a törzsben lévő 4.sorhoz.

const tr_5 = document.createElement('tr'); //Törzsben lévő 5.sor létrehozása.
tbody.appendChild(tr_5); //Törzsben lévő 5.sor hozzáadása a törzshöz.

const td_5_1 = document.createElement('td'); //A törzs 5.sorában lévő 1.cella létrehozása.
td_5_1.innerHTML = array[5].esemeny; //A cella tartalmának megadása az array 5.elem eseményének az értékével.
tr_5.appendChild(td_5_1); //A törzs 5.sorában lévő 1.cella hozzáadása a törzsben lévő 5.sorhoz.

const td_5_2 = document.createElement('td'); //A törzs 5.sorában lévő 2.cella létrehozása.
td_5_2.innerHTML = array[5].evszam; //A cella tartalmának megadása az array 5.elem évszámának az értékével.
tr_5.appendChild(td_5_2); //A törzs 5.sorában lévő 2.cella hozzáadása a törzsben lévő 5.sorhoz.

const tr_6 = document.createElement('tr'); //Törzsben lévő 6.sor létrehozása.
tbody.appendChild(tr_6); //Törzsben lévő 6.sor hozzáadása a törzshöz.

const td_6_1 = document.createElement('td'); //A törzs 6.sorában lévő 1.cella létrehozása.
td_6_1.innerHTML = array[6].uralkodo; //A cella tartalmának megadása az array 6.elem uralkodójának az értékével.
tr_6.appendChild(td_6_1); //A törzs 6.sorában lévő 1.cella hozzáadása a törzsben lévő 6.sorhoz.
td_6_1.rowSpan = 2; //A törzs 6.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_6_2 = document.createElement('td'); //A törzs 6.sorában lévő 2.cella létrehozása.
td_6_2.innerHTML = array[6].esemeny; //A cella tartalmának megadása az array 6.elem eseményének az értékével.
tr_6.appendChild(td_6_2); //A törzs 6.sorában lévő 2.cella hozzáadása a törzsben lévő 6.sorhoz.

const td_6_3 = document.createElement('td'); //A törzs 6.sorában lévő 3.cella létrehozása.
td_6_3.innerHTML = array[6].evszam; //A cella tartalmának megadása az array 6.elem évszámának az értékével.
tr_6.appendChild(td_6_3); //A törzs 6.sorában lévő 3.cella hozzáadása a törzsben lévő 6.sorhoz.

const tr_7 = document.createElement('tr'); //Törzsben lévő 7.sor létrehozása.
tbody.appendChild(tr_7); //Törzsben lévő 7.sor hozzáadása a törzshöz.

const td_7_1 = document.createElement('td'); //A törzs 7.sorában lévő 1.cella létrehozása.
td_7_1.innerHTML = array[7].esemeny; //A cella tartalmának megadása az array 7.elem eseményének az értékével.
tr_7.appendChild(td_7_1); //A törzs 7.sorában lévő 1.cella hozzáadása a törzsben lévő 7.sorhoz.

const td_7_2 = document.createElement('td'); //A törzs 7.sorában lévő 2.cella létrehozása.
td_7_2.innerHTML = array[7].evszam; //A cella tartalmának megadása az array 7.elem évszámának az értékével.
tr_7.appendChild(td_7_2); //A törzs 7.sorában lévő 2.cella hozzáadása a törzsben lévő 7.sorhoz.