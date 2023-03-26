/** @format */

export const getMetadataViews = () => {
  return `
  import TopShot from 0x0b2a3299cc857e29
  import MetadataViews from 0x1d7e57aa55817448

  pub fun main(address: Address, id: UInt64): TopShot.TopShotMomentMetadataView {

    let account = getAccount(address)

    let collectionRef = account.getCapability(/public/MomentCollection)
                            .borrow<&{TopShot.MomentCollectionPublic}>()!

    let nft = collectionRef.borrowMoment(id: id)!

    // Get the Top Shot specific metadata for this NFT
    let view = nft.resolveView(Type<TopShot.TopShotMomentMetadataView>())!

    let metadata = view as! TopShot.TopShotMomentMetadataView

    return metadata
  }
  `;
};
