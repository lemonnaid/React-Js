
// props = read-only properties that are shared between components. A parent component can send data to a child component. <component key =value/>
// propTypes = a mechanism that ensures that the passed value is of the correct datatype. Good practice for debugging age: PropTypes.number
//defaultProps = default values for props in case they are not passed from the parent component. name: "Guest"

import PropTypes from 'prop-types'

function Propexample(props){
    return(
        <div className='props'>
            <h1> Name: {props.name}</h1>
            <h1> Project: {props.project}</h1>
            <h1> Day: {props.day}</h1>
            <h1> Active: {props.isActive ? "Yes" : "No"}</h1>
        </div>
    );
}

Propexample.propTypes = {
    name: PropTypes.string,
    project: PropTypes.string,
    day: PropTypes.number,
    isActive: PropTypes.bool,
}

Propexample.defaultProps ={
    name: "Froggy",
    project: "ReactJs",
    day: 0,
    isActive: false,
}
export default Propexample