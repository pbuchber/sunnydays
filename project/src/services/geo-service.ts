import { SingleEntryPlugin } from "webpack"

export class GeoService {

  public async reverseGeocoding(lat: string, long: string)
  {
      const USER_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=de`
      const response = await fetch(USER_URL)
      return await response.json()
  }


}

const geoService = new GeoService()
export default geoService
