import { makeObservable, observable, computed, action } from 'mobx';

const baseUrl = 'http://localhost:8787';

class Details {
  DetailsList = [
    {
      ID: 1,
      Address: "Hmeiri 2",
      Owner_name: "Ayelet roiter",
      Email: "roiterayelet@gmail.com",
      Phone: "0527183718",
      Logo_path: ""
    }
  ];

  constructor() {
    makeObservable(this, {
      DetailsList: observable,
      addDetails: action,
      getList: computed
    });
  }

  async addDetails(newDetails) {
    try {
      const res = await fetch(`${baseUrl}/businessData`, {
        method: 'POST',
        body: JSON.stringify(newDetails),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });

      if (res.status === 200) {
        console.log("Details added successfully!");
        this.DetailsList.push(...newDetails);
        console.log(this.DetailsList);
      } else {
        console.error("Failed to add details:", res.statusText);
      }
    } catch (error) {
      console.log("Failed to add details: " + error);
    }
  }

  get getList() {
    return this.DetailsList;
  }

}

const Details_C = new Details();  //singlton
export default Details_C;
