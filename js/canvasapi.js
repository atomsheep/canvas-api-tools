var apiBaseUrl = "https://canvas.sydney.edu.au/api/v1/"
var authToken = "";

function getCourseUsers(){
	var courseId = $("#course_id").val();
	var apiUrl = apiBaseUrl + "courses/" + courseId + "/users?enrollment_type=student&include[]=email&enrollment_state[]=active";
	$.ajax({
		url: apiUrl,
		dataType: 'json',
		headers: {
			"Authorization": "Bearer " + authToken
		},
		success: function(data) {
			console.log(data.toString());
		}
	});
}

function runRequest(){
	var courseId = $("#course_id").val();
	var apiUrl = apiBaseUrl + "courses/" + courseId + "/users?enrollment_type=student&include[]=email&enrollment_state[]=active";
	$.getJSON(
		apiUrl,
		function(data) {
			console.log(data);
		}
	);
}

$(document).ready(function(){
	
	
	
	
	// Authorisation tokens
	console.log('hi');
	// Load
	if (localStorage.getItem("auth_token")) {
		authToken = localStorage.getItem("auth_token");
		$("#auth_token").val(authToken);
	}
	// Save
	$("#auth_token_save").on("click", function() {
		if ($("#auth_token").val()) {
			authToken = $("#auth_token").val();
			localStorage.setItem("auth_token", authToken);
		}
	});
});