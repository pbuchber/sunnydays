import {html, render} from "lit-html"
import { DAY_SELECTED_EVENT } from ".."
import  geoService, {GeoService} from "../services/geo-service"



const template= html`
<h1>Sunny Days</h2>
<search-component></search-component>
<weather-component></weather-component>
`


class AppComponent extends HTMLElement
{

    constructor()
    {
        super()
        this.attachShadow({mode: "open"})
    }
    connectedCallback()
    {
        console.log("app component connected")
        this.render()
    }

     private render ()
    {
        render(template, this.shadowRoot)
        
        const searchComponent: HTMLElement = this.shadowRoot.querySelector("search-component")
        const weatherComponent: HTMLElement = this.shadowRoot.querySelector("weather-component")

        weatherComponent.addEventListener(DAY_SELECTED_EVENT, (e: CustomEvent) => {
            const day = e.detail.data
            console.log("day selected:", day)
        })
        console.log('in render')
        
    }

}


customElements.define("app-component", AppComponent)