const getData = (url) => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        }
    }
    return fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            console.log(error.message)
        })

}