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

class TimeTable extends React.Component {
  constructor() {
    super(...arguments);
    this.workingDays = [1, 3, 5];
  }
  render() {
    return (
      <div>
        <br />
        <br />
        <ScheduleComponent
          width="100%"
          height="550px"
          selectedDate={new Date(2018, 1, 15)}
          eventSettings={{ dataSource: this.data }}
          workDays={this.workingDays}
        >
          <ViewsDirective>
            <ViewDirective option="Week" />
            <ViewDirective option="WorkWeek" />
            <ViewDirective option="TimelineWorkWeek" />
          </ViewsDirective>
          <Inject services={[Week, WorkWeek, TimelineViews]} />
        </ScheduleComponent>
      </div>
    );
  }
}

export default TimeTable;
