import axios from "axios"
import { useEffect, useState } from "react"


function Quraan1() {
    const [data, setData] = useState([])
    
    const handleGetData = () => {
        axios.get("https://api.alquran.cloud/v1/edition").then( (response) =>{
                setData(response.data)


        }).catch((error) =>{
            console.log(error)
        })      
    }


        useEffect(() =>{
            handleGetData()
        }, [])
    return <div className="">
       

       
       <div className="h-[100px] bg-green-300 flex justify-between">
        <h1 className="text-4xl pt-5 pl-[200px]  font-bold">Eng Hakimi</h1>
        <ul className="flex gap-10 mr-[300px] pt-5 text-4xl font-medium">
            <li className="  text-white hover:text-sky-700">Home</li>
            <li className="  text-white hover:text-sky-700">About</li>
            <li className="  text-white hover:text-sky-700">Contact</li>
            <li className="  text-white hover:text-sky-700">Page</li>
        </ul>
       </div>
                <div className="grid grid-cols-4 ml-[150px]">

               
{
            data.map( (user) => {
                return <div className="  w-[500px] mr-5 pl-8  h-[550px] gap-10  mt-14">
                     
                    <div>

                    <p className="mt-5"><img src={user.image} alt="Ecomerce"  className="flex rounded h-[350px] w-[400px]" /></p>

                    {/* <h1 className="mt-5 "> id: {user.id}</h1> */}
                    <p className="mt-5 text-2xl font-bold">  {user.name} </p>
                    <p className="mt-5  text-2xl font-bold"> {user.title} </p>

                    {/* <p className="mt-5"> description: {user.description} </p> */}
                    {/* <p><img src={user.images} alt="Assiments" ></></p> */}
                    <p className="mt-5 font-bold"> creationAt: {user.creationAt} </p>
                    <p className="mt-5 font-bold"> updatedAt: {user.updatedAt} </p>
                    {/* <p className="mt-5"> category: {user.category.id.name.image.creationAt.updatedAt} </p> */}
                
                    </div>
                </div>
            })

        }
    </div>

    <div className="h-[240px] bg-green-300  flex justify-center">

    <h1 className="text-4xl pt-5 pr-[700px]   font-bold">Eng Hakimi</h1>
    <div className="text-white pt-5 text-2xl">
        <h1 className="text-4xl font-bold text-black">Contact me</h1>
        <h2 className="text-2xl pt-4 font-bold text-sky-500 hover:text-sky-700"> <span className="text-black text-2xl">Facebook</span>      Eng-Hakimi</h2>
        <h2 className="text-2xl pt-4 font-bold"> <span className="text-black text-2xl">TikTok    </span> Eng-Hakimi</h2>
        <h2 className="text-2xl pt-4 font-bold"> <span className="text-black text-2xl">instagram</span> Eng-Hakimi</h2>

        </div>
    </div>

    </div>
}
export default Quraan1