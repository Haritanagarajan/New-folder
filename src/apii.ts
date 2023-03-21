interface apii{
  id:number
  pname:string
  pdescription:string
  price:number  
}

function getdetails():Promise<apii[]>{
    return fetch('DETAILS.JSON')
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        return res as apii[]
    })
}

getdetails();

function getfakeapi(){
    fetch('https://fakestoreapi.com/products')
    .then(res=>res.json())
    .then(json=>console.log(json))
}

getfakeapi();