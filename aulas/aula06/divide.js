function divide(arg1, arg2) {
  if (arg2 == 0) {
    return "O divisor deve ser maior que zero!"
  }

  return arg1 / arg2
}

module.exports = divide
