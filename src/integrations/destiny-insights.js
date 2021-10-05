const fetch = require("node-fetch")
const cachedData = require("../data/cached-mods.json")

const getModData = async () => {
  const endpoint = "https://api.destinyinsights.com/mod-data-for-last-year"
  const options = {
    method: "GET",
    json: true
  }

  try {
    const rawResponse = await fetch(endpoint, options)
    const { data } = await rawResponse.json()

    const cachedMods = {}
    for (const value of Object.values(cachedData)) {
      cachedMods[value.name] = {
        type: value.type,
        description: value.description,
        icon: value.icon
      }
    }

    for (const mod of data) {
      mod.type = cachedMods[mod.name].type
      mod.description = cachedMods[mod.name].description
      mod.icon = cachedMods[mod.name].icon
    }

    return data
  } catch (error) {
    throw new Error("api.destinyinsights.com/mod-data-for-last-year is not available or not working.")
  }
}

const getCardData = (data) => {
  const modData = {}

  for (const mod of data) {
    if (modData[mod.name]) {
      modData[mod.name].timesSold += 1
    } else {
      let type = mod.type
      if (type.includes("Armor")) {
        type = "Armor Mod"
      }
      if (type === "Legendary Weapon Mod") {
        type = "Weapon Mod"
      }
      if (type === "Common Charged with Light Mod") {
        type = "Charged with Light Mod"
      }
      if (type === "Common Warmind Cell Mod") {
        type = "Warmind Cell Mod"
      }

      modData[mod.name] = {
        name: mod.name,
        type: type,
        description: mod.description,
        icon: mod.icon,
        timesSold: 1,
        // eslint-disable-next-line newline-per-chained-call
        lastSold: new Date(mod.timestamp).toISOString().split("T")[0]
      }
    }
  }

  const result = Object.values(modData)
  return Object.values(result)
}

const getChargedWithLightModTimelineData = (data) => {
  const modsTypesByName = {}
  for (const mod of data) {
    let type = mod.type
    if (type === "Common Charged with Light Mod") {
      type = "Charged with Light Mod"
    }
    if (type === "Charged with Light Mod") {
      if (modsTypesByName[mod.name] === undefined) {
        modsTypesByName[mod.name] = { timesSold: 0 }
      }
      modsTypesByName[mod.name].timesSold += 1
    }
  }

  const result = []
  for (const [key, value] of Object.entries(modsTypesByName)) {
    result.push({ name: key, ...value })
  }
  return result
}

const getWarmindCellModTimelineData = (data) => {
  const modsTypesByName = {}
  for (const mod of data) {
    let type = mod.type
    if (type === "Common Warmind Cell Mod") {
      type = "Warmind Cell Mod"
    }
    if (type === "Warmind Cell Mod") {
      if (modsTypesByName[mod.name] === undefined) {
        modsTypesByName[mod.name] = { timesSold: 0 }
      }
      modsTypesByName[mod.name].timesSold += 1
    }
  }

  const result = []
  for (const [key, value] of Object.entries(modsTypesByName)) {
    result.push({ name: key, ...value })
  }
  return result
}

export { getCardData, getModData, getChargedWithLightModTimelineData, getWarmindCellModTimelineData }
