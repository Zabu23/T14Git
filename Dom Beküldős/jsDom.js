function szovegHosszSzamolo(){

let mezo = document.querySelector("#f1").value;
let hossz = mezo.length;
let szamlalo = document.querySelector("#karakterszam");   
szamlalo.innerHTML = `${hossz} karakter`;

}



function Kirajzolo(){

    let xKoordinata = document.querySelector("#xTengely").value;
    let yKoordinata = document.querySelector("#yTengely").value;
    let rajzolo = document.querySelector("#rajz");
    rajzolo.style.position = "absolute";
    rajzolo.style.left = xKoordinata + "px";
    rajzolo.style.top = yKoordinata + "px";
    rajzolo.style.backgroundColor = "#ff0000";
    
}

let f2eventGomb = document.querySelector("#f2gomb");
f2eventGomb.addEventListener("click",Kirajzolo)





function KepMegjelenito(){

let image = document.querySelector("#kep");
    if(image.style.opacity === "0"){
        image.style.opacity = "1";
        image.style.transition = "opacity 5s";
    }
    else{
        image.style.opacity = "0";
        image.style.transition = "opacity 5s";
    }
}

let f3eventGomb = document.querySelector("#f3gomb");
f3eventGomb.addEventListener("click",KepMegjelenito)



let f4eventGomb = document.querySelector("#f4gomb");
    f4eventGomb.addEventListener("click", emailEllenorzo)

function validEmail(vizsgaltEmail){
    let minta = /^[0-9a-z\.-]+@([0-9a-z-]+\.)+[a-z]{2,4}$/i;
    if(minta.test(vizsgaltEmail)){
        return true;
    }
    else{
        return false;
    }
}




function emailEllenorzo(){

    let email = document.querySelector("#email").value;
    let emailujra = document.querySelector("#emailujra").value;
    let hibaBox = document.querySelector("#hibaUzenetBox");
    hibaBox.style.backgroundColor = "red";
    
        if(email === ""){
            hibaBox.innerHTML = "Nincs kitöltve az Email mező!"
        }
        else if(emailujra === ""){
            hibaBox.innerHTML = "Nincs kitöltve az Email cím megerősítése mező"
        }
        else if(email === "" && emailujra === ""){
            hibaBox.innerHTML = "Nincs kitöltve egyik mező sem!"
        }
        else if(email !== emailujra){
            hibaBox.innerHTML = "Az email címek  nem egyeznek"
        }
        else if(!validEmail(email)){
            hibaBox.innerHTML = "Az email formátuma nem megfelelő!"
        }
        else{
            hibaBox.innerHTML = "Adatok rögzítése sikeres!"
            hibaBox.style.backgroundColor = "green"
        }
}
        
      

