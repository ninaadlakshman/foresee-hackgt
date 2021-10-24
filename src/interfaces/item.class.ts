export class Item {
    constructor(name: string, imageAddress: string, estimatedPrice: number, priceChange: string, category: string) {
        this.name = name;
        this.imageAddress = imageAddress;
        this.estimatedPrice = estimatedPrice;
        this.priceChange = priceChange;
        this.category = category;
    }
    name: string;
    imageAddress: string;
    estimatedPrice: number;
    priceChange: string;
    category: string;


}