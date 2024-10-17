function calcularValorFuncao(x) {
    if (x < -2) {
      return 2 * x + 2;
    } else if (x >= -2 && x < 3) {
      return 3;
    } else {
      return -x;
    }
  }