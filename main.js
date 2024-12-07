const headercell_1 = "Uralkodó"; //Az uralkodó megadása változóként.
const headercell_2 = "Esemény"; //Az esemény megadása változóként.
const headercell_3 = "Évszám"; //Az évszám megadása változóként.

const uralkodo_1 = "I. István"; //I. István megadása változóként.
const esemeny_1 = "Koronázás"; //A Koronázás megadása változóként.
const evszam_1 = "1000"; //1000 megadása változóként.
const esemeny_2 = "Pannonhalmi apátság megalapítása"; //A Pannonhalmi apátság megalapításának megadása változóként.
const evszam_2 = "1001"; //1001 megadása változóként.

const uralkodo_2 = "IV. Béla"; //IV. Béla megadása változóként.
const esemeny_3 = "tatárjárás"; //A tatárjárás megadása változóként.
const evszam_3 = "1241-1242"; //1241-1242 megadása változóként.

const uralkodo_3 = "Mátyás Király"; //Mátyás Király megadása változóként.
const esemeny_4 = "Bécs elfoglalása"; //Bécs elfoglalásának megadása változóként.
const evszam_4 = "1485"; //1485 megadása változóként.
const esemeny_5 = "Kenyérmezei csata"; //A Kenyérmezei csata megadása változóként.
const evszam_5 = "1479"; //1479 megadása változóként.

const uralkodo_4 = "II. Rákóczi Ferenc"; //II. Rákóczi Ferenc megadása változóként.
const esemeny_6 = "A szabadságharc kezdete"; //A szabadságharc kezdetének megadása változóként.
const evszam_6 = "1703"; //1703 megadása változóként.
const esemeny_7 = "A szabadságharc vége"; //A szabadságharc végének megadása változóként.
const evszam_7 = "1711"; //1711 megadása változóként.

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
th_1.innerHTML = headercell_1; //A cella tartalmának megadása 1 megadott változóból.
tr.appendChild(th_1); //A fejléc sorában lévő 1.cella hozzáadása a fejlécben lévő sorhoz.

const th_2 = document.createElement('th'); //A fejléc sorában lévő 2.cella létrehozása.
th_2.innerHTML = headercell_2; //A cella tartalmának megadása 1 megadott változóból.
tr.appendChild(th_2); //A fejléc sorában lévő 2.cella hozzáadása a fejlécben lévő sorhoz.

const th_3 = document.createElement('th'); //A fejléc sorában lévő 3.cella létrehozása.
th_3.innerHTML = headercell_3; //A cella tartalmának megadása 1 megadott változóból.
tr.appendChild(th_3); //A fejléc sorában lévő 3.cella hozzáadása a fejlécben lévő sorhoz.

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

const tr_1 = document.createElement('tr'); //Törzsben lévő 1.sor létrehozása.
tbody.appendChild(tr_1); //Törzsben lévő 1.sor hozzáadása a törzshöz.

const td_1_1 = document.createElement('td'); //A törzs 1.sorában lévő 1.cella létrehozása.
td_1_1.innerHTML = uralkodo_1; //A cella tartalmának megadása 1 megadott változóból.
tr_1.appendChild(td_1_1); //A törzs 1.sorában lévő 1.cella hozzáadása a törzsben lévő 1.sorhoz.
td_1_1.rowSpan = 2; //A törzs 1.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_1_2 = document.createElement('td'); //A törzs 1.sorában lévő 2.cella létrehozása.
td_1_2.innerHTML = esemeny_1; //A cella tartalmának megadása 1 megadott változóból.
tr_1.appendChild(td_1_2); //A törzs 1.sorában lévő 2.cella hozzáadása a törzsben lévő 1.sorhoz.

const td_1_3 = document.createElement('td'); //A törzs 1.sorában lévő 3.cella létrehozása.
td_1_3.innerHTML = evszam_1; //A cella tartalmának megadása 1 megadott változóból.
tr_1.appendChild(td_1_3); //A törzs 1.sorában lévő 3.cella hozzáadása a törzsben lévő 1.sorhoz.

const tr_2 = document.createElement('tr'); //Törzsben lévő 2.sor létrehozása.
tbody.appendChild(tr_2); //Törzsben lévő 2.sor hozzáadása a törzshöz.

const td_2_1 = document.createElement('td'); //A törzs 2.sorában lévő 1.cella létrehozása.
td_2_1.innerHTML = esemeny_2; //A cella tartalmának megadása 1 megadott változóból.
tr_2.appendChild(td_2_1); //A törzs 2.sorában lévő 1.cella hozzáadása a törzsben lévő 2.sorhoz.

const td_2_2 = document.createElement('td'); //A törzs 2.sorában lévő 2.cella létrehozása.
td_2_2.innerHTML = evszam_2; //A cella tartalmának megadása 1 megadott változóból.
tr_2.appendChild(td_2_2); //A törzs 2.sorában lévő 2.cella hozzáadása a törzsben lévő 2.sorhoz.

const tr_3 = document.createElement('tr'); //Törzsben lévő 3.sor létrehozása.
tbody.appendChild(tr_3); //Törzsben lévő 3.sor hozzáadása a törzshöz.

