import * as React from 'react';
import {
  ScheduleComponent,
  Week,
  WorkWeek,
  TimelineViews,
  Inject,
  ViewsDirective,
  ViewDirective,
} from '@syncfusion/ej2-react-schedule';
import '../App.css';

const TimeTable = () => {
  return (
    <ScheduleComponent width="100%" height="500px" cssClass="virtual-scrolling">
      <ViewsDirective>
        <ViewDirective option="Week" allowVirtualScrolling={true} />
        <ViewDirective option="WorkWeek" allowVirtualScrolling={true} />
        <ViewDirective option="TimelineWorkWeek" allowVirtualScrolling={true} />
      </ViewsDirective>
      <Inject services={[Week, WorkWeek, TimelineViews]} />
    </ScheduleComponent>
  );
};
export default TimeTable;
