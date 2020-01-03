import React, { Component } from 'react';
import AddForm from './components/AddForm';
import WorksForm from './components/WorksForm';
import Control from './components/Control'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      works: [],
      isShowForm: false,
      editingWork: null
    }
  }

  randomStr() {
    return Math.floor((1+Math.random())*0x1000).toString(16).substring(1)
  }

  generateID() {
    return this.randomStr() + this.randomStr() + '-' + this.randomStr() + '-' + this.randomStr()
  }

  onToggleForm = () => {
    const isShowFormStatus = this.state.isShowForm;
    this.setState({
      editingWork: null,
      isShowForm: !isShowFormStatus
    })
  }

  onCloseForm = () => {
    this.setState({
      isShowForm: false
    })
  }

  addNewWork = (work) => {
    const works = this.state.works
    console.log(work);
    if(work.id !== ''){
      works.forEach(item => {
        if(item.id == work.id){
          item.id=work.id
          item.name=work.name
          item.status = work.status
        }
      })
      this.onToggleForm()
      this.setState({
        editingWork: null
      })
    }else{
      work.id = this.generateID();
      works.push(work)  
    }
    this.setState({
      works
    })    
    localStorage.setItem('works', JSON.stringify(works))
  }

  changeWorkStatus = (work, newStatus) => {
    const works = this.state.works;
    works.forEach(item => {
      if(item === work) {
        item.status = newStatus
      }
    })
    this.setState({
      works
    })

    localStorage.setItem('works', JSON.stringify(works))
  }

  editWork = (work) => {
    this.onToggleForm()
    this.setState({
      editingWork: work
    })
  }

  deleteWork = (work) => {
    const works = this.state.works;
    works.forEach((item, index) => {
      if(item === work) {
        works.splice(index, 1)
      }
    })
    this.setState({
      works
    })

    localStorage.setItem('works', JSON.stringify(works))
  }

  onFilter = (name, status) => {
    const works = JSON.parse(localStorage.getItem('works'))
    const res = works.filter(item => item.name.toLowerCase().includes(name.toLowerCase()) && (status == 'All' ? !'' : (item.status == status)))
    console.log(res);
    this.setState({
      works: res
    })
  }

  
  componentWillMount() {
    if(localStorage && localStorage.getItem('works')){
      const works = localStorage.getItem('works')
      this.setState({
        works: JSON.parse(works)
      })
    }
  }
  

  render() {
    const { isShowForm, works, editingWork } = this.state
    return (
      <div className="container">
        <hr />
        <div className="text-center">
          <h1>WORKS MANAGE</h1>
        </div>
        <hr />
        <div className="row">
          <div className={ isShowForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : '' }>
            {/* Form */}
            {
              isShowForm
              ?
              <AddForm 
                onCloseForm={ this.onCloseForm } 
                AddNewWork={ this.addNewWork }
                valueEditting={ editingWork }
              />
              :
              ''
            }
          </div>
          <div className={ isShowForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12' }>
            <button className="btn btn-success"
              onClick={ this.onToggleForm }
            >
              <i className="far fa-plus-square"></i> &nbsp; Add New Task
            </button>
            <div className="row" style={{ marginLeft: 0 }}>
              <Control />
            </div>
            <div className="row" style={{ marginTop: 15 }}>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <WorksForm 
                  works={works} 
                  changeWorkStatus={ this.changeWorkStatus }
                  editWork={ this.editWork }
                  deleteWork={ this.deleteWork }
                  filter={ this.onFilter }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;