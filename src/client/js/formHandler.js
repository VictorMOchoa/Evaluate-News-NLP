function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let urlFromInput = document.getElementById('name').value
    if (Client.verifyURL(urlFromInput)) {
      console.log("::: Form Submitted :::")
      fetch('http://localhost:8081/getSentiment',
      {
        method: "POST",
        credentials: "same-origin",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({ urlFromInput })
      })
      .then(res => res.json())
      .then(function(res) {
        console.log("about to print res")
        console.log(res)
          document.getElementById('results').innerHTML = res.message
      })
    }
}

export { handleSubmit }
