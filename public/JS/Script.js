/* Form Scripts goes here*/

$("#submit").click(function(event) {
	console.log("Submit triggered");

	// Get the values
	var title = $("#title").val();
	var post = $("#content").val();
	var authKey = $("#key").val();
	var tags = $("#tags").val();
	(tags.lastIndexOf(";") === tags.length - 1) ? tags = tags.substr(0, tags.length - 1) : tags = tags;
	tags = tags.split(";");
	tags = tags.map(function(e) {
		var ele = e.trim();
		ele = ele.replace(/ /g, "-");
		ele = ele.toLowerCase();
		return ele;
	});

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
			content: post,
			tags: tags
		},
		statusCode: {
			200: function() {
				$("form, #submit").remove();
				$(".meat").append("<h2 class='center'>Post Submitted !</h2>");
			},
			404: function() {
				$("#submit").text("Post").removeAttr("disabled");
				$("h2.hidden").removeClass("hidden");
				$(".meat").append("<h2 class='center'>Something went wrong !</h2>");
			}
		}
	});

	event.preventDefault();
});