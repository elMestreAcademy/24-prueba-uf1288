let bytes_a_comprobar = [
    [1, 0, 0, 1, 1, 1, 0, 1, 1],
    [0, 1, 1, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 1, 1, 0, 1, 1, 1],
    [1, 1, 0, 0, 1, 0, 1, 0, 0],
    [1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 1, 1, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 0, 1, 1, 1, 1],
    [0, 0, 1, 1, 0, 0, 0, 0, 1],
]

// se ha comprobado a mano que la linea 9 tiene un error al final segun la paridad deberia de ser 0 el resultado 
// y vemos que cuando comprobamos la parte de abajo la tercera columna tiene un fallo no es 1 es 0 .
console.log(bytes_a_comprobar);
