export const user = (address: any) => ({
  type: "ADRESSPUBLIC",
  address,
});
export const detailsNFT = (detailsNft: any) => ({
  type: "DETAILSNFT",
  detailsNft,
});
export const emailUser= (addressEmail: any) => ({
  type: "ADRESSEMAIL",
  addressEmail,
});