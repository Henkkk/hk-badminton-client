import { useEffect, useState } from "react";

const FilterDate = ({onFilterChange}) => {
    const [search, setSearch] = useState('');

    const handleSearchChange = (e) => {
      const selectedValue = e.target.value;
      setSearch(selectedValue);
      onFilterChange(selectedValue);
    };

    return (
    <div id="date-picker" 
    className="md-form md-outline input-with-post-icon datepicker"
    onChange={handleSearchChange}
    value = {search}
    defaultValue = {""}
    //placeholder = {"選擇日期"}
    style={{width: 200, height: 38, marginBottom: 10, marginTop: 10, padding: 10, fontSize:14}}>
      <input placeholder="選擇日期" type="date" id="example" class="form-control"/>
    </div>    
  )
};
     
export default FilterDate;
    