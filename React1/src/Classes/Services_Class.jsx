import { makeObservable, observable, computed, action } from 'mobx';

const baseUrl = 'http://localhost:8787';

class Servies {
  ServiesList = [
    {
      serviceName: "בלגיה",
      serviceDescription: "lalalalalal",
      price: 3500,
      image: "https://images.pexels.com/photos/2587789/pexels-photo-2587789.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      serviceName: "בלגיה",
      serviceDescription: "lalalalalal",
      price: 3500,
      image: "https://images.pexels.com/photos/2587789/pexels-photo-2587789.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      serviceName: "צרפת",
      serviceDescription: "lalalalalal",
      price: 4000,
      image: "https://images.pexels.com/photos/161853/eiffel-tower-paris-france-tower-161853.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      serviceName: "פראג",
      serviceDescription: "lalalalalal",
      price: 2500,
      image: "https://www.picshare.co.il/m_pictures/img141184.jpg"
    },
    {
      serviceName: "שוויץ",
      serviceDescription: "lalalalalal",
      price: 4500,
      image: "https://images.pexels.com/photos/267104/pexels-photo-267104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
    
  ];

  constructor() {
    makeObservable(this, {
        ServiesList: observable,  
      addServies: action,
      getList: computed
    });
  }

  async addServies(newService) {
    try {
      const res = await fetch(`${baseUrl}/service`, {
        method: 'POST',
        body: JSON.stringify(newService),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });

      if (res.status === 200) {
        console.log("Service added successfully!");
        this.ServiesList.push(...newService);
        console.log(this.ServiesList);
      } else {
        console.error("Failed to add service:", res.statusText);
      }
    } catch (error) {
      console.log("Failed to add service: " + error);
    }
  }

  get getList() {
    return this.ServiesList;
  }

}

const Service = new Servies();  //singlton
export default Service;
