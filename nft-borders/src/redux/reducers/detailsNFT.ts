const detailsNFT= (state = { detailsNft: "" }, action: any) => {
    switch (action.type) {



        case "DETAILSNFT":
            //console.log(" action1 => " + action.type);
            //   return state;

            return { detailsNft: action.detailsNft };



        default:
            return state
    }
}
export default detailsNFT;