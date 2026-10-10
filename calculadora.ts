type Operador = '+' | '-' | '*' | '/';

function calcular(a: number, b: number, operador: Operador): number | string {
  switch (operador) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    case '/': return b !== 0 ? a / b : 'Erro: divisão por zero';
    default: return 'Operador inválido';
  }
}

// Testes exibidos no terminal
console.log("Resultado 1:", calcular(10, 5, '+')); 
console.log("Resultado 2:", calcular(10, 2, '/')); 
