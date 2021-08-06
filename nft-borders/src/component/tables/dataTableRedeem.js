import React from "react";
import { MDBDataTable } from "mdbreact";
import $ from "jquery";


import "./dataTableRedeem.css";

class dataTableRedeem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataToShow: [],
            redeemList: [],
        };
    }





    componentDidMount() {
       


        this.loadRedeem()
        $(".dataTables_length.bs-select label").html(
            $(".dataTables_length.bs-select label").children()
        );
        $(".dataTables_length.bs-select label select option").append(" Elements");
    }
   
    
    
    loadRedeem = () => {
         var { redeemList } = this.state;
        
        var ret = [];
        var self = this;
        var querytosend = `{ 
            listeReedems{id photoNft name city firstLine secondLine codePostal country addressEmail timesTmp blockNumber}
                         
          }`;
        //console.log(querytosend)
        fetch('https://api.thegraph.com/subgraphs/name/zouaouik/nftdetailsreedem', {
            method: 'POST',
            headers: {
                'content-type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify({
                "query": querytosend,

            }),
        })
            .then(response => response.json())
            .then(data => {
                console.log('data:', data.data.listeReedems);
                data.data.listeReedems.map(element=>{
                    var transation = {"id":element.id,"photoNFT":element.photoNft, "name":  element.name , "address":element.codePostal+" "+element.city+", "+element.firstLine+", "+element.secondLine+" "+ element.country,"email":element.addressEmail}
                ret.push(transation)
                })
                           
                 self.setState({ redeemList: ret}, () => {
                    this.props.listData(ret)
                    self.renderData();
                }) 

            })
            .catch((error) => {
                console.error('Error:', error);
            });

    }
  


    renderData = () => {
        let { dataToShow, redeemList } = this.state;
        let data = redeemList;
        data.map((elemnt, index) => {
                dataToShow.push({
                    name: (<p>{elemnt.name}<br/>{elemnt.addressEmail}</p>),
                    shipment: elemnt.address,
                    send:(<button className="sendButton">Send</button>),
                    complete:(<button className="completeButton">Move to Redeemed </button>)
                    
                
            })

        });
    };
    render() {
        const data = {
            columns: [
                
                {
                    label: "NAME",
                    field: "name",
                    sort: "asc",
                    width: 270
                },
                {
                    label: "SHIPMEMT",
                    field: "shipment",
                    sort: "asc",
                    width: 100
                },
                {
                    label: "SEND SHIPMENT INSTRUCTIONS",
                    field: "send",
                    sort: "asc",
                    width: 100
                },
                {
                    label: "COMPLETE?",
                    field: "complete",
                    sort: "asc",
                    width: 150
                },
                
            ],
            rows: this.state.dataToShow
        };

        return (
            <div className="DataTablePage" style={{ backgroundColor: "white", marginBottom: "10%", padding: "0 5px 5px 5px" }}>


                <MDBDataTable
                    striped
                    bordered
                    large
                    hover
                    entriesOptions={[5, 20, 25]}
                    entries={5}
                    // pagesAmount={4}
                    data={data}
                    fullPagination
                    noRecordsFoundLabel="Aucun data  trouvés"
                    paginationLabel={["Précédent", "Suivant"]}
                    searchLabel="Rechercher"
                    responsive={true}
                    entriesLabel="Transations"
                    sortable={false}
                />
            </div>
        );
    }
}


  
  export default dataTableRedeem;