import{m as a}from"./makeStyles-e857d707.js";function r(e,t=0){return Math.floor(Math.random()*(e-t)+t)}const i={clip:"rect(44px, 450px, 56px, 0)",content:"attr(data-text)",height:"100%",width:"100%",position:"absolute",top:"0"},o=()=>{const e={};for(let t=0;t<=100;t+=5)e[`${t}%`]={clip:`rect(${r(100)}px, 9999px, ${r(100)}px, 0)`,transform:`skew((${r(100)/100})deg)`};return e},l=a(()=>({glicthDataText:{color:"white",position:"relative",display:"block",textAlign:"center","&::before":{...i,animation:"$glitch 6s infinite linear alternate-reverse",textShadow:"-2px 0 #ff00c1",left:"2px"},"&::after":{...i,animation:"$glitchTwo 3s infinite linear alternate-reverse",textShadow:"-2px 0 #00fff9, 2px 2px #ff00c1",left:"-2px"}},"@keyframes glitch":{...o()},"@keyframes glitchTwo":{...o()}}));export{l as u};
