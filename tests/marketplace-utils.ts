import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  AuctionConfigUpdated,
  AuctionFinalized,
  BidPlaced,
  ContractBidTokenUpdated,
  FixedPriceFinalized,
  Initialized,
  MarketFeesUpdated,
  MarketRoyaltyUpdated,
  OfferFinalized,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  SaleCanceled,
  SaleCreated
} from "../generated/Marketplace/Marketplace"

export function createAuctionConfigUpdatedEvent(
  nexBidPercentInBasisPoint: BigInt,
  extensionDuration: BigInt
): AuctionConfigUpdated {
  let auctionConfigUpdatedEvent = changetype<AuctionConfigUpdated>(
    newMockEvent()
  )

  auctionConfigUpdatedEvent.parameters = new Array()

  auctionConfigUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "nexBidPercentInBasisPoint",
      ethereum.Value.fromUnsignedBigInt(nexBidPercentInBasisPoint)
    )
  )
  auctionConfigUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "extensionDuration",
      ethereum.Value.fromUnsignedBigInt(extensionDuration)
    )
  )

  return auctionConfigUpdatedEvent
}

export function createAuctionFinalizedEvent(
  saleId: BigInt,
  seller: Address,
  bidder: Address,
  royalty: BigInt,
  marketFee: BigInt,
  ownerRev: BigInt
): AuctionFinalized {
  let auctionFinalizedEvent = changetype<AuctionFinalized>(newMockEvent())

  auctionFinalizedEvent.parameters = new Array()

  auctionFinalizedEvent.parameters.push(
    new ethereum.EventParam("saleId", ethereum.Value.fromUnsignedBigInt(saleId))
  )
  auctionFinalizedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  auctionFinalizedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  auctionFinalizedEvent.parameters.push(
    new ethereum.EventParam(
      "royalty",
      ethereum.Value.fromUnsignedBigInt(royalty)
    )
  )
  auctionFinalizedEvent.parameters.push(
    new ethereum.EventParam(
      "marketFee",
      ethereum.Value.fromUnsignedBigInt(marketFee)
    )
  )
  auctionFinalizedEvent.parameters.push(
    new ethereum.EventParam(
      "ownerRev",
      ethereum.Value.fromUnsignedBigInt(ownerRev)
    )
  )

  return auctionFinalizedEvent
}

export function createBidPlacedEvent(
  saleId: BigInt,
  bidder: Address,
  bidAbount: BigInt,
  endTime: BigInt
): BidPlaced {
  let bidPlacedEvent = changetype<BidPlaced>(newMockEvent())

  bidPlacedEvent.parameters = new Array()

  bidPlacedEvent.parameters.push(
    new ethereum.EventParam("saleId", ethereum.Value.fromUnsignedBigInt(saleId))
  )
  bidPlacedEvent.parameters.push(
    new ethereum.EventParam("bidder", ethereum.Value.fromAddress(bidder))
  )
  bidPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "bidAbount",
      ethereum.Value.fromUnsignedBigInt(bidAbount)
    )
  )
  bidPlacedEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )

  return bidPlacedEvent
}

export function createContractBidTokenUpdatedEvent(
  contractAddress: Address,
  bidToken: Address
): ContractBidTokenUpdated {
  let contractBidTokenUpdatedEvent = changetype<ContractBidTokenUpdated>(
    newMockEvent()
  )

  contractBidTokenUpdatedEvent.parameters = new Array()

  contractBidTokenUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  contractBidTokenUpdatedEvent.parameters.push(
    new ethereum.EventParam("bidToken", ethereum.Value.fromAddress(bidToken))
  )

  return contractBidTokenUpdatedEvent
}

export function createFixedPriceFinalizedEvent(
  saleId: BigInt,
  seller: Address,
  buyer: Address,
  royalty: BigInt,
  marketFee: BigInt,
  ownerRev: BigInt
): FixedPriceFinalized {
  let fixedPriceFinalizedEvent = changetype<FixedPriceFinalized>(newMockEvent())

  fixedPriceFinalizedEvent.parameters = new Array()

  fixedPriceFinalizedEvent.parameters.push(
    new ethereum.EventParam("saleId", ethereum.Value.fromUnsignedBigInt(saleId))
  )
  fixedPriceFinalizedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  fixedPriceFinalizedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  fixedPriceFinalizedEvent.parameters.push(
    new ethereum.EventParam(
      "royalty",
      ethereum.Value.fromUnsignedBigInt(royalty)
    )
  )
  fixedPriceFinalizedEvent.parameters.push(
    new ethereum.EventParam(
      "marketFee",
      ethereum.Value.fromUnsignedBigInt(marketFee)
    )
  )
  fixedPriceFinalizedEvent.parameters.push(
    new ethereum.EventParam(
      "ownerRev",
      ethereum.Value.fromUnsignedBigInt(ownerRev)
    )
  )

  return fixedPriceFinalizedEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createMarketFeesUpdatedEvent(
  marketFeeBps: BigInt
): MarketFeesUpdated {
  let marketFeesUpdatedEvent = changetype<MarketFeesUpdated>(newMockEvent())

  marketFeesUpdatedEvent.parameters = new Array()

  marketFeesUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "marketFeeBps",
      ethereum.Value.fromUnsignedBigInt(marketFeeBps)
    )
  )

  return marketFeesUpdatedEvent
}

