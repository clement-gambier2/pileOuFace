function initElement(){
    let launch = document.getElementById("launch");
    launch.onclick = calcul;
}



function calcul(){
  let valeur = Math.random();
  //console.log(valeur);
  let p = document.createElement("p");

  let est_p = document.getElementsByClassName('resultat');
  //console.log(est_p);
  let nombre = est_p.length;
  //console.log("longueur " + nombre);

  //Si il n'y a pas de message
  if(nombre === 0){
    if (valeur >= 0.5) {
      p.innerHTML = "Pile";
      document.getElementById("resultat-container").appendChild(p);
    }
    else{
      p.innerHTML = "Face";
      document.getElementById("resultat-container").appendChild(p);
    }
    p.classList.add("resultat");
  }

    //Si il y a déjà un message
  else{
      if (valeur >= 0.5) {
          document.getElementsByClassName("resultat")[0].innerHTML = "Pile";
      }
      else{
          document.getElementsByClassName("resultat")[0].innerHTML = "Face";
      }
  }
}

calcul();
