const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args))

// eslint-disable-next-line no-undef
module.exports.getManifest = async () => {
  // eslint-disable-next-line no-console
  console.log("getManifest called")
  const manifestEndpoint = "https://www.bungie.net/Platform/Destiny2/Manifest/"
  let rawManifest = await fetch(manifestEndpoint)
  let manifest = await rawManifest.json()
  let isValidManifestData = manifest.Message === "Ok"
  const maxRetries = 5
  let manifestRetries = 0
  if (!isValidManifestData) {
    while (manifestRetries < maxRetries && !isValidManifestData) {
      manifestRetries += 1
      rawManifest = await fetch(manifestEndpoint)
      manifest = await rawManifest.json()
      isValidManifestData = manifest.Message === "Ok"
    }

    if (manifestRetries === maxRetries && !isValidManifestData) {
      throw new Error(`The Bungie manifest failed to load ${maxRetries} times`)
    }
  }
  return { manifest, manifestRetries }
}
