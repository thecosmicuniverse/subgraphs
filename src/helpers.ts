import { Address } from '@graphprotocol/graph-ts';
import { User, Contract, BidToken } from '../generated/schema';

export function handleCreateUser(address: Address): Address {
  let entity = User.load(address)
  if (entity == null) {
    entity = new User(address)
    entity.save()
  }
  return address
}

export function handleCreateContract(address: Address): Address {
  let entity = Contract.load(address)
  if (entity == null) {
    entity = new Contract(address)
    entity.save()
  }
  return address
}

export function handleCreateBidToken(address: Address): Address {
  let entity = BidToken.load(address)
  if (entity == null) {
    entity = new BidToken(address)
    entity.save()
  }
  return address
}