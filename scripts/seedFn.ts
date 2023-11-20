export async function getRandomDogImage() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    const imageUrl = data.message
    const arr = imageUrl.split('/')
    const name = arr[arr.length - 2]
    return { imageUrl, name } // 這裡是狗狗圖片的 URL
  } catch (error) {
    console.error('Error fetching dog image:', error)
  }
}
export async function getRandomCatImage() {
  try {
    const response = await fetch('https://api.thecatapi.com/v1/images/search')

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const [data] = await response.json()
    const imageUrl = data.url
    const name = data.id

    return { imageUrl, name }
  } catch (error) {
    console.error('Error fetching cat image:', error)
  }
}
