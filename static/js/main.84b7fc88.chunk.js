(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),i=a.n(c),o=(a(13),a(3)),s=a(4),l=a(6),u=a(5),m=a(7),d=(a(15),function(e){var t={backgroundImage:"url(".concat(e.value,")")};return r.a.createElement("div",{className:"grid-item",style:t,onClick:e.handleClick})}),p=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).shuffle=function(e){for(var t,a,n=e.concat(e),r=n.length;r>0;)a=Math.floor(Math.random()*r),t=n[--r],n[r]=n[a],n[a]=t;return n},a.handleClick=function(e){var t=e.target;t.classList.add("reveal"),a.state.currentPair.push(t.style.backgroundImage);var n=document.querySelectorAll(".reveal");a.state.currentPair.length>1&&a.state.currentPair[0]===a.state.currentPair[1]?setTimeout(function(){n.forEach(function(e){return e.classList.add("hide")}),a.setState({currentPair:[]})},1e3):a.state.currentPair.length>1&&a.state.currentPair[0]!==a.state.currentPair[1]&&setTimeout(function(){n.forEach(function(e){e.classList.contains("hide")||e.classList.remove("reveal")}),a.setState({currentPair:[]})},1e3)},a.reloadPage=function(){return window.location.reload()},a.state={images:["https://media.cntraveler.com/photos/58de89946c3567139f9b6cca/4:3/w_480,c_limit/GettyImages-468366251.jpg","https://www.100resilientcities.org/wp-content/uploads/2017/06/London-hero-crop.jpg","https://images.wowcher.co.uk/images/deal/8929303/777x520/376078.jpg","https://www.hellomagazine.com/imagenes/travel/2018061449462/things-to-do-in-rome-3-days/0-243-749/Colosseum-Rome-t.jpg","https://www.b92.net/news/pics/2017/03/10/68769367758c1f7d74bf9c979113101_690x460.jpg","http://iacpm.org/wp-content/uploads/2017/11/AmsterdamImageonSTD.jpg","https://s.inyourpocket.com/gallery/64940.jpg","http://nomadcapitalist.com/wp-content/uploads/2017/08/Kalemegdan.jpg"],currentPair:[]},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.shuffle(this.state.images);this.setState({images:e})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"grid-container"},this.state.images.map(function(t,a){return r.a.createElement(d,{value:t,key:a,handleClick:e.handleClick})})),r.a.createElement("button",{onClick:this.reloadPage},"Play again"))}}]),t}(n.Component);i.a.render(r.a.createElement(p,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(18)}},[[8,2,1]]]);
//# sourceMappingURL=main.84b7fc88.chunk.js.map