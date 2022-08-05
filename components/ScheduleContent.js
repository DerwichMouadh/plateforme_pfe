import React from "react";
import {
  ScheduleComponent,
  ViewDirective,
  ViewsDirective,
  Day,
  Week,
  WorkWeek,
  Month,
  Agenda,
  Inject,
  Resize,
  DragAndDrop,
} from "@syncfusion/ej2-react-schedule";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

const data = [
  {
    Id: 1,
    Subject: "Meeting",
    Location: "Hencha",
    StartTime: "2022-05-24T03:00:00.000Z",
    EndTime: "2022-05-24T05:30:00.000Z",
    IsAllDay: false,
    Status: "Completed",
    Priority: "High",
  },
  {
    Id: 2,
    Subject: "Meeting",
    Location: "Hencha",
    StartTime: "2022-05-25T04:00:00.000Z",
    EndTime: "2022-05-25T06:30:00.000Z",
    IsAllDay: false,
    Status: "Completed",
    Priority: "High",
  },
  {
    Id: 3,
    Subject: "Meeting",
    Location: "Hencha",
    StartTime: "2022-05-26T03:00:00.000Z",
    EndTime: "2022-05-26T04:30:00.000Z",
    IsAllDay: false,
    Status: "Completed",
    Priority: "High",
  },
];

function ScheduleContent() {
  return (
    <div className="bg-myColors-200 rounded-2xl w-7/12 fixed top-[82px] my-8 bottom-0 p-8 text-white scrollbar scrollbar-thumb-hidden scrollbar-track-hidden">
      <ScheduleComponent height="100%" eventSettings={{dataSource: data}} selectedDate={new Date(2022,4,23)} >
        <Inject
          services={[
            Day,
            Week,
            WorkWeek,
            Month,
            Agenda,
            Resize,
            DragAndDrop,
          ]}
        />
      </ScheduleComponent>
    </div>
  );
}

export default ScheduleContent;
