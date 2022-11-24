import {html, render} from "lit-html"
import  {GeoService} from "../services/geo-service"



const template= html`
<h1>Sunny Days</h2>
<search-component></search-component>
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

     private async render ()
    {
        render(template, this.shadowRoot)

        const service = GeoService.getInstance();

        service.getPosition();

        console.log('on app component')
    }
}


customElements.define("app-component", AppComponent)