export class GeoService {
    private static instance: GeoService;

    private constructor() {

    }

    public static getInstance(): GeoService{
        if (!GeoService.instance) {
            GeoService.instance = new GeoService();
        }

        return GeoService.instance;
    }

    
   public async getPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position)

      return position;
    });
  }

}
