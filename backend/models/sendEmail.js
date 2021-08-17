const { authEmail } = require("./dbConfig");
const nodemailer = require('nodemailer');
const _publics = {};
const config = require("./dbConfig");
const QRCode = require('qrcode');

_publics.mailSendToUser=(username, imgQRCode, emailAdmin)=> { 
    console.log("getinfo"+config.host)
    console.log("getinfo"+imgQRCode)
    console.log(username)
    console.log(emailAdmin)
    // const generateQR=async text=>{
    //     try{
    //         console.log(await QRCode.toDataURL(text))
    //     } catch (err)
    //     {console.err(err)}
    // }
 
  QRCode.toDataURL(imgQRCode, function (err, code) {

    if(err) return console.log("error occurred")
 console.log(code)
    // Printing the code
  
    return new Promise((resolve, reject) => { 
        let transporter = nodemailer.createTransport({ 
            host: config.host, 
            port: config.port, 
            secure: false, 
            auth: { 
                user: config.authEmail, 
                pass: config.authPassword 
            } 
        }); 
      
        let info = transporter.sendMail({ 
            from: config.authEmail, 
            to: emailAdmin, 
            subject: "NFT", 
            
            text: 'Dear ADMIN The user ' + username + ' has received ' +   ' invite links in which they purchased the bottle: "https://rinkeby.etherscan.io/tx/' , 
            // html: 'Dear <b>ADMIN</b>' + '\n' + 'The user ' + username + ' has received ' + '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAK6SURBVO3BQa7jSAwFwXyE7n/lHC+5KkCQ9adNMCJ+sMYo1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijXKxUNJ+EsqXRJOVJ5Iwl9SeaJYoxRrlGKNcvFlKt+UhG9KQqdyh8o3JeGbijVKsUYp1igXL0vCHSpPqJyodEnoVO5Iwh0qbyrWKMUapVijXPw4lS4JJyqdyiTFGqVYoxRrlIsfl4ROpUvCSRI6lV9WrFGKNUqxRrl4mcqbVLokdCpdEr5J5V9SrFGKNUqxRrn4siT8pSR0Kl0SOpUuCXck4V9WrFGKNUqxRokfDJaEO1R+WbFGKdYoxRolfvBAEjqVkyS8SeWOJJyonCShU+mScIfKE8UapVijFGuUi4dUuiR0Kk+o3JGETuUOlS4JncpJEk5U3lSsUYo1SrFGuXgoCZ1Kl4Q7VLoknKh0Kl0SOpVOpUvCm5JwovJEsUYp1ijFGiV+8EVJ6FTuSEKn0iWhU+mS0Kl0SehU3pSETuVNxRqlWKMUa5T4wf8oCU+ovCkJncpJEjqVkyR0Kk8Ua5RijVKsUeIHPywJJypdEk5UTpLQqXRJuEPlm4o1SrFGKdYoFw8l4S+pnKh0SehUuiR0SbgjCZ1Kl4RO5U3FGqVYoxRrlIsvU/mmJNyRhE6lS8IdKl0STpJwRxI6lSeKNUqxRinWKBcvS8IdKk+oPKHSJeFEpUtCp9Il4U3FGqVYoxRrlIt1pHKShE6lS0Kn8qZijVKsUYo1ysWPUzlJQqdyRxI6lU6lS8JJEk5UnijWKMUapVijXLxM5f+kckcS7khCp9Il4S8Va5RijVKsUS6+LAl/KQlPqHQqd6jcofKmYo1SrFGKNUr8YI1RrFGKNUqxRinWKMUapVijFGuUYo1SrFGKNUqxRinWKMUapVijFGuU/wCaSRvdrMpGxwAAAABJRU5ErkJggg==" alt="img" />' + '\n' + ' invite links in which they purchased the bottle: "https://rinkeby.etherscan.io/tx/'  + 
            //     ' \n', 
                  html:'Dear <b>'+username+' </b> this is qr code and the link to access to the nft appliaction : "https://nfttest.sagecity.io/#/<br/><img src="cid:qrcode"/>',
        attachments: [{
            path:code.toString() , 
            cid:"qrcode" },]
             
        }); 
        return resolve(info); 
 
    }); })
}

