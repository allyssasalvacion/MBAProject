$(".btn").click(function(event) {
	// body...
	event.preventDefault();
	var target = $(this).data("target");
	$("#click-alert")
		.html("data-target= " + target)
		.fadeIn(50)
		.delay(3000)
		.fadeOut(1000);
});

var currTab = 0;
showTab(currTab);

function showTab(tabIndex) {
	// body...
	var x = document.getElementsByClassName("tab");
	// console.log(x[tabIndex])
	x[tabIndex].style.display = "inherit";
	window.scrollTo(0, 0);

	if (tabIndex == 0) {
		document.getElementById("back_btn").style.display = "none";
	}else {
		// document.getElementById("back_btn").style.display = "inline";
		document.getElementById("back_btn").style.display = "";
	}

	if (tabIndex == x.length - 1) {
		document.getElementById("next_btn").innerHTML = " &nbsp&nbsp&nbsp&nbsp&nbsp SUBMIT";
	}else {
		document.getElementById("next_btn").innerHTML = "CONTINUE &nbsp →";
	}

	changeStepIndicator(tabIndex)
}

function nextPrev(tabIndex) {
	// body...
	var x = document.getElementsByClassName("tab");
	x[currTab].style.display = "none";
	currTab += tabIndex

	if (currTab >= x.length) {
		// FORM SUBMISSION
		// document.getElementById("regForm").submit();
		location.href = "thankyou.html"
		return false;
	}else {
		showTab(currTab);
	}

	if (tabIndex < 0) {
		isNext = false;
	}
}

function resetStepName() {
	document.getElementsByClassName("step")[currTab].className = "";
	document.getElementsByClassName("step")[currTab].className = "step";
	// body...
};

function validateForm() {
	// body...
	var x, y, valid = true;
	x = document.getElementById("tocenter");
	y = x.getElementsByTagName("input");
	// x = document.getElementsByClassName("tab");
	// y = x[currTab].getElementsByTagName("input");
	for (var i = 0; i < y.length; i++) {
		// if (y[i].value == null || y[i].value == "") {
		// 	valid = false;
		// 	break;
		// }
		if (!y[i].checked) {
			valid = false;
			break;
		}
	}

	var els = document.getElementsByClassName("step");
	els[currTab].className = els[currTab].className.replace(" unfinished", "")
	els[currTab].className = els[currTab].className.replace(" finish", "")

	if (valid) {
		els[currTab].className = els[currTab].className += " finish";
	}else {
		els[currTab].className = els[currTab].className += " unfinished";
	}
	return valid
}

function changeStepIndicator(tabIndex) {
	// body...
	var x = document.getElementsByClassName("step");
	for (var i = 0; i < x.length; i++) {
		x[i].className = x[i].className.replace(" active", "");
	}
	x[tabIndex].className += " active";
}

$(document).ready(function(){
	var date_input=$('input[name="date"]'); //our date input has the name "date"
	var container=$('.bootstrap-iso form').length>0 ? $('.bootstrap-iso form').parent() : "body";
	var options={
	  format: 'mm/dd/yyyy',
	  container: container,
	  todayHighlight: true,
	  autoclose: true,
	};
	date_input.datepicker(options);
  })

  var i=2;
  $(".addExtraButton").on('click',function(){
    var data="<tr><td contenteditable='true'></td><td contenteditable='true'></td>";
        data +="<td contenteditable='true'></td></tr>";
        $('.extracurricularTable').append(data);
        i++;
});