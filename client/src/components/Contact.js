import React, {useState,useEffect} from 'react'
import { Button, Modal } from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {postContact} from "../js/actions/contact"
import './contact.css'
import Footer from "./Footer"
 

function Contact() {

  const dispatch = useDispatch()
  const contact = useSelector(state => state.contactReducer.contact)

  const weekday=["Sunday","Monday","Thuesday","Wednesday","Thursday","Friday","Saturday"]
  let day=weekday[new Date().getDay()]
    let dt=new Date().toLocaleDateString();
    let time=new Date().toLocaleTimeString();
  
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [email, setEmail] = useState("");
const [phoneNumber, setPhoneNumber] = useState("");
const [message, setMessage] = useState("");
const [date, setDate] = useState(  `${day} :${dt}`)
    return (
             <div className="container-fluid px-1 py-5 mx-auto" style={{marginTop:100, backgroundImage: "url('https://cds-event.fr/wp-content/uploads/2019/01/2210-1024x740.jpg')", backgroundRepeat: "no-repeat", marginLeft:43, backgroundSize: "100% 100%"}}>
        <div className="row d-flex justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div className="card" style={{width:691,marginLeft:-40,marginTop:20}}>
              <h5 className="text-center mb-4">Nous contacter</h5>
              <form className="form-card" onsubmit="event.preventDefault()">
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Nom:<span className="text-danger"> *</span></label> <input type="text" id="fname" name="fname" placeholder="Entrer votre nom" onblur="validate(1)"  onChange={(e)=>setFirstName(e.target.value)} /> </div>
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Prénom<span className="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Entrer votre prénom" onblur="validate(2)" onChange={(e)=>setLastName(e.target.value)} /> </div>
                </div>
                <div className="row justify-content-between text-left">
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Adresse mail:<span className="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="Entrer votre addresse mail" onblur="validate(3)" onChange={(e)=>setEmail(e.target.value)} /> </div>
                  <div className="form-group col-sm-6 flex-column d-flex"> <label className="form-control-label px-3">Numéro de téléphone<span className="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="Entrer votre numéro de téléphone" onblur="validate(4)" onChange={(e)=>setPhoneNumber(e.target.value)} /> </div>
                </div>
              
                <div className="row justify-content-between text-left">
                  <div className="form-group col-12 flex-column d-flex"> <label className="form-control-label px-3">Message<span className="text-danger"> *</span></label> <textarea cols="20" rows="5" id="ans" name="ans" placeholder="Saisir votre message" onblur="validate(6)" onChange={(e)=>setMessage(e.target.value)} /> </div>
                </div>
                <div className="row justify-content-end">
                  <div className="form-group col-sm-6"> <Link to='/'><button type="submit" className="btn-block btn-primary" onClick={()=>{dispatch(postContact({firstName,lastName,email,phoneNumber,message,date}));alert("Votre message a été envoyé avec succès")}}>Envoyer</button></Link> </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer/> 
      </div>
       
    )
}

export default Contact
