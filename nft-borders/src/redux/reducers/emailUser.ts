const emailUser = (state = { addressEmail: "" }, action: any) => {
    switch (action.type) {



        case "ADRESSEMAIL":
          

            return { addressEmail: action.addressEmail };



        default:
            return state
    }
}
export default emailUser;