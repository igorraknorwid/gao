import { makeAutoObservable } from "mobx";
import { objectives } from "../index";

export default class Image {
  image: Blob | MediaSource | undefined = undefined;
  constructor() {
    makeAutoObservable(this);
  }
  setImage(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      this.image = e.target.files[0];
    }
  }
  removeImage() {
    this.image = undefined;
  }
}
