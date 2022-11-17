/**
 * @file Contiene la vista login de la aplicación.
 * @author Antonio Moruno <antoniocarlosmorunogomez.guadalupe@alumnado.fundacionloyola.net>
 * @license GPL-3.0-or-later
 * ref: https://github.com/mjaque/login_sencillo/tree/master/js
 */
 export class VistaLogin{
	/**
	 * Constructor de la clase.
	 * @param {Object} controlador Controlador de la vista principal.
	 */
	constructor(controlador, div){
		this.controlador = controlador
		this.div = div
		this.iniciar()
	}
	/**
	 * Inicia la vista.
	 * Registra la referencia a los elementos del html y registra los eventos.
	 */
	iniciar(){
		//Referencias
		this.inputUsuario = document.getElementsByTagName('input')[0]
		this.inputPassword = document.getElementsByTagName('input')[1]
		this.btnLogin = document.getElementById('btnLogin') //Con getElementsByTagName[0] no funciona
		//Eventos
		this.btnLogin.onclick = this.login.bind(this)
	}
	/**
	 * Muestra u oculta la vista
	 * @param {Boolean} True muestra la vista, false la oculta
	 */
	mostrar(mostrar){
		if(mostrar)
			this.div.style.display = 'block'
		else
			this.div.style.display = 'none'
	}
	/**
	 * Atención al evento de click en el botón del login
	 * 1º valida los datos de entrada, 2º solicita el login al controlador
	 */
	login(){
		//Validaciones
		if(this.inputUsuario.value == "" || this.inputPassword.value == "")
			throw Error("Los campos no pueden estar vacíos")
		
		this.controlador.login(this.inputUsuario.value, this.inputPassword.value)
	}
 }