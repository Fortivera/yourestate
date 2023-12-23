import { postData } from "@/app/dashboard/createproperty/page"

// fetchData.ts
export default async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}