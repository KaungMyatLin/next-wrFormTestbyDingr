import constants from '../constants/constants'
import forge from 'node-forge'
import NodeRSA from 'node-rsa'
export default async function post(name, ttlAmt, email, des, phone, address) {
    const merchantOrderId = getRandomIntInclusive(0,10000);
    // ------------------
    const data = {
        clientId:"07c830f6-243f-35bb-9899-d775ea349f6c" ,
        publicKey: constants.pubKey, 
        items: [{name: name, amount: ttlAmt, quantity: 1}] ,
        merchantOrderId: merchantOrderId,
        merchantKey: "3v74pii.c7oyn6FlP_3gtYFo5yQZeKW0Er8", ,
        merchantName: "Shwe Yee Win Aung",
        customerName: name,
        email: email,
        remark: des,
        phone: phone,
        address: address,
        totalAmount: ttlAmt
    }
    // ---------Node RSA encryption---------
    const nodersa = new NodeRSA();
    nodersa.importKey(constants.pubKey, 'pkcs8-public');
    // (keyData, [format], Options)
    // -keyData = {PEM string|Buffer containing PEM string|Buffer containing DER encoded data|Object contains key components}
    // -format = [scheme-[key_type]-[output_type] ]
    // -Options = {object} — additional settings. eg. {env: ..., encryptionScheme: ..., signingScheme: ... }
    // --Scheme = 'pkcs1' or 'pkcs8' or 'openssh' or 'components'. Default 'pkcs1_oaep'.
    // --Key type = 'private' or 'public'. Default 'private'.
    // --output_type = 'pem' — Base64 encoded with header and footer. Used by default, 'der' — Binary encoded key data.
    nodersa.setOptions({encryptionScheme: 'pkcs1'});
    // .encrypt alrdy provide Json.stringify to first arg, buffer. Second arg is encoding for output.
    const encryptstr_payload = nodersa.encrypt(data,'base64');
    // const resD = await fetch(`${constants.payApi}, ${encryptstr_payload}`, {
    //     method: "POST",
    //     headers: {
    //         "Content-type": "application/x-www-form-urlencoded"
    //     }
    // })
    const hmac = forge.hmac.create();
    hmac.start('sha256', constants.secretKey)
    hmac.update(data)
    const hashText = hmac.digest().toHex();
    // ---------Logging---------
    console.log("data= ", data)

    return [encryptstr_payload, hashText];
}

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}