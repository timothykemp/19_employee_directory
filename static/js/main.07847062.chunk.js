(this.webpackJsonp19_employee_directory=this.webpackJsonp19_employee_directory||[]).push([[0],{19:function(e,t,s){e.exports={Jumbotron:"style_Jumbotron__7v6LN"}},50:function(e,t,s){"use strict";s.r(t);var r=s(0),n=s(1),a=s.n(n),c=s(18),o=s.n(c),i=(s(31),s(51)),l=s(52),h=s(19),d=s.n(h);var j=function(){return Object(r.jsx)(i.a,{className:d.a.Jumbotron,children:Object(r.jsxs)(l.a,{children:[Object(r.jsx)("h1",{children:"Employee Directory"}),Object(r.jsx)("p",{children:"Click on arrow by first or last name to sort the directory by selected column, or use the search box to filter your results."})]})})},m=s(20),u=s(21),b=s(24),p=s(23);var x=function(e){return Object(r.jsx)("div",{className:"container",style:e.style,children:e.children})};var O=function(e){return Object(r.jsx)("form",{children:Object(r.jsx)("div",{className:"form-group",children:Object(r.jsx)("div",{className:"input-group",children:Object(r.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search Here",id:"search"})})})})},y=s(53),f=s(9),v=s.n(f),g=s(7),C=s.n(g),S=s(22),w=s.n(S),N={getEmployees:function(){return w.a.get("https://randomuser.me/api/?results=250&nat=us")}},_=function(e){Object(b.a)(s,e);var t=Object(p.a)(s);function s(){var e;Object(m.a)(this,s);for(var r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).state={employees:[],sorted:"",search:""},e.handleInputChange=function(t){if("search"===t.target.name){var s=t.target.value.toLowerCase();e.setState({search:s})}},e.sortByFirstName=function(){var t=e.state.employees.sort((function(e,t){return t.name.first>e.name.first?-1:e.name.first>t.name.first?1:0}));"DESC"===e.state.sorted?(t.reverse(),e.setState({sorted:"ASC"})):e.setState({sorted:"DESC"}),e.setState({employees:t})},e.sortByLastName=function(){var t=e.state.employees.sort((function(e,t){return t.name.last>e.name.last?-1:e.name.last>t.name.last?1:0}));"DESC"===e.state.sorted?(t.reverse(),e.setState({sorted:"ASC"})):e.setState({sorted:"DESC"}),e.setState({employees:t})},e}return Object(u.a)(s,[{key:"componentDidMount",value:function(){var e=this;N.getEmployees().then((function(t){e.setState({employees:t.data.results})})).catch((function(e){return console.error(e)}))}},{key:"render",value:function(){var e=this;return Object(r.jsxs)(x,{children:[Object(r.jsx)(O,{handleInputChange:this.handleInputChange,search:this.state.search}),Object(r.jsxs)(y.a,{striped:!0,bordered:!0,hover:!0,responsive:!0,className:C.a.Table,children:[Object(r.jsx)("thead",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("th",{children:"Image"}),Object(r.jsxs)("th",{children:["First Name ",Object(r.jsx)("span",{className:C.a.downArrow,onClick:this.sortByFirstName})]}),Object(r.jsxs)("th",{children:["Last Name ",Object(r.jsx)("span",{className:C.a.downArrow,onClick:this.sortByLastName})]}),Object(r.jsx)("th",{children:"Phone"}),Object(r.jsx)("th",{children:"Email"}),Object(r.jsx)("th",{children:"Birthday"})]})}),this.state.employees&&this.state.employees.map((function(t){return t.name.first.toLowerCase().includes(e.state.search)||t.name.last.toLowerCase().includes(e.state.search)?Object(r.jsx)("tbody",{children:Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{children:Object(r.jsx)("img",{src:t.picture.large,alt:t.name.first+" "+t.name.last})}),Object(r.jsx)("td",{children:t.name.first}),Object(r.jsx)("td",{children:t.name.last}),Object(r.jsx)("td",{children:t.phone}),Object(r.jsx)("td",{children:Object(r.jsx)("a",{href:"mailto:"+t.email,children:t.email})}),Object(r.jsx)("td",{children:v()(t.dob.date,"paddedShortDate")})]})},t.login.uuid):null}))]})]})}}]),s}(n.Component);var E=function(){return Object(r.jsxs)("div",{children:[Object(r.jsx)(j,{}),Object(r.jsx)(_,{})]})};o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(E,{})}),document.getElementById("root"))},7:function(e,t,s){e.exports={Table:"style_Table__i0Tsm",downArrow:"style_downArrow__c8I20"}}},[[50,1,2]]]);
//# sourceMappingURL=main.07847062.chunk.js.map