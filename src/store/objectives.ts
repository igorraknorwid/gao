import { makeAutoObservable } from "mobx";
export interface IObjectives {
  _id: string;
  title: string;
  checked: boolean;
}
export default class Objectives {
  arr: IObjectives[] = [
    { _id: "1", title: "Brainstorm with peers", checked: false },
    { _id: "2", title: "Grow your team", checked: false },
    { _id: "3", title: "Start a company", checked: false },
    { _id: "4", title: "Explore other companies", checked: false },
    { _id: "5", title: "Business development", checked: false },
    { _id: "6", title: "Invest", checked: false },
    { _id: "7", title: "Explore new projects", checked: false },
    { _id: "8", title: "Mentor others", checked: false },
    { _id: "9", title: "Organize events", checked: false },
    { _id: "10", title: "Raise funding", checked: false },
    { _id: "11", title: "Find a cofounder", checked: false },
    { _id: "12", title: "Meet intresting people", checked: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  onChecked(id: string) {
    const mapedArr = [...this.arr].map((item) => {
      if (item._id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    this.arr = mapedArr;
  }

  get selectedOb() {
    const mapedArr = [...this.arr]
      .filter((item) => item.checked === true)
      .map((el) => el.title);
    return mapedArr;
  }
}
