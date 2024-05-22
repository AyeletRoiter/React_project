import Meeting_Class from './Classes/Meeting_Class';
import { observer } from 'mobx-react-lite';

const MeetingShow = observer(() => {
  const Meetinglist = Meeting_Class.MeetingList;
  return (
    <div>
      {Meetinglist.map((meet) => (
        <div key={meet.NameClient + meet.Date} style={{ border: '1px solid' }}>
          <h5>User Name: {meet.NameClient}</h5>
          <p>Description: {meet.MeetDescription}</p>
          <p>Date: {meet.Date.toLocaleDateString()}</p>
        </div>
      ))}
    </div>
  );
});

export default MeetingShow;
