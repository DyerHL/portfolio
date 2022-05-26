import React from 'react';
import email from '../assets/email.png';
import linkedin from '../assets/linkedin.png';
import resume from '../assets/resume.png';
import phone from '../assets/phone.png';
import Halie from '../assets/Halie.pdf';

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <div className='fill-center'>
        <div className="contact-fill">Contact</div>
      </div>
      <div className="contact-cards-container">
        <div className="card-div">
          <card className="contact-card">
            <div className="contact-img">
              <img
                className="card-logo"
                src={email}
                alt="email"
                style={{ width: '100px' }}
              />
            </div>
            <div className="contact-text">
              <div>Email:</div>
              <div>Halie.L.Dyer@gmail.com</div>
            </div>
          </card>
        </div>
        <div className="card-div">
          <card className="contact-card">
            <div className="contact-img">
              <img
                className="card-logo"
                src={linkedin}
                alt="linkedin"
                style={{ width: '100px' }}
              />
            </div>
            <div className="contact-text">
              <a
                className="link-text"
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/hldyer/"
              >Linkedin
              </a>
              <br />
            </div>
          </card>
        </div>
        <div className="card-div">
          <card className="contact-card">
            <div className="contact-img">
              <img
                className="card-logo"
                src={resume}
                alt="resume"
                style={{ width: '100px' }}
              />
            </div>
            <div className="contact-text">
              <a
                className="link-text"
                rel="noreferrer"
                target="_blank"
                href={Halie}
              >Resume
              </a>
              <br />
            </div>
          </card>
        </div>
        <div className="card-div">
          <card className="contact-card">
            <div className="contact-img">
              <img
                className="card-logo"
                src={phone}
                alt="phone"
                style={{ width: '100px' }}
              />
            </div>
            <div className="contact-text">
              <div>Phone:</div>
              <div>423-361-0665</div>
            </div>
          </card>
        </div>
      </div>
    </div>
  );
}
