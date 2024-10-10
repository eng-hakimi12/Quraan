function Quraan({items}) {
    return <div>
         <div className="border-4">
        <h1  className="text-2xl mt-3 font-bold"> {items.identifier}</h1>
            <h1  className="text-2xl mt-3 font-bold">{items.language}</h1>
            <p className="text-2xl  font-bold">{items.name}</p>
        </div>
    </div>
}
export default Quraan