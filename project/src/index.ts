import './components/app-component'
import './components/weather-component'
import './components/detail-component'
import './components/temperature-component.ts'
import './components/pressure-component'
import './components/humidity-component'

export const  DAY_SELECTED_EVENT = "day-selected" 
export const  BACK_EVENT = "back-button-selected" 


const title = document.querySelector("title")
title.textContent = "Sunny Days";
const body = document.querySelector("body")

const appComponent = document.createElement("app-component")
body.appendChild(appComponent)