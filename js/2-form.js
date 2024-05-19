const formData = {
	email: "",
	message: ""
};

const form = document.querySelector('.feedback-form');

function saveDataToLocalStorage() {
	localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function validateForm() {
	const { email, message } = formData;
	if (!email.trim() || !message.trim()) {
		alert('Fill please all fields');
		return false;
	}
	return true;
}

form.addEventListener('input', e => {
	if (e.target.name === 'email' || e.target.name === 'message') {
		formData[e.target.name] = e.target.value.trim();
		saveDataToLocalStorage();
	}
});

form.addEventListener('submit', e => {
	e.preventDefault();

	if (validateForm()) {
		console.log(formData);
		localStorage.removeItem('feedback-form-state');

		form.reset();
		Object.keys(formData).forEach(key => {
			formData[key] = "";
		});
	}
});

window.addEventListener('load', () => {
	const savedData = localStorage.getItem('feedback-form-state');

	if (savedData) {
		Object.assign(formData, JSON.parse(savedData));
		form.email.value = formData.email;
		form.message.value = formData.message;
	}
});