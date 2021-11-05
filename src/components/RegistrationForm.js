import React, { useEffect } from "react";
import "../styles/registrationForm.css";
import TextField from "@mui/material/TextField";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";

import Button from "@mui/material/Button";
import { firestore, storage } from "../config";
import { HashLoader } from "react-spinners";

function RegistrationForm({ handleOpenSuccess, handleClose }) {
  const [tshirt, settshirt] = React.useState("XS");
  const [file, setfile] = useState(null);
  const [loading, setloading] = useState(false);
  const [err, seterr] = useState("");

  const [teamDetails, setteamDetails] = useState({
    university: "",
    teamName: "",
    projectOverview: "",

    member1Name: "",
    member1NIC: "",
    member1Contact: "",
    member1tshirtSize: "XS",

    member2Name: "",
    member2NIC: "",
    member2Contact: "",
    member2tshirtSize: "XS",

    member3Name: "",
    member3NIC: "",
    member3Contact: "",
    member3tshirtSize: "XS",

    member4Name: "",
    member4NIC: "",
    member4Contact: "",
    member4tshirtSize: "XS",

    member5Name: "",
    member5NIC: "",
    member5Contact: "",
    member5tshirtSize: "XS",
  });

  // const registerTeam = () => {
  //   setloading(true);
  //   firestore
  //     .collection("Team Details")
  //     .add(teamDetails)
  //     .then(() => {
  //       const upload = storage
  //         .ref(`${teamDetails.teamName}/${file.name}`)
  //         .put(file);

  //       upload.on(
  //         "state_changed",
  //         (snapshot) => {},
  //         (error) => {
  //           setloading(false);
  //           seterr(error.message);
  //         },
  //         () => {
  //           storage
  //             .ref(`${teamDetails.teamName}`)
  //             .child(file.name)
  //             .getDownloadURL()
  //             .then(() => {
  //               handleClose();
  //               handleOpenSuccess();
  //               setloading(false);
  //             });
  //         }
  //       );
  //     })
  //     .catch((err) => {
  //       if (err != null) {
  //         seterr(err.message);
  //       }

  //       setloading(false);
  //     });
  // };

  const registerTeam = () => {
    if (
      file != null &&
      teamDetails.university != "" &&
      teamDetails.teamName != "" &&
      teamDetails.projectOverview != "" &&
      teamDetails.member1Name != "" &&
      teamDetails.member1NIC != "" &&
      teamDetails.member1Contact != "" &&
      teamDetails.member1tshirtSize != "" &&
      teamDetails.member2Name != "" &&
      teamDetails.member2NIC != "" &&
      teamDetails.member2Contact != "" &&
      teamDetails.member2tshirtSize != "" &&
      teamDetails.member3Name != "" &&
      teamDetails.member3NIC != "" &&
      teamDetails.member3Contact != "" &&
      teamDetails.member3tshirtSize != ""
      // teamDetails.member4Name != "" &&
      // teamDetails.member4NIC != "" &&
      // teamDetails.member4Contact != "" &&
      // teamDetails.member4tshirtSize != "" &&
      // teamDetails.member5Name != "" &&
      // teamDetails.member5NIC != "" &&
      // teamDetails.member5Contact != "" &&
      // teamDetails.member5tshirtSize != ""
    ) {
      seterr("");
      setloading(true);
      firestore
        .collection("Team Details")
        .add(teamDetails)
        .then(() => {
          const upload = storage
            .ref(`${teamDetails.teamName}/${file.name}`)
            .put(file);

          upload.on(
            "state_changed",
            (snapshot) => {},
            (error) => {
              setloading(false);
              seterr(error.message);
            },
            () => {
              storage
                .ref(`${teamDetails.teamName}`)
                .child(file.name)
                .getDownloadURL()
                .then(() => {
                  handleClose();
                  handleOpenSuccess();
                  setloading(false);
                });
            }
          );
        })
        .catch((err) => {
          if (err != null) {
            seterr(err.message);
          }

          setloading(false);
        });
    } else {
      seterr("Fill in all the fields of team leader and at least 2 members.");
    }
  };

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
  console.log(teamDetails);
  return (
    <div className="rg-main">
      <div className="rg-topic">Registration Form</div>
      <div className="rg-team-details">
        <div className="rg-team-topic">Team Details</div>

        <div className="rg-team-fields">
          {err && <div className="rg-btm-err">* {err}</div>}
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                university: event.target.value,
              });
            }}
            id="outlined-basic"
            label="University / Institute"
            variant="outlined"
          />
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                teamName: event.target.value,
              });
            }}
            id="outlined-basic"
            label="Team Name"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Project Overview"
            variant="outlined"
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                projectOverview: event.target.value,
              });
            }}
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

      {/* team leader details */}

      <div className="rg-team-details">
        <div className="rg-team-topic">Team Leader details</div>

        <div className="rg-team-fields">
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member1Name: event.target.value,
              });
            }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member1NIC: event.target.value,
              });
            }}
            id="outlined-basic"
            label="NIC"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Contact No"
            variant="outlined"
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member1Contact: event.target.value,
              });
            }}
          />
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member1tshirtSize: event.target.value,
              });
            }}
            id="outlined-select-currency-native"
            select
            label="Select Your T shirt size"
            value={teamDetails.member1tshirtSize}
            helperText="Please select your T-Shirt size"
            SelectProps={{
              native: true,
            }}
          >
            {tshirtSizes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
      </div>

      {/* member 2 details */}

      <div className="rg-team-details">
        <div className="rg-team-topic">Member 1 details</div>

        <div className="rg-team-fields">
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member2Name: event.target.value,
              });
            }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member2NIC: event.target.value,
              });
            }}
            id="outlined-basic"
            label="NIC"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Contact No"
            variant="outlined"
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member2Contact: event.target.value,
              });
            }}
          />
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member2tshirtSize: event.target.value,
              });
            }}
            id="outlined-select-currency-native"
            select
            label="Select Your T shirt size"
            value={teamDetails.member2tshirtSize}
            helperText="Please select your T-Shirt size"
            SelectProps={{
              native: true,
            }}
          >
            {tshirtSizes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
      </div>

      {/* member 3 details */}

      <div className="rg-team-details">
        <div className="rg-team-topic">Member 2 details</div>

        <div className="rg-team-fields">
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member3Name: event.target.value,
              });
            }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member3NIC: event.target.value,
              });
            }}
            id="outlined-basic"
            label="NIC"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Contact No"
            variant="outlined"
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member3Contact: event.target.value,
              });
            }}
          />
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member3tshirtSize: event.target.value,
              });
            }}
            id="outlined-select-currency-native"
            select
            label="Select Your T shirt size"
            value={teamDetails.member3tshirtSize}
            helperText="Please select your T-Shirt size"
            SelectProps={{
              native: true,
            }}
          >
            {tshirtSizes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
      </div>

      {/* member 4 details */}

      <div className="rg-team-details">
        <div className="rg-team-topic">Member 3 details</div>

        <div className="rg-team-fields">
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member4Name: event.target.value,
              });
            }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member4NIC: event.target.value,
              });
            }}
            id="outlined-basic"
            label="NIC"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Contact No"
            variant="outlined"
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member4Contact: event.target.value,
              });
            }}
          />
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member4tshirtSize: event.target.value,
              });
            }}
            id="outlined-select-currency-native"
            select
            label="Select Your T shirt size"
            value={teamDetails.member4tshirtSize}
            helperText="Please select your T-Shirt size"
            SelectProps={{
              native: true,
            }}
          >
            {tshirtSizes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
      </div>

      {/* member 5 details */}

      <div className="rg-team-details">
        <div className="rg-team-topic">Member 4 details</div>

        <div className="rg-team-fields">
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member5Name: event.target.value,
              });
            }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member5NIC: event.target.value,
              });
            }}
            id="outlined-basic"
            label="NIC"
            variant="outlined"
          />
          <TextField
            id="outlined-basic"
            label="Contact No"
            variant="outlined"
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member5Contact: event.target.value,
              });
            }}
          />
          <TextField
            onChange={(event) => {
              setteamDetails({
                ...teamDetails,
                member5tshirtSize: event.target.value,
              });
            }}
            id="outlined-select-currency-native"
            select
            label="Select Your T shirt size"
            value={teamDetails.member5tshirtSize}
            helperText="Please select your T-Shirt size"
            SelectProps={{
              native: true,
            }}
          >
            {tshirtSizes.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
        </div>
      </div>

      <div className="reg-btn">
        {err && <div className="rg-btm-err">* {err}</div>}
        <div onClick={registerTeam} className="upload-btn">
          {loading && (
            <div className="rg-ld">
              <HashLoader color={"white"} loading={loading} size={20} />
            </div>
          )}

          <div>Register Team</div>
        </div>
      </div>

      <div class="rg-announce">
        * If you have any issues regarding registration, please contact us.{" "}
        <br />* Email : ieeecsucsc@gmail.com
      </div>
    </div>
  );
}

export default RegistrationForm;
