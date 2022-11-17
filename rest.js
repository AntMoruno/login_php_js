/**
 * @file Contiene el servicio REST de la aplicación.
 * Servicio para interfaz RESTful.
 * Ref: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
 * ref: https://github.com/mjaque/login_sencillo/tree/master/js
 * Devolvemos una promesa para controlar error local (??????)
 * @author Antonio Moruno <antoniocarlosmorunogomez.guadalupe@alumnado.fundacionloyola.net>
 * @license GPL-3.0-or-later
 */
 export class Rest{
	static #URL = 'index.php'
	
	get(recurso, objeto){}
	static post(recurso, objeto){
		const opciones = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(objeto)
		}
		
		//Construimos la petición
		return fetch(`${Rest.#URL}/${recurso}`, opciones)
			.then(respuesta => {
				if (!respuesta.ok) throw Error(`${respuesta.status}) - ${respuesta.statusText}`)
					//La respuesta es un texto con la URL del recurso creado.
					return respuesta.text()
					//respuesta.json() //Si fuera json. (????)
			})
	}
	put(recurso,objeto){}
	delete(recurso, objeto){}
 }