import React from 'react';
import store from '../store';
import { connect } from 'react-redux'
import {createUser} from '../actions/users'
class NewUser extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            id: null,
            first_name: "",
            last_name: "",
            age: null,
            nationality: "",
            submitted: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
        this.setID = this.setID.bind(this);
        this.setAge = this.setAge.bind(this);
        this.setNationality = this.setNationality.bind(this);
    }

    setFirstName(event){
        this.setState({
            first_name: event.target.value
        });
    }
    setLastName(event){
        this.setState({
            last_name: event.target.value
        });
    }
    setID(event){
        this.setState({
            id: event.target.value
        });
    }
    setAge(event){
        this.setState({
            age: event.target.value
        });
    }
    setNationality(event){
        this.setState({
            nationality: event.target.value
        });
    }

    handleSubmit(){
        this.props.dispatch(createUser(
            this.state.id,
            this.state.first_name,
            this.state.last_name,
            this.state.nationality,
            this.state.age
        )).then((data)=>{
           alert('New User has been saved.')
        },(error)=>{
            alert('Error adding new user')
            console.log(error)
        })

    }

    render(){

        return(
            <div>
               <h3>Add User</h3>
               <div className="form-group">
                 <label>ID</label>
                 <input onChange={this.setID}  type="number" className="form-control"  value={this.state.id}/>
               </div>
               <div className="form-group">
                 <label>First Name</label>
                 <input onChange={this.setFirstName}  type="text" className="form-control" value={this.state.first_name} />
               </div>
               <div className="form-group">
                 <label>Last Name</label>
                 <input onChange={this.setLastName}  type="text" className="form-control"  value={this.state.last_name}/>
               </div>
               <div className="form-group">
                 <label>Nationality</label>
                 <input onChange={this.setNationality}  type="text" className="form-control"  value={this.state.nationality}/>
               </div>
               <div className="form-group">
                 <label>Age</label>
                 <input onChange={this.setAge}  type="number" className="form-control"  value={this.state.age}/>
               </div>
               <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Add User</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
  return {
     users: state.usersReducer
  }
}


export default connect(mapStateToProps)(NewUser);