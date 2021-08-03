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
       


        //this.loadRedeem()
        $(".dataTables_length.bs-select label").html(
            $(".dataTables_length.bs-select label").children()
        );
        $(".dataTables_length.bs-select label select option").append(" Elements");
    }
   
    
    
    loadRedeem = () => {
        /*var { redeemList } = this.state;
        
        var ret = [];
        var self = this;
        var querytosend = `{ 
            mints{
                id
                timestamp
                sender
                amount0
                amount1
                pair{
                    token0{symbol name}
                    token1{symbol name}
                } 
              }
              burns{
                id
                timestamp
                sender
                amount0
                amount1
                pair{
                    token0{symbol name}
                    token1{symbol name} 
                }
              }
              swaps{
                id
                sender
                totalValue
                pair{
                    token0{symbol name}
                    token1{symbol name}
                }
                amount0In
                amount1In
                amount0Out
                amount1Out
                timestamp
              }            
          }`;
        //console.log(querytosend)
        fetch('https://graph.novafinance.app/subgraphs/name/NovaFi/NovaFi', {
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
                //console.log('data:', data);
                data.data.mints.map(mint => {
                    const unixTimestamp = mint.timestamp
                    const milliseconds = unixTimestamp * 1000 // 1575909015000
                    const dateObject = new Date(milliseconds)
                    const humanDateFormat = dateObject.toLocaleDateString() //2019-12-9 10:30:15
                    if((mint.pair.token0.name.toUpperCase() !="UNKNOWN NAME")&&(mint.pair.token1.name.toUpperCase() !="UNKNOWN NAME")){
                        if((mint.pair.token0.name.toUpperCase()=="ETH")||(mint.pair.token1.name.toUpperCase()=="ETH")){
                        var transation = {"id":mint.id, "title": "Add " + mint.pair.token0.name.toUpperCase() + " and " + mint.pair.token1.name.toUpperCase(), "token0":Number.parseFloat(Web3.utils.fromWei(mint.amount0,'ether')).toFixed(3)  + " " + mint.pair.token0.symbol, "token1":Number.parseFloat(Web3.utils.fromWei(mint.amount1,'ether')).toFixed(3) + " " + mint.pair.token1.symbol, "sender": self.formAccount(mint.sender), "date": humanDateFormat, "totleValue": " -- " }
                        retM.push(transation);
                        }else{
                                var transation = {"id":mint.id, "title": "Add " + mint.pair.token0.name.toUpperCase() + " and " + mint.pair.token1.name.toUpperCase(), "token0":Number.parseFloat(mint.amount0/1000000000000000000).toFixed(3) + " " + mint.pair.token0.symbol, "token1": Number.parseFloat(mint.amount1/1000000000000000000).toFixed(3) + " " + mint.pair.token1.symbol, "sender": self.formAccount(mint.sender), "date": humanDateFormat, "totleValue": " -- " }
                                retM.push(transation);
                        }
                    }

                })
              
               

               
                self.setState({ redeemList: ret}, () => {
                    
                    self.renderData();
                })

            })
            .catch((error) => {
                console.error('Error:', error);
            });
*/
    }
  


    renderData = () => {
        let { dataToShow, transationsList } = this.state;
        let data = transationsList;
        data.map((elemnt, index) => {
            elemnt.map((item, i) => {
                dataToShow.push({
                    all:(
                        <a href={this.state.LinkName+item.id.substring(0,item.id.length-2)} target="_blank">{item.title}</a>
                      ),
                    totalValue: item.totleValue,
                    token0: item.token0,
                    token1: item.token1,
                    account: item.sender,
                    date: item.date,
                });
            })

        });
    };
    render() {
        const data = {
            columns: [
                {
                    label: "ALL",
                    field: "all",
                    sort: "asc",
                    width: 270
                },
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
                    field: "send shipment instructions",
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