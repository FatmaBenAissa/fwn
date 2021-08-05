import React from 'react'
import "./footer.css"
function Footer() {
    return (
        
    
      <div style={{marginTop:150,height:100}}>
        <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
        {/*---- Include the above in your HEAD tag --------*/}
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossOrigin="anonymous" />
      
        {/*footer starts from here*/}
        <footer className="footer">
          <div className="container bottom_border">
            <div className="row">
              <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                {/*headin5_amrc*/}
                <p className="mb10">5 rue du chÃ¢teau

75001 Paris, France</p>
   
                <p><i className="fa fa-phone" />  +91-9999878398</p>
                <p><i className="fa fa fa-envelope" /> info@belevent.com</p>
              </div>
              <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                {/*headin5_amrc*/}
                <ul className="footer_ul_amrc">
                  <li><a href="http://webenlance.com">Image Rectoucing</a></li>
                  <li><a href="http://webenlance.com">Clipping Path</a></li>
                  <li><a href="http://webenlance.com">Hollow Man Montage</a></li>
                 
                 
                </ul>
                {/*footer_ul_amrc ends here*/}
              </div>
              <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                {/*headin5_amrc*/}
                <ul className="footer_ul_amrc">
                  <li><a href="http://webenlance.com">Remove Background</a></li>
                  <li><a href="http://webenlance.com">Shadows &amp; Mirror Reflection</a></li>
                  <li><a href="http://webenlance.com">Logo Design</a></li>
                
                
                </ul>
                {/*footer_ul_amrc ends here*/}
              </div>
              <div className=" col-sm-4 col-md  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
                {/*headin5_amrc ends here*/}
                <ul className="footer_ul2_amrc">
                  <li><a href="#"><i className="fab fa-twitter fleft padding-right" /> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
                  <li><a href="#"><i className="fab fa-twitter fleft padding-right" /> </a><p>Lorem Ipsum is simply dummy text of the printing...<a href="#">https://www.lipsum.com/</a></p></li>
                
                </ul>
                {/*footer_ul2_amrc ends here*/}
              </div>
            </div>
          </div>
          <div className="container">
            <ul className="foote_bottom_ul_amrc">
              <li><a href="http://webenlance.com">Accueil</a></li>
              <li><a href="http://webenlance.com">A propos</a></li>
              <li><a href="http://webenlance.com">Services</a></li>
              <li><a href="http://webenlance.com">Galerie</a></li>
              
              <li><a href="http://webenlance.com">Contact</a></li>
            </ul>
            {/*foote_bottom_ul_amrc ends here*/}
            <p className="text-center">Copyright @2017 | Designed With by <a href="#">Bel Event</a></p>
            <ul className="social_footer_ul">
              <li><a href="http://webenlance.com"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="http://webenlance.com"><i className="fab fa-twitter" /></a></li>
              <li><a href="http://webenlance.com"><i className="fab fa-linkedin" /></a></li>
              <li><a href="http://webenlance.com"><i className="fab fa-instagram" /></a></li>
            </ul>
            {/*social_footer_ul ends here*/}
          </div>
        </footer>
      </div>
    );
  }


export default Footer
