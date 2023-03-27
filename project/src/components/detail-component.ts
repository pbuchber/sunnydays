import { html, render } from "lit-html"
import geoService from "../services/geo-service";


const template = (day: string, location: string) => html`
<h3 id='place'>${location}</h3>
<h5 id='date'>${day}</h5>

<button id="temp">Temperatur</button>
<button id="pressure">Luftdruck</button>
<button id="humidity">Luftfeuchtigkeit</button>

<temperature-component></temperature-component>
<pressure-component></pressure-component>
<humidity-component></humidity-component>
` 


class DetailComponent extends HTMLElement {
    static get observedAttributes() { return ['selected-day']; }
    private newVal: number = null

    constructor() 
    {
        super()
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {

    }

    attributeChangedCallback(name: string, oldValue: any, newValue: number) {

        this.newVal = newValue
        window.navigator.geolocation.getCurrentPosition(this.fetchLocation.bind(this), console.log);

      }

    private async render(val: number, locality: string) 
    {
        
        const date: Date = new Date(Date.parse(val.toString()))
        const location = locality

        const res = this.getDayName(date.toISOString(), "de-DE") + ', ' + date.toLocaleDateString()
        render(template(res,location), this.shadowRoot!)

        const tempButton = this.shadowRoot.querySelector('#temp')
        const pressureButton = this.shadowRoot.querySelector('#pressure')
        const humidityButton = this.shadowRoot.querySelector('#humidity')

        const tempComponent: HTMLElement = this.shadowRoot.querySelector('temperature-component')
        const pressureCompoet: HTMLElement = this.shadowRoot.querySelector('pressure-component')
        const humidityComponent: HTMLElement = this.shadowRoot.querySelector('humidity-component')

        tempComponent.setAttribute("selected-day", val.toString())
        pressureCompoet.setAttribute("selected-day", val.toString())
        humidityComponent.setAttribute("selected-day", val.toString())

        tempComponent.hidden = false
        pressureCompoet.hidden = true
        humidityComponent.hidden = true


        tempButton.addEventListener('click',() => { 
            tempComponent.hidden = false
            pressureCompoet.hidden = true
            humidityComponent.hidden = true

        })

        pressureButton.addEventListener('click',() => { 
            tempComponent.hidden = true
            pressureCompoet.hidden = false
            humidityComponent.hidden = true

        })

        humidityButton.addEventListener('click',() => { 
            tempComponent.hidden = true
            pressureCompoet.hidden = true
            humidityComponent.hidden = false

        })
     

    }
    private getDayName(dateStr: string, locale: any)
    {
        var date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });        
    }

    private async fetchLocation(pos: GeolocationPosition)
    {

        const location = await geoService.reverseGeocoding(pos.coords.latitude.toString(),pos.coords.longitude.toString())

        console.log(location.countryName + ' - ' + location.locality)
        this.render(this.newVal,location.countryName + ' - ' + location.locality)
    }


}

customElements.define("detail-component", DetailComponent)