const td_3_1 = document.createElement('td'); //A törzs 3.sorában lévő 1.cella létrehozása.
td_3_1.innerHTML = uralkodo_2; //A cella tartalmának megadása 1 megadott változóból.
tr_3.appendChild(td_3_1); //A törzs 3.sorában lévő 1.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_2 = document.createElement('td'); //A törzs 3.sorában lévő 2.cella létrehozása.
td_3_2.innerHTML = esemeny_3; //A cella tartalmának megadása 1 megadott változóból.
tr_3.appendChild(td_3_2); //A törzs 3.sorában lévő 2.cella hozzáadása a törzsben lévő 3.sorhoz.

const td_3_3 = document.createElement('td'); //A törzs 3.sorában lévő 3.cella létrehozása.
td_3_3.innerHTML = evszam_3; //A cella tartalmának megadása 1 megadott változóból.
tr_3.appendChild(td_3_3); //A törzs 3.sorában lévő 3.cella hozzáadása a törzsben lévő 3.sorhoz.

const tr_4 = document.createElement('tr'); //Törzsben lévő 4.sor létrehozása.
tbody.appendChild(tr_4); //Törzsben lévő 4.sor hozzáadása a törzshöz.

const td_4_1 = document.createElement('td'); //A törzs 4.sorában lévő 1.cella létrehozása.
td_4_1.innerHTML = uralkodo_3; //A cella tartalmának megadása 1 megadott változóból.
tr_4.appendChild(td_4_1); //A törzs 4.sorában lévő 1.cella hozzáadása a törzsben lévő 4.sorhoz.
td_4_1.rowSpan = 2; //A törzs 4.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_4_2 = document.createElement('td'); //A törzs 4.sorában lévő 2.cella létrehozása.
td_4_2.innerHTML = esemeny_4; //A cella tartalmának megadása 1 megadott változóból.
tr_4.appendChild(td_4_2); //A törzs 4.sorában lévő 2.cella hozzáadása a törzsben lévő 4.sorhoz.

const td_4_3 = document.createElement('td'); //A törzs 4.sorában lévő 3.cella létrehozása.
td_4_3.innerHTML = evszam_4; //A cella tartalmának megadása 1 megadott változóból.
tr_4.appendChild(td_4_3); //A törzs 4.sorában lévő 3.cella hozzáadása a törzsben lévő 4.sorhoz.

const tr_5 = document.createElement('tr'); //Törzsben lévő 5.sor létrehozása.
tbody.appendChild(tr_5); //Törzsben lévő 5.sor hozzáadása a törzshöz.

const td_5_1 = document.createElement('td'); //A törzs 5.sorában lévő 1.cella létrehozása.
td_5_1.innerHTML = esemeny_5; //A cella tartalmának megadása 1 megadott változóból.
tr_5.appendChild(td_5_1); //A törzs 5.sorában lévő 1.cella hozzáadása a törzsben lévő 5.sorhoz.

const td_5_2 = document.createElement('td'); //A törzs 5.sorában lévő 2.cella létrehozása.
td_5_2.innerHTML = evszam_5; //A cella tartalmának megadása 1 megadott változóból.
tr_5.appendChild(td_5_2); //A törzs 5.sorában lévő 2.cella hozzáadása a törzsben lévő 5.sorhoz.

const tr_6 = document.createElement('tr'); //Törzsben lévő 6.sor létrehozása.
tbody.appendChild(tr_6); //Törzsben lévő 6.sor hozzáadása a törzshöz.

const td_6_1 = document.createElement('td'); //A törzs 6.sorában lévő 1.cella létrehozása.
td_6_1.innerHTML = uralkodo_4; //A cella tartalmának megadása 1 megadott változóból.
tr_6.appendChild(td_6_1); //A törzs 6.sorában lévő 1.cella hozzáadása a törzsben lévő 6.sorhoz.
td_6_1.rowSpan = 2; //A törzs 6.sorában lévő 1.cellának megadjuk, hogy 2 sort csatoljon össze.

const td_6_2 = document.createElement('td'); //A törzs 6.sorában lévő 2.cella létrehozása.
td_6_2.innerHTML = esemeny_6; //A cella tartalmának megadása 1 megadott változóból.
tr_6.appendChild(td_6_2); //A törzs 6.sorában lévő 2.cella hozzáadása a törzsben lévő 6.sorhoz.

const td_6_3 = document.createElement('td'); //A törzs 6.sorában lévő 3.cella létrehozása.
td_6_3.innerHTML = evszam_6; //A cella tartalmának megadása 1 megadott változóból.
tr_6.appendChild(td_6_3); //A törzs 6.sorában lévő 3.cella hozzáadása a törzsben lévő 6.sorhoz.

const tr_7 = document.createElement('tr'); //Törzsben lévő 7.sor létrehozása.
tbody.appendChild(tr_7); //Törzsben lévő 7.sor hozzáadása a törzshöz.

const td_7_1 = document.createElement('td'); //A törzs 7.sorában lévő 1.cella létrehozása.
td_7_1.innerHTML = esemeny_7; //A cella tartalmának megadása 1 megadott változóból.
tr_7.appendChild(td_7_1); //A törzs 7.sorában lévő 1.cella hozzáadása a törzsben lévő 7.sorhoz.

const td_7_2 = document.createElement('td'); //A törzs 7.sorában lévő 2.cella létrehozása.
td_7_2.innerHTML = evszam_7; //A cella tartalmának megadása 1 megadott változóból.
tr_7.appendChild(td_7_2); //A törzs 7.sorában lévő 2.cella hozzáadása a törzsben lévő 7.sorhoz.