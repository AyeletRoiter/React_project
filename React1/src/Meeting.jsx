import Meeting_Class from './Classes/Meeting_Class';
import {observer } from 'mobx-react-lite';


 const MeetingShow = observer(()=>{
    const Meetinglist = Meeting_Class.MeetingList;
    return(
    <div>
        {Meetinglist.map((meet)=>(
        <div style={{ border: '1px solid'}}>
             <h5> שם הלקוח: {meet.NameClient}</h5>
            <p>{meet.MeetDescription}</p>
          <p>תאריך: {meet.Date}</p>
          
          </div>
           
      ))}
    </div>
  )
})

export default MeetingShow;