let Nome = prompt ('digite Seu nome');
let N1 = parseFloat (prompt("digite m1"));
let N2 = parseFloat (prompt("digite m2"));
let N3 = parseFloat (prompt("digite m3"));

let media = (N1+N2+N3 ) /3;

if (media > 7) {
    alert(`Olá ${Nome} com as notas ${N1}, ${N2}, ${N3} Somando a média ${media} Aprovado`);
} else if (media >3) {
    alert(`Olá ${Nome} com as notas ${N1}, ${N2}, ${N3} Somando a média ${media} Reprovando`);
} 