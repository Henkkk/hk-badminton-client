import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import FilterDistrict from "./FilterDistrict";
import FilterDate from "./FilterDate";
import FilterTimeStart from "./FilterTimeStart";
import FilterTimeEnd from "./FilterTimeEnd";

const Record = (props) => {
  <tr>
    <td>{props.record.date}</td>
    <td>{props.record.startTime}</td>
    <td>{props.record.endTime}</td>
    <td>{props.record.district}</td>
    <td>{props.record.venue}</td>
    <td>{props.record.grade}</td>
    <td>{props.record.shuttlecock}</td>
    <td>{props.record.signup}</td>
  </tr>
}

export default function Home(){
  const [records, setRecords] = useState([]);
  const [posts, setPosts] = useState(null);
  const [searchDistrict, setSearchDistrict] = useState('');
  const [searchDate, setSearchDate] = useState('');
  const [searchStartTime, setStartTime] = useState('');
  const [searchEndTime, setEndTime] = useState('');

  const handleDistrictFilterChange = (selectedDistrict) => {
    setSearchDistrict(selectedDistrict);
  };

  const handleDateFilterChange = (selectedDate) => {
    setSearchDate(selectedDate);
  };

  const handleStartTimeFilterChange = (selectedStartTime) => {
    setStartTime(selectedStartTime);
  };

  const handleEndTimeFilterChange = (selectedEndTime) => {
    setEndTime(selectedEndTime);
  };

  useEffect(() => {
    async function getRecords() {
      //const response = await fetch('http://localhost:5050/record/');
      const response = await fetch('https://hk-badminton-server.onrender.com/record/');

      console.log(response);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      
      const records = await response.json();
      setRecords(records);
    }
 
    getRecords();
 
    return;
  }, [records.length]);

  function recordList() {
    return records.map((record) => {
      return (
        <Record
          record={record}
          //deleteRecord={() => deleteRecord(record._id)}
          key={record._id}
        />
      );
    });
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'start'}}>
        <FilterDate onFilterChange={handleDateFilterChange}/>
        <FilterTimeStart onFilterChange={handleStartTimeFilterChange}/>  
        <FilterTimeEnd onFilterChange={handleEndTimeFilterChange}/>  
        <FilterDistrict onFilterChange={handleDistrictFilterChange}/>  
      </div>
      {/*<h3>Record List</h3>*/}
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>日期</th>
            <th>開始時間</th>
            <th>結束時間</th>
            <th>地區</th>
            <th>地點</th>
            <th>等級</th>
            <th>用球</th>
            <th>報名方式</th>
          </tr>
        </thead>
        <tbody>{
        records
        .filter((item) => {
          return (
            (searchDistrict.toLowerCase() === "" || item.district.includes(searchDistrict)) &&
            (searchDate === "" || item.date === searchDate) &&
            (searchStartTime === "" || parseInt(item.startTime, 10) >= searchStartTime) &&
            (searchEndTime === "" || parseInt(item.endTime, 10) >= searchEndTime)
          );
        })
        .sort((a, b) => {
          if (a.date < b.date) return -1;
          if (a.date > b.date) return 1;
          if (a.startTime < b.startTime) return -1;
          if (a.startTime > b.startTime) return 1;
          return 0;
        }).map(record =>{
          return <tr key={record._id}>
            <td>{record.date}</td>
            <td>{record.startTime}</td>
            <td>{record.endTime}</td>
            <td>{record.district}</td>
            <td>{record.venue}</td>
            <td>{record.grade}</td>
            <td>{record.shuttlecock}</td>
            <td>{record.signup}</td>
          </tr>
        })
        }</tbody>
      </table>
    </>
  );
}