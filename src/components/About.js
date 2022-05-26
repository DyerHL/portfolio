import React from 'react';
import flowers from '../assets/flowers.png'

export default function About() {
  return (
    <div className="about" id="about">
      <br />
      <div className='fill-center'>
          <div className="about-fill">About</div>
      </div>
      <div className="body-about">
        <p> Hello! My name is Halie, thanks for taking the time to look through my portfolio. I had been considering pursing a career in Web Development since 2019. A few bumps in the road and a global pandemic later, I decided to take the plunge and begin the pursuit in earnest in 2021. I started the part-time Web Development bootcamp with Nashville Software School in July of 2021 and continue through the curriculum, pushing myself every day.
        </p>
        <img src={flowers} className="flowers-photo" alt='profile'/>
        <br />
        <p> I am a Tennessee native, having grown up in Bristol, on the border of Tennesee and Virginia. I studied child psychology in college and moved to the Nashville area upon graduation in search of job opportunites. After a few years working for the state I decided I wanted something more. I had various friends and family working in the tech industry that inspired me to look into web development. I am so happy to be pursing a career - instead of just a job. I find myself enjoying the work more and more than I expected and I am so excited for the future.
        </p>
        <br />
        <p> I look forward to stepping into the industry as a woman who previously believed that would never have been an option. And I hope to inspire others that might feel the same way.
        </p>
      </div>
    </div>
  );
}
