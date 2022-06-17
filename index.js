
// Exercice 1
function caesarCipher(text, k) {
    // inserer le code ici
   let CesarTable = [];
    for (let i = 0; i < text.length; i++) {
        if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
            CesarTable.push((((text.charCodeAt(i) - 65) + k) % 26) + 65);
        } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122){
            CesarTable.push((((text.charCodeAt(i) - 97) + k) % 26) + 97);
        }else{
          CesarTable.push(text.charCodeAt(i));
        }
    }
    let textcipher = "";
    for (let j = 0; j < CesarTable.length; j++) {
        textcipher += String.fromCharCode(CesarTable[j]);
    }
    return textcipher;
}
// Exercice 2
function multiple35(n) {
    // inserer le code ici
     let addmultiple = 0;
    for (let i = 0; i < n; i++) {
        if ((i % 3) == 0 || (i % 5) == 0) {
            addmultiple += i;
        } 
    }
    return addmultiple;
}

// Exercice 3
function calculFacture(items, tva) {
    // inserer le code ici
 let facture=0;
  for(let i in items){ 
    facture +=items[i].price * items[i].n;
    if(items[i].estTaxable==true)
    { 
      facture +=items[i].price * items[i].n*tva;
    }
   }
  return Number.parseFloat(facture.toFixed(2));
}
// Exercice 4  
function maxChar(texte) {
    // inserer le code ici
    let max = 0;
  let maxletter = '';
  texte.split('').forEach((letter) => {
    if (texte.split(letter).length > max) {
      max = texte.split(letter).length - 1;
      maxletter = letter;
    }
  });
  return maxletter; 
}

// Exercice 5
function signRatios(nums) {
    // inserer le code ici
    nums = nums.map((sign) => {if (sign > 0) {
            sign = 1;
        } else if (sign < 0) {
            sign= -1;
        } else { sign = 0; }
        return sign;
    });
   function rapport(sign){
  let fraction=0;
     if(!nums.length){
       fraction=0;
     }else{
       fraction=Number.parseFloat(nums.filter(x => x === sign).length/nums.length);
     }
   return fraction.toFixed(7).toString().slice(0,-1);
   }
return rapport(1)+" "+rapport(-1)+" "+rapport(0);
}
module.exports = { caesarCipher, multiple35, calculFacture, maxChar, signRatios };