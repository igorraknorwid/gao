import { makeAutoObservable } from "mobx";
import { Activity } from "./actyvity";
export interface IInterests {
  _id: string;
  title: string;
  checked: boolean;
}
export default class Interests {
  inputValue = "";
  custom: IInterests[] = [];
  business: IInterests[] = [
    { _id: "1", title: "Enterpreneurship", checked: false },
    { _id: "2", title: "Marketing", checked: false },
    { _id: "3", title: "Sales", checked: false },
    { _id: "4", title: "Explore other companies", checked: false },
    { _id: "5", title: "Consulting", checked: false },
    { _id: "6", title: "E-commerce", checked: false },
    { _id: "7", title: "Retail", checked: false },
    { _id: "8", title: "Real Estate", checked: false },
  ];
  investingAndFinance: IInterests[] = [
    { _id: "1", title: "Angle Investing", checked: false },
    { _id: "2", title: "Crypto", checked: false },
    { _id: "3", title: "Quant Finance", checked: false },
    { _id: "4", title: "Venture Capital", checked: false },
    { _id: "5", title: "Investment Banking", checked: false },
    { _id: "6", title: "Economics", checked: false },
  ];
  lifestyle: IInterests[] = [
    { _id: "1", title: "Travel", checked: false },
    { _id: "2", title: "Fitness", checked: false },
    { _id: "3", title: "Food", checked: false },
    { _id: "4", title: "Gaming", checked: false },
    { _id: "5", title: "Writing", checked: false },
    { _id: "6", title: "Reading", checked: false },
    { _id: "7", title: "Dinner Parties", checked: false },
    { _id: "8", title: "Poker", checked: false },
    { _id: "9", title: "Chess", checked: false },
    { _id: "10", title: "Cooking", checked: false },
  ];

  handleBusiness = new Activity(this.business);
  handleInvestingAndFinance = new Activity(this.investingAndFinance);
  handleLifestyle = new Activity(this.lifestyle);

  constructor() {
    makeAutoObservable(this);
  }
  setInputValue(value: string) {
    this.inputValue = value;
  }

  setCustom() {
    const value = this.inputValue;
    const capitalize = value.charAt(0).toUpperCase() + value.slice(1);
    const obj: IInterests = {
      _id: new Date().toString(),
      title: capitalize,
      checked: true,
    };
    this.custom = [...this.custom, obj];
    this.setInputValue("");
  }

  changeCustom(id: string) {
    const mapedArr = [...this.custom].map((item) => {
      if (item._id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    this.custom = mapedArr;
  }

  get selectedCustom() {
    return this.custom.filter((el) => el.checked === true);
  }
}
