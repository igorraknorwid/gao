import { makeAutoObservable } from "mobx";
interface IInterests {
  _id: string;
  title: string;
  checked: boolean;
}
export class Activity {
  arr: IInterests[];

  constructor(arr: IInterests[], inputValue: string = "") {
    makeAutoObservable(this);
    this.arr = arr;
  }

  changeArr(id: string) {
    const mapedArr = [...this.arr].map((item) => {
      if (item._id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    this.arr = mapedArr;
  }

  get selectedArr() {
    return this.arr.filter((el) => el.checked === true);
  }
}
