import profilePic from './assets/lemonaid.png'

function Card(){
    return(
        <div className="card">
            <img className='card-img' src= {profilePic}alt="profile picture"></img>
            <h2 className='card-title'>Lemmonaid</h2>
            <p className='card-text'>"Lemonnaid" is a pun that mashes together "lemon" and "aid," like the kind of help you might lend someone. It is also a word play of lemonade.
            </p>
        </div>
    );

}

export default Card