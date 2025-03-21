var a = 1;
let b = 2;
const c = 3;

//a = 10
//b = 20
//c= 30

console.log(a);
console.log(b);
console.log(c);

/*
as alterações em a e b ocorrem normalmente, exibindo os valores 10 e 20 no console, isso ocorre pois
tanto var quanto let são declaração de variáveis, permitindo alteração. Porém, ao tentar alterar c,
é exibido um erro no console. Isso ocorre pois const é uma declaração de constante, não permitindo alterar
 o valor posterior a sua declaração.
*/