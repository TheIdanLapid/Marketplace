export interface Item {
  title: string;
  price: number;
  imgUrl: string;
}

export class Item2 {
  title: string;
  price: number;
  imgUrl: string;

  constructor(title: string, price: number, imgUrl: string) {
    this.title = title;
    this.price = price;
    this.imgUrl = imgUrl;
  }
}
