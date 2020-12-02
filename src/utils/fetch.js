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

export async function fetchWithYearTermOutcomeAndInstructor(
  baseURL,
  year,
  term,
  so,
  instructor
) {
  const url = `${baseURL}?year=${year}&term=${term}&so=${so}&instructor=${instructor}`;
  const response = await fetch(url);
  return response.json();
}
