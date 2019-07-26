import React, { Component } from 'react'
import "./Tours.scss";

export default class Tours extends Component {
    state = {
        showInfo :false
    };
    hideInfo = () =>{
        this.setState({
        showInfo : !this.state.showInfo
    });};
    render() {
        const {id,img,info,name,city} = this.props.tour;
        const {removeTour} = this.props;
        
        return (
            <article className="tour">
             <div className="img-container">
                <img src={img} alt="city pics"></img> 
                 <span className="close-btn" onClick={()=>removeTour(id)}>
                   <i className="fas fa-window-close"></i> 
                </span>
             </div>
             <div className="tour-info"> 
                 <h3>{city}</h3>
                 <h4>{name}</h4>
                 <h5>Info 
                     <span className="btn" onClick={this.hideInfo}> <i className="fas fa-caret-square-down"></i></span>
                 </h5>
                 {this.state.showInfo && <p>{info}</p>}
                 

             </div>
            </article>
           
        )
    }
}
