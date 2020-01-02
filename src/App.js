import React, { Component } from 'react';
import AddForm from './components/AddForm';
import WorksForm from './components/WorksForm';
import Control from './components/Control'

// const [addWorkStatus, changeAddWorkStatus] = useState(false)
// const [works, changeWorks] = useState([])

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      addWorkStatus: false,
      updateValue: {name: '', status: ''},
      works: []
    }
  }

  
  componentWillMount() {
    if(localStorage && localStorage.getItem('works')){
      const works =  localStorage.getItem('works')
      this.setState({ works: JSON.parse(works) })
    }
  }

  toggleAddWorkForm () {
    this.setState({
      addWorkStatus: !this.state.addWorkStatus,
    })
  }

  onHandleEdit = (work) => {
   this.toggleAddWorkForm()
   this.setState({
     updateValue: { name: work.name, status: work.status }
   })
  }

  onDeleteWork = (work) => {
    const works = this.state.works;
    works.forEach((item, index) => {
      if(item == work){
        works.splice(index, 1)
      }
    })
    this.setState({
      works
    })
    localStorage.setItem('works', JSON.stringify(works))
  }

  changeWorkStatus = (work, newStatus) => {
    const works = this.state.works;
    works.forEach((item, index) => {
      if(item == work){
        item.status = newStatus
      }
    })
    // console.log(works);
    this.setState({
      works
    })
    localStorage.setItem('works', JSON.stringify(works))
  }
  

  render() {
    let { works, addWorkStatus } = this.state
    return (
      <div className="container">
        <hr />
        <div className="text-center">
          <h1>WORKS MANAGE</h1>
        </div>
        <hr />
        <div className="row">
          <div className={addWorkStatus ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
            {
              addWorkStatus ?
                <AddForm
                  addNewWork={work => {
                    works.push(work)
                    this.setState({
                      works
                    })
                    localStorage.setItem('works', JSON.stringify(works))
                  }}
                  value={ this.state.updateValue }
                  changeFormStatus={ () => this.toggleAddWorkForm() }
                /> : ''
            }
          </div>
          <div className={addWorkStatus ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
            <button className="btn btn-primary" onClick={() => this.setState({ addWorkStatus: !addWorkStatus })}>
              <i className="far fa-plus-square"></i> &nbsp; Add New Task
            </button>
            <Control />
            <WorksForm 
              works={works} 
              editWork={ (work) => this.onHandleEdit(work) } 
              deleteWork={ (work) => this.onDeleteWork(work) } 
              changeWorkStatus={ (work, newStatus) => this.changeWorkStatus(work, newStatus) }
            />
          </div>
        </div>

      </div>
    );
  }
}

export default App;