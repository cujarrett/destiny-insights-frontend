import { getModData } from "./destiny-insights.js"

test("(Integration) api.destinyinsights.com - getModData", async () => {
  const modData = await getModData()
  expect(modData.length === 365)
  expect(modData[0].timestamp).toBeDefined
  expect(modData[0].name).toBeDefined
  expect(modData[0].type).toBeDefined
  expect(modData[0].description).toBeDefined
  expect(modData[0].icon).toBeDefined
  expect(modData[0].name).toBeDefined
  expect(modData[0].type).toBeDefined
  expect(modData[0].description).toBeDefined
  expect(modData[0].icon).toBeDefined
})
