import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { AuctionConfigUpdated } from "../generated/schema"
import { AuctionConfigUpdated as AuctionConfigUpdatedEvent } from "../generated/Marketplace/Marketplace"
import { handleAuctionConfigUpdated } from "../src/marketplace"
import { createAuctionConfigUpdatedEvent } from "./marketplace-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let nexBidPercentInBasisPoint = BigInt.fromI32(234)
    let extensionDuration = BigInt.fromI32(234)
    let newAuctionConfigUpdatedEvent = createAuctionConfigUpdatedEvent(
      nexBidPercentInBasisPoint,
      extensionDuration
    )
    handleAuctionConfigUpdated(newAuctionConfigUpdatedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AuctionConfigUpdated created and stored", () => {
    assert.entityCount("AuctionConfigUpdated", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AuctionConfigUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "nexBidPercentInBasisPoint",
      "234"
    )
    assert.fieldEquals(
      "AuctionConfigUpdated",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "extensionDuration",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
