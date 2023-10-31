import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useEffect, useState} from "react";
import { useNavigate } from "react-router";

export default function Create(){
    const [form, setForm] = useState({
        date: "",startTime: "",endTime: "",district: "",venue: "",grade: "",shuttlecock: "",signup: ""
    })
    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
          return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        //e.preventDefault();
     
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newPost = { ...form };
     
        await fetch("http://localhost:5050/record", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        })
        .catch(error => {
          window.alert(error);
          return;
        });

        setForm({ date: "", venue: ""});
        navigate("/");
    }

    return (
      <>
      <Form onSubmit={onSubmit} style = {{padding: 40}}>
      <div className="form-group">
      <label htmlFor="date">日期</label>
      <input type="date" className="form-control" id="date" value={form.date} onChange={(e) => updateForm({ date: e.target.value })}/>
      </div>
      <br/>
      <div className="form-group">
      <label htmlFor="startTime">開始時間</label>
      <select className="form-control" id="startTime" value={form.startTime} defaultValue = {"7"}
      onChange={(e) => updateForm({startTime: e.target.value})}>
        <option value="07:00">07:00</option>
        <option value="08:00">08:00</option>
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
        <option value="16:00">16:00</option>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
      </select>
      </div>
      <br/>
      <div className="form-group">
      <label htmlFor="endTime">結束時間</label>
      <select className="form-control" id="endTime" value={form.endTime} defaultValue = {"8"}
      onChange={(e) => updateForm({endTime: e.target.value})}>
        <option value="08:00">08:00</option>
        <option value="09:00">09:00</option>
        <option value="10:00">10:00</option>
        <option value="11:00">11:00</option>
        <option value="12:00">12:00</option>
        <option value="13:00">13:00</option>
        <option value="14:00">14:00</option>
        <option value="15:00">15:00</option>
        <option value="16:00">16:00</option>
        <option value="17:00">17:00</option>
        <option value="18:00">18:00</option>
        <option value="19:00">19:00</option>
        <option value="20:00">20:00</option>
        <option value="21:00">21:00</option>
        <option value="22:00">22:00</option>
        <option value="23:00">23:00</option>
      </select>
      </div>
      <br/>
      <div className="form-group">
      <label htmlFor="district">地區</label>
      <input type="text" className="form-control" id="district" value={form.district} onChange={(e) => updateForm({ district: e.target.value })}/>
      <br/>
      </div>
      <div className="form-group">
      <label htmlFor="venue">地點</label>
      <input type="text" className="form-control" id="venue" value={form.venue} onChange={(e) => updateForm({ venue: e.target.value })}/>
      </div>
      <br/>
      <div className="form-group">
      <label htmlFor="grade">等級</label>
      <input type="text" className="form-control" id="grade" value={form.grade} onChange={(e) => updateForm({ grade: e.target.value })}/>
      </div>
      <br/>
      <div className="form-group">
      <label htmlFor="shuttlecock">用球</label>
      <input type="text" className="form-control" id="shuttlecock" value={form.shuttlecock} onChange={(e) => updateForm({ shuttlecock: e.target.value })}/>
      </div>
      <br/>
      <div className="form-group">
      <label htmlFor="signup">報名方式</label>
      <input type="text" className="form-control" id="signup" value={form.signup} onChange={(e) => updateForm({ signup: e.target.value })}/>
      </div>
      <br/>
      <Button type="submit">提交</Button>
      </Form>
      </>
      );

}