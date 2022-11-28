import { html, render } from "lit-html"
import weatherService from "../services/weather-service"


const template = html`
    <div>
        <table>
            <thead>
            <tr>
                <th>Id</th><th>Name</th>
            </tr>
            </thead>

            <tbody>
            </tbody>
        </table>
    </div>
` 


class WeatherComponent extends HTMLElement{
    constructor() {
        super()
        this.attachShadow({mode: "open"})
    }
    async connectedCallback() {
        console.log("connected weather-component")
        await weatherService.fetchAll('52','53').then(data => {
            console.log(data)
            this.render()
        })
        
    }
    private render() {
        render(template, this.shadowRoot)
    }
}

customElements.define("weather-component", WeatherComponent)