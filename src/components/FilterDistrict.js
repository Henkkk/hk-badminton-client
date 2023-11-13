import { useEffect, useState } from "react";

const FilterDistrict = ({onFilterChange}) => {

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
        <option value="">所有地區</option>
        <option value="中西區">中西區</option>
        <option value="灣仔區">灣仔區</option>
        <option value="東區">東區</option>
        <option value="南區">南區</option>
        <option value="油尖旺區">油尖旺區</option>
        <option value="深水埗區">深水埗區</option>
        <option value="九龍城區">九龍城區</option>
        <option value="黃大仙區	">黃大仙區</option>
        <option value="觀塘區">觀塘區</option>
        <option value="葵青區">葵青區</option>
        <option value="荃灣區">荃灣區</option>
        <option value="元朗區">元朗區</option>
        <option value="屯門區">屯門區</option>
        <option value="北區">北區</option>
        <option value="大埔區">大埔區</option>
        <option value="沙田區">沙田區</option>
        <option value="西貢區">西貢區</option>
        <option value="離島區">離島區</option>
    </select>;
  };
     
export default FilterDistrict;
    