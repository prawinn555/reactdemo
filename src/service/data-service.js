
var baseUrl = 
   'http://localhost:1234/'; 
  //  'https://generic-db.glitch.me/';

/**
 * ex searchText='type=FORM'
 */
export async function findItems(searchText) {
  console.log(`filter with ${searchText}`);

  let path = 'items' + (searchText? '?'+searchText : '');
  let url = baseUrl + path;
  let res = await fetch(url);

  let json = await res.json();
  console.log(path +' => ', json);

  return json;
};

export async function findItemById(id) {
  console.log(`find by id ${id}`);

  let path = 'items/' +id;
  let url = baseUrl + path;
  let res = await fetch(url);

  let json = await res.json();
  console.log(path +' => ', json);

  return json;
};


export async function deleteItemById(id) {
  console.log(`delete by id ${id}`);

  let path = 'items/' +id+ '/delete';
  let url = baseUrl + path;
  let res = await fetch(url, {
    method: 'DELETE',
    mode: 'cors',
  });

  let json = await res.json();
  console.log(path +' => ', json);

  return json;
};



export async function saveItem(item) {
  console.log(`save`, item);

  let path = 'items/save';
  let url = baseUrl + path;
  let res = await fetch(url,  {
    method: 'POST',
    headers: new Headers({
      "Content-Type": "application/json",
    }),
    body: JSON.stringify(item)
  });

  let json = await res.json();
  console.log(path +' => ', json);

  return json;
};


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

