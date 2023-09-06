import React from "react";
import img from "../assets/img";

export default function Main() {
  return (
    <section className="main2">
      <article className="art-1-main">
        <div className="photo-1">
          <h2 className="title-header">Ableton</h2>

        </div>
        <div className="cont-text1-main">
          <p className="main-text-1">
            We make <span className="text-color-main">Live</span>, <span className="text-color-main">Push</span> and <span className="text-color-main">Link</span> — unique software and hardware for music
            creation and performance. With these products, our community of
            users creates amazing things.
          </p>
          <p className="main-text-2">
            Ableton was founded in 1999 and released the first version of Live
            in 2001. Our products are used by a community of dedicated
            musicians, sound designers, and artists from across the world.
          </p>
        </div>
      </article>
      <article className="art2-main">


        <div className="cont-img-main">
          <div className="cont-color"></div>
          <img  className= "img1-main" src={img.photo1} alt="" />
          <img className= "img2-main"  src={img.photo2} alt="" />
        </div>
      

        <div className="cont-text1-main">
            <p className="main-text-1">
                Making music isn’t easy. 
                It takes time, effort, and learning. 
                But when you’re in the flow, it’s incredibly rewarding.
            </p>
            <p className="main-text-2">
                We feel the same way about making Ableton products. 
                The driving force behind Ableton is our passion for what we make, 
                and the people we make it for.
            </p>
        </div>
      </article>
      <article className="art-video">
            <video controls>
              <source src={img.video1}/>
            </video>
        <div className="cont-text1-main">
              <p className="main-text-1">
                  We are more than 350 people from 30 different countries divided 
                  between our headquarters in Berlin and our offices in Los Angeles and Tokyo.
               
             </p>
             <p className="main-text-2">
                  Most of us are active musicians, producers, and DJs, 
                  and many of us use Live and Push every day. 
                  We come from a wide range of cultural and professional backgrounds.
                  Some of us have PhDs, some are self-taught, and most of us are somewhere in between.
                  What connects us is the shared belief that each of us has the skills and knowledge 
                  to contribute to something big:
                  helping to shape the future of music culture.
             </p>

        </div>
      </article>
      <article className="art-3-main">
          <div className="cont-color3">
          </div>
        <div className="main-contImg-3">
          <div className="cont-img-art3">
          <div className="img-art3 photo3">
           
          </div>
          <div className="img-art3 photo4">
            
          </div>

          </div>
          <div className="img-photo5">
            
          </div>
        </div>
        <div className="cont-text1-main">
          <p className="main-text-1">
            We believe it takes focus to create truly outstanding instruments. 
            We only work on a few products and we strive to make them great.
          </p>
          <p className="main-text-2">
            Rather than having a one-size-fits-all process, we try to give our people what they need to work their magic and grow.
            We’ve learned that achieving the best results comes from building teams that are richly diverse,
            and thus able to explore problems from a wider set of perspectives. 
            We don’t always agree with each other, but opinion and debate are valued and openly encouraged.
          </p>
        </div>
      </article>
      <article className="art-4-main">
        <div className="img-photo6">

        </div>
        <div className="cont-text1-main">
          <p className="main-text-1">
            We’re passionate about what we do, but we’re 
            equally passionate about improving who we are.
          </p>
          <p className="main-text-2">
            We work hard to foster an environment where people can grow both personally 
            and professionally, and we strive to create a wealth of opportunities to learn 
            from and with each other.
          </p>
          <p className="main-text-2">
            Alongside an internal training program, employees are actively supported in acquiring 
            new knowledge and skills, and coached on applying these in their daily work. 
            In addition, staff-organized development and music salons are a chance to discuss 
            new technologies, 
            production techniques and best practices.
          </p>
        </div>
      </article>
      <article className="art5-main">
        <div className="cont-img-art5">
          <div className="img-art5 photo8">

          </div>
          <div className="img-art5 photo7">

          </div>
        </div>
        <div className="cont-text1-main">
          <p className="main-text-1">
            We want our employees to love it here.
             Since we’re looking for exceptional talent from around the world, 
            we will do everything we can to make your transition as easy as possible.
          </p>
          <p className="main-text-2">
          If you're joining us in Berlin, we'll help with relocation and paperwork.
           We’ll even provide you with free German or English lessons. 
           Plus, working in Germany means you can expect comprehensive health insurance 
           for you and your family, as well as generous maternity and paternity leave. 
           Office hours are flexible, but it’s not all work; we have several company and team 
          outings throughout the year as well as a variety of fun, informal small-group activities.
          </p>
        </div>
      </article>
    
      <article className="art-6">

        <div className="cont-main-art6">
          <div className="img-9">
            

          </div>
          <div className="cont-text-art6">
            <p>
              We’re really proud of the work we’ve done so far. 
              But there’s so much more to come. 
              If you’d like to be a part of it, please join us.
            </p>
            <a href="">See latest jobs <i className='bx bx-chevron-right'></i></a>
          </div>
        </div>
      </article>
    </section>
  );
}
