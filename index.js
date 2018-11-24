/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "up822718";
    // e.g. return "UP654321";
}

function fn() {
    return "William";
}

function sn() {
    return "Maber";
}

// function showMessage(el,url)
// {
//   const response =  fetch(url);
//   const text = await response.text();
//   const dt = document.getElementById(el);
//   dt.textContent = url;
// }
async function showMessage(el,url)
{
    const response =  await  fetch(url);
    const text =   await response.text();
    el.textContent = text;
 }

 async function showList(el,url)
 {
     const response =  await  fetch(url);
   	 const data = await response.json();
     for (const i of data)
     {
       const li = document.createElement("li");
       li.textContent = i;
       el.appendChild(li);
     }
 }

 async function startShowingMessage(el,url)
 {
   window.setInterval(showMessage,1000,el,url)
 }
async function handleError(el,url)
 {
   let text =""
     const response =  await  fetch(url);
     if (response.ok){
        text =   await response.text();
     }
     else{
       text = "OH DEAR"
     }
     el.textContent = text;
 }
async function drawBox(elt,url)
{
  console.log(url);
  window.setInterval(async function (elt,url) {
  const response =  await  fetch(url);
  const data = await response.json();
  var ctx = elt.getContext('2d');
  ctx.fillRect(data.x, data.y, data.x+10, data.y+10);
  },1000,elt,url)
}
