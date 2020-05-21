import React, { Component } from "react";
import AddForm from "../components/AddForm";
import WorksForm from "../components/WorksForm";
import Control from "../components/Control";
import UserInfo from "../components/UserInfo";
import { backend_url } from "../constant/constant";
import axios from "axios";
import { getToken, getUserInfo } from "../utils/index";

class WorksManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [],
      isShowForm: false,
      editingWork: null,
      keyword: "",
      sort: {
        by: "",
        value: 1,
      },
      isLogin: false,
      user: null,
    };
  }

  onToggleForm = () => {
    const isShowFormStatus = this.state.isShowForm;
    this.setState({
      editingWork: null,
      isShowForm: !isShowFormStatus,
    });
  };

  onCloseForm = () => {
    this.setState({
      isShowForm: false,
    });
  };

  addNewWork = async (work) => {
    const { name, status } = work;
    await axios.post(
      `${backend_url}/createNewWork`,
      { name, status },
      { headers: { Authorization: `Bearer ${getToken()}` } }
    );
    const works = await axios.get(`${backend_url}/works`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    this.setState({
      works: works.data,
    });
    this.onToggleForm();
    this.setState({
      editingWork: null,
    });
  };

  changeWorkStatus = async (work, newStatus) => {
    const works = this.state.works;
    works.forEach((item) => {
      if (item === work) {
        item.status = newStatus;
      }
    });
    this.setState({
      works,
    });

    await axios.post(
      `${backend_url}/updateWork/${work._id}`,
      { updData: { name: work.name, status: newStatus } },
      { headers: { Authorization: `Bearer ${getToken()}` } }
    );
  };

  editWork = (work) => {
    // console.log(work);
    this.onToggleForm();
    this.setState({
      editingWork: work,
    });
  };

  deleteWork = async (work) => {
    await axios.get(`${backend_url}/deleteWork/${work._id}`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    const works = this.state.works;
    works.forEach((item, index) => {
      if (item === work) {
        works.splice(index, 1);
      }
    });
    this.setState({
      works,
    });
  };

  handleDeleteCompleted = async () => {
    axios
      .get(`${backend_url}/deleteCompleted`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then((result) => {
        if (result.data.success === true) {
          console.log(result);
          this.setState({
            works: result.data.works,
          });
        }
      });
  };

  handleDeleteAll = async () => {
    await axios.get(`${backend_url}/deleteAll`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    this.setState({
      works: [],
    });
  };

  handleEditingWork = async (udpWork) => {
    console.log(udpWork);
    await axios.post(
      `${backend_url}/updateWork/${udpWork._id}`,
      { updData: { name: udpWork.name, status: udpWork.status } },
      {
        headers: { Authorization: `Bearer ${getToken()}` },
      }
    );
    const works = await axios.get(`${backend_url}/works`, {
      headers: { Authorization: `Bearer ${getToken()}` },
    });
    this.setState({
      works: works.data,
    });
    this.onToggleForm();
    this.setState({
      editingWork: null,
    });
  };

  onFilter = (name, status) => {
    this.setState({
      filter: {
        filterName: name,
        filterStatus: status,
      },
    });
  };

  componentWillMount() {
    if (localStorage) {
      // const works = localStorage.getItem('works')
      axios
        .get(`${backend_url}/works`, {
          headers: { Authorization: `Bearer ${getToken()}` },
        })
        .then((result) => {
          this.setState({
            works: result.data,
            isLogin: true,
          });
        });
    }
  }

  render() {
    let { isShowForm, works, editingWork, filter, keyword, sort } = this.state;
    if (filter) {
      if (filter.filterName) {
        works = works.filter(
          (item) =>
            item.name.toLowerCase().indexOf(filter.filterName.toLowerCase()) !==
            -1
        );
      }
      if (filter.filterStatus) {
        works = works.filter((item) =>
          filter.filterStatus === "All"
            ? item
            : item.status === filter.filterStatus
        );
      }
    }
    if (keyword) {
      works = works.filter(
        (item) => item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
      );
    }
    if (sort.by !== "") {
      if (sort.by === "name") {
        works.sort((a, b) => {
          if (a.name > b.name) return sort.value;
          else if (a.name < b.name) return -sort.value;
          else return 0;
        });
      } else {
        works = works.filter((item) => item.status === sort.value);
      }
    }
    return (
      <div className="container">
        <UserInfo
          userInfo={getUserInfo()}
          resetLogin={() => this.setState({ isLogin: false })}
        />
        <hr />
        <div className="text-center">
          <h1>WORKS MANAGE</h1>
        </div>
        <hr />
        <div className="row">
          <div
            className={isShowForm ? "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ""}
          >
            {/* Form */}
            {isShowForm ? (
              <AddForm
                onCloseForm={this.onCloseForm}
                AddNewWork={this.addNewWork}
                valueEditting={editingWork}
                editWork={(obj) => this.handleEditingWork(obj)}
              />
            ) : (
              ""
            )}
          </div>
          <div
            className={
              isShowForm
                ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
            }
          >
            <button className="btn btn-success" onClick={this.onToggleForm}>
              <i className="far fa-plus-square"></i> &nbsp; Add New Task
            </button>
            <div className="row" style={{ marginLeft: 0 }}>
              <Control
                searchByKeyword={(keyword) => this.setState({ keyword })}
                onSort={(objSort) => this.setState({ sort: objSort })}
                deleteCompleted={this.handleDeleteCompleted}
                deleteAll={this.handleDeleteAll}
              />
            </div>
            <div className="row" style={{ marginTop: 15 }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <WorksForm
                  works={works}
                  changeWorkStatus={this.changeWorkStatus}
                  editWork={this.editWork}
                  deleteWork={this.deleteWork}
                  filter={this.onFilter}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorksManage;
