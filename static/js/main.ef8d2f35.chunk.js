(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/tomato.0a805ee9.png"},,,,,function(e,t,a){e.exports=a.p+"static/media/15.160c5554.png"},function(e,t,a){e.exports=a.p+"static/media/30.ccc4d6a4.png"},function(e,t,a){e.exports=a.p+"static/media/tomato_visible.5bac099c.png"},function(e,t,a){e.exports=a(39)},,,,,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),r=a(12),c=a.n(r),s=a(2),o=a(3),m=a(5),l=a(4),u=a(6),h=(a(23),a(25),function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,n=new Array(i),r=0;r<i;r++)n[r]=arguments[r];return(a=Object(m.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(n)))).onClick=function(){var e=a.props,t=e.label;(0,e.onClick)(t)},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e="tab__item";return this.props.label===this.props.activeTab&&(e="tab__item tab__item--active"),n.a.createElement("li",{className:e,onClick:this.onClick},this.props.label)}}]),t}(i.Component)),d=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).onClickTab=function(e){a.setState({activeTab:e})},a.state={activeTab:a.props.children[0].props.label},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"tabs"},n.a.createElement("div",{className:"tab__list"},this.props.children.map(function(t){var a=t.props.label;return n.a.createElement(h,{activeTab:e.state.activeTab,key:a,label:a,onClick:e.onClickTab})})),n.a.createElement("div",{className:"tab__content"},this.props.children.map(function(t){return t.props.label!==e.state.activeTab?void 0:t.props.children})))}}]),t}(i.Component),p=a(7),b=(a(27),a(10)),k=a.n(b),T=a(13),f=function(e){var t=e.startTime,a=e.breakTime,r=Object(i.useState)([t.hours,t.minutes,t.seconds]),c=Object(p.a)(r,2),s=Object(p.a)(c[0],3),o=s[0],m=s[1],l=s[2],u=c[1],h=Object(i.useState)([!1]),d=Object(p.a)(h,2),b=Object(p.a)(d[0],1)[0],f=d[1],E=Object(i.useState)([!0]),v=Object(p.a)(E,2),y=Object(p.a)(v[0],1)[0],g=v[1],j=function(){y?(g([!1]),u([parseInt(a.hours),parseInt(a.minutes),parseInt(a.seconds)]),new Notification("Pomodoro App",{body:"Working time has finished.",icon:k.a,dir:"ltr"})):(f([!1]),g([!0]),u([parseInt(t.hours),parseInt(t.minutes),parseInt(t.seconds)]),new Notification("Pomodoro App",{body:"Break time has finished.",icon:k.a,dir:"ltr"}))};return Object(i.useEffect)(function(){if(b){var e=setInterval(function(){0===o&&0===m&&0===l?j():u(0===m&&0===l?[o-1,59,59]:0===l?[o,m-1,59]:[o,m,l-1])},1e3);return function(){return clearInterval(e)}}}),n.a.createElement("div",null,n.a.createElement("div",{className:y?"timer":"timer timer--breakTime"},n.a.createElement("p",null,"".concat(o.toString().padStart(2,"0"),":").concat(m.toString().padStart(2,"0"),":").concat(l.toString().padStart(2,"0")))),n.a.createElement("button",{className:b?"timer__button timer__button--active":"timer__button",onClick:function(){return f([!0])},disabled:!!b},n.a.createElement(T.a,{size:"40px"})))},E=(a(29),a(14)),v=a(8),y=a(15),g=a.n(y),j=a(16),O=a.n(j),w=(a(31),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).state={timeWork:30,timeBreak:5,isTimeWorkThirty:a.props.isTimeWorkThirty,isTimeBreakTwenty:a.props.isTimeBreakTwenty},a.inputHandleChange=a.inputHandleChange.bind(Object(v.a)(Object(v.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"clickedTimeWork",value:function(){this.state.isTimeWorkThirty?this.props.modifyStartTime(25,!1):this.state.isTimeWorkThirty||this.props.modifyStartTime(30,!0)}},{key:"clickedTimeBreak",value:function(){this.state.isTimeBreakTwenty?this.props.modifyBreakTime(5,!1):this.props.modifyBreakTime(15,!0)}},{key:"inputHandleChange",value:function(e){var t=e.target,a="checkbox"===t.type?t.checked:t.value,i=t.name;this.setState(Object(E.a)({},i,a))}},{key:"render",value:function(){return n.a.createElement("div",null,n.a.createElement("form",null,n.a.createElement("div",{className:"group"},n.a.createElement("h3",null,"Working time"),n.a.createElement("label",{htmlFor:"work__time"},n.a.createElement("img",{className:this.state.isTimeWorkThirty?"checkbox checkbox--checked":"checkbox",src:O.a,alt:"30 minutes"})),n.a.createElement("input",{type:"checkbox",id:"work__time",name:"isTimeWorkThirty",onChange:this.inputHandleChange,onClick:this.clickedTimeWork.bind(this),checked:this.state.isTimeWorkThirty,hidden:!0})),n.a.createElement("div",{className:"group"},n.a.createElement("h3",null,"Break time"),n.a.createElement("label",{htmlFor:"break__time"},n.a.createElement("img",{className:this.state.isTimeBreakTwenty?"checkbox checkbox--checked":"checkbox",src:g.a,alt:"30 minutes"})),n.a.createElement("input",{type:"checkbox",id:"break__time",name:"isTimeBreakTwenty",onChange:this.inputHandleChange,onClick:this.clickedTimeBreak.bind(this),checked:this.state.isTimeBreakTwenty,hidden:!0}))))}}]),t}(i.Component)),_=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(l.a)(t).call(this,e))).modifyStartTime=function(e,t){a.setState({isTimeWorkThirty:t,startTime:{hours:0,minutes:e,seconds:0}})},a.modifyBreakTime=function(e,t){a.setState({isTimeBreakTwenty:t,breakTime:{hours:0,minutes:e,seconds:0}})},a.state={startTime:{hours:0,minutes:25,seconds:0},breakTime:{hours:0,minutes:5,seconds:0},isTimeWorkThirty:!1,isTimeBreakTwenty:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){Notification.requestPermission()}},{key:"render",value:function(){return n.a.createElement("div",{className:"dashboard"},n.a.createElement(d,null,n.a.createElement("div",{label:"Inicio"},n.a.createElement("div",{className:"row row--h3"}),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement(f,{startTime:this.state.startTime,breakTime:this.state.breakTime})))),n.a.createElement("div",{label:"Configuraci\xf3n"},n.a.createElement(w,{modifyBreakTime:this.modifyBreakTime,modifyStartTime:this.modifyStartTime,isTimeWorkThirty:this.state.isTimeWorkThirty,isTimeBreakTwenty:this.state.isTimeBreakTwenty}))))}}]),t}(i.Component),N=a(17),B=a.n(N),C=(a(33),a(9)),S=function(){return n.a.createElement("div",{className:"footer"},n.a.createElement("p",null),n.a.createElement("ul",{className:"list__items"},n.a.createElement("li",{className:"item"},"Credits: ",n.a.createElement("code",null,"Practical Programmer")),n.a.createElement("li",{className:"item"},n.a.createElement("a",{href:"https://github.com/practicaldev101"},n.a.createElement(C.a,{size:"20px"}))),n.a.createElement("li",{className:"item"},n.a.createElement("a",{href:"https://www.instagram.com/practical_dev/"},n.a.createElement(C.b,{size:"20px"}))),n.a.createElement("li",{className:"item"},n.a.createElement("a",{href:"https://www.youtube.com/channel/UCk6a5c-G9dIpBDwrBTATgBw"},n.a.createElement(C.c,{size:"20px"})))))};a(35);var x=function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"logo-group"},n.a.createElement("img",{className:"logo",src:B.a,alt:"logo"}),n.a.createElement("h3",{className:"logo__title"},"Pomodoro")),n.a.createElement(_,null),n.a.createElement(S,null))};a(37);c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(x,null)),document.getElementById("root"))}],[[18,2,1]]]);
//# sourceMappingURL=main.ef8d2f35.chunk.js.map