_publics.mailSendToAdmin=(username, emailAdmin,address)=> { 
    
    return new Promise((resolve, reject) => { 
        let transporter = nodemailer.createTransport({ 
            host: config.host, 
            port: config.port, 
            secure: false, 
            auth: { 
                user: config.authEmail, 
                pass: config.authPassword 
            } 
        }); 
        let info = transporter.sendMail({ 
            from: config.authEmail, 
            to: emailAdmin, 
            subject: "Redemption Details", 
            
            text: 'Dear <b>'+username+' </b> <br/> email :<b>'+emailAdmin+' </b> <br/> Shipment Address :<b>'+address+'. </b>' , 
            // html: 'Dear <b>ADMIN</b>' + '\n' + 'The user ' + username + ' has received ' + '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAB0CAYAAABUmhYnAAAAAklEQVR4AewaftIAAAK6SURBVO3BQa7jSAwFwXyE7n/lHC+5KkCQ9adNMCJ+sMYo1ijFGqVYoxRrlGKNUqxRijVKsUYp1ijFGqVYoxRrlGKNUqxRijXKxUNJ+EsqXRJOVJ5Iwl9SeaJYoxRrlGKNcvFlKt+UhG9KQqdyh8o3JeGbijVKsUYp1igXL0vCHSpPqJyodEnoVO5Iwh0qbyrWKMUapVijXPw4lS4JJyqdyiTFGqVYoxRrlIsfl4ROpUvCSRI6lV9WrFGKNUqxRrl4mcqbVLokdCpdEr5J5V9SrFGKNUqxRrn4siT8pSR0Kl0SOpUuCXck4V9WrFGKNUqxRokfDJaEO1R+WbFGKdYoxRolfvBAEjqVkyS8SeWOJJyonCShU+mScIfKE8UapVijFGuUi4dUuiR0Kk+o3JGETuUOlS4JncpJEk5U3lSsUYo1SrFGuXgoCZ1Kl4Q7VLoknKh0Kl0SOpVOpUvCm5JwovJEsUYp1ijFGiV+8EVJ6FTuSEKn0iWhU+mS0Kl0SehU3pSETuVNxRqlWKMUa5T4wf8oCU+ovCkJncpJEjqVkyR0Kk8Ua5RijVKsUeIHPywJJypdEk5UTpLQqXRJuEPlm4o1SrFGKdYoFw8l4S+pnKh0SehUuiR0SbgjCZ1Kl4RO5U3FGqVYoxRrlIsvU/mmJNyRhE6lS8IdKl0STpJwRxI6lSeKNUqxRinWKBcvS8IdKk+oPKHSJeFEpUtCp9Il4U3FGqVYoxRrlIt1pHKShE6lS0Kn8qZijVKsUYo1ysWPUzlJQqdyRxI6lU6lS8JJEk5UnijWKMUapVijXLxM5f+kckcS7khCp9Il4S8Va5RijVKsUS6+LAl/KQlPqHQqd6jcofKmYo1SrFGKNUr8YI1RrFGKNUqxRinWKMUapVijFGuUYo1SrFGKNUqxRinWKMUapVijFGuU/wCaSRvdrMpGxwAAAABJRU5ErkJggg==" alt="img" />' + '\n' + ' invite links in which they purchased the bottle: "https://rinkeby.etherscan.io/tx/'  + 
            //     ' \n', 
                  html:'Dear <b>'+username+' </b> <br/> email :<b>'+emailAdmin+' </b> <br/> Shipment Address :<b>'+address+'. </b>',
      
             
        }); 
        return resolve(info); 
 
    }); }

module.exports = _publics;