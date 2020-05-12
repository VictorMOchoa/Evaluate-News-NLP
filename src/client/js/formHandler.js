function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    if (Client.verifyURL(formText)) {
      console.log("::: Form Submitted :::")
      fetch('http://localhost:8081/getSentiment',
      {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ formText })
      })
      .then(res => res.json())
      .then(function(res) {
          document.getElementById('results').innerHTML = res.message
      })
    }
}

export { handleSubmit }
