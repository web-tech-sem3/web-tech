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

const TimeTable = () => {
  return (
    <ScheduleComponent
      width="100%"
      height="550px"
      selectedDate={new Date(2020, 11, 15)}
      workDays={this.workingDays}
    >
      <ViewsDirective>
        <ViewDirective option="Week" />
        <ViewDirective option="WorkWeek" />
        <ViewDirective option="TimelineWorkWeek" />
      </ViewsDirective>
      <Inject services={[Week, WorkWeek, TimelineViews]} />
    </ScheduleComponent>
  );
};

export default TimeTable;
