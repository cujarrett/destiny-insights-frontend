const getModData = async () => {
  // This endpoint has been archived. I'm loading the data from test data to demo

  // const endpoint = "https://api.banshee44mods.com/get-mod-data-for-last-year"
  // const options = {
  //   method: "GET",
  //   json: true
  // }

  // try {
  //   const rawResponse = await fetch(endpoint, options)
  //   const { data } = await rawResponse.json()
  //   return data
  // } catch (error) {
  //   throw new Error("https://api.banshee44mods.com is not available or not working.")
  // }
  const { data } = require("./test-data.json")
  return data
}

const getTimelineData = (data) => {
  const modsTypesByMonth = {}
  for (const date of data) {
    const yearMonth = date.timestamp.substring(0, 7)

    for (const mod of date.mods) {
      if (modsTypesByMonth[yearMonth] === undefined) {
        modsTypesByMonth[yearMonth] = {}
      }

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
      if (modsTypesByMonth[yearMonth][type]) {
        modsTypesByMonth[yearMonth][type] += 1
      } else {
        modsTypesByMonth[yearMonth][type] = 1
      }
    }
  }

  const result = []
  for (const [key, value] of Object.entries(modsTypesByMonth)) {
    result.push({ month: key, ...value })
  }
  return result.reverse()
}

const getTypeData = (data) => {
  const weaponMods = []
  const armorMods = []
  for (const date of data) {
    for (const mod of date.mods) {
      const type = mod.type
      if (type === "Legendary Weapon Mod") {
        weaponMods.push(mod.name)
      } else {
        armorMods.push(mod.name)
      }
    }
  }

  return { weaponMods: [...new Set(weaponMods)].length, armorMods: [...new Set(armorMods)].length }
}

const getCardData = (data) => {
  const modData = {}

  for (const { timestamp, mods } of data) {
    for (const mod of mods) {
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
          lastSold: new Date(timestamp).toISOString().split("T")[0]
        }
      }
    }
  }

  return Object.values(modData)
}

export { getCardData, getModData, getTimelineData, getTypeData }
