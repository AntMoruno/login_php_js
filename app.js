/**
 * @file Contiene el controlador principal de la aplicación.
 * @author Antonio Moruno <antoniocarlosmorunogomez.guadalupe@alumnado.fundacionloyola.net>
 * @license GPL-3.0-or-later
 * ref: https://github.com/mjaque/login_sencillo/tree/master/js
 */
import {Rest} from './rest.js'
import {VistaLogin} from './vistalogin.js'
/**
 * Controlador de la aplicación.
 */
class Controlador{
	/**
	 * Constructor de la clase.
	 * Llama al método iniciar al cargarse la página.
	 */
	constructor(){
		window.onload = this.iniciar.bind(this)
	}
	/**
	 * Inicia el controlador y carga la vista login.
	 */
	iniciar(){
		this.vistaLogin = new VistaLogin(this, document.getElementById('divLogin'))
	}
	/**
	 *
	 */
	login(usuario, password){
		const login = {
			'usuario': usuario,
			'clave': password
		}
		Rest.post('login',login)
		.then( () => {
			this.vistaLogin.mostrar(false)
			let body = document.getElementsByTagName('body')
			let p = document.createElement('p')
			body.appendChild(p)
			p.appendChild(document.createTextNode('Login realizado'))
		})
	}
}

new Controlador() //Para qué vale esto??