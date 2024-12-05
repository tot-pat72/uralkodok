const table = document.createElement('table');
document.body.appendChild(table);

const colgroup = document.createElement('colgroup');
table.appendChild(colgroup);

const colSpan_1 = document.createElement('col');
colSpan_1.className = "columns";
colgroup.appendChild(colSpan_1);

const colSpan_2 = document.createElement('col');
colgroup.appendChild(colSpan_2);

const colSpan_3 = document.createElement('col');
colSpan_3.className = "columns";
colgroup.appendChild(colSpan_3);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');
thead.appendChild(tr);

const th_1 = document.createElement('th');
th_1.innerHTML = "Uralkodó";
tr.appendChild(th_1);

const th_2 = document.createElement('th');
th_2.innerHTML = "Esemény";
tr.appendChild(th_2);

const th_3 = document.createElement('th');
th_3.innerHTML = "Évszám";
tr.appendChild(th_3);

const tbody = document.createElement('tbody');
table.appendChild(tbody);

const tr_1 = document.createElement('tr');
tbody.appendChild(tr_1);

const td_1_1 = document.createElement('td');
td_1_1.innerHTML = "I.István";
tr_1.appendChild(td_1_1);
td_1_1.rowSpan = 2;

const td_1_2 = document.createElement('td');
td_1_2.innerHTML = "Koronázás";
tr_1.appendChild(td_1_2);

const td_1_3 = document.createElement('td');
td_1_3.innerHTML = "1000";
tr_1.appendChild(td_1_3);

const tr_2 = document.createElement('tr');
tbody.appendChild(tr_2);

const td_2_1 = document.createElement('td');
td_2_1.innerHTML = "Pannonhalmi apátság megalapítása";
tr_2.appendChild(td_2_1);

const td_2_2 = document.createElement('td');
td_2_2.innerHTML = "1001";
tr_2.appendChild(td_2_2);

const tr_3 = document.createElement('tr');
tbody.appendChild(tr_3);

const td_3_1 = document.createElement('td');
td_3_1.innerHTML = "IV. Béla";
tr_3.appendChild(td_3_1);

const td_3_2 = document.createElement('td');
td_3_2.innerHTML = "tatárjárás";
tr_3.appendChild(td_3_2);

const td_3_3 = document.createElement('td');
td_3_3.innerHTML = "1241-1242";
tr_3.appendChild(td_3_3);

const tr_4 = document.createElement('tr');
tbody.appendChild(tr_4);

const td_4_1 = document.createElement('td');
td_4_1.innerHTML = "Mátyás Király";
tr_4.appendChild(td_4_1);
td_4_1.rowSpan = 2;

const td_4_2 = document.createElement('td');
td_4_2.innerHTML = "Bécs elfoglalása";
tr_4.appendChild(td_4_2);

const td_4_3 = document.createElement('td');
td_4_3.innerHTML = "1485";
tr_4.appendChild(td_4_3);

const tr_5 = document.createElement('tr');
tbody.appendChild(tr_5);

const td_5_1 = document.createElement('td');
td_5_1.innerHTML = "Kenyérmezei csata";
tr_5.appendChild(td_5_1);

const td_5_2 = document.createElement('td');
td_5_2.innerHTML = "1479";
tr_5.appendChild(td_5_2);

const tr_6 = document.createElement('tr');
tbody.appendChild(tr_6);

const td_6_1 = document.createElement('td');
td_6_1.innerHTML = "II. Rákóczi Ferenc";
tr_6.appendChild(td_6_1);
td_6_1.rowSpan = 2;

const td_6_2 = document.createElement('td');
td_6_2.innerHTML = "A szabadságharc kezdete";
tr_6.appendChild(td_6_2);

const td_6_3 = document.createElement('td');
td_6_3.innerHTML = "1703";
tr_6.appendChild(td_6_3);

const tr_7 = document.createElement('tr');
tbody.appendChild(tr_7);

const td_7_1 = document.createElement('td');
td_7_1.innerHTML = "A szabadságharc vége";
tr_7.appendChild(td_7_1);

const td_7_2 = document.createElement('td');
td_7_2.innerHTML = "1711";
tr_7.appendChild(td_7_2);