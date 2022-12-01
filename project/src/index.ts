import './components/app-component'
import './components/weather-component'


const title = document.querySelector("title")
title.textContent = "Sunny Days";
const body = document.querySelector("body")

const appComponent = document.createElement("app-component")
body.appendChild(appComponent)