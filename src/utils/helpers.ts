export function formatURL(searchTerm: string, page: number) {
  return `${searchTerm ? `?search=${searchTerm.toLowerCase().trim()}` : ''}${
    page === 1 ? '' : `${searchTerm ? `&` : `?`}page=${page}`
  }`;
}
