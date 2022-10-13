import {
  AuctionConfigUpdated as AuctionConfigUpdatedEvent,
  AuctionFinalized as AuctionFinalizedEvent,
  BidPlaced as BidPlacedEvent,
  ContractBidTokenUpdated as ContractBidTokenUpdatedEvent,
  FixedPriceFinalized as FixedPriceFinalizedEvent,
  Initialized as InitializedEvent,
  MarketFeesUpdated as MarketFeesUpdatedEvent,
  MarketRoyaltyUpdated as MarketRoyaltyUpdatedEvent,
  OfferFinalized as OfferFinalizedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  SaleCanceled as SaleCanceledEvent,
  SaleCreated as SaleCreatedEvent
} from "../generated/Marketplace/Marketplace"
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
} from "../generated/schema"

export function handleAuctionConfigUpdated(
  event: AuctionConfigUpdatedEvent
): void {
  let entity = new AuctionConfigUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.nexBidPercentInBasisPoint = event.params.nexBidPercentInBasisPoint
  entity.extensionDuration = event.params.extensionDuration
  entity.save()
}

export function handleAuctionFinalized(event: AuctionFinalizedEvent): void {
  let entity = new AuctionFinalized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.saleId = event.params.saleId
  entity.seller = event.params.seller
  entity.bidder = event.params.bidder
  entity.royalty = event.params.royalty
  entity.marketFee = event.params.marketFee
  entity.ownerRev = event.params.ownerRev
  entity.save()
}

export function handleBidPlaced(event: BidPlacedEvent): void {
  let entity = new BidPlaced(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.saleId = event.params.saleId
  entity.bidder = event.params.bidder
  entity.bidAbount = event.params.bidAbount
  entity.endTime = event.params.endTime
  entity.save()
}

export function handleContractBidTokenUpdated(
  event: ContractBidTokenUpdatedEvent
): void {
  let entity = new ContractBidTokenUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.contractAddress = event.params.contractAddress
  entity.bidToken = event.params.bidToken
  entity.save()
}

export function handleFixedPriceFinalized(
  event: FixedPriceFinalizedEvent
): void {
  let entity = new FixedPriceFinalized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.saleId = event.params.saleId
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.royalty = event.params.royalty
  entity.marketFee = event.params.marketFee
  entity.ownerRev = event.params.ownerRev
  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.version = event.params.version
  entity.save()
}

export function handleMarketFeesUpdated(event: MarketFeesUpdatedEvent): void {
  let entity = new MarketFeesUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.marketFeeBps = event.params.marketFeeBps
  entity.save()
}

export function handleMarketRoyaltyUpdated(
  event: MarketRoyaltyUpdatedEvent
): void {
  let entity = new MarketRoyaltyUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.maxRoyaltiyBps = event.params.maxRoyaltiyBps
  entity.save()
}

export function handleOfferFinalized(event: OfferFinalizedEvent): void {
  let entity = new OfferFinalized(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.saleId = event.params.saleId
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.royalty = event.params.royalty
  entity.marketFee = event.params.marketFee
  entity.ownerRev = event.params.ownerRev
  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole
  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender
  entity.save()
}

export function handleSaleCanceled(event: SaleCanceledEvent): void {
  let entity = new SaleCanceled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.saleId = event.params.saleId
  entity.reason = event.params.reason
  entity.save()
}

export function handleSaleCreated(event: SaleCreatedEvent): void {
  let entity = new SaleCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.saleId = event.params.saleId
  entity.saleType = event.params.saleType
  entity.seller = event.params.seller
  entity.contractAddress = event.params.contractAddress
  entity.tokenIds = event.params.tokenIds
  entity.values = event.params.values
  entity.bidToken = event.params.bidToken
  entity.startTime = event.params.startTime
  entity.duration = event.params.duration
  entity.extensionDuration = event.params.extensionDuration
  entity.endTime = event.params.endTime
  entity.minPrice = event.params.minPrice
  entity.save()
}
