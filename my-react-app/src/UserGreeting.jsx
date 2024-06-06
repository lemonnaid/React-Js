//conditional rendering = allows you to control what gets rendered in yout application based on certain conditions (show, hide or change components)

import PropTypes from 'prop-types';

function UserGreeting(props){

    const Greeting = <h2 className="greeting">Welcome {props.username}</h2>
    const Warning = <h2 className="login">Please log in to continue</h2>
    
    return(props.isLoggedIn ? Greeting : Warning );

    // return (props.isLoggedIn ? <h2 className="greeting">Welcome {props.username}</h2> : <h2 className="login">Please log in to continue</h2>)
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username : PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username : "Guest",
}
export default UserGreeting