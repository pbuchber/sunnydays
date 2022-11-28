export class GeoService {
    private static instance: GeoService;

   public getPosition(func: Function){

      navigator.geolocation.getCurrentPosition((position) => {

        func(position);

      });
  }

}

const geoService = new GeoService()
export default geoService
