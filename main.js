const array = [ //Az array tömb létrehozása.
    { //Az array 1.elemének a létrehozása.
        uralkodo: "I. István", //Értékadás az array 1.elem uralkodo tulajdonságának.
        esemeny_1: "Koronázás", //Értékadás az array 1.elem esemeny_1 tulajdonságának.
        evszam_1: "1000", //Értékadás az array 1.elem evszam_1 tulajdonságának.
        esemeny_2: "Pannonhalmi apátság megalapítása", //Értékadás az array 1.elem esemeny_2 tulajdonságának.
        evszam_2: "1001" //Értékadás az array 1.elem evszam_2 tulajdonságának.
    },
    
    { //Az array 2.elemének a létrehozása.
        uralkodo: "IV. Béla", //Értékadás az array 2.elem uralkodo tulajdonságának.
        esemeny_1: "tatárjárás", //Értékadás az array 2.elem esemeny_1 tulajdonságának.
        evszam_1: "1241-1242" //Értékadás az array 2.elem evszam_1 tulajdonságának.
    },
    
    { //Az array 3.elemének a létrehozása.
        uralkodo: "Mátyás Király", //Értékadás az array 3.elem uralkodo tulajdonságának.
        esemeny_1: "Bécs elfoglalása", //Értékadás az array 3.elem esemeny_1 tulajdonságának.
        evszam_1: "1485", //Értékadás az array 3.elem evszam_1 tulajdonságának.
        esemeny_2: "Kenyérmezei csata", //Értékadás az array 3.elem esemeny_2 tulajdonságának.
        evszam_2: "1479" //Értékadás az array 3.elem evszam_2 tulajdonságának.
    },
    
    { //Az array 4.elemének a létrehozása.
        uralkodo: "II. Rákóczi Ferenc", //Értékadás az array 4.elem uralkodo tulajdonságának.
        esemeny_1: "A szabadságharc kezdete", //Értékadás az array 4.elem esemeny_1 tulajdonságának.
        evszam_1: "1703", //Értékadás az array 4.elem evszam_1 tulajdonságának.
        esemeny_2: "A szabadságharc vége", //Értékadás az array 4.elem esemeny_2 tulajdonságának.
        evszam_2: "1711" //Értékadás az array 4.elem evszam_2 tulajdonságának.
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

const tbody = document.createElement('tbody'); //Törzs létrehozása.
table.appendChild(tbody); //Törzs hozzáadása a táblázathoz.

function generateForm(){ //A generateForm függvény meghatározása.
    const form = document.createElement('form'); //Form létrehozása.
    form.id = 'form'; //A form id-jének megadása.
    document.body.appendChild(form); //A form hozzáadása a dokumentum törzséhez.


    const div_1 = document.createElement('div'); //A form 1.sorának a létrehozása.
    div_1.classList.add('field'); //A field class hozzáadása a div_1-hez.

    const label_1 = document.createElement('label'); //A label_1 elem létrehozása.
    label_1.htmlFor = 'uralkodo_nev'; //A label_1 for-ának megadása.
    label_1.innerText = 'Uralkodó neve:'; //A label_1 tartalma az Uralkodó neve: lesz.
    div_1.appendChild(label_1); //A label_1 hozzáadása a div_1-hez.

    const input_1 = document.createElement('input'); //Az input_1 mező létrehozása.
    input_1.type = 'text'; //Az input_1 típusának megadása.
    input_1.id = 'uralkodo_nev'; //Az input_1 id-jének megadása.
    input_1.name = 'uralkodo_nev'; //Az input_1 nevének megadása.
    div_1.appendChild(input_1); //Az input_1 hozzáadása a div_1-hez.

    const div_1_error = document.createElement('div'); //A div_1_error div létrehozása.
    div_1_error.classList = 'error'; //A div_1_error-hoz az error class hozzárendelése.
    div_1.appendChild(div_1_error); //A div_1_error hozzáadása a div_1-hez.

    form.appendChild(div_1); //A div_1 hozzáadása a formhoz.
    

    const div_2 = document.createElement('div'); //A form 2.sorának a létrehozása.
    div_2.classList.add('field'); //A field class hozzáadása a div_2-höz.

    const label_2 = document.createElement('label'); //A label_2 elem létrehozása.
    label_2.htmlFor = 'esemeny1'; //A label_2 for-ának megadása.
    label_2.innerText = 'Első esemény:'; //A label_2 tartalma az Első esemény: lesz.
    div_2.appendChild(label_2); //A label_2 hozzáadása a div_2-höz.

    const input_2 = document.createElement('input'); //Az input_2 mező létrehozása.
    input_2.type = 'text'; //Az input_2 típusának megadása.
    input_2.id = 'esemeny1'; //Az input_2 id-jének megadása.
    input_2.name = 'esemeny1'; //Az input_2 nevének megadása.
    div_2.appendChild(input_2); //Az input_2 hozzáadása a div_2-höz.

    const div_2_error = document.createElement('div'); //A div_2_error div létrehozása.
    div_2_error.classList = 'error'; //A div_2_error-hoz az error class hozzárendelése.
    div_2.appendChild(div_2_error); //A div_2_error hozzáadása a div_2-höz.

    form.appendChild(div_2); //A div_2 hozzáadása a formhoz.


    const div_3 = document.createElement('div'); //A form 3.sorának a létrehozása.
    div_3.classList.add('field'); //A field class hozzáadása a div_3-hoz.

    const label_3 = document.createElement('label'); //A label_3 elem létrehozása.
    label_3.htmlFor = 'evszam1'; //A label_3 for-ának megadása.
    label_3.innerText = 'Első esemény évszáma:'; //A label_3 tartalma az Első esemény évszáma: lesz.
    div_3.appendChild(label_3); //A label_3 hozzáadása a div_3-hoz.

    const input_3 = document.createElement('input'); //Az input_3 mező létrehozása.
    input_3.type = 'text'; //Az input_3 típusának megadása.
    input_3.id = 'evszam1'; //Az input_3 id-jének megadása.
    input_3.name = 'evszam1'; //Az input_3 nevének megadása.
    div_3.appendChild(input_3); //Az input_3 hozzáadása a div_3-hoz.

    const div_3_error = document.createElement('div'); //A div_3_error div létrehozása.
    div_3_error.classList = 'error'; //A div_3_error-hoz az error class hozzárendelése.
    div_3.appendChild(div_3_error); //A div_3_error hozzáadása a div_3-hoz.

    form.appendChild(div_3); //A div_3 hozzáadása a formhoz.


    const div_4 = document.createElement('div'); //A form 4.sorának a létrehozása.
    div_4.classList.add('field'); //A field class hozzáadása a div_4-hez.

    const label_4 = document.createElement('label'); //A label_4 elem létrehozása.
    label_4.htmlFor = 'esemeny2'; //A label_4 for-ának megadása.
    label_4.innerText = 'Második esemény:'; //A label_4 tartalma a Második esemény: lesz.
    div_4.appendChild(label_4); //A label_4 hozzáadása a div_4-hez.

    const input_4 = document.createElement('input'); //Az input_4 mező létrehozása.
    input_4.type = 'text'; //Az input_4 típusának megadása.
    input_4.id = 'esemeny2'; //Az input_4 id-jének megadása.
    input_4.name = 'esemeny2'; //Az input_4 nevének megadása.
    div_4.appendChild(input_4); //Az input_4 hozzáadása a div_4-hez.

    const div_4_error = document.createElement('div'); //A div_4_error div létrehozása.
    div_4_error.classList = 'error'; //A div_4_error-hoz az error class hozzárendelése.
    div_4.appendChild(div_4_error); //A div_4_error hozzáadása a div_4-hez.

    form.appendChild(div_4); //A div_4 hozzáadása a formhoz.


    const div_5 = document.createElement('div'); //A form 5.sorának a létrehozása.
    div_5.classList.add('field'); //A field class hozzáadása a div_5-höz.

    const label_5 = document.createElement('label'); //A label_5 elem létrehozása.
    label_5.htmlFor = 'evszam2'; //A label_5 for-ának megadása.
    label_5.innerText = 'Második esemény évszáma'; //A label_5 tartalma a Második esemény évszáma: lesz.
    div_5.appendChild(label_5); //A label_5 hozzáadása a div_5-höz.

    const input_5 = document.createElement('input'); //Az input_5 mező létrehozása.
    input_5.type = 'text'; //Az input_5 típusának megadása.
    input_5.id = 'evszam2'; //Az input_5 id-jének megadása.
    input_5.name = 'evszam2'; //Az input_5 nevének megadása.
    div_5.appendChild(input_5); //Az input_5 hozzáadása a div_5-höz.

    const div_5_error = document.createElement('div'); //A div_5_error div létrehozása.
    div_5_error.classList = 'error'; //A div_5_error-hoz az error class hozzárendelése.
    div_5.appendChild(div_5_error); //A div_5_error hozzáadása a div_5-höz.

    form.appendChild(div_5); //A div_5 hozzáadása a formhoz.


    const button = document.createElement('button'); //A gomb elem létrehozása.
    button.type = 'submit'; //A gomb típusa submit lesz.
    button.innerText = 'Hozzáadás'; //A gomb tartalma a Hozzáadás lesz.
    form.appendChild(button); //A gomb hozzáadása a formhoz.
}
generateForm(); //A generateForm függvény meghívása.

function generateHeader(){ //A generateHeader függvény meghatározása.
    const header = ["Uralkodó", "Esemény", "Évszám"]; //A header változóba, a tömb tartalmának az eltárolása.
    const tr = document.createElement('tr'); //Fejlécben lévő sor létrehozása.
    thead.appendChild(tr); //Fejlécben lévő sor hozzáadása a fejléchez.
    for(const head of header){ //Végighaladás a headeren, a head az aktuális elem.
        const th = document.createElement('th') //Új cella létrehozása.
        th.innerHTML = head; //A cella tartalmának megadása a headnek az értékével.
    }
}
generateHeader(); //A generateHeader függvény meghívása.

function render(array){ //A render függvény meghatározása, amelynek a bemeneti paramétere az array lesz.
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
render(array); //A render függvényt meghívása.

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

    if(!validateFormHTMLField(uralkodoHtmlElement, 'Az uralkodó megadása kötelező')){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti uralkodoHtmlElement esetén.
        valid = false; //A valid változó értéke false lesz.
    }
    
    if(!validateFormHTMLField(esemeny_1HtmlElement, 'Az esemény megadása kötelező')){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti esemeny_1HtmlElement esetén.
        valid = false; //A valid változó értéke false lesz.
    }
    
    if(!validateFormHTMLField(evszam_1HtmlElement, 'Az évszám megadása kötelező')){ //Ha validateFormHTMLField függvény hamissal tér vissza, a bemeneti evszam_1HtmlElement esetén.
        valid = false; //A valid változó értéke false lesz.
    }

    if(!getNonEmptyFormHTMLField(esemeny_2HtmlElement, evszam_2HtmlElement, "Az esemény és az évszám megadása kötelező")){ //Ha getNonEmptyFormHTMLField függvény hamissal tér vissza, mind a bemeneti esemeny_2HtmlElement és az evszam_2HtmlElement esetén is.
        valid = false; //A valid változó értéke false lesz.
    }
    
    if(valid){ //Ha a valid változó értéke igaz(nem volt kihagyott mező).
        const uralkodoValue = uralkodoHtmlElement.value; //Az uralkodoHtmlElement értékének belerakása egy változóba.
        const esemeny_1Value = esemeny_1HtmlElement.value; //Az esemeny_1HtmlElement értékének belerakása egy változóba.
        const evszam_1Value = evszam_1HtmlElement.value; //Az evszam_1HtmlElement értékének belerakása egy változóba.
        const esemeny_2Value = esemeny_2HtmlElement.value === "" ? undefined : esemeny_2HtmlElement.value; //Az esemeny_2HtmlElement értékének belerakása egy változóba. Amennyiben az esemeny_2HtmlElement-nek nincs értéke, akkor undefined lesz.
        const evszam_2Value = evszam_2HtmlElement.value === "" ? undefined : evszam_2HtmlElement.value; //Az evszam_2HtmlElement értékének belerakása egy változóba. Amennyiben az evszam_2HtmlElement-nek nincs értéke, akkor undefined lesz.

        const newElement = { //A newElement létrehozása.
            uralkodo: uralkodoValue, //Az objektum urakodo tulajdonságának értéke az uralkodoValue lesz.
            esemeny_1: esemeny_1Value, //Az objektum esemeny_1 tulajdonságának értéke az esemeny_1Value lesz.
            evszam_1: evszam_1Value, //Az objektum evszam_1 tulajdonságának értéke az evszam_1Value lesz.
            esemeny_2: esemeny_2Value, //Az objektum esemeny_2 tulajdonságának értéke az esemeny_2Value lesz.
            evszam_2: evszam_2Value //Az objektum evszam_2 tulajdonságának értéke az evszam_2Value lesz.
        }
        array.push(newElement); //A newElement hozzáadása az arrayhez.
        tbody.innerHTML = ''; //A táblázat tartalmának kitörlése.
        render(array); //A render függvény újra renderelése.
        thisForm.reset(); //A form visszaállítása alaphelyzetbe.
    }
})

function validateFormHTMLField(inputHTMLElement, errormessage){ //A validateFormHTMLField függvény meghatározása.
    let valid = true; //A valid változó létrehozása, ami a true értéket kapja.
    if(inputHTMLElement.value === ''){ //Ha az inputHTMLElement.value beviteli mezője üres.
        const parentElement = inputHTMLElement.parentElement; //Az inputHTMLElement beviteli mező parentElement property-jének az eltárolása egy változóban.
        const errorplace = parentElement.querySelector('.error'); //Az inputHTMLElement beviteli mező parentElement div-jében az error classal ellátott elem megkeresése és annak eltárolása egy változóban.
        if (errorplace != undefined){ //Ha talál ilyen mezőt(nem undefined).
            errorplace.innerHTML = errormessage; //Akkor a hibaüzenet megadása kell.
        }
        valid = false; //A valid változó értéke false lesz.
    }
    return valid; //Visszatérés a valid változóval. Amely hamis, hogyha nem ment át a validáción. Ha meg ki van töltve, akkor igazzal tér vissza.
}

function getNonEmptyFormHTMLField(esemeny_2, evszam_2, errormessage){ //A getNonEmptyFormHTMLField függvény meghatározása.
    let valid = true; //A valid változó létrehozása, ami a true értéket kapja.

    if(esemeny_2.value === '' && evszam_2.value !== ''){ //Ha az esemeny_2 beviteli mezője üres, viszont az evszam_2 meg nem.
        const parentElement = esemeny_2.parentElement; //Az esemeny_2 beviteli mező parentElement property-jének az eltárolása egy változóban.
        const errorplace = parentElement.querySelector('.error'); //Az esemeny_2 beviteli mező parentElement div-jében az error classal ellátott elem megkeresése és annak eltárolása egy változóban.
        if (errorplace != undefined){ //Ha talál ilyen mezőt(nem undefined).
            errorplace.innerHTML = errormessage; //Akkor az esemény és az évszám megadása kötelező hibaüzenetet dobja ki.
        }
        valid = false; //A valid változó értéke false lesz.
    };

    if(evszam_2.value === '' && esemeny_2.value !== ''){ //Ha az evszam_2 beviteli mezője üres, viszont az esemeny_2 meg nem.
        const parentElement = evszam_2.parentElement; //Az evszam_2 beviteli mező parentElement property-jének az eltárolása egy változóban.
        const errorplace = parentElement.querySelector('.error'); //Az evszam_2 beviteli mező parentElement div-jében az error classal ellátott elem megkeresése és annak eltárolása egy változóban.
        if (errorplace != undefined){ //Ha talál ilyen mezőt(nem undefined).
            errorplace.innerHTML = errormessage; //Akkor az évszám és az esemény megadása kötelező hibaüzenetet dobja ki.
        }
        valid = false; //A valid változó értéke false lesz.
    };

    return valid; //Visszatérés a valid változóval. Amely hamis, hogyha nem ment át a validáción. Ha meg ki van töltve, akkor igazzal tér vissza.
}
