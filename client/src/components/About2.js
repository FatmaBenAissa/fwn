import React from 'react'
import './about2.css'


function About2() {
    return (
      <div>
        <div style={{display:"flex" ,marginTop:93,marginLeft:20}}>
        <div >
          <img  src="https://cdn.shopify.com/s/files/1/0040/9206/7904/files/J_J-15_e4f80820-258f-483a-9200-dff2c102a7bb_grande.jpg?v=1554873527"/>
        </div>
        <div style={{marginTop:93,width:587,marginLeft:33}}>
         <h1 style={{fontFamily: "Dancing Script, cursive",fontSize: 31,textShadow:"rgb(51 51 51) 1px 1px 1px",color:"rgb(154, 206, 203)"}} > Qui sommes nous? </h1>
<p style={{textAlign:"center",marginTop:20}}><span style={{color:"#de7171",textShadow:"rgb(51 51 51) 1px 1px 1px",fontSize:"Bold"}}>Bel Event</span> est  est le premier guide de planification des évenements aujourd'hui à notre région Gabes. Il permet aux web visiteurs à explorer des centaines de fournisseurs de services des évenements dans leur marché local et de les contacter directement et efficacement d'une façon simple et pratique pour obtenir les meilleurs prix et offres.</p>
        </div>
        </div>
        <div className="bodyContact">
        <div className="container">
        <div className="section-title">
          <h1 className="h111">Our Team Page</h1>
        </div>
        <div className="row">
          <div className="column">
            <div className="team">
              <div className="team-img">
                <img className="imgContact" src="data:image/jpeg;base64,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" alt="Team Image" />
              </div>
              <div className="team-content">
                <h2 className="h111">Steven</h2>
                <h3 className="h111">CEO &amp; Founder</h3>
                <p className="ppp">Some text goes here that describes about team members</p>
                <h4 className="h111">abc@gmail.com</h4>
              </div>
              <div className="team-social">
                <a className="aaa" href="#" className="social-tw"> <i className="fab fa-twitter" /></a>
                <a className="aaa" href="#" className="social-fb"> <i className="fab fa-facebook-f" /></a>
                <a className="aaa" href="#" className="social-li"> <i className="fab fa-linkedin-in" /></a>
                <a className="aaa" href="#" className="social-in"> <i className="fab fa-instagram" /></a>
                <a className="aaa" href="#" className="social-yt"> <i className="fab fa-youtube" /></a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="team">
              <div className="team-img">
                <img className="imgContact"  src="data:image/jpeg;base64,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" alt="Team Image" />
              </div>
              <div className="team-content">
                <h2 className="h111">Mayra</h2>
                <h3 className="h111">Art Director</h3>
                <p>Some text goes here that describes about team members</p>
                <h4 className="h111">abc@gmail.com</h4>
              </div>
              <div className="team-social">
                <a className="aaa" href="#" className="social-tw"> <i className="fab fa-twitter" /></a>
                <a className="aaa" href="#" className="social-fb"> <i className="fab fa-facebook-f" /></a>
                <a className="aaa" href="#" className="social-li"> <i className="fab fa-linkedin-in" /></a>
                <a className="aaa" href="#" className="social-in"> <i className="fab fa-instagram" /></a>
                <a className="aaa" href="#" className="social-yt"> <i className="fab fa-youtube" /></a>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="team">
              <div className="team-img">
                <img className="imgContact"  src="data:image/jpeg;base64,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" alt="Team Image" />
              </div>
              <div className="team-content">
                <h2 className="h111">John</h2>
                <h3 className="h111">Developer</h3>
                <p className="ppp">Some text goes here that describes about team members</p>
                <h4 className="h111">abc@gmail.com</h4>
              </div>
              <div className="team-social">
                <a className="aaa" href="#" className="social-tw"> <i className="fab fa-twitter" /></a>
                <a className="aaa" href="#" className="social-fb"> <i className="fab fa-facebook-f" /></a>
                <a className="aaa" href="#" className="social-li"> <i className="fab fa-linkedin-in" /></a>
                <a className="aaa" href="#" className="social-in"> <i className="fab fa-instagram" /></a>
                <a className="aaa" href="#" className="social-yt"> <i className="fab fa-youtube" /></a>
              </div>
            </div>
          </div>
      
        </div>
      </div>
      </div>
      </div>
    )
}

export default About2
