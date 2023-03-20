interface  product{
    name:string
    price:number
}

function getdetails(): Promise <product[]>{
    return fetch('/product.json')
    .then(res=>res.json())
    .then(res=>{
        console.log(res)
        return res as product[]
        })
}

getdetails()
    .then(det=>{
        console.log(det.map(d=>d.name+''+d.price+'').toString())
    })




