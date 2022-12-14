import { WeatherData } from "../model/weatherData"

class WeatherService {
    async fetchAll(lat: string, long: string): Promise <WeatherData> {
        const USER_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&current_weather=true&hourly=temperature_2m&hourly=relativehumidity_2m&hourly=pressure_msl&hourly=weathercode`
        const response = await fetch(USER_URL)
        return await response.json()
    }
}

const weatherService = new WeatherService()
export default weatherService