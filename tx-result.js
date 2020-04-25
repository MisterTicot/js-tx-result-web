!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.txResult=e():t.txResult=e()}(window,(function(){return function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){"use strict";var n=r(1),o=r(3),i=r(4),a=r(5),s=r(6),u=function(){function t(e){if(i(this,t),e instanceof Error&&e.response&&(e=e.response),e.hash)c(this,e);else{if(!e.data||!e.data.extras)throw new Error("Not a Horizon txResponse",e);h(this,e)}}return a(t,null,[{key:"fromPromise",value:function(e){return e.finally((function(e){return new t(e)}))}}]),t}();function c(t,e){t.validated=!0,t.title="The transaction has been validated",c.field.forEach((function(r){return t[r]=e[r]})),t.link=e._links.transaction.href}function h(t,e){t.validated=!1;var r=e.data;return t.title="The transaction has been rejected",t.codes=r.extras.result_codes,t.errors=h.errors(t),t}function l(t,e,r){var n=Object.create(u.prototype);return n.validated=r,n.validated?(n.title="The transaction has been submitted to ".concat(t),n.hash=e.transaction.hash):(n.title="The transaction has been rejected by ".concat(t),n.errors=[]),n}c.field=["hash","ledger","offerResults"],h.errors=function(t){return t.codes.operations?t.codes.operations.map((function(t){return"op_success"!==t&&u.describeOpCode(t)})).map((function(t,e){return t&&"Operation ".concat(e+1,": ").concat(t,".")})).filter((function(t){return t})):[u.describeTxCode(t.codes.transaction)]},u.describeTxCode=function(t){return s.tx[t.substr(3)]||"An unknown error occurred: tx_".concat(t)},u.describeOpCode=function(t){return s.op[t.substr(3)]||"An unknown error occurred: op_".concat(t)},u.forCosmicLink=function(){var t=o(n.mark((function t(e){var r,o,i,a,s,c;return n.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.send().catch((function(t){return t.response||t}));case 2:if(!(r=t.sent).stellarGuard){t.next=7;break}return t.abrupt("return",l("StellarGuard.me",e,!0));case 7:if(!(r.config&&r.config.url&&r.config.url.match(/^https:\/\/(\w+\.)?stellarguard\.me/))){t.next=13;break}return o=l("StellarGuard.me",e,!1),r.data.message&&o.errors.push(r.data.message),t.abrupt("return",o);case 13:if(!e.callback){t.next=21;break}return i=e.callback.replace(/^https?:\/\/([^/]*)\/.*/,"$1"),a=200===r.status,s=l(i,e,a),a||(c=r.statusText||r.message)&&s.errors.push(c),t.abrupt("return",s);case 21:return t.abrupt("return",new u(r));case 22:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.exports=u},function(t,e,r){t.exports=r(2)},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function s(t,e,r,n){var o=e&&e.prototype instanceof h?e:h,i=Object.create(o.prototype),a=new x(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var s=_(a,r);if(s){if(s===c)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var h=u(t,e,r);if("normal"===h.type){if(n=r.done?"completed":"suspendedYield",h.arg===c)continue;return{value:h.arg,done:r.done}}"throw"===h.type&&(n="completed",r.method="throw",r.arg=h.arg)}}}(t,r,a),i}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var c={};function h(){}function l(){}function f(){}var d={};d[o]=function(){return this};var p=Object.getPrototypeOf,v=p&&p(p(T([])));v&&v!==e&&r.call(v,o)&&(d=v);var y=f.prototype=h.prototype=Object.create(d);function m(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function g(t,e){var n;this._invoke=function(o,i){function a(){return new e((function(n,a){!function n(o,i,a,s){var c=u(t[o],t,i);if("throw"!==c.type){var h=c.arg,l=h.value;return l&&"object"==typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,a,s)}),(function(t){n("throw",t,a,s)})):e.resolve(l).then((function(t){h.value=t,a(h)}),(function(t){return n("throw",t,a,s)}))}s(c.arg)}(o,i,n,a)}))}return n=n?n.then(a,a):a()}}function _(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,_(t,e),"throw"===e.method))return c;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return c}var n=u(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,c;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,c):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,c)}function b(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function x(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(b,this),this.reset(!0)}function T(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:void 0,done:!0}}return l.prototype=y.constructor=f,f.constructor=l,f[a]=l.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===l||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,f):(t.__proto__=f,a in t||(t[a]="GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},m(g.prototype),g.prototype[i]=function(){return this},t.AsyncIterator=g,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new g(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(y),y[a]="Generator",y[o]=function(){return this},y.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=T,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,c):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),c},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),c}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;w(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:T(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),c}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e){function r(t,e,r,n,o,i,a){try{var s=t[i](a),u=s.value}catch(t){return void r(t)}s.done?e(u):Promise.resolve(u).then(n,o)}t.exports=function(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function s(t){r(a,o,i,s,u,"next",t)}function u(t){r(a,o,i,s,u,"throw",t)}s(void 0)}))}}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,r){"use strict";var n=t.exports;n.tx={failed:"The transaction failed",too_early:"The transaction is not valid yet",too_late:"The transaction is not valid anymore",missing_operation:"The transaction does not have any operation",bad_seq:"The transaction sequence number is invalid",bad_auth:"The transaction doesn't have enough signatures",insufficient_balance:"There are not enough funds to pay for the transaction fees",no_account:"The source account does not exist",insufficient_fee:"The transaction fees are too small",bad_auth_extra:"The transaction has too many signatures",internal_error:"An unknown error occurred"},n.op={success:"The operation has been validated",not_supported:"This feature is not supported anymore",malformed:"The operation has invalid inputs",underfunded:"The source does not have enough funds",low_reserve:"The source does not have enough funds to pay for reserve fee",already_exist:"The destination account already exists",src_no_trust:"The source does not trust this asset",src_not_authorized:"The source is not authorized to send this asset",no_destination:"The destination does not exist",no_trust:"The destination does not trust this asset",not_authorized:"The destination is not authorized to receive this asset",line_full:"The trust limit for this asset is too low",no_issuer:"The issuer of the asset does not exist",too_few_offers:"There is no path connecting `send asset` to `destination asset`",offer_cross_self:"The source would cross its own offer",under_destmin:"The destination amount would be under the requested minimum",over_sendmax:"The send amount would be over the requested maximum",sell_no_trust:"The source does not trust `selling asset`",buy_no_trust:"The source does not trust `buying asset`",buy_not_authorized:"The source is not authorized to buy this asset",sell_not_authorized:"The source is not authorized to sell this asset",sell_no_issuer:"The issuer of `selling asset` does not exist",buy_no_issuer:"The issuer of `buying asset` does not exist",offer_not_found:"There is no offer with that `offerId`",too_may_signers:"The source already has the maximum of 20 signers",bad_flags:"The flags set and/or cleared are invalid by themselves or in combination",invalid_inflation:"The inflation destination does not exist",options_cant_change:"The source can no longer change this option",unknown_flag:"This flag is unknown",threshold_out_of_range:"The value of a key weight or threshold is out of range",bad_signer:"The master key cannot be added as an additional signer",invalid_home_domain:"The home domain is malformed",invalid_limit:"The limit is too low for current the current balance and liabilities",self_not_allowed:"The source already trust its own asset",no_trust_line:"The target account does not trust the source",trust_not_required:"The source has not set the `auth_required` flag",trust_cant_revoke:"The source is not allowed to revoke this trustline",immutable_set:"The source has the `auth_immutable` flag set",has_sub_entries:"The source account still has opened trustlines or offers",merge_seqnum_too_far:"The source sequence number is too high",merge_dest_full:"The destination cannot receive the source Lumens",not_time:"Inflation can only run once a week",not_supported_yet:"The network does not support this feature yet",not_found:"The data entry does not exist",invalid_name:"The data entry name is not valid",bad_seq:"The sequence number is invalid"}}])}));
//# sourceMappingURL=tx-result.js.map