!function(a){function b(a,b){return function(c){return i(a.call(this,c),b)}}function c(a,b){return function(c){return this.lang().ordinal(a.call(this,c),b)}}function d(){}function e(a){g(this,a)}function f(a){var b=a.years||a.year||a.y||0,c=a.months||a.month||a.M||0,d=a.weeks||a.week||a.w||0,e=a.days||a.day||a.d||0,f=a.hours||a.hour||a.h||0,g=a.minutes||a.minute||a.m||0,h=a.seconds||a.second||a.s||0,i=a.milliseconds||a.millisecond||a.ms||0;this._input=a,this._milliseconds=i+1e3*h+6e4*g+36e5*f,this._days=e+7*d,this._months=c+12*b,this._data={},this._bubble()}function g(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c]);return a}function h(a){return 0>a?Math.ceil(a):Math.floor(a)}function i(a,b){for(var c=a+"";c.length<b;)c="0"+c;return c}function j(a,b,c,d){var e,f,g=b._milliseconds,h=b._days,i=b._months;g&&a._d.setTime(+a._d+g*c),(h||i)&&(e=a.minute(),f=a.hour()),h&&a.date(a.date()+h*c),i&&a.month(a.month()+i*c),g&&!d&&H.updateOffset(a),(h||i)&&(a.minute(e),a.hour(f))}function k(a){return"[object Array]"===Object.prototype.toString.call(a)}function l(a,b){var c,d=Math.min(a.length,b.length),e=Math.abs(a.length-b.length),f=0;for(c=0;d>c;c++)~~a[c]!==~~b[c]&&f++;return f+e}function m(a){return a?eb[a]||a.toLowerCase().replace(/(.)s$/,"$1"):a}function n(a,b){return b.abbr=a,L[a]||(L[a]=new d),L[a].set(b),L[a]}function o(a){if(!a)return H.fn._lang;if(!L[a]&&M)try{require("./lang/"+a)}catch(b){return H.fn._lang}return L[a]}function p(a){return a.match(/\[.*\]/)?a.replace(/^\[|\]$/g,""):a.replace(/\\/g,"")}function q(a){var b,c,d=a.match(P);for(b=0,c=d.length;c>b;b++)d[b]=ib[d[b]]?ib[d[b]]:p(d[b]);return function(e){var f="";for(b=0;c>b;b++)f+=d[b]instanceof Function?d[b].call(e,a):d[b];return f}}function r(a,b){function c(b){return a.lang().longDateFormat(b)||b}for(var d=5;d--&&Q.test(b);)b=b.replace(Q,c);return fb[b]||(fb[b]=q(b)),fb[b](a)}function s(a,b){switch(a){case"DDDD":return T;case"YYYY":return U;case"YYYYY":return V;case"S":case"SS":case"SSS":case"DDD":return S;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return W;case"a":case"A":return o(b._l)._meridiemParse;case"X":return Z;case"Z":case"ZZ":return X;case"T":return Y;case"MM":case"DD":case"YY":case"HH":case"hh":case"mm":case"ss":case"M":case"D":case"d":case"H":case"h":case"m":case"s":return R;default:return new RegExp(a.replace("\\",""))}}function t(a){var b=(X.exec(a)||[])[0],c=(b+"").match(bb)||["-",0,0],d=+(60*c[1])+~~c[2];return"+"===c[0]?-d:d}function u(a,b,c){var d,e=c._a;switch(a){case"M":case"MM":e[1]=null==b?0:~~b-1;break;case"MMM":case"MMMM":d=o(c._l).monthsParse(b),null!=d?e[1]=d:c._isValid=!1;break;case"D":case"DD":case"DDD":case"DDDD":null!=b&&(e[2]=~~b);break;case"YY":e[0]=~~b+(~~b>68?1900:2e3);break;case"YYYY":case"YYYYY":e[0]=~~b;break;case"a":case"A":c._isPm=o(c._l).isPM(b);break;case"H":case"HH":case"h":case"hh":e[3]=~~b;break;case"m":case"mm":e[4]=~~b;break;case"s":case"ss":e[5]=~~b;break;case"S":case"SS":case"SSS":e[6]=~~(1e3*("0."+b));break;case"X":c._d=new Date(1e3*parseFloat(b));break;case"Z":case"ZZ":c._useUTC=!0,c._tzm=t(b)}null==b&&(c._isValid=!1)}function v(a){var b,c,d=[];if(!a._d){for(b=0;7>b;b++)a._a[b]=d[b]=null==a._a[b]?2===b?1:0:a._a[b];d[3]+=~~((a._tzm||0)/60),d[4]+=~~((a._tzm||0)%60),c=new Date(0),a._useUTC?(c.setUTCFullYear(d[0],d[1],d[2]),c.setUTCHours(d[3],d[4],d[5],d[6])):(c.setFullYear(d[0],d[1],d[2]),c.setHours(d[3],d[4],d[5],d[6])),a._d=c}}function w(a){var b,c,d=a._f.match(P),e=a._i;for(a._a=[],b=0;b<d.length;b++)c=(s(d[b],a).exec(e)||[])[0],c&&(e=e.slice(e.indexOf(c)+c.length)),ib[d[b]]&&u(d[b],c,a);e&&(a._il=e),a._isPm&&a._a[3]<12&&(a._a[3]+=12),a._isPm===!1&&12===a._a[3]&&(a._a[3]=0),v(a)}function x(a){var b,c,d,f,h,i=99;for(f=0;f<a._f.length;f++)b=g({},a),b._f=a._f[f],w(b),c=new e(b),h=l(b._a,c.toArray()),c._il&&(h+=c._il.length),i>h&&(i=h,d=c);g(a,d)}function y(a){var b,c=a._i,d=$.exec(c);if(d){for(a._f="YYYY-MM-DD"+(d[2]||" "),b=0;4>b;b++)if(ab[b][1].exec(c)){a._f+=ab[b][0];break}X.exec(c)&&(a._f+=" Z"),w(a)}else a._d=new Date(c)}function z(b){var c=b._i,d=N.exec(c);c===a?b._d=new Date:d?b._d=new Date(+d[1]):"string"==typeof c?y(b):k(c)?(b._a=c.slice(0),v(b)):b._d=c instanceof Date?new Date(+c):new Date(c)}function A(a,b,c,d,e){return e.relativeTime(b||1,!!c,a,d)}function B(a,b,c){var d=K(Math.abs(a)/1e3),e=K(d/60),f=K(e/60),g=K(f/24),h=K(g/365),i=45>d&&["s",d]||1===e&&["m"]||45>e&&["mm",e]||1===f&&["h"]||22>f&&["hh",f]||1===g&&["d"]||25>=g&&["dd",g]||45>=g&&["M"]||345>g&&["MM",K(g/30)]||1===h&&["y"]||["yy",h];return i[2]=b,i[3]=a>0,i[4]=c,A.apply({},i)}function C(a,b,c){var d,e=c-b,f=c-a.day();return f>e&&(f-=7),e-7>f&&(f+=7),d=H(a).add("d",f),{week:Math.ceil(d.dayOfYear()/7),year:d.year()}}function D(a){var b=a._i,c=a._f;return null===b||""===b?null:("string"==typeof b&&(a._i=b=o().preparse(b)),H.isMoment(b)?(a=g({},b),a._d=new Date(+b._d)):c?k(c)?x(a):w(a):z(a),new e(a))}function E(a,b){H.fn[a]=H.fn[a+"s"]=function(a){var c=this._isUTC?"UTC":"";return null!=a?(this._d["set"+c+b](a),H.updateOffset(this),this):this._d["get"+c+b]()}}function F(a){H.duration.fn[a]=function(){return this._data[a]}}function G(a,b){H.duration.fn["as"+a]=function(){return+this/b}}for(var H,I,J="2.1.0",K=Math.round,L={},M="undefined"!=typeof module&&module.exports,N=/^\/?Date\((\-?\d+)/i,O=/(\-)?(\d*)?\.?(\d+)\:(\d+)\:(\d+)\.?(\d{3})?/,P=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|SS?S?|X|zz?|ZZ?|.)/g,Q=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,R=/\d\d?/,S=/\d{1,3}/,T=/\d{3}/,U=/\d{1,4}/,V=/[+\-]?\d{1,6}/,W=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,X=/Z|[\+\-]\d\d:?\d\d/i,Y=/T/i,Z=/[\+\-]?\d+(\.\d{1,3})?/,$=/^\s*\d{4}-\d\d-\d\d((T| )(\d\d(:\d\d(:\d\d(\.\d\d?\d?)?)?)?)?([\+\-]\d\d:?\d\d)?)?/,_="YYYY-MM-DDTHH:mm:ssZ",ab=[["HH:mm:ss.S",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],bb=/([\+\-]|\d\d)/gi,cb="Date|Hours|Minutes|Seconds|Milliseconds".split("|"),db={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},eb={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",w:"week",M:"month",y:"year"},fb={},gb="DDD w W M D d".split(" "),hb="M D H h m s w W".split(" "),ib={M:function(){return this.month()+1},MMM:function(a){return this.lang().monthsShort(this,a)},MMMM:function(a){return this.lang().months(this,a)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(a){return this.lang().weekdaysMin(this,a)},ddd:function(a){return this.lang().weekdaysShort(this,a)},dddd:function(a){return this.lang().weekdays(this,a)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return i(this.year()%100,2)},YYYY:function(){return i(this.year(),4)},YYYYY:function(){return i(this.year(),5)},gg:function(){return i(this.weekYear()%100,2)},gggg:function(){return this.weekYear()},ggggg:function(){return i(this.weekYear(),5)},GG:function(){return i(this.isoWeekYear()%100,2)},GGGG:function(){return this.isoWeekYear()},GGGGG:function(){return i(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return~~(this.milliseconds()/100)},SS:function(){return i(~~(this.milliseconds()/10),2)},SSS:function(){return i(this.milliseconds(),3)},Z:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(~~(a/60),2)+":"+i(~~a%60,2)},ZZ:function(){var a=-this.zone(),b="+";return 0>a&&(a=-a,b="-"),b+i(~~(10*a/6),4)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()}};gb.length;)I=gb.pop(),ib[I+"o"]=c(ib[I],I);for(;hb.length;)I=hb.pop(),ib[I+I]=b(ib[I],2);for(ib.DDDD=b(ib.DDD,3),d.prototype={set:function(a){var b,c;for(c in a)b=a[c],"function"==typeof b?this[c]=b:this["_"+c]=b},_months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),months:function(a){return this._months[a.month()]},_monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),monthsShort:function(a){return this._monthsShort[a.month()]},monthsParse:function(a){var b,c,d;for(this._monthsParse||(this._monthsParse=[]),b=0;12>b;b++)if(this._monthsParse[b]||(c=H([2e3,b]),d="^"+this.months(c,"")+"|^"+this.monthsShort(c,""),this._monthsParse[b]=new RegExp(d.replace(".",""),"i")),this._monthsParse[b].test(a))return b},_weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),weekdays:function(a){return this._weekdays[a.day()]},_weekdaysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),weekdaysShort:function(a){return this._weekdaysShort[a.day()]},_weekdaysMin:"Su_Mo_Tu_We_Th_Fr_Sa".split("_"),weekdaysMin:function(a){return this._weekdaysMin[a.day()]},weekdaysParse:function(a){var b,c,d;for(this._weekdaysParse||(this._weekdaysParse=[]),b=0;7>b;b++)if(this._weekdaysParse[b]||(c=H([2e3,1]).day(b),d="^"+this.weekdays(c,"")+"|^"+this.weekdaysShort(c,"")+"|^"+this.weekdaysMin(c,""),this._weekdaysParse[b]=new RegExp(d.replace(".",""),"i")),this._weekdaysParse[b].test(a))return b},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(a){var b=this._longDateFormat[a];return!b&&this._longDateFormat[a.toUpperCase()]&&(b=this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(a){return a.slice(1)}),this._longDateFormat[a]=b),b},isPM:function(a){return"p"===(a+"").toLowerCase()[0]},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(a,b,c){return a>11?c?"pm":"PM":c?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(a,b){var c=this._calendar[a];return"function"==typeof c?c.apply(b):c},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(a,b,c,d){var e=this._relativeTime[c];return"function"==typeof e?e(a,b,c,d):e.replace(/%d/i,a)},pastFuture:function(a,b){var c=this._relativeTime[a>0?"future":"past"];return"function"==typeof c?c(b):c.replace(/%s/i,b)},ordinal:function(a){return this._ordinal.replace("%d",a)},_ordinal:"%d",preparse:function(a){return a},postformat:function(a){return a},week:function(a){return C(a,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6}},H=function(a,b,c){return D({_i:a,_f:b,_l:c,_isUTC:!1})},H.utc=function(a,b,c){return D({_useUTC:!0,_isUTC:!0,_l:c,_i:a,_f:b})},H.unix=function(a){return H(1e3*a)},H.duration=function(a,b){var c,d,e=H.isDuration(a),g="number"==typeof a,h=e?a._input:g?{}:a,i=O.exec(a);return g?b?h[b]=a:h.milliseconds=a:i&&(c="-"===i[1]?-1:1,h={y:0,d:~~i[2]*c,h:~~i[3]*c,m:~~i[4]*c,s:~~i[5]*c,ms:~~i[6]*c}),d=new f(h),e&&a.hasOwnProperty("_lang")&&(d._lang=a._lang),d},H.version=J,H.defaultFormat=_,H.updateOffset=function(){},H.lang=function(a,b){return a?(b?n(a,b):L[a]||o(a),H.duration.fn._lang=H.fn._lang=o(a),void 0):H.fn._lang._abbr},H.langData=function(a){return a&&a._lang&&a._lang._abbr&&(a=a._lang._abbr),o(a)},H.isMoment=function(a){return a instanceof e},H.isDuration=function(a){return a instanceof f},H.fn=e.prototype={clone:function(){return H(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){return r(H(this).utc(),"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){var a=this;return[a.year(),a.month(),a.date(),a.hours(),a.minutes(),a.seconds(),a.milliseconds()]},isValid:function(){return null==this._isValid&&(this._isValid=this._a?!l(this._a,(this._isUTC?H.utc(this._a):H(this._a)).toArray()):!isNaN(this._d.getTime())),!!this._isValid},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(a){var b=r(this,a||H.defaultFormat);return this.lang().postformat(b)},add:function(a,b){var c;return c="string"==typeof a?H.duration(+b,a):H.duration(a,b),j(this,c,1),this},subtract:function(a,b){var c;return c="string"==typeof a?H.duration(+b,a):H.duration(a,b),j(this,c,-1),this},diff:function(a,b,c){var d,e,f=this._isUTC?H(a).zone(this._offset||0):H(a).local(),g=6e4*(this.zone()-f.zone());return b=m(b),"year"===b||"month"===b?(d=432e5*(this.daysInMonth()+f.daysInMonth()),e=12*(this.year()-f.year())+(this.month()-f.month()),e+=(this-H(this).startOf("month")-(f-H(f).startOf("month")))/d,e-=6e4*(this.zone()-H(this).startOf("month").zone()-(f.zone()-H(f).startOf("month").zone()))/d,"year"===b&&(e/=12)):(d=this-f,e="second"===b?d/1e3:"minute"===b?d/6e4:"hour"===b?d/36e5:"day"===b?(d-g)/864e5:"week"===b?(d-g)/6048e5:d),c?e:h(e)},from:function(a,b){return H.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)},fromNow:function(a){return this.from(H(),a)},calendar:function(){var a=this.diff(H().startOf("day"),"days",!0),b=-6>a?"sameElse":-1>a?"lastWeek":0>a?"lastDay":1>a?"sameDay":2>a?"nextDay":7>a?"nextWeek":"sameElse";return this.format(this.lang().calendar(b,this))},isLeapYear:function(){var a=this.year();return 0===a%4&&0!==a%100||0===a%400},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(a){var b=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=a?"string"==typeof a&&(a=this.lang().weekdaysParse(a),"number"!=typeof a)?this:this.add({d:a-b}):b},month:function(a){var b,c=this._isUTC?"UTC":"";return null!=a?"string"==typeof a&&(a=this.lang().monthsParse(a),"number"!=typeof a)?this:(b=this.date(),this.date(1),this._d["set"+c+"Month"](a),this.date(Math.min(b,this.daysInMonth())),H.updateOffset(this),this):this._d["get"+c+"Month"]()},startOf:function(a){switch(a=m(a)){case"year":this.month(0);case"month":this.date(1);case"week":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===a&&this.weekday(0),this},endOf:function(a){return this.startOf(a).add(a,1).subtract("ms",1)},isAfter:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)>+H(a).startOf(b)},isBefore:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)<+H(a).startOf(b)},isSame:function(a,b){return b="undefined"!=typeof b?b:"millisecond",+this.clone().startOf(b)===+H(a).startOf(b)},min:function(a){return a=H.apply(null,arguments),this>a?this:a},max:function(a){return a=H.apply(null,arguments),a>this?this:a},zone:function(a){var b=this._offset||0;return null==a?this._isUTC?b:this._d.getTimezoneOffset():("string"==typeof a&&(a=t(a)),Math.abs(a)<16&&(a=60*a),this._offset=a,this._isUTC=!0,b!==a&&j(this,H.duration(b-a,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},daysInMonth:function(){return H.utc([this.year(),this.month()+1,0]).date()},dayOfYear:function(a){var b=K((H(this).startOf("day")-H(this).startOf("year"))/864e5)+1;return null==a?b:this.add("d",a-b)},weekYear:function(a){var b=C(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==a?b:this.add("y",a-b)},isoWeekYear:function(a){var b=C(this,1,4).year;return null==a?b:this.add("y",a-b)},week:function(a){var b=this.lang().week(this);return null==a?b:this.add("d",7*(a-b))},isoWeek:function(a){var b=C(this,1,4).week;return null==a?b:this.add("d",7*(a-b))},weekday:function(a){var b=(this._d.getDay()+7-this.lang()._week.dow)%7;return null==a?b:this.add("d",a-b)},isoWeekday:function(a){return null==a?this.day()||7:this.day(this.day()%7?a:a-7)},lang:function(b){return b===a?this._lang:(this._lang=o(b),this)}},I=0;I<cb.length;I++)E(cb[I].toLowerCase().replace(/s$/,""),cb[I]);E("year","FullYear"),H.fn.days=H.fn.day,H.fn.months=H.fn.month,H.fn.weeks=H.fn.week,H.fn.isoWeeks=H.fn.isoWeek,H.fn.toJSON=H.fn.toISOString,H.duration.fn=f.prototype={_bubble:function(){var a,b,c,d,e=this._milliseconds,f=this._days,g=this._months,i=this._data;i.milliseconds=e%1e3,a=h(e/1e3),i.seconds=a%60,b=h(a/60),i.minutes=b%60,c=h(b/60),i.hours=c%24,f+=h(c/24),i.days=f%30,g+=h(f/30),i.months=g%12,d=h(g/12),i.years=d},weeks:function(){return h(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*~~(this._months/12)},humanize:function(a){var b=+this,c=B(b,!a,this.lang());return a&&(c=this.lang().pastFuture(b,c)),this.lang().postformat(c)},add:function(a,b){var c=H.duration(a,b);return this._milliseconds+=c._milliseconds,this._days+=c._days,this._months+=c._months,this._bubble(),this},subtract:function(a,b){var c=H.duration(a,b);return this._milliseconds-=c._milliseconds,this._days-=c._days,this._months-=c._months,this._bubble(),this},get:function(a){return a=m(a),this[a.toLowerCase()+"s"]()},as:function(a){return a=m(a),this["as"+a.charAt(0).toUpperCase()+a.slice(1)+"s"]()},lang:H.fn.lang};for(I in db)db.hasOwnProperty(I)&&(G(I,db[I]),F(I.toLowerCase()));G("Weeks",6048e5),H.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},H.lang("en",{ordinal:function(a){var b=a%10,c=1===~~(a%100/10)?"th":1===b?"st":2===b?"nd":3===b?"rd":"th";return a+c}}),M&&(module.exports=H),"undefined"==typeof ender&&(this.moment=H),"function"==typeof define&&define.amd&&define("moment",[],function(){return H})}.call(this),SimileAjax.History.enabled=!1,Neatline.module("Simile",{startWithParent:!1,define:function(a,b){a.ID="SIMILE",b.on("initialize:after",function(){a.start()}),a.addInitializer(function(){a.__collection=new b.Shared.Record.Collection,a.__view=new a.View,b.execute(a.ID+":load")})}}),Neatline.module("Simile",{startWithParent:!1,define:function(a,b){var c=function(){a.__collection.update({widget:"Simile"},function(a){e(a)})};b.commands.setHandler(a.ID+":load",c),b.vent.on("refresh",c);var d=function(b){a.__view.init(b),e(a.__collection)};b.commands.setHandler(a.ID+":restart",d);var e=function(b){a.__view.ingest(b)};b.commands.setHandler(a.ID+":ingest",e);var f=function(b){a.__view.focusByModel(b)};b.commands.setHandler(a.ID+":focusByModel",f);var g=function(a){"SIMILE"!==a.source&&f(a.model)};b.commands.setHandler(a.ID+":select",g),b.vent.on("select",g)}}),Neatline.module("Simile",{startWithParent:!1,define:function(a,b,c,d,e,f){a.View=b.Shared.Widget.View.extend({id:"simile",init:function(a){a=a||new b.Shared.Exhibit.Model,this.__initSimile(a),this.__initResize(),this.__initSelect(),this.__initFilter()},__initSimile:function(a){this.timeline&&this.timeline.dispose(),this.eventSource=new Timeline.DefaultEventSource;var b=a.get("simile_track_height"),c=a.get("simile_tape_height"),d=a.get("simile_interval_pixels"),e=a.get("simile_interval_unit"),f=a.get("simile_default_date");this.theme=Timeline.ClassicTheme.create(),this.theme.event.track.height=parseInt(b),this.theme.event.tape.height=parseInt(c),this.timeline=Timeline.create(this.el,[Timeline.createBandInfo({intervalUnit:Timeline.DateTime[e],intervalPixels:parseInt(d),timeZone:SimileAjax.DateTime.getTimezone(),eventSource:this.eventSource,theme:this.theme,width:"100%"})]),this.band=this.timeline.getBand(0),this.setCenterDate(f)},__initResize:function(){e(window).resize(f.bind(function(){this.timeline.layout()},this))},__initSelect:function(){this.band._eventPainter._showBubble=function(c,d,e){b.vent.trigger("select",{model:e.nModel,source:a.ID})}},__initFilter:function(){this.band.addOnScrollListener(f.bind(this.setFilter,this)),this.setFilter()},setFilter:function(){b.vent.trigger("setFilter",{source:a.ID,key:"simile",evaluator:f.bind(function(a){var b=this.band.getCenterVisibleDate(),c=a.get("after_date"),d=a.get("before_date"),e=!0;return c&&(e&=new Date(c)<b),d&&(e&=new Date(d)>b),Boolean(e)},this)})},ingest:function(a){this.eventSource.clear(),a.each(f.bind(this.buildEvent,this)),this.setEventColors()},buildEvent:function(a){if(a.get("start_date")){var b={text:a.get("title"),start:new Date(a.get("start_date")),color:a.get("fill_color")},c=a.get("end_date");c&&(b.end=new Date(c));var d=new Timeline.DefaultEventSource.Event(b);d.nModel=a,this.eventSource._events.add(d),this.eventSource._fire("onAddMany",[]),this.timeline.layout()}},setCenterDate:function(a){moment(String(a)).isValid()&&this.band.setCenterVisibleDate(new Date(a))},focusByModel:function(a){var b=moment(String(a.get("start_date"))),c=moment(String(a.get("end_date")));if(b.isValid()&&c.isValid()){var d=b.add("milliseconds",(c-b)/2);this.setCenterDate(d.toDate().toISOString())}else b.isValid()&&this.setCenterDate(b.toDate().toISOString())},setEventColors:function(){f.each(this.getEvents(),f.bind(function(a){e(this.getEventElement(a)).css("background",a.nModel.get("fill_color"))},this))},getEvents:function(){return this.eventSource._events._events._a},getEventElement:function(a){return this.band._eventPainter._eventIdToElmt[a._id]},clear:function(){this.eventSource.clear()}})}}),Neatline.module("Editor.Exhibit.Simile",function(a){a.ID="EDITOR:SIMILE",a.addInitializer(function(){a.__router=new a.Router,a.__view=new a.View})}),Neatline.module("Editor.Exhibit.Simile",function(a,b){var c=function(b){a.__view.showIn(b),a.__view.buildWidgets()};b.commands.setHandler(a.ID+":display",c)}),Neatline.module("Editor.Exhibit.Simile",function(a,b){a.Router=b.Editor.Router.extend({routes:{simile:"simile"},simile:function(){b.execute("EDITOR:display",["EDITOR:EXHIBIT","EDITOR:SIMILE"]),b.execute("EDITOR:EXHIBIT:activateTab","simile")}})}),Neatline.module("Editor.Exhibit.Simile",function(a,b,c,d,e,f){a.View=c.Neatline.View.extend({template:"#simile-form-template",className:"form-stacked simile",tagName:"form",events:{'click a[name="save"]':"save"},init:function(){this.model=new b.Shared.Exhibit.Model,rivets.bind(this.$el,{exhibit:this.model}),this.listenTo(this.model,"change",f.bind(function(){b.execute("SIMILE:restart",this.model)},this))},buildWidgets:function(){this.$("input.integer").draggableInput({type:"integer",min:0,max:500})},save:function(){this.model.save(null,{success:f.bind(this.onSaveSuccess,this),error:f.bind(this.onSaveError,this)})},onSaveSuccess:function(){b.execute("EDITOR:notifySuccess",SM_STRINGS.settings.save.success)},onSaveError:function(){b.execute("EDITOR:notifyError",SM_STRINGS.settings.save.error)}})});