(this["webpackJsonpreact-hw-3"]=this["webpackJsonpreact-hw-3"]||[]).push([[0],{1:function(t,e,n){t.exports={phonebook__form:"Form_phonebook__form__17JRv",phonebook__label:"Form_phonebook__label__1T3WW",phonebook__input:"Form_phonebook__input__EBIlT",btn:"Form_btn__hoQKn"}},13:function(t,e,n){t.exports=n(19)},19:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),c=n(9),r=n.n(c),l=n(11),s=n(2),u=n(3),i=n(5),m=n(4),_=n(20),b=n(6),p=n.n(b),h=function(t){var e=t.contacts,n=t.onDeleteBtnClick;return o.a.createElement("ul",{className:p.a.contacts},e.map((function(t){var e=t.name,a=t.number,c=t.id;return o.a.createElement("li",{key:Object(_.a)(),className:p.a.contacts__item},o.a.createElement("p",null,o.a.createElement("span",null,e,": "),o.a.createElement("span",null,a)),o.a.createElement("button",{className:p.a.btn,onClick:function(){return n(c)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"))})))},f=n(10),d=n(1),k=n.n(d),v=function(t){Object(i.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={name:"",number:""},t.handleInputChange=function(e){var n=e.target,a=n.name,o=n.value;t.setState(Object(f.a)({},a,o))},t.handleFormSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetForm()},t.resetForm=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{className:k.a.phonebook__form,onSubmit:this.handleFormSubmit},o.a.createElement("label",{className:k.a.phonebook__label},"Name",o.a.createElement("input",{className:k.a.phonebook__input,type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange})),o.a.createElement("label",{className:k.a.phonebook__label},"Number",o.a.createElement("input",{className:k.a.phonebook__input,type:"text",name:"number",value:this.state.number,onChange:this.handleInputChange})),o.a.createElement("button",{type:"submit",className:k.a.btn},"Add contact"))}}]),n}(o.a.Component),C=n(7),E=n.n(C),g=function(t){var e=t.value,n=t.onChange;return o.a.createElement("label",{className:E.a.phonebook__label},"Find contacts by name:",o.a.createElement("input",{className:E.a.phonebook__input,type:"text",value:e,onChange:n}))},y=function(t){Object(i.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(t=e.call.apply(e,[this].concat(o))).state={contacts:[],filter:""},t.addContact=function(e){var n=e.name,a=e.number,o=t.state.contacts,c={id:Object(_.a)(),name:n,number:a};o.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):n&&a?t.setState((function(t){return{contacts:[c].concat(Object(l.a)(t.contacts))}})):alert("Fill both fields please")},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getFilteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getFilteredContacts();return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"Phonebook"),o.a.createElement(v,{onSubmit:this.addContact}),o.a.createElement("h2",null,"Contacts"),o.a.createElement(g,{value:t,onChange:this.changeFilter}),o.a.createElement(h,{contacts:e,onDeleteBtnClick:this.deleteContact}))}}]),n}(o.a.Component);n(18);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(y,null)),document.getElementById("root"))},6:function(t,e,n){t.exports={contacts:"Contacts_contacts__2tqzd",contacts__item:"Contacts_contacts__item__CZmRG",btn:"Contacts_btn__3y7OV"}},7:function(t,e,n){t.exports={phonebook__label:"Filter_phonebook__label__1X1MQ",phonebook__input:"Filter_phonebook__input__NXnIp"}}},[[13,1,2]]]);
//# sourceMappingURL=main.4675ce38.chunk.js.map