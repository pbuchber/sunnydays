export interface WeatherData {
    readonly latitude: number
    readonly longitude: number
    readonly generationtime_ms: number
    readonly utc_offset_seconds: number
    readonly timezone: string
    readonly timezone_abbreviation: string
    readonly elevation: number
    readonly hourly_units: HourlyUnits
    readonly hourly: Hourly
}

export interface HourlyUnits {
    readonly time: string
    readonly temperature_2m: string
  }
  
  export interface Hourly {
    readonly time: string[]
    readonly temperature_2m: number[]
  }