const baseURL = "https://calendarific.com/api/v2/holidays"
const key = "d8fd5872a88a330080988f3e467a6a8d2319d2b4"
const listItem = document.getElementById("list-items")

let button1 = document.getElementById("button-fetch")
button1.addEventListener("click", handleClick)

function getHoliday(month, year) {
    fetch (`${baseURL}?api_key=${key}&country=US&year=${year}&month=${month}`)
        .then(response => response.json())
        .then(json => displayData(json.response.holidays));
}

function displayData(holidays) {
    holidays.forEach(holiday => {
        let li = document.createElement("li");
        li.innerText = `${holiday.date.iso} - ${holiday.name} - ${holiday.description}`;
        listItem.appendChild(li)
    })

    console.log(holidays)
}

function handleClick() {
    let month = document.getElementById("months").value
    let year = document.getElementById("years").value

    while (listItem.firstChild) {
        listItem.removeChild(listItem.lastChild)
    }

    getHoliday(month, year)
}
