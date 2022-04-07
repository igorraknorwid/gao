import { makeAutoObservable } from "mobx";

export default class Cities {
  hub = "";
  isSearch = false;
  hubArr = [
    { _id: "01", title: "Austin", checked: false },
    { _id: "02", title: "Dallas", checked: false },
    { _id: "03", title: "San Antonio", checked: false },
    { _id: "04", title: "Houston", checked: false },
    { _id: "05", title: "New York", checked: false },
    { _id: "06", title: "Los Angeles", checked: false },
  ];

  hubs = [
    { _id: "1", title: "New York", checked: false },
    { _id: "2", title: "Los Angeles", checked: false },
    { _id: "3", title: "Chicago", checked: false },
    { _id: "4", title: "Philadelphia", checked: false },
    { _id: "5", title: "San Antonio", checked: false },
    { _id: "6", title: "San Diego", checked: false },
    { _id: "7", title: "Dallas", checked: false },
    { _id: "8", title: "San Jose", checked: false },
    { _id: "9", title: "Austin", checked: false },
    { _id: "10", title: "Jacksonville", checked: false },
    { _id: "11", title: "Fort Worth", checked: false },
    { _id: "12", title: "Columbus", checked: false },
    { _id: "13", title: "Indianapolis", checked: false },
    { _id: "14", title: "Charlotte", checked: false },
    { _id: "15", title: "San Francisco", checked: false },
    { _id: "16", title: "Seattle", checked: false },
    { _id: "17", title: "Denver", checked: false },
    { _id: "18", title: "Oklahoma City", checked: false },
    { _id: "19", title: "El Paso", checked: false },
    { _id: "20", title: "Boston", checked: false },
    { _id: "21", title: "Portland", checked: false },
    { _id: "22", title: "Las Vegas", checked: false },
    { _id: "23", title: "Detroit", checked: false },
    { _id: "24", title: "Memphis", checked: false },
    { _id: "25", title: "Louisville", checked: false },
    { _id: "26", title: "Baltimore", checked: false },
    { _id: "27", title: "Milwaukee", checked: false },
    { _id: "28", title: "Albuquerque", checked: false },
    { _id: "29", title: "Tucson", checked: false },
    { _id: "30", title: "Fresno", checked: false },
    { _id: "31", title: "Sacramento", checked: false },
    { _id: "32", title: "Kansas City", checked: false },
    { _id: "33", title: "Mesa", checked: false },
    { _id: "34", title: "Atlanta", checked: false },
    { _id: "35", title: "Omaha", checked: false },
    { _id: "36", title: "Colorado Springs", checked: false },
    { _id: "37", title: "Raleigh", checked: false },
    { _id: "38", title: "Long Beach", checked: false },
    { _id: "39", title: "Virginia Beach", checked: false },
    { _id: "40", title: "Miami", checked: false },
    { _id: "40", title: "Oakland", checked: false },
    { _id: "41", title: "Minneapolis", checked: false },
    { _id: "42", title: "Tulsa", checked: false },
    { _id: "43", title: "Bakersfield", checked: false },
    { _id: "44", title: "Wichita", checked: false },
    { _id: "45", title: "Aurora", checked: false },
    { _id: "46", title: "Tampa", checked: false },
    { _id: "47", title: "New Orleans", checked: false },
    { _id: "48", title: "Cleveland", checked: false },
    { _id: "49", title: "Honolulu", checked: false },
    { _id: "50", title: "Anaheim", checked: false },
  ];

  constructor() {
    makeAutoObservable(this);
  }

  setHub(city: string) {
    this.hub = city;
  }

  setCitiesArrByTitle(title: string) {
    this.hubArr.map((city) => {
      if (city.title === title) {
        return (city.checked = true);
      }
      return (city.checked = false);
    });
  }

  setCitiesArrByID(id: string, title: string) {
    this.hubArr.map((city) => {
      if (city._id === id && city.checked) {
        this.hub = "";
        return (city.checked = !city.checked);
      }
      if (city._id === id && !city.checked) {
        this.hub = title;
        return (city.checked = !city.checked);
      }
      return (city.checked = false);
    });
  }

  setIsSearch(props: boolean) {
    this.isSearch = props;
  }

  get selectedHubs() {
    return [...this.hubs].filter(
      (hub) => hub.title.toLowerCase().search(this.hub.toLowerCase()) !== -1
    );
  }
}
