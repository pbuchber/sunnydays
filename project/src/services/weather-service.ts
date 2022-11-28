
class WeatherService {
    async fetchAll(lat: string, long: string) {
        const USER_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`
        const response = await fetch(USER_URL)
        return await response.json()
    }
}

const weatherService = new WeatherService()
export default weatherService