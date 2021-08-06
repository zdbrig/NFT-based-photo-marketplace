const emailUser = (state = { addressEmail: "" }, action: any) => {
    switch (action.type) {



        case "ADRESSEMAIL":
          

            return { address: action.addressEmail };



        default:
            return state
    }
}
export default emailUser;