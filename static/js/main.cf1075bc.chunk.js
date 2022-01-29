(this.webpackJsonpredux2=this.webpackJsonpredux2||[]).push([[0],{15:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var a=c(2),o=c(10),n=c.n(o),i=c(5),s=(c(15),c(0)),r=function(e){var t=e.currentSong;return Object(s.jsxs)("div",{className:"song-container",children:[Object(s.jsx)("img",{alt:"music",src:t.cover}),Object(s.jsx)("h2",{children:t.name}),Object(s.jsx)("h3",{children:t.artist})]})},l=c(3),p=c(6),d=c(4),h=function(e){e.setSongs;var t=e.currentSong,c=e.setIsPlaying,o=e.isPlaying,n=e.songs,r=e.setCurrentSong,h=Object(a.useRef)(null),u=function(){o?(h.current.pause(),c(!o)):(h.current.play(),c(!o))},j=function(e){var c=e.target.currentTime,a=e.target.duration,o=Math.round(c),i=Math.round(a),s=Math.round(o/i*100);if(c===a){var p=n.findIndex((function(e){return e.id===t.id}));p===n.length-1?r(n[0]):r(n[p+1]),u()}g(Object(l.a)(Object(l.a)({},O),{},{currentTime:c,duration:a,aniamtionPercentage:s}))},b=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},m=Object(a.useState)({currentTime:0,duration:0,aniamtionPercentage:0}),v=Object(i.a)(m,2),O=v[0],g=v[1],x=function(e){var c=n.findIndex((function(e){return e.id===t.id}));"next"===e&&(c===n.length-1?r(n[0]):r(n[c+1])),"back"===e&&r(0===c?n[n.length-1]:n[c-1])},f={transform:"translateX(".concat(O.aniamtionPercentage,"%)")};return Object(s.jsxs)("div",{className:"player",children:[Object(s.jsxs)("div",{className:"time-control",children:[Object(s.jsx)("p",{children:b(O.currentTime)}),Object(s.jsxs)("div",{className:"track",children:[Object(s.jsx)("input",{onChange:function(e){h.current.currentTime=e.target.value,g(Object(l.a)(Object(l.a)({},O),{},{currentTime:e.target.value}))},min:0,max:O.duration||0,value:O.currentTime,type:"range"}),Object(s.jsx)("div",{style:f,className:"aniamte-track"})]}),Object(s.jsx)("p",{children:b(O.duration)})]}),Object(s.jsxs)("div",{className:"play-control",children:[Object(s.jsx)(p.a,{onClick:function(){return x("back")},className:"skip-back",size:"5x",icon:d.a}),Object(s.jsx)(p.a,{onClick:u,className:"play",size:"5x",icon:o?d.d:d.e}),Object(s.jsx)(p.a,{onClick:function(){return x("next")},className:"skip-forward",size:"5x",icon:d.b})]}),Object(s.jsx)("audio",{onLoadedMetadata:j,onTimeUpdate:j,ref:h,src:t.audio})]})},u=c(24);var j=function(e){var t=e.song,c=e.setCurrentSong,a=e.songs,o=e.setSongs;return Object(s.jsxs)("div",{onClick:function(){var e=a.filter((function(e){return e.id===t.id}));c(e[0]);var n=a.map((function(e){return e.id===t.id?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})}));o(n)},className:"song-item ".concat(t.active?"selected":""),children:[Object(s.jsx)("img",{src:t.cover,alt:t}),Object(s.jsxs)("div",{className:"song-discription",children:[Object(s.jsx)("h3",{children:t.name}),Object(s.jsx)("h4",{children:t.artist})]})]})},b=function(e){var t=e.songs,c=e.setCurrentSong,a=e.setSongs,o=e.displayListSong;return Object(s.jsxs)("div",{className:"song-list ".concat(o?"":"displayList"),children:[Object(s.jsx)("h2",{children:"Song List"}),Object(s.jsx)("div",{className:"song-list-items ",children:t.map((function(e){return Object(s.jsx)(j,{song:e,setCurrentSong:c,songs:t,setSongs:a},e.id)}))})]})},m=function(e){var t=e.setDisplayListSong,c=e.displayListSong;return Object(s.jsxs)("nav",{children:[Object(s.jsx)("h1",{id:"app-title",children:"Waves"}),Object(s.jsxs)("button",{onClick:function(){return t(!c)},children:[Object(s.jsx)("span",{id:"button-toggle",children:"Song List"}),Object(s.jsx)(p.a,{icon:d.c})]})]})},v=function(){var e=Object(a.useState)([{name:"In My Head",cover:"https://chillhop.com/wp-content/uploads/2022/01/6881c7456483ab8ea364152a594942a20669a058-1024x1024.jpg",artist:"Misha, NDO",audio:"https://mp3.chillhop.com/serve.php/?mp3=30134",color:["red","blue"],id:Object(u.a)(),active:!1},{name:"Polaroid",cover:"https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg",artist:"Mama Aiuto, Makzo",audio:"https://mp3.chillhop.com/serve.php/?mp3=24767",color:["red","blue"],id:Object(u.a)(),active:!1},{name:"Cocoon",cover:"https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",artist:"Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=23057",color:["red","blue"],id:Object(u.a)(),active:!1},{name:"In My Head",cover:"https://chillhop.com/wp-content/uploads/2022/01/6881c7456483ab8ea364152a594942a20669a058-1024x1024.jpg",artist:"Misha, NDO",audio:"https://mp3.chillhop.com/serve.php/?mp3=30134",color:["red","blue"],id:Object(u.a)(),active:!1},{name:"In My Head",cover:"https://chillhop.com/wp-content/uploads/2022/01/6881c7456483ab8ea364152a594942a20669a058-1024x1024.jpg",artist:"Misha, NDO",audio:"https://mp3.chillhop.com/serve.php/?mp3=30134",color:["red","blue"],id:Object(u.a)(),active:!1},{name:"Polaroid",cover:"https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg",artist:"Mama Aiuto, Makzo",audio:"https://mp3.chillhop.com/serve.php/?mp3=24767",color:["red","blue"],id:Object(u.a)(),active:!1},{name:"Cocoon",cover:"https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",artist:"Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=23057",color:["red","blue"],id:Object(u.a)(),active:!1},{name:"In My Head",cover:"https://chillhop.com/wp-content/uploads/2022/01/6881c7456483ab8ea364152a594942a20669a058-1024x1024.jpg",artist:"Misha, NDO",audio:"https://mp3.chillhop.com/serve.php/?mp3=30134",color:["red","blue"],id:Object(u.a)(),active:!1},{name:"In My Head",cover:"https://chillhop.com/wp-content/uploads/2022/01/6881c7456483ab8ea364152a594942a20669a058-1024x1024.jpg",artist:"Misha, NDO",audio:"https://mp3.chillhop.com/serve.php/?mp3=30134",color:["red","blue"],id:Object(u.a)(),active:!1},{name:"Polaroid",cover:"https://chillhop.com/wp-content/uploads/2021/09/501327d9a200bed56717f5f4a0fa7e4517c491c9-1024x1024.jpg",artist:"Mama Aiuto, Makzo",audio:"https://mp3.chillhop.com/serve.php/?mp3=24767",color:["red","blue"],id:Object(u.a)(),active:!1},{name:"Cocoon",cover:"https://chillhop.com/wp-content/uploads/2021/09/a2d710149876c8e0c9fb097840b2438fbc21bd37-1024x1024.jpg",artist:"Aviino",audio:"https://mp3.chillhop.com/serve.php/?mp3=23057",color:["red","blue"],id:Object(u.a)(),active:!1},{name:"In My Head",cover:"https://chillhop.com/wp-content/uploads/2022/01/6881c7456483ab8ea364152a594942a20669a058-1024x1024.jpg",artist:"Misha, NDO",audio:"https://mp3.chillhop.com/serve.php/?mp3=30134",color:["red","blue"],id:Object(u.a)(),active:!1}]),t=Object(i.a)(e,2),c=t[0],o=t[1],n=Object(a.useState)(c[1]),l=Object(i.a)(n,2),p=l[0],d=l[1],j=Object(a.useState)(!1),v=Object(i.a)(j,2),O=v[0],g=v[1],x=Object(a.useState)(!1),f=Object(i.a)(x,2),S=f[0],y=f[1];return Object(s.jsxs)("div",{className:"App ".concat(S?"activeList":""),children:[Object(s.jsx)(m,{displayListSong:S,setDisplayListSong:y}),Object(s.jsx)(r,{currentSong:p}),Object(s.jsx)(h,{setSongs:o,currentSong:p,setCurrentSong:d,isPlaying:O,setIsPlaying:g,songs:c}),Object(s.jsx)(b,{songs:c,setCurrentSong:d,setSongs:o,displayListSong:S})]})};n.a.render(Object(s.jsx)(v,{}),document.querySelector("#root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.cf1075bc.chunk.js.map