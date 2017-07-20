$(function() {
	$("#btn").click(function() {
		$("#box2 ul").toggle();
		if($(this).hasClass("fa-caret-up")) {
			$(this).removeClass("fa-caret-up");
			$(this).addClass("fa-caret-down");
		} else {
			$(this).removeClass("fa-caret-down");
			$(this).addClass("fa-caret-up");
		}
		$("#box2 ul li").click(function() {
			$("#btn").removeClass("fa fa-caret-up")
			$("#btn").addClass("fa fa-caret-down")
			$("#text1").val($(this).html());
			$("#box2 ul").css("display", "none");
		})
	})

	$("#btn1").click(function() {
		$("#box3 ul").toggle();
		if($(this).hasClass("fa-caret-up")) {
			$(this).removeClass("fa-caret-up");
			$(this).addClass("fa-caret-down");
		} else {
			$(this).removeClass("fa-caret-down");
			$(this).addClass("fa-caret-up");
		}
		$("#box3 ul li").click(function() {
			$("#btn1").removeClass("fa fa-caret-up")
			$("#btn1").addClass("fa fa-caret-down")
			$("#text2").val($(this).html());
			$("#box3 ul").css("display", "none");
		})
	});
	
	
})