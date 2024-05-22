import { makeObservable, observable, action } from 'mobx';

const baseUrl = 'http://localhost:8787';

class Meeting {
  MeetingList = [];

  constructor() {
    makeObservable(this, {
      MeetingList: observable,
      addMeeting: action
    });
  }

  async addMeeting(newMeet) {
    try {
      const res = await fetch(`${baseUrl}/appointment`, {
        method: 'POST',
        body: JSON.stringify(newMeet),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      });

      if (res.status === 200) {
        console.log("Meeting added successfully!");
        const newData = await res.json();
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
