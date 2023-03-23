import React from "react"
import userOne from '../../assets/Mario and Adrian A.jpg'
import '../../App.css';
import './testimonial.css'

function Testimonial() {
  return (
    <div className="testimonial">
      <div className="container">
        <h2>Testimonials</h2>
        <div className="testimonial-grid">
          <div className="customer">
            <p>Rating</p>
            <div className="testimonial-img">
              <img src={userOne} alt="" />
              <h5>Silvannus</h5>
            </div>
            <p>The ordering and delivery processes are smooth</p>
          </div>

          <div className="customer">
            <p>Rating</p>
            <div className="testimonial-img">
              <img src="" alt="" />
              <h5>Karen</h5>
            </div>
            <p>Nice products!</p>
          </div>

          <div className="customer">
            <p>Rating</p>
            <div className="testimonial-img">
              <img src="" alt="" />
              <h5>Johanne</h5>
            </div>
            <p>My children have made the greek salad a staple food</p>
          </div>

          <div className="customer">
            <p>Rating</p>
            <div className="testimonial-img">
              <img src="" alt="" />
              <h5>Smith</h5>
            </div>
            <p>I enjoy LittLemon's meals</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;