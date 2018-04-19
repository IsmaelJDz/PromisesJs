	//THIS EXAMPLE USE A SERVER WITH PITHON 2-7 python -m SimpleHTTPServer 8000

	function get(URL) {
		return new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();

			xhr.onreadystatechange = function () {
				const DONE = 4
				const OK = 200
				if (this.readyState ===DONE) {
					if (this.status ===OK) {
						resolve(null, JSON.parse(this.responseText))
					}
					else
					{
						reject(new Error(`Se produjo un error al realizar el request: ${this.status}`))
					}
				}
			}
		})
		xhr.open('GET', URL);
		xhr.send(null);
	}

	let luke

	fetch('https://swapi.co/api/people/1/')
		.then(response => response.json())
		.then((json) =>{
			luke = json
			return fetch(luke, homeworld)
		})
		.then(response => response.json())
		.then((json) => {
			luke.homeworld = json
			console.log(`${luke.name} nacio en ${luke.homeworld.name}`)
		})
		.catch(err => handleError(err))