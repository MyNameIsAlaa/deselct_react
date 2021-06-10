import React from 'react';
import {connect} from 'react-redux'
import {retrieveCountries, findByCountry} from '../actions/users';

class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {
          country: ""
        }
        this.props.dispatch(retrieveCountries()).then(()=>{
          //console.log(this.props.countries[0])
          this.setState({
            country: this.props.countries[0]['_id']
          })
          this.loadData();
        });
        this.setCountry = this.setCountry.bind(this);
        this.loadData = this.loadData.bind(this);

       
    }


    loadData(){
      this.props.dispatch(findByCountry(this.state.country));
    }

    setCountry(event){
      this.setState({
        country: event.target.value
      });
     setTimeout(()=>{
      this.loadData();
     }, 500)
    }

    render(){
  

        return(
            <div>
               <div className="form-group">
                 <select onChange={this.setCountry}  className="form-control">
                   {this.props.countries.map((item, i)=>{
                     return <option value={item._id} key={item._id}>{item._id}</option>
                   })}
                 </select>
               </div>

               <ul>
                {this.props.users.map((user)=>{
                  return  <li>{user.first_name} {user.last_name}</li>
                })}
               </ul>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
       countries: state.countriesReducer,
       users: state.usersReducer
    }
  }

export default connect(mapStateToProps)(Home);