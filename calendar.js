const baseURL = "https://calendarific.com/api/v2/holidays"
const key = "d8fd5872a88a330080988f3e467a6a8d2319d2b4"

let button1 = document.getElementById("button-fetch")
button1.addEventListener("click", handleClick)

function getHoliday(month, year) {
    fetch (`${baseURL}?api_key=${key}&country=US&year=${year}&month=${month}`)
        .then(response => response.json())
        .then(json => displayData(json));
}

function displayData(holiday) {
    console.log(holiday)
}

function handleClick() {
    let month = document.getElementById("months").value
    let year = document.getElementById("years").value

    getHoliday(month, year)
}
