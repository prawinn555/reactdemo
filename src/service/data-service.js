import {serviceUrl} from '../env.js';



/**
 * ex searchText='type=FORM'
 */
export async function findItems(searchText) {
  console.log(`filter with ${searchText}`);

  let path = 'items' + (searchText? '?'+searchText : '');
  let url = serviceUrl + path;
  let res = await fetch(url);

  let json = await res.json();
  console.log(path +' => ', json);

  return json;
};

export async function findItemById(id) {
  console.log(`find by id ${id}`);

  let path = 'items/' +id;
  let url = serviceUrl + path;
  let res = await fetch(url);

  let json = await res.json();
  console.log(path +' => ', json);

  return json;
};


export async function deleteItemById(id) {
  console.log(`delete by id ${id}`);

  let path = 'items/' +id+ '/delete';
  let url = serviceUrl + path;
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
  let url = serviceUrl + path;
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





