import { makeAutoObservable } from "mobx";

export default class Links {
  linkedIn = "";
  twitter = "";
  linkedInInput = "";
  twitterInput = "";
  linkError = {
    tw: "",
    ln: "",
  };
  constructor() {
    makeAutoObservable(this);
  }

  linkedInHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const str = e.target.value;
    this.linkedInInput = str;
    const re =
      /(https?)?:?(\/\/)?(([w]{3}||\w\w)\.)?linkedin.com(\w+:{0,1}\w*@)?(\S+)(:([0-9])+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    const found = str.match(re);
    if (found) {
      this.linkedIn = str;
    } else {
      this.linkedIn = "";
    }
  }
  twitterHandler(e: React.ChangeEvent<HTMLInputElement>) {
    const str = e.target.value;
    this.twitterInput = str;
    const re =
      /^(?:https?:\/\/)?(?:www\.)?twitter\.com\/(#!\/)?[a-zA-Z0-9_]+$/i;
    const found = str.match(re);
    if (found) {
      this.twitter = str;
    } else {
      this.twitter = "";
    }
  }
}
