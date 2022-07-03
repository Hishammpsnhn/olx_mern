hai
====olx project======
"

`const handleSubmit=(e)=>{
  e.preventDefault()
  console.log(username)
}`


this is onsubmit in form 'e.preventDefault 'is avoide refresh/reload of page when click on 
submit button and console is working  done.

signup page
===========

=> how to make a authentication using email and password?

crate a firebase.js 
create firebase account
copy api from firebase to firebase.js in project
 import 

`
import {getAuth,
createUserWithEmailAndPassword
} from 'firebase/auth'

in singup page
initialize getAuth

const auth = getAuth();
`

this is for crate user with email and password
` 
const handleSubmit=(e)=>{
  e.preventDefault()
  createUserWithEmailAndPassword(auth,email,password)
`
add this in singup page
then add  a response if you want

`
  .then((response)=>{
    console.log(response.user)
    
    })
  
  .catch((err)=>{
    alert(err.message)
  })
`
this is for it worked or not worked
!!!completed!!

login page
==========
 crated a usestate('') for email and pass
 put value into intial of state in input
 onchange add into input
 add handle sumit 
 in handle submit 
 `
   signInWithEmailAndPassword(auth, email, password)
 `
 then navigate into home 
 any error 
 console it error message

 display logined user name inhome
==========================

create context for user login or not 
`
 const { user, setUser } = useContext(AuthContext)
  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      setUser(data)
    })
    console.log(user)

  })
`
if get username of sign up page

in signup cmponats 

add it n sign up page after createuser() 
`    updateProfile(auth.currentUser,{
      displayName:username
    }).then(()=>{
`
thenstore sign up deatails in db

then heder componats
 if user true 
user.displayName other wise show Login



 create compontant (for add post)
= =================
 in form there is a image 
 first step in on handlesubmit that image storage into firebse store
`
  const uploadTask = uploadBytesResumable(storageRef, image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      },
 `
 is error console error.messgae
 other wise 
 get url of upload image 
 `getDownloadURL(uploadTask.snapshot.ref)`
 
 then store products into firestore db 
 ` .then((url) =>{
          const articleRef = collection(db ,"products");
          addDoc(articleRef,{
            name:name,
            catagory:catagory,
            price:price,
            imageUrl:url,
            user:user.uid,
            cratedAt:date.toDateString(),
          })
`
then navigate home

 upload posts in home
 =====================
 get data from firestore db
 create use state 

 `  useEffect(() => {
    const productRef = collection(db, "products")
    const q = query(productRef)
    onSnapshot(q, (snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProduct(products)
    })
  }, [])
`
then destructure it using state.name


context
=======
then create a context for post details 
 add product into contaxt  provider

  carddeatils  and uploaduserdetails(view componants) 
===================================

then onclick on card 
it give details on upload user and card detail

card details get from context

create usestete  
 
 userdetails get from firestore using (query selector)
 `  useEffect(() => {
    const { user } = postDetails
    const q = query(collection(db, 'users'),where('id', '==', user)) 
   onSnapshot(q,(snapshot)=>{
     snapshot.forEach(doc =>{
       setUserDetails(doc.data())
     })
   })
      
  }, [])
  `
then doc.data add into state initalstate

then call user detail usign initail state
eg: userdetails.name



















