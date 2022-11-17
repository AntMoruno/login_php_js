<?php
	/**
	 * Fachada del backend de la aplicación.
     * Su responsabilidad es procesar la petición HTTP para decidir a qué controlador llamar (routing).
     * También identifica al usuario (autenticación).
     * Es un interfaz RESTful (https://www.rfc-editor.org/rfc/rfc7231)
	 */
	 
	 //Antes de utilizar informarme sobre esto
	/*ini_set('display_errors', 1);
	ini_set('display_startup_errors', 1);
	error_reporting(E_ALL); */
	
	try{
		//Conectar con la base de datos
		include 'configuracion.php';
		$mysqli = new mysqli(SERVIDOR, USUARIO, PASSWORD, BD) or die ('No ha sido capaz de conectar');
		
		//Procesar petición para identificar el recurso solicitado
		//Esta parte mirarla más detenidamente
		$metodo = $_SERVER['REQUEST_METHOD'];
		$params = explode('/', $_SERVER['PATH_INFO']); //Creo que es lo mismo que split en js
		$recurso = $params[1];  //El primer elemento es la /.
		array_splice($params, 0, 2);  //Quitamos la / y el recurso solicitado.
		
		//Procesamiento de nulos
		for($i = 0; $i < count($params); $i++)
			if($params[$i] == 'null')
				$params[$i] == null;
		
		//Autenticación
		//Aquí supongo que es la parte de cotejar con la bbdd y ver si usuario y contraseña coinciden
		
		//Routing
		switch($recurso){
			case 'login':
				//Comprobar el login (??)
				//Si es correcto
				header('HTTP/1.1 200 OK');
				//Si no es correcto
				header('HTTP/1.1 401 Unauthorized');
				die();
				break;
			
			default:
				header('HTTP/1.1 501 Not Implemented');
				die();
		}
	
	}catch(Exception $excepcion){
		header('HTTP/1.1 500 Internal Server Error');
		echo $excepcion;
		die();
	}

?>