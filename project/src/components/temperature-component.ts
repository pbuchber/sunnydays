import { html, render } from "lit-html"
import { BACK_EVENT } from ".."
import { WeatherData } from "../model/weatherData"
import weatherService from "../services/weather-service"


const template = html`

<table>
    <thead>
        <th>00:00</th>
        <th>03:00</th>
        <th>06:00</th>
        <th>09:00</th>
        <th>12:00</th>
        <th>15:00</th>
        <th>18:00</th>
        <th>21:00</th>
        <th>00:00</th>
    </thead>

    <tbody>
    </tbody>

</table>
`  
const rowTemplate = (data: WeatherData, day: string) => html`
<td style="text-align:center" id='0'>${data.hourly.temperature_2m[data.hourly.time.indexOf(day.split('T')[0] + "T00:00")]}°C</td>
<td style="text-align:center" id='1'>${data.hourly.temperature_2m[data.hourly.time.indexOf(day.split('T')[0] + "T03:00")]}°C</td>
<td style="text-align:center" id='2'>${data.hourly.temperature_2m[data.hourly.time.indexOf(day.split('T')[0] + "T06:00")]}°C</td>
<td style="text-align:center" id='3'>${data.hourly.temperature_2m[data.hourly.time.indexOf(day.split('T')[0] + "T09:00")]}°C</td>
<td style="text-align:center" id='4'>${data.hourly.temperature_2m[data.hourly.time.indexOf(day.split('T')[0] + "T12:00")]}°C</td>
<td style="text-align:center" id='5'>${data.hourly.temperature_2m[data.hourly.time.indexOf(day.split('T')[0] + "T15:00")]}°C</td>
<td style="text-align:center" id='6'>${data.hourly.temperature_2m[data.hourly.time.indexOf(day.split('T')[0] + "T18:00")]}°C</td>
<td style="text-align:center" id='7'>${data.hourly.temperature_2m[data.hourly.time.indexOf(day.split('T')[0] + "T21:00")]}°C</td>
<td style="text-align:center" id='8'>${data.hourly.temperature_2m[data.hourly.time.indexOf(day.split('T')[0] + "T23:00")]}°C</td>

`

class TemperaturComponent extends HTMLElement {
    static get observedAttributes() { return ['selected-day']; }
    private day: string = ""
    
    constructor() 
    {
        super()
        this.attachShadow({mode: "open"})

    }

    connectedCallback() {
        console.log("connected temperature-component") 
    }

    async attributeChangedCallback(name: string, oldValue: any, newValue: string) {
        this.day = newValue

        await weatherService.fetchAll("42", "14").then(data => {
            this.render(data);
        })

      }

    private render(data: WeatherData) 
    {
        const table = render(template, this.shadowRoot!)

        const tbody = this.shadowRoot!.querySelector("tbody")!
        tbody.deleteRow(-1)
        const row = tbody.insertRow()

        render(rowTemplate(data, this.day), row)

        const bodys = this.shadowRoot!.querySelectorAll('td')



        render(template, this.shadowRoot!)
    }
}

customElements.define("temperature-component", TemperaturComponent)