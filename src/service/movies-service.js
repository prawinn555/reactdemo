import {moviesServiceUrl} from '../env.js';



/**
 * ex searchText='type=FORM'
 */
export async function findMovies(filter, limit) {
  let params = {filter, limit};
  console.log(`findMovies `, params);

  let url = new URL(moviesServiceUrl);
  
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  let res = await fetch(url);
  let json = await res.json();
  console.log('result ', json);

  return json;
};

