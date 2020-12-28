/*
var obtener=function(){
let name=document.getElementById('name').value;
let email=document.getElementById('email').value;
const sgMail= require('@sendgrid/mail');
sgMail.setApiKey("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");
const msg={
to:email,
from: email,
subject: 'testing',
text:name,
};
 
sgMail.send(msg,function(err,info){
if (err) {
  console.log('email not');
} else {
  console.log('email yes');
}

});

}

*/


const functions=require('firebase-functions');

const admin= require("firebase-admin");
admin.initializeApp(functions.config().firebase);
const SENDGRID_API_KEY=functions.config().sengrid.key

const smMail.setApiKey(SENDGRID_API_KEY);

exports.firestoreEmail=functions.firestore
.document('users/{userId}/followers/{followerId}')
.onCreate(event =>{
const userId=event.params.userId;
const db=admin.firestore()
return db.collection('users').doc(userId)
.get()
.then(doc=>){
const user=doc.data()

const msg= {
  to: user.email,
  from: 'hello@angularfirebase.com',
  subject:'asd',
  
  templateId:'b79fb9d1-ddf4-46b0-955a-c77e15be17ef',
subs

}
  
}

});