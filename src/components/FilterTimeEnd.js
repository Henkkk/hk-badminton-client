import { useState } from "react";

const FilterTimeEnd = ({onFilterChange}) => {
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
      const selectedValue = e.target.value;
      setSearch(selectedValue);
      onFilterChange(selectedValue);
    };

    return  <select 
    className="form-select" 
    aria-label="Default select example" 
    value={search}
    onChange={handleSearchChange}
    defaultValue = {""}
    style={{width: 200, height: 38, marginBottom: 10, marginTop: 20, marginRight: 10, padding: 10, fontSize:13}}>
        <option value="">任何時間</option>
        <option value="8">08:00</option>
        <option value="9">09:00</option>
        <option value="10">10:00</option>
        <option value="11">11:00</option>
        <option value="12">12:00</option>
        <option value="13">13:00</option>
        <option value="14">14:00</option>
        <option value="15">15:00</option>
        <option value="16">16:00</option>
        <option value="17">17:00</option>
        <option value="18">18:00</option>
        <option value="19">19:00</option>
        <option value="20">20:00</option>
        <option value="21">21:00</option>
        <option value="22">22:00</option>
        <option value="23">23:00</option>
    </select>;
  };
     
export default FilterTimeEnd;
    