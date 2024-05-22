import { makeObservable, observable, action } from 'mobx';

const baseUrl = 'http://localhost:8787';

class Meeting {
  MeetingList = [
    {
      NameClient: "Ayelet",
      MeetDescription: "a meeting for information",
      Date: new Date("2024-04-25")
    },
    {
      NameClient: "Hadass",
      MeetDescription: "a meeting for information",
      Date: new Date("2024-04-22")
    }
  ];

  constructor() {
    makeObservable(this, {
      MeetingList: observable,
      addMeeting: action
    });
  }

  async addMeeting(newMeet) {
    try {
      // Convert Date object to ISO string for sending to the server
      const meetingToSend = {
        ...newMeet,
        Date: newMeet.Date.toISOString()
      };

      const res = await fetch(`${baseUrl}/appointment`, {
        method: 'POST',
        body: JSON.stringify(meetingToSend),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });

      if (res.status === 200) {
        console.log("Meeting added successfully!");
        const newData = await res.json();
        // Convert received date string back to Date object
        newData.Date = new Date(newData.Date);
        this.MeetingList.push(newData);
        console.log(this.MeetingList);
      } else {
        console.error("Failed to add Meeting:", res.statusText);
      }
    } catch (error) {
      console.log("Failed to add Meeting: " + error);
    }
  }

  getList() {
    return this.MeetingList;
  }

}

const Meeting_Class = new Meeting();
export default Meeting_Class;
