// eslint-disable-next-line no-undef
module.exports.getInventoryItemDefinitionEndpoint = (manifestData) => {
  // eslint-disable-next-line no-console
  console.log("getInventoryItemDefinitionEndpoint called")
  // eslint-disable-next-line max-len
  const inventoryItemDefinitionPath = manifestData.Response.jsonWorldComponentContentPaths.en.DestinyInventoryItemDefinition
  const inventoryItemDefinitionEndpoint = `https://www.bungie.net${inventoryItemDefinitionPath}`
  return inventoryItemDefinitionEndpoint
}
