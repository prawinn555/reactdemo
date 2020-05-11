export function getQueryStringValue (key) {  
	  return decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent(key).replace(/[.+*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));  
	} ;
	
export function formatJson(content) {
	  let obj;
	  if(!content) {
		  return null;
	  }
	  try {
		  obj = JSON.parse(content);
	  } catch(err) {
		  console.log('json invalide', err);
		  obj = {
			  jsonInvalide : (''+err)
		  };
	  }
	  console.log('formatJson', obj);
	  return (typeof obj === 'object')? obj : {
		  nonJsonData : ''+obj
	  };
  };

export function getTimeStamp() {
		let format = (mm) => (mm>9 ? '' : '0') + mm;
		let d = new Date();
		var mm = d.getMonth() + 1; // getMonth() is zero-based
		var dd = format(d.getDate());
		var hh = format(d.getHours());
		var mi = format(d.getMinutes());
		var ss = format(d.getSeconds());
		return [d.getFullYear(),
				mm,
				dd,
				'_',
				hh,
				mi,
				ss,
				].join('')
	};