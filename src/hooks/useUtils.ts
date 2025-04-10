export default function () {
  const getAssetsFile = (url: string) => {
    console.log(`../img/faze-clan/${url}`)
    return new URL(`../img/faze-clan/${url}`, import.meta.url).href
  }
  
  function getPicFile(url) {
    return new URL(url, import.meta.url).href
  }
  return { getAssetsFile, getPicFile }
}
