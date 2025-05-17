const scriptURL = 'https://script.google.com/macros/s/AKfycbwQUa4w5bQcTOQ2i62arvYVLl4mY1Ql2q0AZHYJIWlrAI_PGYRRpGn__8M2EDOcJ4Qp/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})