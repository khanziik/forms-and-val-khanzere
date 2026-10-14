
(() => {
    'use strict'

    const forms = document.querySelectorAll('.needs-validation')

    Array.from(forms).forEach(form => {
        const password = form.querySelector('#password')
        const confirmPassword = form.querySelector('#confirmPassword')

        confirmPassword.addEventListener('input', () => {
            if (confirmPassword.value !== password.value) {
                confirmPassword.setCustomValidity('Passwords do not match')
            } else {
                confirmPassword.setCustomValidity('')
            }
        })

        password.addEventListener('input', () => {
            if (confirmPassword.value === password.value) {
                confirmPassword.setCustomValidity('')
            } else {
                confirmPassword.setCustomValidity('Passwords do not match')
            }
        })

        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})()
