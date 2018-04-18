let $ = window.jQuery
let $msg = $('#messages')

// Example of CALLBACK HELL
/*try{
	$msg.text('Quiero un espresso')
	//throw 'No tehemos espresso'
	setTimeout(function () {
		try {
			throw 'No tenemos espresso'
			$msg.text('Ya esta listo su cafe')
			$msg.text('Tomar el cafe')
		} catch (err) {
			$msg.text(err)
		}
	}, 2000)
} catch (err) {
	$msg.text(err)
}*/

function waitTwoSeconds() {
	return new Promise(function (resolve, reject) {
		setTimeout(function (){
			let cafe = 'espresso'
			resolve(cafe)
		}, 2000)
		// setTimeout(function() {
		// 	reject('No tenemos espresso')
		// }, 2000)
	})
}

$msg.text('Quiero un espresso')
waitTwoSeconds()
.then(function (cafe){
	$msg.text(`preparando ${cafe}`)
	return waitTwoSeconds()
})
.then(function (cafe){
	if (cafe  == 'espresso') {
		$msg.text(`tome su ${cafe}`)
	}else{
		throw 'El cafe esta muy caliente'
	}
})
.catch(function (err) {
	$msg.text(err).css('color', 'red');
})
