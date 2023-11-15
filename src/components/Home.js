import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import FilterDistrict from "./FilterDistrict";
import FilterDate from "./FilterDate";
import FilterTimeStart from "./FilterTimeStart";
import FilterTimeEnd from "./FilterTimeEnd";

export default function Home(){
  const [records, setRecords] = useState([]);
  //const [posts, setPosts] = useState(null);
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

  const clearFilter = () => {
    setSearchDistrict("");
    setSearchDate("");
    setStartTime("");
    setEndTime("");
  }

  useEffect(() => {
    async function getRecords() {
      //const response = await fetch('http://localhost:5050/record/');
      const response = await fetch('https://hk-badminton-server.onrender.com/record/');

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

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'flex-start'}}>
        <FilterDate onFilterChange={handleDateFilterChange}/>
        <FilterTimeStart onFilterChange={handleStartTimeFilterChange}/>  
        <FilterTimeEnd onFilterChange={handleEndTimeFilterChange}/>  
        <FilterDistrict onFilterChange={handleDistrictFilterChange}/> 
        <Button className="btn-primary h-50" onClick={clearFilter} style={{width: 90, height: 40, marginBottom: 10, marginTop: 20, fontSize:15}}>清除選擇</Button> 
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
            <th>收費</th>
          </tr>
        </thead>
        <tbody>{
        records
        .filter((item) => {
          const hourStartString = item.startTime.split(":")[0];
          const hourEndString = item.endTime.split(":")[0];

          const timeValueStart = parseInt(hourStartString, 10);
          const timeValueEnd = parseInt(hourEndString, 10);

          return (
            (searchDistrict.toLowerCase() === "" || item.district.includes(searchDistrict)) &&
            (searchDate === "" || item.date === searchDate) &&
            (searchStartTime === "" || searchStartTime <= timeValueStart) &&
            (searchEndTime === "" || searchEndTime >= timeValueEnd)
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
            <td>{record.fee}</td>
          </tr>
        })
        }</tbody>
      </table>
    </>
  );
}