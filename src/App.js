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
      editingWork: null,
      keyword: '',
      sort: {
        by: '',
        value: 1
      }
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
        if(item.id === work.id){
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
    this.setState({
      filter: {
        filterName: name,
        filterStatus: status
      }
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
    let { isShowForm, works, editingWork, filter, keyword, sort } = this.state
    console.log(sort);
    if(filter) {
      if(filter.filterName){
        works = works.filter(item => item.name.toLowerCase().indexOf(filter.filterName.toLowerCase()) !== -1)
      }
      if(filter.filterStatus) {
        works = works.filter(item => filter.filterStatus === 'All' ? item : item.status === filter.filterStatus)
      }
    }   
    if(keyword){
      works = works.filter(item => item.name.toLowerCase().indexOf(keyword.toLowerCase()) !== -1)
    }
    if(sort.by !== '') {
      if(sort.by === 'name'){
        works.sort((a,b) => {
          if(a.name > b.name) return sort.value
          else if(a.name<b.name) return -sort.value
          else return 0
        })
      }else{
        works = works.filter(item => item.status === sort.value)
      }
    }
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
              <Control 
                searchByKeyword={ (keyword) => this.setState({ keyword })} 
                onSort={ (objSort) => this.setState({ sort: objSort }) }
              />
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