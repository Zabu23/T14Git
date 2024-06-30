const csapatAdat = [
    "Anglia;4;0;1662", 
    "Argentína;10;0;1614", 
    "Belgium;1;0;1752", 
    "Brazília;3;-1;1719", 
    "Chile;17;-3;1576", 
    "Dánia;14;-1;1584", 
    "Franciaország;2;1;1725", 
    "Hollandia;13;3;1586", 
    "Horvátország;8;-1;1625", 
    "Kolumbia;9;-1;1622", 
    "Mexikó;12;0;1603", 
    "Németország;16;-1;1580", 
    "Olaszország;15;1;1583", 
    "Peru;19;0;1551", 
    "Portugália;5;1;1643", 
    "Spanyolország;7;2;1631", 
    "Svájc;11;0;1604", 
    "Svédország;18;0;1560", 
    "Szenegál;20;0;1546", 
    "Uruguay;6;-1;1639"
    ];
    
    function ObjektumFeltolto(feltoltendoElem){
        let BeOlvasottAdatok = [];
      for(let i=0;i<feltoltendoElem.length;i++){
         let objektum ={};
         let daraboltSor = feltoltendoElem[i].split(";")
         objektum.nev = daraboltSor[0];
         objektum.helyezes = Number(daraboltSor[1]);
         objektum.valtozas = Number(daraboltSor[2]);
         objektum.pont = Number(daraboltSor[3]);
         BeOlvasottAdatok.push(objektum);
      }
      return BeOlvasottAdatok;
    }
    
    const fifaAdatok=ObjektumFeltolto(csapatAdat);



    function HanyCsapatVan(vizsgaltTomb){
    return vizsgaltTomb.length;
    }

    function HanyCsapatVanKiir(){
    let CsapatSzam = HanyCsapatVan(fifaAdatok)
    document.querySelector("#f1").innerHTML = "A ranglistán szereplő csapatok száma: " + CsapatSzam;
    }

    let f1eventGomb = document.querySelector("#f1feladat");
    f1eventGomb.addEventListener("click",HanyCsapatVanKiir);




    function AtlagPontszam(vizsgaltTomb){
    let AtlagPont = 0;
    let OsszPont = 0;
       for(let i=0;i<vizsgaltTomb.length;i++){
        OsszPont+=vizsgaltTomb[i].pont
        AtlagPont = Math.round(OsszPont/vizsgaltTomb.length);
       }
       return AtlagPont;
    }

    function AtlagPontszamKiir(){
    let AtlagPont = AtlagPontszam(fifaAdatok);
    document.querySelector("#f2").innerHTML = "A ranglistán szereplő csapatok átlagpontszáma: " + AtlagPont;
    }

    let f2eventGomb = document.querySelector("#f2feladat");
    f2eventGomb.addEventListener("click",AtlagPontszamKiir);
    



    function AtlagFelettiCsapatok(vizsgaltTomb){
    let Atlag = AtlagPontszam(fifaAdatok);
    let AtlagFelettiek = [];
        for(let i=0;i<vizsgaltTomb.length;i++){
            if(vizsgaltTomb[i].pont > Atlag){
                let objektum ={};
                objektum.nev = vizsgaltTomb[i].nev
                objektum.pont = vizsgaltTomb[i].pont
                AtlagFelettiek.push(objektum);
            }              
        }
        return AtlagFelettiek;
    }

    function AtlagFelettiTablazat(){
    let eredmeny = AtlagFelettiCsapatok(fifaAdatok);
    let table = document.querySelector("#f3");
       for(let i=0;i<eredmeny.length;i++){
        let adatSor = table.insertRow(-1);
        let orszag = adatSor.insertCell(0);
        let pont = adatSor.insertCell(1);
        orszag.innerHTML = eredmeny[i].nev;
        pont.innerHTML = eredmeny[i].pont + "pont";
        
       }
       f3eventGomb.removeEventListener("click" , AtlagFelettiTablazat);
    }

    let f3eventGomb = document.querySelector("#f3feladat");
    f3eventGomb.addEventListener("click" , AtlagFelettiTablazat);
    



    function LegtobbetJavitoCsapat(vizsgaltTomb){
        let LegTobbetJavitoCsapat = vizsgaltTomb[0];
        for(let i=0;i<vizsgaltTomb.length;i++){
            if(vizsgaltTomb[i].valtozas < LegTobbetJavitoCsapat.valtozas)
            LegTobbetJavitoCsapat = vizsgaltTomb[i]
        }
        return "<br>Név: " + LegTobbetJavitoCsapat.nev + "<br> Helyezés: " + LegTobbetJavitoCsapat.helyezes + "<br> Pontszám: " + LegTobbetJavitoCsapat.pont
    }
    
    function LegtobbetJavitoCsapatKiir(){
    let LegtobbetJavito = LegtobbetJavitoCsapat(fifaAdatok);
    document.querySelector("#f4").innerHTML = `A legtöbbet javított csapat adatai a következők: ${LegtobbetJavito}`;
    }
    
    let f4eventGomb = document.querySelector("#f4feladat");
    f4eventGomb.addEventListener("click" , LegtobbetJavitoCsapatKiir);




    function CsapatKiolvaso(){
        let CsapatNev = document.querySelector("#csapatNeve").value
        return CsapatNev;
    }


    function MegtalalhatoEAdottCsapat(vizsgaltTomb,csapatNev){
    let MegtalalhatoE = false;
        for(let i=0;i<vizsgaltTomb.length;i++){
            if(vizsgaltTomb[i].nev === csapatNev){
                 MegtalalhatoE = true;
            }
        }
        return MegtalalhatoE;

    }


    function MegtalalhatoEAdottCsapatKiir(){
        let adottCsapat = CsapatKiolvaso();
        let BenneVanE = MegtalalhatoEAdottCsapat(fifaAdatok,CsapatKiolvaso())
           if(BenneVanE){
                document.querySelector("#f5").innerHTML = `${adottCsapat} megtalálható a ranglistában.`
                
            }
            else{
                document.querySelector("#f5").innerHTML = `${adottCsapat} nincs benne a ranglistában.`
            }
    }


    let f5eventGomb = document.querySelector("#f5feladat")
    f5eventGomb.addEventListener("click",MegtalalhatoEAdottCsapatKiir)




    function ValtozasTipusok(vizsgaltTomb){
        let Valtozasok = [];
        for(let i=0;i<vizsgaltTomb.length;i++){
            let SzerepelE = false;
            for(let j=0;j<Valtozasok.length;j++){
                if(Valtozasok[j] == vizsgaltTomb[i].valtozas){
                    SzerepelE = true;
                }
            }
            if(SzerepelE == false){
                Valtozasok.push(vizsgaltTomb[i].valtozas)
            }
        }
        return Valtozasok;
    }


    function ValtozasSzamolo(vizsgaltTomb,Valtozasok){
        let ValtozasMennyiseg = [];
            for(let i=0;i<Valtozasok.length;i++){
                ValtozasMennyiseg.push(0)
            }
            for(let i=0;i<vizsgaltTomb.length;i++){
                for(let j=0;j<Valtozasok.length;j++){
                    if(Valtozasok[j] === vizsgaltTomb[i].valtozas){
                       ValtozasMennyiseg[j]++;
                    }
                }
            }
            return ValtozasMennyiseg;
    }


    function StatisztikaTablazat(){
    let Valtozasok = ValtozasTipusok(fifaAdatok);
    let ValtozasokSzama = ValtozasSzamolo(fifaAdatok,Valtozasok);
    let table = document.querySelector("#f6");
        for(let i=0;i<Valtozasok.length;i++){
            if(ValtozasokSzama[i]>1){
            let adatSor = table.insertRow(0);
            let valtozas = adatSor.insertCell(0);
            let valtozasdb = adatSor.insertCell(1);
            valtozas.innerHTML = Valtozasok[i] + " helyezés";
            valtozasdb.innerHTML = ValtozasokSzama[i] + " db csapat";
            }
        }
        f6eventGomb.removeEventListener("click",StatisztikaTablazat);
    }


    let f6eventGomb = document.querySelector("#f6feladat");
    f6eventGomb.addEventListener("click",StatisztikaTablazat);