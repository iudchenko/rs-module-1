import { API_URL } from './constants';

export async function fetchData(searchTerm = '') {
  const url = searchTerm
    ? `${API_URL}?search=${searchTerm.toLowerCase().trim()}`
    : `${API_URL}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error(err);
  }
}
