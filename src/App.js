import React, { Component } from 'react';
import './App.css';
import jaipur1 from '../src/pics/jaipur1.jpg'
import toronto from '../src/pics/toronto.jpg';
import uoft1 from '../src/pics/uoft1.jpg';
import work1 from '../src/pics/work1.jpg';
import industry1 from '../src/pics/industry1.jpg';
import hike from '../src/pics/hike.jpg'
import music from '../src/pics/music.jpg'
import hacks from '../src/pics/hacks.jpg'
import food1 from '../src/pics/food1.jpg'
import vision from '../src/pics/vision.jpg'
import rooftop from '../src/pics/rooftop.jpg'
import night from '../src/pics/night.jpg'
import linkedin from '../src/pics/linkedin-in-brands.svg'
import twitter from '../src/pics/twitter-brands.svg'
import mail from '../src/pics/envelope-solid.svg'

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="header">
          
          <div className="intro">
            
            <h1>Hi! I'm <a>&nbsp;</a> <a className="name">Arpit.</a></h1>
            
            <div class="glitch" data-text="Full-Stack Developer.">Full-Stack Developer.</div>
            
          </div>
        </div>
        <div className="contact">
          <div className="email">
          <h2>me @ arpitdalmia.com</h2>
          </div>
          <div className="resume">
            <br/><br/><br/><br/>
		        <a href="">RESUME</a>
          </div>
        </div>

        <div className="quote">
          <a>"A human being should be able to change a diaper,
            plan an invasion, butcher a hog, conn a ship, design a building,
            write a sonnet, balance accounts, build a wall, set a bone, comfort the dying,
            take orders, give orders, cooperate, act alone, solve equations, analyze a new problem,
            pitch manure, program a computer, cook a tasty meal, fight efficiently, die gallantly. 
            Specialization is for insects." — Robert A. Heinlein </a>
        </div>

        <div className="img_row1">
          
            <div className="img11">
              <div className="container">
                <img src={jaipur1} alt="jaipur" height="350" width="420"></img>
                <div className="caption">I lived in Jaipur, India</div>
              </div>
            </div>
            <div className="img12">
              <div className="container">
                <img src={toronto} alt="toronto_skyline" height="350" width="420"></img>
                <div className="caption">I moved to Toronto</div>
              </div>
            </div>
            <div className="img13">
              <div className="container">
                <img src={uoft1} alt="uoft" height="350" width="420"></img>
                <div className="caption">I now live in the moment <br></br> (just kidding) I'm at UToronto</div>
              </div>
            </div>
          
        </div>
        <div className="img_row2">
          
            <div className="img21">
              <div className="container">
                <img src={work1} alt="toronto_islands" height="350" width="420"></img>
                <div className="caption">
                  I was a software engineer at Moneris <br/> I'm not anymore but they're still cool
                </div>
              </div>
            </div>
            <div className="img22">
              <div className="container">
                <img src={industry1} alt="tehri_dam" height="350" width="420"></img>
                <div className="caption">
                  I'm working with some awesome people to disrupt the health-tech industry
                </div>
              </div>
            </div>
            <div className="img23">
              <div className="container">
                <img src={music} alt="guitar" height="350" width="420"></img>
                <div className="caption">
                  I play guitar <br/> My roommates listen to some amazing music, even if they dont want to
                </div>
              </div>
            </div>
          
        </div>
        <div className="img_row3">
          
            <div className="img31">
              <div className="container">
                <img src={hike} alt="banff" height="350" width="420"></img>
                <div className="caption">
                  I enjoy camping and hiking <br/> And I'm a little into adventure sports
                </div>
              </div>
            </div>
            <div className="img32">
              <div className="container">
                <img src={hacks} alt="light_imaging" height="350" width="420"></img>
                <div className="caption">
                  I like reading non-fiction books and going to hackathons
                </div>
              </div>
            </div>
            <div className="img33">
              <div className="container">
                <img src={food1} alt="food" height="350" width="420"></img>
                <div className="caption">I spend all my money on food and IPA's</div>
              </div>
            </div>
          
        </div>

        <div className="img_row4">
          
            <div className="img41">
              <div className="container">
                <img src={rooftop} alt="rooftop" height="350" width="420"></img>
                <div className="caption">
                  I used to have a man bun <br/> And rooftops are a &nbsp; great spot always
                </div>
              </div>
            </div>
            <div className="img42">
              <div className="container">
                <img src={night} alt="city_of_th_sun" height="350" width="420"></img>
                <div className="caption">
                  Just a night to remember <br/> Ask me about it
                </div>
              </div>
            </div>
            <div className="img43">
              <div className="container">
                <img src={vision} alt="vision" height="350" width="420"></img>
                <div className="caption">
                  I care deeply about climate change and I'm ambitious
                </div>
              </div>
            </div>
          
        </div>

        <div className="footer">
          <h2>Photos by and website by me. I hope you enjoyed getting to know me.</h2>
          <a href="https://www.linkedin.com/in/arpitdalmia/"><img src={linkedin} alt="fab_fa_linkedin" height="48" width="48"></img></a>
          <a href="https://twitter.com/armpitdalmia"><img src={twitter} alt="fab_fa_twitter" height="48" width="48"></img></a>
          <a href="mailto:me@arpitdalmia.com"><img src={mail} alt="fas_fa_envelope" height="48" width="48"></img></a>
        </div>




        


      </div>



      
    );
  }
}

export default App;
