import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { transform } from 'typescript';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyCqpxcarSv5-2RT5oM0J5g6wbp2AynQaeo",
    authDomain: "gg-play-993ad.firebaseapp.com",
    databaseURL: "https://gg-play-993ad-default-rtdb.firebaseio.com",
    projectId: "gg-play-993ad",
    storageBucket: "gg-play-993ad.appspot.com",
    messagingSenderId: "394283999550",
    appId: "1:394283999550:web:02dfef621c67f4519d0c6f",
    measurementId: "G-VQBJH2Y8H1"
  };

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth,additionalData)=>{
    if(!userAuth)
      return
    const userRef = firestore.collection('users').doc(userAuth.id)
    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName,email,photoURL} = userAuth
        const createTime = new Date()
        try{
          await userRef.set({
            displayName,
            email,
            photoURL,
            createTime,
            ...additionalData
          })
        }catch(error){
            console.log(error)
        }
    }
    return userRef
}


export const convertCollectionsSnapshotToMap = (snapShot)=>{
      
  var Items={}
  var movies = {}
  var books = {}

  snapShot.docs.map(doc =>{
      const id = doc.id
      const {categories} = doc.data()

      if(id === 'book'){
          const history = {} 
          const education = {}
          const travel={}
          const thriller={} 
          const computerTechnology={}
          const artsEntertainment={}
          const detectiveMystery={}
          const religion={}
          const children ={}
          const scienceMath ={}
          const cooking={}
          const fiction={}
  
  
          categories.map((doc,index)=>{
            const {title, imgUrl,price,rate,type,description,author,published,page,publisher,language,authorImg} = doc
            
            if(doc.type.includes('Detective Mystery')){
              detectiveMystery[index]={id:index,title, imgUrl,price,rate,type,description,author,published,page,language,publisher,authorImg}
            }
            if(doc.type.includes('History')){
              history[index]={id:index,title, imgUrl,price,rate,type,description,author,published,page,language,publisher,authorImg}
            }
            if(doc.type.includes('Thriller')){
              thriller[index]={id:index,title, imgUrl,price,rate,type,description,author,published,page,language,publisher,authorImg}
            }
            if(doc.type.includes('Fiction')){
              fiction[index]={id:index,title, imgUrl,price,rate,type,description,author,published,page,language,publisher,authorImg}
            }
            if(doc.type.includes('Education')){
              education[index]={id:index,title, imgUrl,price,rate,type,description,author,published,page,language,publisher,authorImg}
            }
            if(doc.type.includes('Travel')){
              travel[index]={id:index,title, imgUrl,price,rate,type,description,author,published,page,language,publisher,authorImg}
            }
            if(doc.type.includes('Computer and Technology')){
              computerTechnology[index]={id:index,title, imgUrl,price,rate,type,description,author,published,page,language,publisher,authorImg}
            }
            if(doc.type.includes("Children's Books")){
              children[index]={id:index,title, imgUrl,price,rate,type,description,author,published,page,language,publisher,authorImg}
            }
            if(doc.type.includes('Science and Math')){
              scienceMath[index]={id:index,title, imgUrl,price,rate,type,description,author,published,page,language,publisher,authorImg}
            }
            if(doc.type.includes('Arts and Entertainment')){
              artsEntertainment[index]={id:index,title, imgUrl,price,rate,type,description,author,published,page,language,publisher,authorImg}
            }
            if(doc.type.includes('Religion')){
              religion[index]={id:index,title, imgUrl,price,rate,type,description,author,published,page,language,publisher,authorImg}
            }
            if(doc.type.includes('Cooking, Food and Wine')){
              cooking[index]={id:index,title, imgUrl,price,rate,type,description,author,published,page,language,publisher,authorImg}
            }
          })
  
          books = {
            'History':history,
            'Travel':travel,
            'Education':education,
            'Fiction':fiction,
            'Religion':religion,
            'Thriller':thriller,
            'Science and Math':scienceMath,
            'Computer and Technology':computerTechnology,
            'Cooking, Food and Wine':cooking,
            'Arts and Entertainment':artsEntertainment,
            "Children's Books ":children,
            "Detective Mystery":detectiveMystery 
          }
  
        }
        
        if(id === 'movie'){
          const actionAventure = {} 
          const family = {}
          const drama={}
          const horror={} 

          categories.map((doc,index)=>{
          const {title, imgUrl,price,rate,type,videoUrl,videoImg,description,duration,year,warning,performer,producer,writer,director,update} = doc
          
          if(doc.type.includes('Action and adventure')){
              actionAventure[index]={id:index,title, imgUrl,price,rate,type,videoImg,videoUrl,description,duration,year,warning,performer,producer,writer,director,update}
          }
          if(doc.type.includes('Family')){
              family[index] = {id:index,title, imgUrl,price,rate,type,videoImg,videoUrl,description,duration,year,warning,performer,producer,writer,director,update}
          }
          if(doc.type.includes('Drama')){
              drama[index] = {id:index, title, imgUrl,price,rate,type,videoUrl,videoImg,description,duration,year,warning,performer,producer,writer,director,update}
          }
          if(doc.type.includes('Horror')){
              horror[index] = {id:index, title, imgUrl,price,rate,type,videoUrl,videoImg,description,duration,year,warning,performer,producer,writer,director,update}
          }
          })
          movies = {
          'Action and adventure':actionAventure,
          'Family':family,
          'Drama':drama,
          'Horror':horror
          }
      }

      })

      Items={
          movies:movies,
          books:books
      }

    return Items
}



export const firestore = firebase.firestore();
export const auth =firebase.auth()

export const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});


export default firebase
    





