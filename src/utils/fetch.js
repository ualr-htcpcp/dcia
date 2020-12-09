export async function fetcher(url) {
  const response = await fetch(url);
  return response.json();
}

export async function fetchWithYearAndTerm(baseURL, year, term, amount = null) {
  const url = amount
    ? `${baseURL}?year=${year}&term=${term}&amount=${amount}`
    : `${baseURL}?year=${year}&term=${term}`;
  const response = await fetch(url);
  return response.json();
}

export async function fetchWithCourseId(baseURL, courseId) {
  const url = `${baseURL}?id=${courseId}`;

  const response = await fetch(url);
  return response.json();
}
