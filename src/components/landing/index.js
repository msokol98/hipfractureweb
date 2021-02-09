import React from 'react';
import 'bulma/css/bulma.css'
import 'bulma-divider/dist/css/bulma-divider.min.css';

const Landing = () => (
    <>
      <section className='hero is-medium blue'>
        <div className='hero-body'>
          <div className='container'>

            <div className='hero-inner'>

              <div>
                <h2 className='title has-text-white'>Quantifi Health</h2>
                <h6 className='subtitle has-text-white'>
                  Let's reduce the incidence of hip fractures.
                </h6>
                <button onClick={() => window.location = "/#"} className="button with-space-on-right">Learn More</button>
                <button onClick={() => window.location = "/#"} className="button">Sign Up</button>
              </div>
                <br />
                <div className='banner-image'>
                    <img src='doc.png' alt='logo' width='67%'/>
                </div>
            </div>

          </div>
        </div>          
      </section>

      <section className='section has-background-light'>
        <div className='container'>
          <div className='content'>

            <div className='columns is-variable is-7'>

              <div className='column'>
              <div className='notification has-background-white bordered'>
                  <p className='image is-96x96 landing-icon-96'>
                    <img src='honesty.png' alt='person' />
                  </p>                 
                  <h3 className='title has-text-weight-light'>Game Changing</h3>
                  <h5 className='subtitle has-text-grey has-text-weight-light'>Potential to save lives.</h5>
                  <p>
                      Our software identifies patients at high risk for hip fracture within the next year with 70% precision.
                      We can forge a new reality where doctors prevent hip fracture before it happens.
                  </p>
                </div>
              </div>

              <div className='column'>
                <div className='notification has-background-white bordered'>

                  <p className='image is-96x96 landing-icon-96'>
                    <img src='money.png' alt='person' />
                  </p>              
                  <h3 className='title has-text-weight-light'>Cost Saving</h3>
                  <h5 className='subtitle has-text-grey has-text-weight-light'>We keep wallets happy.</h5>
                  <p>
                    After surgery, the average annual cost of hip fractures is ~$50,000/patient to health care systems.
                    By predicting hip fracture risk, we can prevent the need for expensive surgery.
                  </p>
                </div>
              </div>

              <div className='column'>
              <div className='notification has-background-white bordered'>
                  <p className='image is-96x96 landing-icon-96'>
                    <img src='clock.webp' alt='person'/>
                  </p>  
                  <h3 className='title has-text-weight-light'>Easy to Use</h3>
                  <h5 className='subtitle has-text-grey has-text-weight-light'>Getting answers is quick.</h5>
                  <p>
                      Our intuitive web design allows you to quickly upload medical insurance claims in CSV format. 
                      You get an instant output regarding the predicted risk of hip fracture.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>          
      </section>
      <section className='section has-background-white'>
        <div className='container'>
          <div className='content'>
            <h2 className='title has-text-weight-light'>Clients are saying...</h2>

            <article className='media testimonial'>
              <figure className='media-left testimonial-person-icon' >
                <p className='image is-64x64'>
                  <img src='person.png' alt='person' />
                </p>
                <div>Dr. Smith</div>
              </figure>
              <div className='media-content'>
                <blockquote>
                  Each year over 300,000 Americans 65 and older are hospitalized due to hip fracture. 
                  27% of patients over 65 only live one more year after getting a hip fracture. 
                  After surgery, the average annual cost of hip fractures is ~$50,000/patient to health care systems.
                  So having a website that can predict the risk of hip fracture is game changing.
                </blockquote>
              </div>
            </article>

            <article className='media testimonial'>
              <figure className='media-left testimonial-person-icon'>
                <p className='image is-64x64'>
                  <img src='person2.png' alt='person2' />
                </p>
                <div>Dr. Miller</div>
              </figure>
              <div className='media-content'>
                <blockquote>
                   This website is really easy for clients to use. We can simply input medical insurance claims data in CSV format.
                   Then, the output tells us the risk of hip fracture for the given input. This software is a real difference maker 
                   when it comes to hip fracture risk.
                </blockquote>
              </div>
            </article>

          </div>
        </div>
      </section>

      <section className='section blue'>
        <div className='container'>
          <div className='content has-text-centered'>

            <div className='landing-page-section-row-4-wrapper' >

              <div className='landing-page-section-row-4'>
                <img src='health_icon.png' alt='nc' width='200' className='nc-image'/>

                <div>
                  <h3 className='title has-text-weight-normal has-text-white landing-page-section-row-4-label'>
                    Target high risk patients and reduce the incidence of hip fractures.
                  </h3>
                  <h3 className='subtitle has-text-weight-normal has-text-white'>Let's get started today.</h3>
                </div>
              </div>

              <div className='is-divider' data-content='READY?'></div>

              <button className='button is-dark' onClick={() => window.location = "/register"}>Make an account</button>
            </div>


          </div>
        </div>
      </section>

      <footer className='footer'>
        <div className='container'>
          <div className='content'>
            <div className='columns'>
              <div className='column'>
                <h6 className='subtitle has-text-grey'>Corporate HQ</h6>

                <div>511A Pinebluff Trail</div>
                <div>Chapel Hill, NC</div>
              </div>

              <div className='column'>
                <h6 className='subtitle has-text-grey'>Contact</h6>

                <div>919-791-5823</div>      
                <div>contact@email.com</div>
              </div>

              <div className='column'>
                <h6 className='subtitle has-text-grey'>About</h6>

                <a href="#">Overview</a><br />
                <a href="#">Leadership</a><br />
                <a href="#">News</a><br />
                <a href="#">History</a>
              </div>

              <div className='column'>
                <h6 className='subtitle has-text-grey'>Account</h6>

                <a href='/login'>Sign In</a>
                <br></br>
                <a href='/register'>Sign Up</a>
              </div>
            </div>
          </div>

          <div className='is-divider' data-content=''></div>

          <div style={{textAlign: 'left'}}>
            <div>Prototype website whose purpose is to predict risk of hip fracture</div>
            <div>Currently in development as a COMP 523 Project at UNC Chapel Hill</div>
            <div>Using Python, React, MySQL, AWS</div>
          </div>

        </div>
      </footer>
    </>
);

export default Landing;