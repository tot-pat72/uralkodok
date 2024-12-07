const header = { //A fejléc objektum létrhozása.
    uralkodo: "Uralkodó", //Értékadás a fejléc uralkodójának.
    esemeny: "Esemény", //Értékadás a fejléc eseményének.
    evszam: "Évszám" //Értékadás a fejléc évszámának.
}

const row_1 = { //Az 1.sor objektum létrhozása.
    uralkodo: "I. István", //Értékadás a 1.sor uralkodójának.
    esemeny: "Koronázás", //Értékadás a 1.sor eseményének.
    evszam: "1000" //Értékadás a 1.sor évszámának.
}

const row_2 = { //Az 2.sor objektum létrhozása.
    esemeny: "Pannonhalmi apátság megalapítása", //Értékadás a 2.sor eseményének.
    evszam: "1001" //Értékadás a 2.sor évszámának.
}

const row_3 = { //Az 3.sor objektum létrhozása.
    uralkodo: "IV. Béla", //Értékadás a 3.sor uralkodójának.
    esemeny: "tatárjárás", //Értékadás a 3.sor eseményének.
    evszam: "1241-1242" //Értékadás a 3.sor évszámának.
}

const row_4 = { //Az 4.sor objektum létrhozása.
    uralkodo: "Mátyás Király", //Értékadás a 4.sor uralkodójának.
    esemeny: "Bécs elfoglalása", //Értékadás a 4.sor eseményének.
    evszam: "1485" //Értékadás a 4.sor évszámának.
}

const row_5 = { //Az 5.sor objektum létrhozása.
    esemeny: "Kenyérmezei csata", //Értékadás a 5.sor eseményének.
    evszam: "1479" //Értékadás a 5.sor évszámának.
}

const row_6 = { //Az 6.sor objektum létrhozása.
    uralkodo: "II. Rákóczi Ferenc", //Értékadás a 6.sor uralkodójának.
    esemeny: "A szabadságharc kezdete", //Értékadás a 6.sor eseményének.
    evszam: "1703" //Értékadás a 6.sor évszámának.
}

