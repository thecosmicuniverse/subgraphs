import { BigInt, Bytes } from '@graphprotocol/graph-ts';
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
  SaleCanceled as SaleCanceledEvent,
  SaleCreated as SaleCreatedEvent,
} from '../generated/Marketplace/Marketplace';
import {
  Sale,
  Config,
  Bid,
  Cancellation,
  Contract,
  BidToken,
  ContractBidToken,
  FinalizedSaleDetails,
} from "../generated/schema"
import { handleCreateBidToken, handleCreateContract, handleCreateUser } from './helpers';



export function handleAuctionConfigUpdated(event: AuctionConfigUpdatedEvent): void {
  let entity = Config.load(event.address)
  if (entity == null) {
    entity = new Config(event.address)
    entity.marketFeeBps = BigInt.zero()
    entity.royaltyBps = BigInt.zero()
  }
  entity.nextBidPercentInBasisPoint = event.params.nexBidPercentInBasisPoint
  entity.extensionDuration = event.params.extensionDuration
  entity.save()
}

export function handleAuctionFinalized(event: AuctionFinalizedEvent): void {
  let entity =  new FinalizedSaleDetails(event.params.saleId.toString())
  entity.royalty = event.params.royalty
  entity.marketFee = event.params.marketFee
  entity.ownerRev = event.params.ownerRev
  entity.sale = event.params.saleId.toString()
  entity.save()
}

export function handleBidPlaced(event: BidPlacedEvent): void {
  let entity = new Bid(event.params.saleId.toString() + '-' + event.params.bidder.toHex())
  entity.sale = event.params.saleId.toString();
  entity.bidder = handleCreateUser(event.params.bidder)
  entity.bidAmount = event.params.bidAbount
  entity.endTime = event.params.endTime
  entity.timestamp = event.block.timestamp
  entity.save()
}

export function handleContractBidTokenUpdated(event: ContractBidTokenUpdatedEvent): void {
  let id = event.params.contractAddress.toHex() + '-' + event.params.bidToken.toHex()
  let entity = ContractBidToken.load(id)
  if (entity == null) {
    entity = new ContractBidToken(id)
  }

  let contract = Contract.load(event.params.contractAddress)
  if (contract == null) {
    contract = new Contract(event.params.contractAddress)
    contract.save()
  }

  let bidToken = BidToken.load(event.params.bidToken)
  if (bidToken == null) {
    bidToken = new BidToken(event.params.bidToken)
    bidToken.save()
  }
  entity.contract = handleCreateContract(event.params.contractAddress);
  entity.bidToken = handleCreateBidToken(event.params.bidToken);
  entity.timestamp = event.block.timestamp
  entity.save()
}

export function handleFixedPriceFinalized(event: FixedPriceFinalizedEvent): void {
  let entity =  new FinalizedSaleDetails(event.params.saleId.toString())
  entity.royalty = event.params.royalty
  entity.marketFee = event.params.marketFee
  entity.ownerRev = event.params.ownerRev
  entity.timestamp = event.block.timestamp
  entity.sale = event.params.saleId.toString();
  entity.save()
}

export function handleMarketFeesUpdated(event: MarketFeesUpdatedEvent): void {
  let entity = Config.load(event.address)
  if (entity == null) {
    entity = new Config(event.address)
  }
  entity.marketFeeBps = event.params.marketFeeBps
  entity.save()
}

export function handleMarketRoyaltyUpdated(event: MarketRoyaltyUpdatedEvent): void {
  let entity = Config.load(event.address)
  if (entity == null) {
    entity = new Config(event.address)
  }

  entity.royaltyBps = event.params.maxRoyaltiyBps
  entity.save()

}

export function handleOfferFinalized(event: OfferFinalizedEvent): void {
  let entity =  new FinalizedSaleDetails(event.params.saleId.toString())
  entity.royalty = event.params.royalty
  entity.marketFee = event.params.marketFee
  entity.ownerRev = event.params.ownerRev
  entity.timestamp = event.block.timestamp
  entity.sale = event.params.saleId.toString();
  entity.save()
}

export function handleSaleCanceled(event: SaleCanceledEvent): void {
  let entity = new Cancellation(event.params.saleId.toString());
  entity.sale = entity.id;
  entity.reason = event.params.reason
  entity.timestamp = event.block.timestamp
  entity.save()
}

export function handleSaleCreated(event: SaleCreatedEvent): void {
  let entity = new Sale(event.params.saleId.toString());
  entity.saleId = event.params.saleId
  entity.saleType = event.params.saleType == 0 ? 'AUCTION' : event.params.saleType == 1 ? 'FIXED' : 'OFFER'
  entity.seller = handleCreateUser(event.params.seller)
  entity.contract = handleCreateContract(event.params.contractAddress);
  entity.bidToken = handleCreateBidToken(event.params.bidToken);
  entity.tokenIds = event.params.tokenIds
  entity.values = event.params.values
  entity.startTime = event.params.startTime
  entity.duration = event.params.duration
  entity.extensionDuration = event.params.extensionDuration
  entity.endTime = event.params.endTime
  entity.minPrice = event.params.minPrice
  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Config(event.address);
  entity.marketFeeBps = BigInt.zero()
  entity.nextBidPercentInBasisPoint = BigInt.zero()
  entity.extensionDuration = BigInt.zero()
  entity.royaltyBps = BigInt.zero()
  entity.save()
}
