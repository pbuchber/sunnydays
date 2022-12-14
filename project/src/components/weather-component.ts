import { html, render } from "lit-html"
import { DAY_SELECTED_EVENT } from ".."
import { WeatherData } from "../model/weatherData"
import geoService, { GeoService } from "../services/geo-service"
import weatherService from "../services/weather-service"


const template = html`
    <div>
        <table>
            <thead>
            <tr>
                <th>Monatg</th><th>Dienstag</th><th>Mittwoch</th><th>Donnerstag</th><th>Freitag</th><th>Samstag</th><th>Sonntag</th>
            </tr>
            </thead>

            <tbody>
            </tbody>
        </table>
    </div>
` 
/*TODO: (i)statt WeatherCodes Bilder anzeigen (ii) Darunter Datum anzeigen*/
const rowTemplate = (data: WeatherData) => html`

<td>${data.hourly.weathercode[data.hourly.time.indexOf(new Date(new Date().getDay() - 1 == 0 ? new Date().getHours() >=10 ? new Date().toISOString().split('T')[0]+'T'+new Date().getHours()+':00' : new Date().toISOString().split('T')[0]+'T'+'0'+new Date().getHours()+':00': new Date().setDate(new Date().getDate() - new Date().getDay() + (new Date().getDay() == 0 ? -6:1)+7)).getHours() >=10 ? new Date(new Date().getDay() - 1 == 0 ? 'Montag': new Date().setDate(new Date().getDate() - new Date().getDay() + (new Date().getDay() == 0 ? -6:1)+7)).toISOString().split('T')[0]+'T'+new Date(new Date().getDay() - 1 == 0 ? 'Montag': new Date().setDate(new Date().getDate() - new Date().getDay() + (new Date().getDay() == 0 ? -6:1)+7)).getHours()+':00' : new Date(new Date().getDay() - 1 == 0 ? 'Montag': new Date().setDate(new Date().getDate() - new Date().getDay() + (new Date().getDay() == 0 ? -6:1)+7)).toISOString().split('T')[0]+'T'+'0'+new Date(new Date().getDay() - 1 == 0 ? 'Montag': new Date().setDate(new Date().getDate() - new Date().getDay() + (new Date().getDay() == 0 ? -6:1)+7)).getHours()+':00')]}</td>
<td>${data.hourly.weathercode[data.hourly.time.indexOf(((new Date().getDay() - 2 == 0) ? new Date().getHours() >=10 ? new Date().toISOString().split('T')[0]+'T'+new Date().getHours()+':00' : new Date().toISOString().split('T')[0]+'T'+'0'+new Date().getHours()+':00' : new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((2 - new Date().getDay()) < 1 ? 7 + (2 - new Date().getDay()) : (2 - new Date().getDay())))).getHours() >=10 ? new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((2 - new Date().getDay()) < 1 ? 7 + (2 - new Date().getDay()) : (2 - new Date().getDay())))).toISOString().split('T')[0]+'T'+new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((2 - new Date().getDay()) < 1 ? 7 + (2 - new Date().getDay()) : (2 - new Date().getDay())))).getHours()+':00' : new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((2 - new Date().getDay()) < 1 ? 7 + (2 - new Date().getDay()) : (2 - new Date().getDay())))).toISOString().split('T')[0]+'T'+'0'+new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((2 - new Date().getDay()) < 1 ? 7 + (2 - new Date().getDay()) : (2 - new Date().getDay())))).getHours()+':00'))]}</td>
<td>${data.hourly.weathercode[data.hourly.time.indexOf(((new Date().getDay() - 3 == 0) ? new Date().getHours() >=10 ? new Date().toISOString().split('T')[0]+'T'+new Date().getHours()+':00' : new Date().toISOString().split('T')[0]+'T'+'0'+new Date().getHours()+':00' : new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((3 - new Date().getDay()) < 1 ? 7 + (3 - new Date().getDay()) : (3 - new Date().getDay())))).getHours() >=10 ? new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((3 - new Date().getDay()) < 1 ? 7 + (3 - new Date().getDay()) : (3 - new Date().getDay())))).toISOString().split('T')[0]+'T'+new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((3 - new Date().getDay()) < 1 ? 7 + (3 - new Date().getDay()) : (3 - new Date().getDay())))).getHours()+':00' : new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((3 - new Date().getDay()) < 1 ? 7 + (3 - new Date().getDay()) : (3 - new Date().getDay())))).toISOString().split('T')[0]+'T'+'0'+new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((3 - new Date().getDay()) < 1 ? 7 + (3 - new Date().getDay()) : (3 - new Date().getDay())))).getHours()+':00'))]}</td>
<td>${data.hourly.weathercode[data.hourly.time.indexOf(((new Date().getDay() - 4 == 0) ? new Date().getHours() >=10 ? new Date().toISOString().split('T')[0]+'T'+new Date().getHours()+':00' : new Date().toISOString().split('T')[0]+'T'+'0'+new Date().getHours()+':00' : new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((4 - new Date().getDay()) < 1 ? 7 + (4 - new Date().getDay()) : (4 - new Date().getDay())))).getHours() >=10 ? new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((4 - new Date().getDay()) < 1 ? 7 + (4 - new Date().getDay()) : (4 - new Date().getDay())))).toISOString().split('T')[0]+'T'+new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((4 - new Date().getDay()) < 1 ? 7 + (4 - new Date().getDay()) : (4 - new Date().getDay())))).getHours()+':00' : new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((4 - new Date().getDay()) < 1 ? 7 + (4 - new Date().getDay()) : (4 - new Date().getDay())))).toISOString().split('T')[0]+'T'+'0'+new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((4 - new Date().getDay()) < 1 ? 7 + (4 - new Date().getDay()) : (4 - new Date().getDay())))).getHours()+':00'))]}</td>
<td>${data.hourly.weathercode[data.hourly.time.indexOf(((new Date().getDay() - 5 == 0) ? new Date().getHours() >=10 ? new Date().toISOString().split('T')[0]+'T'+new Date().getHours()+':00' : new Date().toISOString().split('T')[0]+'T'+'0'+new Date().getHours()+':00' : new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((5 - new Date().getDay()) < 1 ? 7 + (5 - new Date().getDay()) : (5 - new Date().getDay())))).getHours() >=10 ? new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((5 - new Date().getDay()) < 1 ? 7 + (5 - new Date().getDay()) : (5 - new Date().getDay())))).toISOString().split('T')[0]+'T'+new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((5 - new Date().getDay()) < 1 ? 7 + (5 - new Date().getDay()) : (5 - new Date().getDay())))).getHours()+':00' : new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((5 - new Date().getDay()) < 1 ? 7 + (5 - new Date().getDay()) : (5 - new Date().getDay())))).toISOString().split('T')[0]+'T'+'0'+new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((5 - new Date().getDay()) < 1 ? 7 + (5 - new Date().getDay()) : (5 - new Date().getDay())))).getHours()+':00'))]}</td>
<td>${data.hourly.weathercode[data.hourly.time.indexOf(((new Date().getDay() - 6 == 0) ? new Date().getHours() >=10 ? new Date().toISOString().split('T')[0]+'T'+new Date().getHours()+':00' : new Date().toISOString().split('T')[0]+'T'+'0'+new Date().getHours()+':00' : new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((6 - new Date().getDay()) < 1 ? 7 + (6 - new Date().getDay()) : (6 - new Date().getDay())))).getHours() >=10 ? new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((6 - new Date().getDay()) < 1 ? 7 + (6 - new Date().getDay()) : (6 - new Date().getDay())))).toISOString().split('T')[0]+'T'+new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((6 - new Date().getDay()) < 1 ? 7 + (6 - new Date().getDay()) : (6 - new Date().getDay())))).getHours()+':00' : new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((6 - new Date().getDay()) < 1 ? 7 + (6 - new Date().getDay()) : (6 - new Date().getDay())))).toISOString().split('T')[0]+'T'+'0'+new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((6 - new Date().getDay()) < 1 ? 7 + (6 - new Date().getDay()) : (6 - new Date().getDay())))).getHours()+':00'))]}</td>
<td>${data.hourly.weathercode[data.hourly.time.indexOf(((new Date().getDay() - 6 == 0) ? new Date().getHours() >=10 ? new Date().toISOString().split('T')[0]+'T'+new Date().getHours()+':00' : new Date().toISOString().split('T')[0]+'T'+'0'+new Date().getHours()+':00' : new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((0 - new Date().getDay()) < 1 ? 7 + (0 - new Date().getDay()) : (0 - new Date().getDay())))).getHours() >=10 ? new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((0 - new Date().getDay()) < 1 ? 7 + (0 - new Date().getDay()) : (0 - new Date().getDay())))).toISOString().split('T')[0]+'T'+new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((0 - new Date().getDay()) < 1 ? 7 + (0 - new Date().getDay()) : (0 - new Date().getDay())))).getHours()+':00' : new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((0 - new Date().getDay()) < 1 ? 7 + (0 - new Date().getDay()) : (0 - new Date().getDay())))).toISOString().split('T')[0]+'T'+'0'+new Date(new Date().getTime() + (1000 * 60 * 60 * 24 * ((0 - new Date().getDay()) < 1 ? 7 + (0 - new Date().getDay()) : (0 - new Date().getDay())))).getHours()+':00'))]}</td>

`

class WeatherComponent extends HTMLElement{
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }

    async connectedCallback() {
        console.log("connected weather-component")
        
        await weatherService.fetchAll('42', '14').then(data => {

            this.render(data);
        })
    }

    private render(data: WeatherData) {
        const table = render(template, this.shadowRoot)
        const tbody = this.shadowRoot.querySelector("tbody")
        const row = tbody.insertRow()

        /*TODO: Column on click*/
            /*row.onclick = () => {
                alert(`clicked`)
                const event = new CustomEvent(DAY_SELECTED_EVENT, {detail: {data}})
                this.dispatchEvent(event)
            }*/

            render(rowTemplate(data), row)

    }


}

customElements.define("weather-component", WeatherComponent)