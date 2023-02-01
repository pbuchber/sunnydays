import {html, render} from "lit-html"
import { BACK_EVENT, DAY_SELECTED_EVENT } from ".."
import  geoService, {GeoService} from "../services/geo-service"



const template= html`
<div>
    <button style="
    background:none;
    border:none;
    margin:0;
    padding:0;
    cursor: pointer;
    display: block;
    font-size: 2em;
    margin-top: 0.67em;
    margin-bottom: 0.67em;
    margin-left: 0;
    margin-right: 0;
    font-weight: 
    bold;" 
    id="home">Sunny Days</button>

</div>

<search-component></search-component>
<weather-component></weather-component>
<detail-component></detail-component>
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
        const detailComponent: HTMLElement = this.shadowRoot.querySelector("detail-component")
        detailComponent.hidden = true


        weatherComponent.addEventListener(DAY_SELECTED_EVENT, (e: CustomEvent) => {
            const day = e.detail
            
            detailComponent.setAttribute("selected-day", day)


            weatherComponent.hidden = true
            detailComponent.hidden = false
            console.log("day selected:", day)

        })
        detailComponent.addEventListener(BACK_EVENT, (e: CustomEvent) => {
            weatherComponent.hidden = false
            detailComponent.hidden = true
        })

        const homeButton = this.shadowRoot.querySelector("#home")
        homeButton.addEventListener('click',() => { 

            weatherComponent.hidden = false
            detailComponent.hidden = true

        })

        console.log('in render')
        
    }

}


customElements.define("app-component", AppComponent)