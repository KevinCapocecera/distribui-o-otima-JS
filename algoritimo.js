var valor = parseFloat(prompt("Digite o valor que deseja sacar "));
        var notas = [100, 50, 20, 10, 5, 2, 1];
        var qtdNotas = [0, 0, 0, 0, 0, 0, 0];
        var i = 0;

        while (valor > 0) {
            if (valor >= notas[i]) {
                qtdNotas[i] = parseInt(valor / notas[i]);
                valor = valor - (qtdNotas[i] * notas[i]);
            }
            i++;
        }

        for (i = 0; i < qtdNotas.length; i++) {
            if (qtdNotas[i] > 0) {
                document.write(qtdNotas[i] + " notas(s) de R$" + notas[i] + "<br>");
            }
        }