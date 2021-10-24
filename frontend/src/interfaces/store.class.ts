export class Store {
    constructor(name: string, imageAddress: string) {
        this.name = name;
        this.imageAddress = imageAddress;
    }
    name: string;
    imageAddress: string;
}