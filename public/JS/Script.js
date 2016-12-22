/* Form Scripts goes here*/

$("#submit").click(function(event) {
	console.log("Submit triggered");
	// Get the values

	var title = $("#title").val();
	var post = $("#content").val();
	var authKey = $("#key").val();

	// Make the request

	$.ajax({
		method: "POST",
		url: "/blog/new",
		beforeSend: function() {
			$("#submit").text("Posting...").attr("disabled", "disabled");
		},
		headers: {
			key: authKey
		},
		data: {
			title: title,
			content: post
		},
		statusCode: {
			200: function() {
				$("form, #submit").remove();
				$(".meat").append("<h2 class='center'>Post Submitted !</h2>");
			},
			404: function() {
				$("#submit").text("Post").removeAttr("disabled");
				$("h2.hidden").removeClass("hidden");
			}
		}
	});

	event.preventDefault();
});