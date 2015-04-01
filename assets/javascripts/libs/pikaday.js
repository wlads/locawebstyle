/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/dbushell/Pikaday
 */
!function(t,e){"use strict";var n;if("object"==typeof exports){try{n=require("moment")}catch(a){}module.exports=e(n)}else"function"==typeof define&&define.amd?define(function(t){var a="moment";return n=t.defined&&t.defined(a)?t(a):void 0,e(n)}):t.Pikaday=e(t.moment)}(this,function(t){"use strict";var e="function"==typeof t,n=!!window.addEventListener,a=window.document,s=window.setTimeout,i=function(t,e,a,s){n?t.addEventListener(e,a,!!s):t.attachEvent("on"+e,a)},o=function(t,e,a,s){n?t.removeEventListener(e,a,!!s):t.detachEvent("on"+e,a)},r=function(t,e,n){var s;a.createEvent?(s=a.createEvent("HTMLEvents"),s.initEvent(e,!0,!1),s=y(s,n),t.dispatchEvent(s)):a.createEventObject&&(s=a.createEventObject(),s=y(s,n),t.fireEvent("on"+e,s))},l=function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},c=function(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")},u=function(t,e){c(t,e)||(t.className=""===t.className?e:t.className+" "+e)},d=function(t,e){t.className=l((" "+t.className+" ").replace(" "+e+" "," "))},h=function(t){return/Array/.test(Object.prototype.toString.call(t))},f=function(t){return/Date/.test(Object.prototype.toString.call(t))&&!isNaN(t.getTime())},p=function(t){return t%4===0&&t%100!==0||t%400===0},m=function(t,e){return[31,p(t)?29:28,31,30,31,30,31,31,30,31,30,31][e]},g=function(t){f(t)&&t.setHours(0,0,0,0)},v=function(t,e){return t.getTime()===e.getTime()},y=function(t,e,n){var a,s;for(a in e)s=void 0!==t[a],s&&"object"==typeof e[a]&&void 0===e[a].nodeName?f(e[a])?n&&(t[a]=new Date(e[a].getTime())):h(e[a])?n&&(t[a]=e[a].slice(0)):t[a]=y({},e[a],n):(n||!s)&&(t[a]=e[a]);return t},b=function(t){return t.month<0&&(t.year-=Math.ceil(Math.abs(t.month)/12),t.month+=12),t.month>11&&(t.year+=Math.floor(Math.abs(t.month)/12),t.month-=12),t},w={field:null,bound:void 0,position:"bottom left",format:"YYYY-MM-DD",defaultDate:null,setDefaultDate:!1,firstDay:0,minDate:null,maxDate:null,yearRange:10,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,numberOfMonths:1,mainCalendar:"left",i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},onSelect:null,onOpen:null,onClose:null,onDraw:null},_=function(t,e,n){for(e+=t.firstDay;e>=7;)e-=7;return n?t.i18n.weekdaysShort[e]:t.i18n.weekdays[e]},k=function(t,e,n,a,s,i,o){if(o)return'<td class="is-empty"></td>';var r=[];return i&&r.push("is-disabled"),s&&r.push("is-today"),a&&r.push("is-selected"),'<td data-day="'+t+'" class="'+r.join(" ")+'"><button class="pika-button pika-day" type="button" data-pika-year="'+n+'" data-pika-month="'+e+'" data-pika-day="'+t+'">'+t+"</button></td>"},$=function(t,e){return"<tr>"+(e?t.reverse():t).join("")+"</tr>"},C=function(t){return"<tbody>"+t.join("")+"</tbody>"},D=function(t){var e,n=[];for(e=0;7>e;e++)n.push('<th scope="col"><abbr title="'+_(t,e)+'">'+_(t,e,!0)+"</abbr></th>");return"<thead>"+(t.isRTL?n.reverse():n).join("")+"</thead>"},x=function(t,e,n,a,s){var i,o,r,l,c,u=t._o,d=n===u.minYear,f=n===u.maxYear,p='<div class="pika-title">',m=!0,g=!0;for(r=[],i=0;12>i;i++)r.push('<option value="'+(n===s?i-e:12+i-e)+'"'+(i===a?" selected":"")+(d&&i<u.minMonth||f&&i>u.maxMonth?"disabled":"")+">"+u.i18n.months[i]+"</option>");for(l='<div class="pika-label">'+u.i18n.months[a]+'<select class="pika-select pika-select-month">'+r.join("")+"</select></div>",h(u.yearRange)?(i=u.yearRange[0],o=u.yearRange[1]+1):(i=n-u.yearRange,o=1+n+u.yearRange),r=[];o>i&&i<=u.maxYear;i++)i>=u.minYear&&r.push('<option value="'+i+'"'+(i===n?" selected":"")+">"+i+"</option>");return c='<div class="pika-label">'+n+u.yearSuffix+'<select class="pika-select pika-select-year">'+r.join("")+"</select></div>",p+=u.showMonthAfterYear?c+l:l+c,d&&(0===a||u.minMonth>=a)&&(m=!1),f&&(11===a||u.maxMonth<=a)&&(g=!1),0===e&&(p+='<button class="pika-prev'+(m?"":" is-disabled")+'" type="button">'+u.i18n.previousMonth+"</button>"),e===t._o.numberOfMonths-1&&(p+='<button class="pika-next'+(g?"":" is-disabled")+'" type="button">'+u.i18n.nextMonth+"</button>"),p+="</div>"},M=function(t,e){return'<table cellpadding="0" cellspacing="0" class="pika-table">'+D(t)+C(e)+"</table>"},S=function(o){var r=this,l=r.config(o);r._onMouseDown=function(t){if(r._v){t=t||window.event;var e=t.target||t.srcElement;if(e){if(!c(e,"is-disabled")){if(c(e,"pika-button")&&!c(e,"is-empty"))return r.setDate(new Date(e.getAttribute("data-pika-year"),e.getAttribute("data-pika-month"),e.getAttribute("data-pika-day"))),void(l.bound&&s(function(){r.hide()},100));c(e,"pika-prev")?r.prevMonth():c(e,"pika-next")&&r.nextMonth()}if(c(e,"pika-select"))r._c=!0;else{if(!t.preventDefault)return t.returnValue=!1,!1;t.preventDefault()}}}},r._onChange=function(t){t=t||window.event;var e=t.target||t.srcElement;e&&(c(e,"pika-select-month")?r.gotoMonth(e.value):c(e,"pika-select-year")&&r.gotoYear(e.value))},r._onInputChange=function(n){var a;n.firedBy!==r&&(e?(a=t(l.field.value,l.format),a=a&&a.isValid()?a.toDate():null):a=new Date(Date.parse(l.field.value)),r.setDate(f(a)?a:null),r._v||r.show())},r._onInputFocus=function(){r.show()},r._onInputClick=function(){r.show()},r._onInputBlur=function(){r._c||(r._b=s(function(){r.hide()},50)),r._c=!1},r._onClick=function(t){t=t||window.event;var e=t.target||t.srcElement,a=e;if(e){!n&&c(e,"pika-select")&&(e.onchange||(e.setAttribute("onchange","return;"),i(e,"change",r._onChange)));do if(c(a,"pika-single"))return;while(a=a.parentNode);r._v&&e!==l.trigger&&r.hide()}},r.el=a.createElement("div"),r.el.className="pika-single"+(l.isRTL?" is-rtl":""),i(r.el,"mousedown",r._onMouseDown,!0),i(r.el,"change",r._onChange),l.field&&(l.bound?a.body.appendChild(r.el):l.field.parentNode.insertBefore(r.el,l.field.nextSibling),i(l.field,"change",r._onInputChange),l.defaultDate||(l.defaultDate=e&&l.field.value?t(l.field.value,l.format).toDate():new Date(Date.parse(l.field.value)),l.setDefaultDate=!0));var u=l.defaultDate;f(u)?l.setDefaultDate?r.setDate(u,!0):r.gotoDate(u):r.gotoDate(new Date),l.bound?(this.hide(),r.el.className+=" is-bound",i(l.trigger,"click",r._onInputClick),i(l.trigger,"focus",r._onInputFocus),i(l.trigger,"blur",r._onInputBlur)):this.show()};return S.prototype={config:function(t){this._o||(this._o=y({},w,!0));var e=y(this._o,t,!0);e.isRTL=!!e.isRTL,e.field=e.field&&e.field.nodeName?e.field:null,e.bound=!!(void 0!==e.bound?e.field&&e.bound:e.field),e.trigger=e.trigger&&e.trigger.nodeName?e.trigger:e.field;var n=parseInt(e.numberOfMonths,10)||1;if(e.numberOfMonths=n>4?4:n,f(e.minDate)||(e.minDate=!1),f(e.maxDate)||(e.maxDate=!1),e.minDate&&e.maxDate&&e.maxDate<e.minDate&&(e.maxDate=e.minDate=!1),e.minDate&&(g(e.minDate),e.minYear=e.minDate.getFullYear(),e.minMonth=e.minDate.getMonth()),e.maxDate&&(g(e.maxDate),e.maxYear=e.maxDate.getFullYear(),e.maxMonth=e.maxDate.getMonth()),h(e.yearRange)){var a=(new Date).getFullYear()-10;e.yearRange[0]=parseInt(e.yearRange[0],10)||a,e.yearRange[1]=parseInt(e.yearRange[1],10)||a}else e.yearRange=Math.abs(parseInt(e.yearRange,10))||w.yearRange,e.yearRange>100&&(e.yearRange=100);return e},toString:function(n){return f(this._d)?e?t(this._d).format(n||this._o.format):this._d.toDateString():""},getMoment:function(){return e?t(this._d):null},setMoment:function(n,a){e&&t.isMoment(n)&&this.setDate(n.toDate(),a)},getDate:function(){return f(this._d)?new Date(this._d.getTime()):null},setDate:function(t,e){if(!t)return this._d=null,this.draw();if("string"==typeof t&&(t=new Date(Date.parse(t))),f(t)){var n=this._o.minDate,a=this._o.maxDate;f(n)&&n>t?t=n:f(a)&&t>a&&(t=a),this._d=new Date(t.getTime()),g(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),r(this._o.field,"change",{firedBy:this})),e||"function"!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},gotoDate:function(t){var e=!0;if(f(t)){if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),a=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),s=t.getTime();a.setMonth(a.getMonth()+1),a.setDate(a.getDate()-1),e=s<n.getTime()||a.getTime()<s}e&&(this.calendars=[{month:t.getMonth(),year:t.getFullYear()}],"right"===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustCalendars:function(){this.calendars[0]=b(this.calendars[0]);for(var t=1;t<this._o.numberOfMonths;t++)this.calendars[t]=b({month:this.calendars[0].month+t,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(t){isNaN(t)||(this.calendars[0].month=parseInt(t,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(t){isNaN(t)||(this.calendars[0].year=parseInt(t,10),this.adjustCalendars())},setMinDate:function(t){this._o.minDate=t},setMaxDate:function(t){this._o.maxDate=t},draw:function(t){if(this._v||t){var e=this._o,n=e.minYear,a=e.maxYear,i=e.minMonth,o=e.maxMonth,r="";this._y<=n&&(this._y=n,!isNaN(i)&&this._m<i&&(this._m=i)),this._y>=a&&(this._y=a,!isNaN(o)&&this._m>o&&(this._m=o));for(var l=0;l<e.numberOfMonths;l++)r+='<div class="pika-lendar">'+x(this,l,this.calendars[l].year,this.calendars[l].month,this.calendars[0].year)+this.render(this.calendars[l].year,this.calendars[l].month)+"</div>";if(this.el.innerHTML=r,e.bound&&"hidden"!==e.field.type&&s(function(){e.trigger.focus()},1),"function"==typeof this._o.onDraw){var c=this;s(function(){c._o.onDraw.call(c)},0)}}},adjustPosition:function(){var t,e,n,s=this._o.trigger,i=s,o=this.el.offsetWidth,r=this.el.offsetHeight,l=window.innerWidth||a.documentElement.clientWidth,c=window.innerHeight||a.documentElement.clientHeight,u=window.pageYOffset||a.body.scrollTop||a.documentElement.scrollTop;if("function"==typeof s.getBoundingClientRect)n=s.getBoundingClientRect(),t=n.left+window.pageXOffset,e=n.bottom+window.pageYOffset;else for(t=i.offsetLeft,e=i.offsetTop+i.offsetHeight;i=i.offsetParent;)t+=i.offsetLeft,e+=i.offsetTop;(t+o>l||this._o.position.indexOf("right")>-1&&t-o+s.offsetWidth>0)&&(t=t-o+s.offsetWidth),(e+r>c+u||this._o.position.indexOf("top")>-1&&e-r-s.offsetHeight>0)&&(e=e-r-s.offsetHeight),this.el.style.cssText=["position: absolute","left: "+t+"px","top: "+e+"px"].join(";")},render:function(t,e){var n=this._o,a=new Date,s=m(t,e),i=new Date(t,e,1).getDay(),o=[],r=[];g(a),n.firstDay>0&&(i-=n.firstDay,0>i&&(i+=7));for(var l=s+i,c=l;c>7;)c-=7;l+=7-c;for(var u=0,d=0;l>u;u++){var h=new Date(t,e,1+(u-i)),p=n.minDate&&h<n.minDate||n.maxDate&&h>n.maxDate,y=f(this._d)?v(h,this._d):!1,b=v(h,a),w=i>u||u>=s+i;r.push(k(1+(u-i),e,t,y,b,p,w)),7===++d&&(o.push($(r,n.isRTL)),r=[],d=0)}return M(n,o)},isVisible:function(){return this._v},show:function(){this._v||(d(this.el,"is-hidden"),this._v=!0,this.draw(),this._o.bound&&(i(a,"click",this._onClick),this.adjustPosition()),"function"==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var t=this._v;t!==!1&&(this._o.bound&&o(a,"click",this._onClick),this.el.style.cssText="",u(this.el,"is-hidden"),this._v=!1,void 0!==t&&"function"==typeof this._o.onClose&&this._o.onClose.call(this))},destroy:function(){this.hide(),o(this.el,"mousedown",this._onMouseDown,!0),o(this.el,"change",this._onChange),this._o.field&&(o(this._o.field,"change",this._onInputChange),this._o.bound&&(o(this._o.trigger,"click",this._onInputClick),o(this._o.trigger,"focus",this._onInputFocus),o(this._o.trigger,"blur",this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},S});