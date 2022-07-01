const obj = {
    nombre : "Sebastián",
    apellido : "González",
    saludo : function(){
  	console.log(`Hola!! ${this.nombre} ${this.apellido}`)
  }
}

obj.saludo()