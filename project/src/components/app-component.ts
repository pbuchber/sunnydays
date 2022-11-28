import {html, render} from "lit-html"
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
        geoService.getPosition(this.getLocation)

        this.render()
    }

     private render ()
    {
        render(template, this.shadowRoot)
        
        const searchComponent: HTMLElement = this.shadowRoot.querySelector("search-component")
        const weatherComponent: HTMLElement = this.shadowRoot.querySelector("weather-component")
        console.log('in render')
        
    }

    private getLocation(value: GeolocationPosition) {
        console.log('Latitude: ' + value.coords.latitude)
        console.log('Longitude: ' + value.coords.longitude)
        console.log(value)
    }

}


customElements.define("app-component", AppComponent)