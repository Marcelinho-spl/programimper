/*- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

function escolhendoPrato(prato, tempo){
    let tempoPrato = 0
    if (prato == 'pipoca') {
        tempoPrato = 10
    } else if (prato == 'macarrao') {
        tempoPrato = 8
    } else if (prato == 'carne') {
        tempoPrato = 15
    } else if (prato == 'feijao') {
        tempoPrato = 12
    } else if (prato == 'brigadeiro') {
        tempoPrato = 8
    } else {
        return 'prato inexistente, prato pronto, bom apetite!!!'
    }

    if ((tempo / tempoPrato) < 1) {
        return 'tempo insuficiente, prato pronto, bom apetite!!!'
    } else if ((tempo / tempoPrato) >= 2 && (tempo / tempoPrato) <= 3) {
        return 'comida queimou, prato pronto, bom apetite!!!'
    } else if ((tempo / tempoPrato) > 3) {
        return 'kabumm, prato pronto, bom apetite!!!'
    } else {
        return 'prato pronto, bom apetite!!!'
    }
}

let mensagem = escolhendoPrato('coxinha', 25);
console.log(mensagem)