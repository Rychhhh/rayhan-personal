function updateList() {
	const titles = [...document.querySelectorAll('h1, h2')].sort((a, b) => {
		return Math.abs(a.getBoundingClientRect().top) - Math.abs(b.getBoundingClientRect().top);
	});

	document.querySelectorAll(".selected-circle").forEach(c => c.classList.remove("selected-circle"));
	
	document.querySelectorAll(".nav-dot")[[...document.querySelectorAll('h1, h2')].indexOf(titles[0])].classList.add("selected-circle");
}

updateList();
window.addEventListener('scroll', () => {
    updateList();
})


// contact form

$("#contact-form").on("submit", function(event) {
	event.preventDefault(); // prevent reload

	var formData = new FormData(this);

	formData.append('service_id', 'service_okk96gu');
	formData.append('template_id', 'template_wvqje1i');
	formData.append('user_id', 'user_6Fwvxc75sZGOMDfjZ5pca');
	formData.append('from_name', $('#name').val());

	let name = $('#name');
	let email = $('#email');
	let message = $('#message');

	if(!name.val() || !email.val() || !message.val()) {
			Swal.fire({
				position: 'top-end',
				icon: 'failed',
				title: 'Data not null',
				showConfirmButton: false,
				timer: 1500
			  });
	} else {
		$.ajax({
			url: 'https://api.emailjs.com/api/v1.0/email/send-form',
			type: 'POST',
			data: formData,
			contentType: false, 
			processData: false,
			cache: false,
		})
		.done(function() {
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: 'Send email successfully',
				showConfirmButton: false,
				timer: 1500
			  });
		})
		.fail(function() {
			Swal.fire({
				position: 'top-end',
				icon: 'failed',
				title: 'Send email failed',
				showConfirmButton: false,
				timer: 1500
			  });
		});
	}
});

