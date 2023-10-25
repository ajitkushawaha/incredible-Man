"use strict";

productScroll();

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
//   let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {

    let position = 0; 

    prev[i].addEventListener("click", function() {
      
      if (position > 0) {
        
        position -= 1;
        translateX(position);
      }
    });

    next[i].addEventListener("click", function() {
      if (position >= 0 && position < hiddenItems()) {
        
        position += 1;
        translateX(position); 
      }
    });
  }

  function hiddenItems() {
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 370;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -370 + "px";
}

function getCount(parent, getChildrensChildren) {
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}


// SLIDER 2

// productSlider()
// function productSlider() {
//     let sellerSlider = document.getElementById("seller_sliders");
//     let sellerPrev = document.getElementsByClassName("seller__prevbtn");
//     let sellerNext = document.getElementsByClassName("seller__nextbtn");
//     let sellerSlide = document.getElementById("seller_slides");
//     let item = document.getElementById("seller_slides");
  
//     for (let i = 0; i < sellerNext.length; i++) { // Corrected from 'next.length'
  
//       let position = 0;
//       sellerPrev[i].addEventListener("click", function() { // Corrected from 'prev[i]'
//         if (position > 0) {
//           position -= 1;
//           translateX(position);
//         }
//       });
  
//       sellerNext[i].addEventListener("click", function() { // Corrected from 'next[i]'
//         if (position >= 0 && position < hiddenItems()) {
//           position += 1;
//           translateX(position);
//         }
//       });
//     }
  
//     function hiddenItems() {
//       let items = getCount(item, false);
//       let visibleItems = sellerSlider.clientWidth / 300;
//       return items - Math.ceil(visibleItems);
//     }
  
//     function translateX(position) {
//       sellerSlide.style.left = position * -300 + "px"; // Corrected from 'slide.style.left'
//     }
  
//     function getCount(parent, getChildrensChildren) {
//       let relevantChildren = 0;
//       let children = parent.childNodes.length;
//       for (let i = 0; i < children; i++) {
//         if (parent.childNodes[i].nodeType !== 3) {
//           if (getChildrensChildren) {
//             relevantChildren += getCount(parent.childNodes[i], true);
//           }
//           relevantChildren++;
//         }
//       }
//       return relevantChildren;
//     }
//   }
  


// third slider

imageScroll()

function imageScroll() {
    let incSlider = document.getElementById("inc-slider");
    let incNext = document.getElementsByClassName("inc_next");
    let incPrev = document.getElementsByClassName("inc_prev");
    let incSlide = document.getElementById("inc-slide"); // Changed from incSslide
    let incItem = document.getElementById("inc-slide");
  
    for (let i = 0; i < incNext.length; i++) { // Changed from next.length
      let position = 0;
  
      incPrev[i].addEventListener("click", function() {
        if (position > 0) {
          position -= 1;
          translateX(position);
        }
      });
  
      incNext[i].addEventListener("click", function() {
        if (position >= 0 && position < hiddenItems()) {
          position += 1;
          translateX(position);
        }
      });
    }
  
    function hiddenItems() {
      let items = getCount(incItem, false); // Changed from item
      let visibleItems = incSlider.offsetWidth / 215;
      return items - Math.ceil(visibleItems);
    }
  
    function translateX(position) {
      incSlide.style.left = position * -215 + "px"; // Changed from slide
    }
  
    function getCount(parent, getChildrensChildren) {
      let relevantChildren = 0;
      let children = parent.childNodes.length;
      for (let i = 0; i < children; i++) {
        if (parent.childNodes[i].nodeType != 3) {
          if (getChildrensChildren)
            relevantChildren += getCount(parent.childNodes[i], true);
          relevantChildren++;
        }
      }
      return relevantChildren;
    }
  }
  