export type NavLinkType = {
  name: string;
  path: string;
};

export type ProductType = {
  _id: string | number;
  image: string;
  name: string;
  price: number;
  category: Category;
  description: string;
};

export enum Category {
  beds = "beds",
  chairs = "chairs",
  tables = "tables",
  couches = "couches",
}

export type NewsCardType = {
  image: any;
  title: string;
  date: string;
  author: string;
  text: string;
};
