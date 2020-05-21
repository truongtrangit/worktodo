import React, { useState } from "react";
import { logout } from "../utils/index";
import axios from "axios";
import { backend_url } from "../constant/constant";
import { getToken } from '../utils/index'

const UserInfo = (props) => {
  const [toggle, setToggleModal] = useState(false);
  const [oldPassword, setOldPassword] = useState(undefined);
  const [newPassword, setNewPassword] = useState(undefined);

  const handleUpdate = async () => {
    const result = await axios.post(
      `${backend_url}/updatePassword`,
      { oldPassword, newPassword },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    if(result.data.success===true){
        setToggleModal(false)
        setOldPassword('')
        setNewPassword('')
        alert('Changed password!!!')
    }else{
        setToggleModal(false)
        setOldPassword('')
        setNewPassword('')
        alert('Cannot change your password, Please try again!!!')
    }
  };
  return (
    <div>
      <div
        // className="modal"
        className={`modal ${toggle ? "show" : ""}`}
        id="exampleModalCenter"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalCenterTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Update Password
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
                onClick={() => setToggleModal(false)}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
                <label>Old Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
                onClick={() => setToggleModal(false)}
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleUpdate}
              >
                Update Password
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="btn-group"
        style={{
          display: "inline",
          justifyContent: "flex-start",
          marginTop: "1%",
        }}
      >
        <button type="button" className="btn btn-danger btn-lg  dropdown-toggle">
          {!!props.userInfo ? props.userInfo.email : ""}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "1%",
        }}
      >
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-success btn-lg dropdown-toggle"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            {props.userInfo ? props.userInfo.name : ""}{" "}
            <span className="caret"></span>
          </button>
          <ul className="dropdown-menu">
            <li>
              <a onClick={() => setToggleModal(true)}>Update Password</a>
            </li>
            <li>
              <a
                onClick={() => {
                  logout();
                  props.resetLogin();
                }}
              >
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
