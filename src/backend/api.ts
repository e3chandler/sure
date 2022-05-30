const BASE_URL= 'https://fe-interview-technical-challenge-api-git-main-sure.vercel.app'

export const getJSON = async <Type>(route: string) : Promise<Type> => {
  return await handleResponse(await fetch(getUrl(route)))
}

export const postJSON = async <Type>(route: string, body: Object) : Promise<Type> => {
  let params: RequestInit = {
    method: 'POST',
    body: JSON.stringify(body)
  }
  return await handleResponse(
    await fetch(getUrl(route), params)
  )
}

const getUrl = (route: string): string => `${BASE_URL}${route}`

const handleResponse = async (response: Response) => {
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }

  return await response.json()
}