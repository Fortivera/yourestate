import { postData } from "@/app/dashboard/createproperty/page"

async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}