// Prova do B2 da matéria de Construção de Software para Web
// Aluno: Diogo Fardim Rmalho
// Turma: CC1MD


 // Exercício 1!
   function Númeroprimo() {
     var numero = parseFloat(prompt("Digite seu número"));


     if (numero <= 1) {
       alert("O número não pode ser menor ou igual do que um."); // Um não é primo :)
       return;
     }


     for (let i = 2; i < numero; i++) {
       if (numero % i === 0) {
         alert(`${numero} não é um número primo.`);
         return;
       }
     }


     alert(`${numero} é  um número primo.`);
   }

   // Exercício 2!
   function Senha() {
    var senha = prompt("Digite sua senha");


    if (senha.length < 8) {
      alert("A sua senha precisa ter pelo menos 8 caracteres.");
      return;
    }


    if (!/[a-z]/.test(senha)) {
      alert("A sua senha precisa ter pelo menos uma letra minúscula.");
      return;
    }


    if (!/[A-Z]/.test(senha)) {
      alert("A sua senha precisa ter pelo menos uma letra maiúscula.");
      return;
    }


    if (!/\d/.test(senha)) {
      alert("A sua senha precisa ter pelo menos um número.");
      return;
    }


    alert("Parabéns, sua senha foi válidada com sucesso!");
  }

  // Exercício 3!
  function Fatorial() {
    var numero = parseFloat(prompt("digite seu número"));
    var fatorial = 1;


    if (numero < 0) {
      alert("O número não pode ser menor que zero.");
      return;
    }

    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }


    alert(`Fatorial de ${numero}: ${fatorial}`);
  }

  // Exercício 4
  function QuadradoPerfeito() {
    var numero = parseFloat(prompt('digite seu número'));
    var raiz = Math.sqrt(numero);


    if (numero < 0) {
      alert("O número não pode ser menor que zero.");
      return;
    }

    if (Math.floor(raiz) === raiz) {
      alert(`${numero} é um quadrado perfeito.`);
    } else {
      alert(`${numero} não é um quadrado perfeito.`);
    }
  }

