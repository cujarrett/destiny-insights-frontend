// eslint-disable-next-line no-undef
module.exports.getSandboxPerkDefinitionEndpoint = (manifestData) => {
  // eslint-disable-next-line no-console
  console.log("getSandboxPerkDefinitionEndpoint called")
  // eslint-disable-next-line max-len
  const sandboxPerkDefinitionPath = manifestData.Response.jsonWorldComponentContentPaths.en.DestinySandboxPerkDefinition
  const sandboxPerkDefinitionEndpoint = `https://www.bungie.net${sandboxPerkDefinitionPath}`
  return sandboxPerkDefinitionEndpoint
}
