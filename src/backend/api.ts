const BASE_URL= 'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app'

export const getJSON = async (route: string) => {
  const response = await fetch(`${BASE_URL}${route}`)

  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return await response.json()
}