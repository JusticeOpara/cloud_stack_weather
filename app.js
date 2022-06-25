let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector("#dark-mode-toggle")
console.log(darkMode, "DARKMODE");
// CHECK IF DARK MODE IS ENABLED
//  IF ITS ENABLED TURN IT OFF
// IF ITS DISALBED TURN IT ON
const enableDarkMode = () => {
    // 1.ADD THE CLASS DARKMODE TO THE BODY
    document.body.classList.add("darkmode")
    // 2.UPDATE DARK MODE IN THE localSTORAGE
    localStorage.setItem("darkMode", "enabled")
}

const disableDarkMode = () => {
    // 1.REMOVE THE CLASS DARKMODE TO THE BODY
    document.body.classList.remove("darkmode")
    // 2.
    localStorage.setItem("darkMode", null)
}
if (darkMode === "enabled") {
    enableDarkMode()
}

darkModeToggle.addEventListener("click", () => {
    darkMode = localStorage.getItem("darkMode")

    if (darkMode !== "enabled") {
        enableDarkMode()
        console.log(darkMode, "DARK")
    } else {
        disableDarkMode()
        console.log(darkMode, "DARK")
    }
})


window.addEventListener("load", () => {

    // const sunsetValue = document.querySelector(".sun")
    const humidityDegree = document.querySelector(".humidity")
    const pressureDegree = document.querySelector(".pressure")
    const temperatureDegree = document.getElementById("degree")
    const windDegree = document.querySelector(".wind")
    const area = document.getElementById("city")
    const sunriseValue = document.querySelector(".timestamp-sunrise")
    const sunsetValue =  document.querySelector(".timestamp-sunset")
    const weatherDescription = document.getElementById("weather-description")

    fetch("https://api.openweathermap.org/data/2.5/weather?q=owerri%20&units=metric&appid=bc2c594876e86589cf23ead605dec442")
        .then(response => response.json())
        .then(data => {
            console.log(data, "DATA")
            const { humidity, temp, pressure } = data.main
            humidityDegree.textContent = humidity + "%"
            temperatureDegree.textContent = Math.floor(temp) + "⁰C"
            pressureDegree.textContent = pressure + "Pa"


            const { description } = data.weather[0]
            weatherDescription.textContent = description


            const { speed } = data.wind
            windDegree.textContent = speed + "km/h"


            const { name } = data
            area.textContent = name


            const { sunrise,sunset } = data.sys
            const unixTimestamp = sunrise
            const date = new Date(unixTimestamp * 1000)
            const hours = date.getHours()
            const minutes = "0" + date.getMinutes()
            const seconds = "0" + date.getSeconds()
            const formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2)
           sunriseValue.textContent = "SUNRISE" + " " + formattedTime
            console.log(formattedTime)

            const unixSetstamp = sunset
            const setDate = new Date(unixSetstamp * 1000)
            const setHours = setDate.getHours()
            const setMintes = "0" + setDate.getMinutes()
            const setSeconds = "0" + setDate.getSeconds()
            const setFormattedTime = setHours + ':' + setMintes.substr(-2) + ':' + setSeconds.substr(-2)
            sunsetValue.textContent = "SUNSET" + " " + setFormattedTime
            console.log(setFormattedTime)

        })

})


















// window.addEventListener("load", () => {

// const humidityDegree = document.querySelector(".humidity")

//     let weather = {
//         apiKey: "bc2c594876e86589cf23ead605dec442",
//         fetchWeather: function (city) {
//             fetch("https://api.openweathermap.org/data/2.5/weather?q="
//                 + city
//                 + "%20&units=metric&appid="
//                 + this.apiKey
//             )
//                 .then((response) => response.json())
//                 .then((data) => this.displayWeather(data)

//                 )
//         },
//         displayWeather: function (data) {
//             const { name } = data
//             const { humidity, pressure, temp } = data.main
//             humidityDegree.textContent = hum
//             const { deg, speed } = data.wind
//             console.log(humidity, pressure, temp, name, deg, speed, "DATA-FORM")
//             console.log(humidity.innerHTML, "HUMIDITY")
//         }

//     }

// })

























