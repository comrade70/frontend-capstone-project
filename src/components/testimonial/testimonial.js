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
              <h5>AdeRopo</h5>
            </div>
            <p>Review Text</p>
          </div>

          <div className="customer">
            <p>Rating</p>
            <div className="testimonial-img">
              <img src="" alt="" />
              <h5>AdeRopo</h5>
            </div>
            <p>Review Text</p>
          </div>

          <div className="customer">
            <p>Rating</p>
            <div className="testimonial-img">
              <img src="" alt="" />
              <h5>AdeRopo</h5>
            </div>
            <p>Review Text</p>
          </div>

          <div className="customer">
            <p>Rating</p>
            <div className="testimonial-img">
              <img src="" alt="" />
              <h5>AdeRopo</h5>
            </div>
            <p>Review Text</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;