export function createMarketRoyaltyUpdatedEvent(
  maxRoyaltiyBps: BigInt
): MarketRoyaltyUpdated {
  let marketRoyaltyUpdatedEvent = changetype<MarketRoyaltyUpdated>(
    newMockEvent()
  )

  marketRoyaltyUpdatedEvent.parameters = new Array()

  marketRoyaltyUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "maxRoyaltiyBps",
      ethereum.Value.fromUnsignedBigInt(maxRoyaltiyBps)
    )
  )

  return marketRoyaltyUpdatedEvent
}

export function createOfferFinalizedEvent(
  saleId: BigInt,
  seller: Address,
  buyer: Address,
  royalty: BigInt,
  marketFee: BigInt,
  ownerRev: BigInt
): OfferFinalized {
  let offerFinalizedEvent = changetype<OfferFinalized>(newMockEvent())

  offerFinalizedEvent.parameters = new Array()

  offerFinalizedEvent.parameters.push(
    new ethereum.EventParam("saleId", ethereum.Value.fromUnsignedBigInt(saleId))
  )
  offerFinalizedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  offerFinalizedEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  offerFinalizedEvent.parameters.push(
    new ethereum.EventParam(
      "royalty",
      ethereum.Value.fromUnsignedBigInt(royalty)
    )
  )
  offerFinalizedEvent.parameters.push(
    new ethereum.EventParam(
      "marketFee",
      ethereum.Value.fromUnsignedBigInt(marketFee)
    )
  )
  offerFinalizedEvent.parameters.push(
    new ethereum.EventParam(
      "ownerRev",
      ethereum.Value.fromUnsignedBigInt(ownerRev)
    )
  )

  return offerFinalizedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createSaleCanceledEvent(
  saleId: BigInt,
  reason: string
): SaleCanceled {
  let saleCanceledEvent = changetype<SaleCanceled>(newMockEvent())

  saleCanceledEvent.parameters = new Array()

  saleCanceledEvent.parameters.push(
    new ethereum.EventParam("saleId", ethereum.Value.fromUnsignedBigInt(saleId))
  )
  saleCanceledEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromString(reason))
  )

  return saleCanceledEvent
}

export function createSaleCreatedEvent(
  saleId: BigInt,
  saleType: i32,
  seller: Address,
  contractAddress: Address,
  tokenIds: Array<BigInt>,
  values: Array<BigInt>,
  bidToken: Address,
  startTime: BigInt,
  duration: BigInt,
  extensionDuration: BigInt,
  endTime: BigInt,
  minPrice: BigInt
): SaleCreated {
  let saleCreatedEvent = changetype<SaleCreated>(newMockEvent())

  saleCreatedEvent.parameters = new Array()

  saleCreatedEvent.parameters.push(
    new ethereum.EventParam("saleId", ethereum.Value.fromUnsignedBigInt(saleId))
  )
  saleCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "saleType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(saleType))
    )
  )
  saleCreatedEvent.parameters.push(
    new ethereum.EventParam("seller", ethereum.Value.fromAddress(seller))
  )
  saleCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )
  saleCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenIds",
      ethereum.Value.fromUnsignedBigIntArray(tokenIds)
    )
  )
  saleCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )
  saleCreatedEvent.parameters.push(
    new ethereum.EventParam("bidToken", ethereum.Value.fromAddress(bidToken))
  )
  saleCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "startTime",
      ethereum.Value.fromUnsignedBigInt(startTime)
    )
  )
  saleCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "duration",
      ethereum.Value.fromUnsignedBigInt(duration)
    )
  )
  saleCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "extensionDuration",
      ethereum.Value.fromUnsignedBigInt(extensionDuration)
    )
  )
  saleCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "endTime",
      ethereum.Value.fromUnsignedBigInt(endTime)
    )
  )
  saleCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "minPrice",
      ethereum.Value.fromUnsignedBigInt(minPrice)
    )
  )

  return saleCreatedEvent
}
