

window.onload = () => {

	watch()

	$('#btn-progress').on('click', () => { progressBar_toggle($('.progress-bar')) })

	

	$('#sidebarCollapse').on('click', () => { $('#sidebar').toggleClass('showed') })
}

function progressBar_toggle(div) {
	console.log(div.css("width"))

	let width = div.css("width").replace(/[^0-9]/g,'')
	let open = width == 0 ? false : true

	div.animate( !open ? {"width":"100%"} : {"width":0}, 10000, function(){
		$('#btn-progress').attr( !open ? {"class": "btn btn-outline-danger ml-auto"} : {"class": "btn btn-outline-primary ml-auto"})
		$('#btn-progress').text( !open ? "Cerrar" : "Abrir")
		$("#status").text( open ? "Cerrada" : "Abierta")
		$("#status").attr( open ? {"class" : "text-danger"} : {"class" : "text-success"})

	})

	
	
	
}

function progressBar() {

	$('#btn-progress').toggleClass("progress-complete")
	/*
	$('#btn-progress').on('click',()=>{

		console.log("ramon")

		$('.progress-bar').animate({ 'width': '100%' },15000,()=>{

			$('#btn-progress').attr( "class", "btn btn-outline-danger ml-auto" )
		$('#btn-progress').html("Cerrar")

		})	
	})*/
}


function watch() {
	// Create two variable with the names of the months and days in an array
	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

	// Create a newDate() object
	var newDate = new Date();
	// Extract the current date from Date object
	newDate.setDate(newDate.getDate());
	// Output the day, date, month and year   
	$('#Date').html(dayNames[newDate.getDay()] + " " + newDate.getDate() + ' ' + monthNames[newDate.getMonth()] + ' ' + newDate.getFullYear());

	setInterval(function () {
		// Create a newDate() object and extract the seconds of the current time on the visitor's
		var seconds = new Date().getSeconds();
		// Add a leading zero to seconds value
		$("#sec").html((seconds < 10 ? "0" : "") + seconds);
	}, 1000);

	setInterval(function () {
		// Create a newDate() object and extract the minutes of the current time on the visitor's
		var minutes = new Date().getMinutes();
		// Add a leading zero to the minutes value
		$("#min").html((minutes < 10 ? "0" : "") + minutes);
	}, 1000);

	setInterval(function () {
		// Create a newDate() object and extract the hours of the current time on the visitor's
		var hours = new Date().getHours();
		// Add a leading zero to the hours value
		$("#hours").html((hours < 10 ? "0" : "") + hours);
	}, 1000);
}

