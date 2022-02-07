import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import Axios from "axios";
import './Update.css'

const Update = () => {
    const [temperature, setTemperature] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState(false);

   const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(false)
    // console.log(typeof temperature);
    // let int = parseInt(temperature)
    // console.log(typeof int);
    console.log(isNaN(temperature));
    if(temperature === ""){
        setError("This field cannot be empty")
    }else if(isNaN(temperature)){
        setError("Temperature should be a valid number")
    }else{
        setError("")
        let currentTime = new Date()
        console.log("currentTime",currentTime);
        Axios.post("http://localhost:3000/update", {
            time: currentTime,
            temperatue: temperature
        }).then(() => {
            console.log("success");
            setSuccess(true)
            setTemperature("")
        })

    }
    
        // console.log("submit");
        // console.log("temperature",temperature);
    }
  return (
    <Container fluid style={{width:"80%",marginTop:"100px"}}>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="formLabel">Enter the current temperature of Halifax city:</Form.Label>
          <Form.Control
            type="number"
            placeholder="Temperature in degree celcius"
            onChange={(event) => setTemperature(event.target.value)}
            value = {temperature}
          />
        </Form.Group>
        {error !== "" &&
               <p className="alert alert-danger">
               {error}
              </p>
          }
          {
            success &&
            <p className="alert alert-success">
                Temperature is updated successfully
            </p>
          }

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Update;
