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
        let polarityPercentage = (res.polarity_confidence*100).toFixed(1);
        let subjectivityPercentage = (res.subjectivity_confidence*100).toFixed(1);
          document.getElementById('results').innerHTML = `<div>
            <br>
            <center><b>Polarity: </b> ${res.polarity} (${polarityPercentage}%)</center>
            <center><b>Subjectivity: </b> ${res.subjectivity} (${subjectivityPercentage}%)</center>
            </div>`;
      })

      document.getElementById('name').value = '';
    } else {
      console.log("Can not update view as input is not a valid URL.")
    }
}

export { handleSubmit }
