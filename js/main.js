function mediaFinal(){
    var nota1 = parseFloat(document.getElementById("notaN1A").value);
    var nota2 = parseFloat(document.getElementById("notaN1B").value);
    var nota3 = parseFloat(document.getElementById("notaN2A").value);
    var nota4 = parseFloat(document.getElementById("notaN2B").value);

    var mediaN1 = (nota1 + nota2)* 0.4 ;
    var mediaN2 = (nota3 + nota4) * 0.6;

    var media = mediaN1 + mediaN2 / 2;

    if(media >= 7)
     if(media==10)
      alert("Uau! Aprovado com Louvou!!!");
     else
      alert("Parabéns, aprovado! Média "+ media);
    else
     alert("Reprovado!")

   }

//    function verificar() {
//     var nota1 = Number(document.getElementsById('notaN1A')[0].value);
//     var nota2 = Number(document.getElementsById('notaN1B')[1].value);
//     var nota3 = Number(document.getElementsById('notaN2A')[2].value);
//     var nota4 = Number(document.getElementsById('notaN2B')[3].value);

//     var mediaN1 = (nota1 + nota2)* 0.4 ;
//     var mediaN2 = (nota3 + nota4) * 0.6;

//     var media = mediaN1 + mediaN2 / 2;

//     if (media >= 6 && media < 10) {
//     document.querySelector('p').innerHTML = `O aluno está aprovado.`;
//     } else if (media >= 10) {
//     document.querySelector('p').innerHTML = `O aluno tirou a nota ${media} e está aprovado com distinção.`;
//     } else {
//     document.querySelector('p').innerHTML = `O aluno está reprovado.`;
//     }
// }