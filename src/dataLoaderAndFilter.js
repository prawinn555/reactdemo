import dataList from "./dataList.json";

export default function filterData(searchText, maxResults) {
  return dataList
    .filter(data => {
      if (data.title.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }
      if (data.keywords.includes(searchText)) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
}
