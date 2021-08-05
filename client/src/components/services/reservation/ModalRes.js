import React, {useState,useEffect} from 'react'
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux'
import {postReservation} from "../../../js/actions/reservation"
function ModalRes({card}) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.userReducer.user)
    const [show, setShow] = useState(false);
  
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const [dateRes, setDateRes] = useState("");
const [num, setNum] = useState(0);
const [titleCard, setTitleCard] = useState(card.agentName);
const [imgCard,setImgCard] = useState(card.cardImg);
const [total, setTotal] = useState(0)
const [userName, setUserName] = useState(user?user.name:"")
const [userLastName, setUserLastName] = useState(user?user.lastName:'')
const [imageUrl, setImageUrl] = useState(user?user.imageUrl:"")
const [status, setStatus] = useState("")





const Multi=(a,b)=>{
  return a*b
  }





    return (
        <div>

 <span style={{marginLeft:162,fontSize:"bolder" ,marginTop:-13,height:"40px",border:"none",marginTop:2}}  onClick={handleShow}>
          <font style={{fontSize:"30",color:'#f37474'}}>Réserver</font>
         
              </span>   {/* <Link to="SignIn">  <Button style={{marginLeft:133 ,marginTop:-13}} size="small" color="primary" variant="light" >
          Réserver </Button> </Link> */} 
 
       <Modal show={show} onHide={handleClose}
          size="lg">
         <Modal.Header closeButton>
           <Modal.Title>{card.agentName}</Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <div style={{display:"flex", width:600, height:253, marginTop:20}}>
           <div style={{marginTop:-25}}>
           <img src={card.cardImg} style={{width:460, height:296 }}/>
           </div>
      <div style={{marginLeft:20,marginTop:-22}}>
         <h6>{card.details[0]}</h6>
         <h6>{card.details[1]}</h6>
         <h6>Date:<input type="date" name="date"  onChange={(e)=>setDateRes(e.target.value)}></input></h6>
         <h6>Qte</h6>
           <input type="text" name="number" style={{width:90}}   onChange={(e)=>{setNum(e.target.value);setTotal(Multi(e.target.value,card.prix) )}} />
            
             {console.log(typeof(num),typeof(dateRes))}
<h6>Total:</h6>
<input type="text" name="total" style={{width:90}}  value={Multi(num,card.prix)}  />
</div>



           </div>
         </Modal.Body>
         <Modal.Footer>
     
          
         <Link to={{pathname:"/basket",Props:{imgCard:card.imgCard,agentName:card.agentName,prix:card.prix,dateRes:dateRes, num:num,status:status}}}>  
         <Button variant="light" style={{width:120,fontWeight:"bold", height:36,backgroundColor:"rgb(222 113 113)", padding:".375rem .75re",fontSize:"1rem",lineHeight:"1.5",borderRadius:".25rem", border:"none",color:"white"}} onClick={()=>dispatch(postReservation({imgCard,titleCard,dateRes,num,total,userName,userLastName,imageUrl}))} > 
             Réserver
           </Button></Link>
         </Modal.Footer>
       </Modal>
       </div>
   );
 }
 

      
  
export default ModalRes
