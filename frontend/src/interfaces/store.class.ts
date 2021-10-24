export class Store {
    constructor(name: string, imageAddress: string, latitude: string, longitude: string) {
        this.name = name;
        this.imageAddress = imageAddress;
        this.latitude = latitude;
        this.longitude = longitude;
    }
    name: string;
    imageAddress: string;
    latitude: string;
    longitude: string;
}