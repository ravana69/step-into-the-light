// Simple Dwitter Shim
// Created by Frank Force 2020
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.

function u(t) { // dwitter code goes here

// https://www.dwitter.net/d/16391 - Step Into The Light
for(i=800,x.fillRect(z=0,0,q=1e5,q);--i;x.fillRect(z?960+S(m-t/2)*q/i:i,z?540+C(m-t/2)*q/i:400,s=z++?3e4/i*S(m*89+t):280,s))x.fillStyle=`hsl(${S((m=i+240*t)*m)*19-m/2} 99%${i**.9/4}%`;
  
}

let time = 0;
let frame = 0;
let FPS = 60;

let x = c.getContext('2d');
let S = Math.sin;
let C = Math.cos;
let T = Math.tan;
let R = (r,g,b,a=1) => `rgba(${r|0},${g|0},${b|0},${a})`;

let loop = (frameTime) =>
{
  requestAnimationFrame(loop);
  
  // update time
  time = ++frame/FPS;
  
  // update user function
  u(time);
}

loop();