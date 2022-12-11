import React, { useState } from 'react'
import "./card.scss"
import data from '../data'



const Card = () => {
  const [Lyric, setLyric] = useState("Click to generate a quote");  
  // Ugly JS code Start//
  let i = 0;
  let quoteCounterOrdered = 29;
  let camper = new Audio(require("../assets/audio/ohcampercamper.mp3"));
  let changeContent = () => {
    //random img
  let images = ["img1.png", "img2.png","img3.png","img4.png","img5.png","img6.png","img7.png","img8.png","img9.png","img10.png","img11.png","img12.png","img13.png"];
    let counter = Math.floor(Math.random() * images.length);
    document.getElementById("images").src = require(`../assets/img/${images[counter]}`);
  //output 
    let controlButton = document.getElementById("mySelect");
    if (controlButton.value === "Commands") {
      let quoteCounter = Math.floor(Math.random() * 29);
    document.getElementById("myQuote").textContent = (`"${data[quoteCounter].quote}"`);
    data[quoteCounter].audio();
    } else if (controlButton.value === "Killstreaks ordered") {
      document.getElementById("myQuote").textContent = (`"${data[quoteCounterOrdered].quote}"`);
    data[quoteCounterOrdered].audio();
    quoteCounterOrdered++;
    if (quoteCounterOrdered === (41)) {
      quoteCounterOrdered = 29;
    }
    } else if (controlButton.value === "Killstreaks random") {
      let quoteCounter = Math.floor(Math.random() * ((40) - 29) + 29);
      document.getElementById("myQuote").textContent = (`"${data[quoteCounter].quote}"`);
      data[quoteCounter].audio();
    } else {
      let quoteCounter = 41;
      data[quoteCounter].play(camper);

      setTimeout(() => {
        setLyric(`"${data[42].quote}"`);
      }, 2000);
      setTimeout(() => {
        setLyric(`"${data[43].quote}"`);
      }, 14000);
      setTimeout(() => {
        setLyric(`"${data[44].quote}"`);
      }, 19500);
      setTimeout(() => {
        setLyric(`"${data[45].quote}"`);
      }, 22500);
      //bridge
      setTimeout(() => {
        setLyric(`"${data[46].quote}"`);
      }, 30000);
      setTimeout(() => {
        setLyric(`"${data[47].quote}"`);
      }, 32500);
      //end bridge
      //chorus
      setTimeout(() => {
        setLyric(`"${data[48].quote}"`);
      }, 39000);
      setTimeout(() => {
        setLyric(`"${data[49].quote}"`);
      }, 43000);
      setTimeout(() => {
        setLyric(`"${data[50].quote}"`);
      }, 49000);
      setTimeout(() => {
        setLyric(`"${data[51].quote}"`);
      }, 53500);
      setTimeout(() => {
        setLyric(`"${data[52].quote}"`);
      }, 57000);
      //end chorus
      setTimeout(() => {
        setLyric(`"${data[53].quote}"`);
      }, 60500);
      setTimeout(() => {
        setLyric(`"${data[54].quote}"`);
      }, 63700);
      setTimeout(() => {
        setLyric(`"${data[55].quote}"`);
      }, 70700);//
      setTimeout(() => {
        setLyric(`"${data[56].quote}"`);
      }, 74300);
      
      setTimeout(() => {
        setLyric(`"${data[57].quote}"`);
      }, 81000);
      //bridge
      setTimeout(() => {
        setLyric(`"${data[47].quote}"`); 
      }, 85000);
      setTimeout(() => {
        setLyric(`"${data[48].quote}"`);
      }, 90600);
      //end bridge
      //chorus
      setTimeout(() => {
        setLyric(`"${data[49].quote}"`);
      }, 94400);
      setTimeout(() => {
        setLyric(`"${data[50].quote}"`);
      }, 100400);
      setTimeout(() => {
        setLyric(`"${data[51].quote}"`);
      }, 105000);
      setTimeout(() => {
        setLyric(`"${data[52].quote}"`);
      }, 108600);
      setTimeout(() => {
        setLyric(`"${data[53].quote}"`);
      }, 112600);
      //end chorus
      setTimeout(() => {
        setLyric(`"${data[58].quote}"`);
      }, 116000);
      setTimeout(() => {
        setLyric(`"${data[59].quote}"`);
      }, 125400);
      setTimeout(() => {
        setLyric(`"${data[60].quote}"`);
      }, 135800);
      setTimeout(() => {
        setLyric(`"${data[61].quote}"`);
      }, 144800);
      setTimeout(() => {
        setLyric(`"${data[62].quote}"`);
      }, 146800);
      setTimeout(() => {
        setLyric(`"${data[63].quote}"`);
      }, 149300);
      setTimeout(() => {
        setLyric(`"${data[64].quote}"`);
      }, 152400);
      setTimeout(() => {
        setLyric(`"${data[65].quote}"`);
      }, 156400);
      setTimeout(() => {
        setLyric(`"${data[66].quote}"`);
      }, 159400);
      setTimeout(() => {
        setLyric(`"${data[67].quote}"`);
      }, 163400);
      //chorus *2
      setTimeout(() => {
        setLyric(`"${data[49].quote}"`);
      }, 166400);
      setTimeout(() => {
        setLyric(`"${data[50].quote}"`);
      }, 172400);
      setTimeout(() => {
        setLyric(`"${data[51].quote}"`);
      }, 177400);
      setTimeout(() => {
        setLyric(`"${data[52].quote}"`);
      }, 181000);
      setTimeout(() => {
        setLyric(`"${data[53].quote}"`);
      }, 184000);
      setTimeout(() => {
        setLyric(`"${data[49].quote}"`);
      }, 187000);
      setTimeout(() => {
        setLyric(`"${data[50].quote}"`);
      }, 193000);
      setTimeout(() => {
        setLyric(`"${data[51].quote}"`);
      }, 197000);
      setTimeout(() => {
        setLyric(`"Fin"`);
      }, 204000);
      //end 
      ////
      /* my best attempt at automating this:
      let index  = 42;
      let x = 0;
      let setTime = [2000, 14000...];
      const changeLyrics = () => {
        setInterval(() => {
          setLyric(`"${data[index].quote}"`);
          index++;
          x++
        }, setTime[x])
        couldn't just go through the setTime Array, x value doesn't change.
       }
       changeLyrics();
      */
        const displayPics = () => {
          if (controlButton.value === "ohcampercamper") {
            document.getElementById("images").src = require(`../assets/img/${images[i]}`);
          i++;
    if (i === images.length) {
      i = 0;
    }
          } else if (controlButton.value !== "ohcampercamper") {
            window.location.reload();
          }
        }
        var startTime = new Date().getTime();
var interval = setInterval(function(){
    if(new Date().getTime() - startTime > 205000){
        clearInterval(interval);
        return;
    }
    displayPics();
}, 1250); 
      document.getElementById("myButton2").addEventListener("click", () => {
        clearInterval(interval);
        document.getElementById("images").src = require(`../assets/img/${images[counter]}`);
        data[41].pause(camper);
        setTimeout(() => {
          window.location.reload();
        }, 500);
      })
    }
  }

  // Ugly JS code End//
  return (
    <div>
      <div className='flex-container'>
      <div className='list'>
      <form id='myform'>
      <select id="mySelect">
        <option value="Commands">Commands</option>
        <option value="Killstreaks ordered">Killstreaks ordered</option>
        <option value="Killstreaks random">Killstreaks random</option>
        <option value="ohcampercamper">Oh Camper Camper</option>
      </select>
      </form>
      <input type="button" as="input" id="myButton2" value="Reload"/>
      </div>
      </div>
      <div className='card'>
        <img alt='random' src={require(`../assets/img/img6.png`)} id="images" height="270px" width="270px"></img>
        <form id='form'>
        <label id='myQuote'>{Lyric}</label> <br></br>
        <input type="button" as="input" onClick={changeContent} id="myButton" value="Generate Quote"/>
        </form>
      </div>
      <div className='myLabel'>
      <h3>Created by Yassir Elkhaili</h3>
      <h3 className='margin'>Source code on Github</h3>
      </div>
    </div>
  )
  }
export default Card