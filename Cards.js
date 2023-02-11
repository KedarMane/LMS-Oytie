import React from 'react';



export default function cards(props) {

  return (
    
    <div className="row">
        <div className="col-sm-6 mb-3 mb-sm-0 my-5 width">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.detail}</p>
                <button type="button" className="btn btn-primary">{props.button1}</button><br></br>
                <button type="button"className="btn btn-primary my-3">{props.button2}</button>
            </div>
            </div>
        </div>
        {/* <div className="col-sm-6 my-5 width">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">ADMISSIONS</h5>
                <p className="card-text">Details about the new enrollments </p>
                <button type="button" className="btn btn-primary" >ADD NEW ENTRY</button><br></br>
                <button type="button" className="btn btn-primary my-3">ADD MANUAL ENTRY</button>
            </div>
            </div>
        </div>
        <div className="col-sm-6 mb-3 mb-sm-0 my-5 width">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">REPORTS</h5>
                <p className="card-text">Complete details about the total enrollments and others.</p>
                <button type="button" className="btn btn-primary">Fee Details</button><br></br>
                <button type="button" className="btn btn-primary my-3">XYZ</button>
            </div>
            </div>
        </div> */}
</div>
  )
}


