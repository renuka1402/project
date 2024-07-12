import axios from axios;

function App() {
const buy=async()=>{
 try{
  let res=await axios.post("http://localhost:3002/payment")
  if(res && res.status===200){
    window.location.href=res.data.url;
  }
 }
}

  return (
    <>
<h1>payment</h1>
<h1>price:100</h1>
<button onclick={buy}>bynow</button>
    </>
  )
}

export default App
