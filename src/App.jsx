import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Account from "./components/Account"
import { signInWithPopup, GoogleAuthProvider, getAuth, signOut } from 'firebase/auth'
import Navbar from "./components/Navbar"
import Create from "./components/Create"


function App() {
  const provider = new GoogleAuthProvider();
    const auth = getAuth();
    const handleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(() => {
            }).catch(() => {
            });
    }
    const handleSignOut = (()=> {
        signOut(auth).then(() => {
        }).catch(() => {
        });      
    }) 

  return (
    <>
      <Navbar auth={auth}/>
      <Routes>
        <Route index element={<Home auth={auth} />} />
        <Route path="/account" element={<Account auth={auth} handleSignIn={handleSignIn} handleSignOut={handleSignOut} />} />
        <Route path="/create" element={<Create auth={auth} />} />
      </Routes>
    </>
  )
}

export default App
