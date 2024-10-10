import axios from "axios"
import { useEffect, useState } from "react"
import Quraan from "./Quraan"


function Product() {
    const [Products, setProduct] = useState([])

    const handleGetProducts = () => {
        axios.get("https://api.alquran.cloud/v1/edition").then( (response) =>
        {
            setProduct(response.data.data)
        }).catch((error) =>{
            console.log(error)
        })
    }

    useEffect(() => {
        handleGetProducts()
    })
    return <div>

{
            Products.map( (data) => {
                return <Quraan items={data} />
            })
        }

    </div>
}

export default Product