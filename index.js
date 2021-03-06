(function(){

	let form = document.form;
	let elements = form.elements;

	let validarInputs = function(){

		for (let i = 0; i < elements.length; i++) {

			if (elements[i].type == "text" || elements[i].type == "email" || elements[i].type == "password") {

				if (elements[i].value.length == 0) {

					console.log('El campo ' + elements[i].name + ' esta incompleto');
					elements[i].className = elements[i].className + " error";
					return false;
				} else {

					elements[i].className = elements[i].className.replace(" error", "");
				}
			}
		}

		if (elements.pass.value !== elements.pass2.value) {

			elements.pass.value = "";
			elements.pass2.value = "";
			elements.pass.className = elements.pass.className + " error";
			elements.pass2.className = elements.pass2.className + " error";
		} else {

			elements.pass.className = elements.pass.className.replace(" error", "");
			elements.pass2.className = elements.pass2.className.replace(" error", "");
		}

		return true;
	};

	let validarRadios = function(){

		let opciones = document.getElementsByName('sex');
		let resultado = false;

		for (let i = 0; i < elements.length; i++) {
	
			if(elements[i].type == "radio" && elements[i].name == "sex"){
	
				for (let o = 0; o < opciones.length; o++) {

					if (opciones[o].checked) {
					resultado = true;
					break;
					}
				}

				if (resultado == false) {
	
					elements[i].parentNode.className = elements[i].parentNode.className + " error";
					console.log('El campo sexo esta incompleto');
					return false;
				} else {
				
					elements[i].parentNode.className = elements[i].parentNode.className.replace(" error", "");
					return true;
				}
			}
		}
	};

	let validarCheckbox = function(){

		let opciones = document.getElementsByName('terms');
		let resultado = false;

		for (let i = 0; i < elements.length; i++) {

			if(elements[i].type == "checkbox"){
	
				for (let o = 0; o < opciones.length; o++) {
	
					if (opciones[o].checked) {
	
						resultado = true;
						break;
					}
				}

				if (resultado == false) {

					elements[i].parentNode.className = elements[i].parentNode.className + " error";
					console.log('El campo checkbox esta incompleto');
					return false;
				} else {
					
					elements[i].parentNode.className = elements[i].parentNode.className.replace(" error", "");
					return true;
				}
			}
		}
	};

	let enviar = function(e){
	
		if (!validarInputs()) {
	
			console.log('Falto validar los Input');
			e.preventDefault();
		} else if (!validarRadios()) {
	
			console.log('Falto validar los Radio Button');
			e.preventDefault();
		} else if (!validarCheckbox()) {

			console.log('Falto validar Checkbox');
			e.preventDefault();
		} else {
	
			console.log('Envia');
			e.preventDefault();
		}
	};

	let focusInput = function(){
		
		this.parentElement.children[1].className = "label active";
		this.parentElement.children[0].className = this.parentElement.children[0].className.replace("error", "");
	};

	let blurInput = function(){
	
		if (this.value <= 0) {
			
			this.parentElement.children[1].className = "label";
			this.parentElement.children[0].className = this.parentElement.children[0].className + " error";
		}
	};

	form.addEventListener("submit", enviar);

	for (let i = 0; i < elements.length; i++) {

		if (elements[i].type == "text" || elements[i].type == "email" || elements[i].type == "password") {
	
			elements[i].addEventListener("focus", focusInput);
			elements[i].addEventListener("blur", blurInput);
		}
	}

}())

const labels = document.querySelectorAll('label');

labels.forEach(x => {
	x.addEventListener('keyup', function(evt){

		if(evt.keyCode === 32){
			
			const input = document.getElementById(x.htmlFor)
			input.checked = !input.checked
			
		}
	})
})