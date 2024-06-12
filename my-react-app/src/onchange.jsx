// on change = event handler used primarily with form elements ex. <input>, <textarea>, <select>, <radio> Triggers a function every time the value of the input changes

import React, {useState} from 'react'

const MyComponent = () => {

const [name, setName] = useState("Guest");
const [quantity , setQuantity] =useState(1);
const [comment, setComment] = useState("");
const [payment, setPayment] = useState("");
const [shipping, setShipping] = useState("");

function handleNameChange(event){
    setName(event.target.value);
}

function handleQuantityChange(event){
    setQuantity(event.target.value);
}

function handleCommentChange(event){
    setComment(event.target.value);
}
function handlePaymentChange(event){
    setPayment(event.target.value);
}
function handleShippingChange(event){
    setShipping(event.target.value);
}

  return (
    <div>
        <input value = {name} onChange={handleNameChange}/>
        <p>Name: {name}</p>

        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>

        <textarea value={comment} onChange={handleCommentChange} placeholder='Enter delivery instruction'/>
        <p>Comment:{comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option</option>
        <option value="visa">Visa</option>
        <option value="paypal">PayPal</option>
        </select>
        <p>Payment:{payment}</p>

        <label>
            <input type='radio' value='pickup' checked={shipping ==='pickup'} onChange={handleShippingChange}/>
            Pick up</label>
        <label>
        <input type='radio' value='deliver' checked={shipping ==='deliver'} onChange={handleShippingChange}/>
            Delivery</label>
            <p>Shipping Method: {shipping}</p>
    </div>
  )
}

export default MyComponent