// click event = An interaction when a user clicks on a specific elemetnt. We can respond to clicks by passing a callback to the onClick event handler.

function Button(){

    let count = 0;
    const handleClick =(name)=> {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times!!!`)
        }
        else{
            console.log(`${name} stop clicking me!!`)
        }
    }


    return(
        <button className="button" onClick={()=> handleClick("Binda")}>
            Click Me !!
        </button>
    );
}

export default Button