const row_7 = { //Az 7.sor objektum létrhozása.
    esemeny: "A szabadságharc vége", //Értékadás a 7.sor eseményének.
    evszam: "1711" //Értékadás a 7.sor évszámának.
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
th_1.innerHTML = header.uralkodo; //A cella tartalmának megadása a fejléc uralkodójának az értékével.
tr.appendChild(th_1); //A fejléc sorában lévő 1.cella hozzáadása a fejlécben lévő sorhoz.

const th_2 = document.createElement('th'); //A fejléc sorában lévő 2.cella létrehozása.
th_2.innerHTML = header.esemeny; //A cella tartalmának megadása a fejléc eseményének az értékével.
tr.appendChild(th_2); //A fejléc sorában lévő 2.cella hozzáadása a fejlécben lévő sorhoz.

const th_3 = document.createElement('th'); //A fejléc sorában lévő 3.cella létrehozása.
th_3.innerHTML = header.evszam; //A cella tartalmának megadása a fejléc évszámának az értékével.
tr.appendChild(th_3); //A fejléc sorában lévő 3.cella hozzáadása a fejlécben lévő sorhoz.

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

const tr_1 = document.createElement('tr'); //Törzsben lévő 1.sor létrehozása.
tbody.appendChild(tr_1); //Törzsben lévő 1.sor hozzáadása a törzshöz.

const td_1_1 = document.createElement('td'); //A törzs 1.sorában lévő 1.cella létrehozása.
td_1_1.innerHTML = row_1.uralkodo; //A cella tartalmának megadása az 1.sor uralkodójának az értékével.
tr_1.appendChild(td_1_1); //A törzs 1.sorában lévő 1.cella hozzáadása a törzsben lévő 1.sorhoz.
td_1_1.rowSpan = 2; //A törzs 1.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_1_2 = document.createElement('td'); //A törzs 1.sorában lévő 2.cella létrehozása.
td_1_2.innerHTML = row_1.esemeny; //A cella tartalmának megadása az 1.sor eseményének az értékével.
tr_1.appendChild(td_1_2); //A törzs 1.sorában lévő 2.cella hozzáadása a törzsben lévő 1.sorhoz.

const td_1_3 = document.createElement('td'); //A törzs 1.sorában lévő 3.cella létrehozása.
td_1_3.innerHTML = row_1.evszam; //A cella tartalmának megadása az 1.sor évszámának az értékével.
tr_1.appendChild(td_1_3); //A törzs 1.sorában lévő 3.cella hozzáadása a törzsben lévő 1.sorhoz.

const tr_2 = document.createElement('tr'); //Törzsben lévő 2.sor létrehozása.
tbody.appendChild(tr_2); //Törzsben lévő 2.sor hozzáadása a törzshöz.

const td_2_1 = document.createElement('td'); //A törzs 2.sorában lévő 1.cella létrehozása.
td_2_1.innerHTML = row_2.esemeny; //A cella tartalmának megadása az 2.sor eseményének az értékével.
tr_2.appendChild(td_2_1); //A törzs 2.sorában lévő 1.cella hozzáadása a törzsben lévő 2.sorhoz.

const td_2_2 = document.createElement('td'); //A törzs 2.sorában lévő 2.cella létrehozása.
td_2_2.innerHTML = row_2.evszam; //A cella tartalmának megadása az 2.sor évszámának az értékével.
tr_2.appendChild(td_2_2); //A törzs 2.sorában lévő 2.cella hozzáadása a törzsben lévő 2.sorhoz.

const tr_3 = document.createElement('tr'); //Törzsben lévő 3.sor létrehozása.
tbody.appendChild(tr_3); //Törzsben lévő 3.sor hozzáadása a törzshöz.

const td_3_1 = document.createElement('td'); //A törzs 3.sorában lévő 1.cella létrehozása.
td_3_1.innerHTML = row_3.uralkodo; //A cella tartalmának megadása az 3.sor uralkodójának az értékével.
tr_3.appendChild(td_3_1); //A törzs 3.sorában lévő 1.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_2 = document.createElement('td'); //A törzs 3.sorában lévő 2.cella létrehozása.
td_3_2.innerHTML = row_3.esemeny; //A cella tartalmának megadása az 3.sor eseményének az értékével.
tr_3.appendChild(td_3_2); //A törzs 3.sorában lévő 2.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_3 = document.createElement('td'); //A törzs 3.sorában lévő 3.cella létrehozása.
td_3_3.innerHTML = row_3.evszam; //A cella tartalmának megadása az 3.sor évszámának az értékével.
tr_3.appendChild(td_3_3); //A törzs 3.sorában lévő 3.cella hozzáadása a törzsben lévő 3.sorhoz.

const tr_4 = document.createElement('tr'); //Törzsben lévő 4.sor létrehozása.
tbody.appendChild(tr_4); //Törzsben lévő 4.sor hozzáadása a törzshöz.

const td_4_1 = document.createElement('td'); //A törzs 4.sorában lévő 1.cella létrehozása.
td_4_1.innerHTML = row_4.uralkodo; //A cella tartalmának megadása az 4.sor uralkodójának az értékével.
tr_4.appendChild(td_4_1); //A törzs 4.sorában lévő 1.cella hozzáadása a törzsben lévő 4.sorhoz.
td_4_1.rowSpan = 2; //A törzs 4.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_4_2 = document.createElement('td'); //A törzs 4.sorában lévő 2.cella létrehozása.
td_4_2.innerHTML = row_4.esemeny; //A cella tartalmának megadása az 4.sor eseményének az értékével.
tr_4.appendChild(td_4_2); //A törzs 4.sorában lévő 2.cella hozzáadása a törzsben lévő 4.sorhoz.

const td_4_3 = document.createElement('td'); //A törzs 4.sorában lévő 3.cella létrehozása.
td_4_3.innerHTML = row_4.evszam; //A cella tartalmának megadása az 4.sor évszámának az értékével.
tr_4.appendChild(td_4_3); //A törzs 4.sorában lévő 3.cella hozzáadása a törzsben lévő 4.sorhoz.

const tr_5 = document.createElement('tr'); //Törzsben lévő 5.sor létrehozása.
tbody.appendChild(tr_5); //Törzsben lévő 5.sor hozzáadása a törzshöz.

const td_5_1 = document.createElement('td'); //A törzs 5.sorában lévő 1.cella létrehozása.
td_5_1.innerHTML = row_5.esemeny; //A cella tartalmának megadása az 5.sor eseményének az értékével.
tr_5.appendChild(td_5_1); //A törzs 5.sorában lévő 1.cella hozzáadása a törzsben lévő 5.sorhoz.

const td_5_2 = document.createElement('td'); //A törzs 5.sorában lévő 2.cella létrehozása.
td_5_2.innerHTML = row_5.evszam; //A cella tartalmának megadása az 5.sor évszámának az értékével.
tr_5.appendChild(td_5_2); //A törzs 5.sorában lévő 2.cella hozzáadása a törzsben lévő 5.sorhoz.

const tr_6 = document.createElement('tr'); //Törzsben lévő 6.sor létrehozása.
tbody.appendChild(tr_6); //Törzsben lévő 6.sor hozzáadása a törzshöz.

const td_6_1 = document.createElement('td'); //A törzs 6.sorában lévő 1.cella létrehozása.
td_6_1.innerHTML = row_6.uralkodo; //A cella tartalmának megadása az 6.sor uralkodójának az értékével.
tr_6.appendChild(td_6_1); //A törzs 6.sorában lévő 1.cella hozzáadása a törzsben lévő 6.sorhoz.
td_6_1.rowSpan = 2; //A törzs 6.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_6_2 = document.createElement('td'); //A törzs 6.sorában lévő 2.cella létrehozása.
td_6_2.innerHTML = row_6.esemeny; //A cella tartalmának megadása az 6.sor eseményének az értékével.
tr_6.appendChild(td_6_2); //A törzs 6.sorában lévő 2.cella hozzáadása a törzsben lévő 6.sorhoz.

const td_6_3 = document.createElement('td'); //A törzs 6.sorában lévő 3.cella létrehozása.
td_6_3.innerHTML = row_6.evszam; //A cella tartalmának megadása az 6.sor évszámának az értékével.
tr_6.appendChild(td_6_3); //A törzs 6.sorában lévő 3.cella hozzáadása a törzsben lévő 6.sorhoz.

const tr_7 = document.createElement('tr'); //Törzsben lévő 7.sor létrehozása.
tbody.appendChild(tr_7); //Törzsben lévő 7.sor hozzáadása a törzshöz.

const td_7_1 = document.createElement('td'); //A törzs 7.sorában lévő 1.cella létrehozása.
td_7_1.innerHTML = row_7.esemeny; //A cella tartalmának megadása az 7.sor eseményének az értékével.
tr_7.appendChild(td_7_1); //A törzs 7.sorában lévő 1.cella hozzáadása a törzsben lévő 7.sorhoz.

const td_7_2 = document.createElement('td'); //A törzs 7.sorában lévő 2.cella létrehozása.
td_7_2.innerHTML = row_7.evszam; //A cella tartalmának megadása az 7.sor évszámának az értékével.
tr_7.appendChild(td_7_2); //A törzs 7.sorában lévő 2.cella hozzáadása a törzsben lévő 7.sorhoz.