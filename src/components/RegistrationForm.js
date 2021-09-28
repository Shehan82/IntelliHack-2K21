import React, { useEffect } from "react";
import "../styles/registrationForm.css";
import TextField from "@mui/material/TextField";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";

function RegistrationForm() {
  const [tshirt, settshirt] = React.useState("XS");
  const [file, setfile] = useState();
  const handleChange = (event) => {
    settshirt(event.target.value);
  };

  const handleFileUpload = (event) => {
    setfile(event.target.files[0]);
  };
  const tshirtSizes = [
    {
      value: "XS",
      label: "XS",
    },
    {
      value: "S",
      label: "S",
    },
    {
      value: "M",
      label: "M",
    },
    {
      value: "L",
      label: "L",
    },
    {
      value: "XL",
      label: "XL",
    },
  ];
  //   console.log(props.slider.slickNext);
  return (
    <div className="rg-main">
      {console.log(file)}
      <div className="rg-topic">Registration Form</div>
      <div className="rg-team-details">
        <div className="rg-team-topic">Team Details</div>

        <div className="rg-team-fields">
          <TextField
            id="outlined-basic"
            label="University / Institute"
            variant="outlined"
          />
          <TextField id="outlined-basic" label="Team Name" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Project Overview"
            variant="outlined"
          />

          <div style={{ width: "100%", marginBottom: 10 }}>
            {file && <div style={{ marginBottom: 10 }}>{file.name}</div>}

            <Button
              style={{
                width: "100%",
                fontFamily: "Poppins, sans-serif",
                backgroundColor: "#041149",
                color: "white",
                paddingTop: 10,
                paddingBottom: 10,
              }}
              variant="contained"
              component="label"
            >
              Upload Praposal
              <input
                onChange={(event) => {
                  handleFileUpload(event);
                }}
                type="file"
                hidden
              />
            </Button>
          </div>
        </div>
      </div>
      <div className="rg-team-details">
        <div className="rg-team-topic">Team Leader details</div>

        <div className="rg-team-fields">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="NIC" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Contact No"
            variant="outlined"
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select Your T shirt size"
            value={tshirt}
            onChange={handleChange}
            helperText="Please select your T-Shirt size"
          >
            {tshirtSizes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>

      {/*  */}

      <div className="rg-team-details">
        <div className="rg-team-topic">Member 1 details</div>

        <div className="rg-team-fields">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="NIC" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Contact No"
            variant="outlined"
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select Your T shirt size"
            value={tshirt}
            onChange={handleChange}
            helperText="Please select your T-Shirt size"
          >
            {tshirtSizes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>

      {/*  */}
      <div className="rg-team-details">
        <div className="rg-team-topic">Member 2 details</div>

        <div className="rg-team-fields">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="NIC" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Contact No"
            variant="outlined"
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select Your T shirt size"
            value={tshirt}
            onChange={handleChange}
            helperText="Please select your T-Shirt size"
          >
            {tshirtSizes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>

      <div className="rg-team-details">
        <div className="rg-team-topic">Member 3 details</div>

        <div className="rg-team-fields">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="NIC" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Contact No"
            variant="outlined"
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select Your T shirt size"
            value={tshirt}
            onChange={handleChange}
            helperText="Please select your T-Shirt size"
          >
            {tshirtSizes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>

      <div className="rg-team-details">
        <div className="rg-team-topic">Member 4 details</div>

        <div className="rg-team-fields">
          <TextField id="outlined-basic" label="Name" variant="outlined" />
          <TextField id="outlined-basic" label="NIC" variant="outlined" />
          <TextField
            id="outlined-basic"
            label="Contact No"
            variant="outlined"
          />
          <TextField
            id="outlined-select-currency"
            select
            label="Select Your T shirt size"
            value={tshirt}
            onChange={handleChange}
            helperText="Please select your T-Shirt size"
          >
            {tshirtSizes.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>

      <div className="reg-btn">
        <Button
          style={{ width: "100%" }}
          color="success"
          variant="contained"
          component="label"
        >
          Register Team
        </Button>
      </div>

      <div class="rg-announce">
        * If you have any issues regarding registration, please contact us.{" "}
      </div>
    </div>
  );
}

export default RegistrationForm;
