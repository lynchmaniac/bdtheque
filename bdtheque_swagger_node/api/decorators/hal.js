'use strict';

export default function hal() {
  return function(target) {
  	var req = arguments[0];
  	var res = arguments[1];
  	console.log(req);
  	console.log(res);
  }
 }