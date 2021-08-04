import jsPDF from "jspdf";
import "jspdf-autotable"


const generatePDF = tickets => {
    // initialize jsPDF
    const doc = new jsPDF();
  
    // define the columns we want and their titles
    const tableColumn = ["Photo NFT","Name", "Shipment Address"];
    // define an empty array of rows
    const tableRows = [];
  
    // for each ticket pass all its data into an array
    tickets.forEach(ticket => {
      const ticketData = [
        ticket.photoNFT,
        ticket.name,
        ticket.address,
        
      ];
      // push each tickcet's info into a row
      tableRows.push(ticketData);
    });
  
  
    // startY is basically margin-top
    doc.autoTable(tableColumn, tableRows, { startY: 20 });
    const date = Date().split(" ");
    // we use a date string to generate our filename.
    const dateStr = date[0] + date[1] ;
    // ticket title. and margin-top + margin-left
    doc.text("All Redeems.", 14, 15);
    // we define the name of our PDF file.
    doc.save(`data.pdf`);
  };
  
  export default generatePDF;