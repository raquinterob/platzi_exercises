for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) respuesta = i + '. fizzbuzz'
  else if (i % 3 == 0) respuesta = i + '. fizz'
  else if (i % 5 == 0) respuesta = i + '. buzz'
  else respuesta = '<span style="color: gray;">' + i + '.</span>'
  document.write(respuesta + '<br />')
}
