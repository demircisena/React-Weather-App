function City({setCity,city}){
   

    return (
        <div className="citystep">
        
            <input type="text" onChange={(e)=>{setCity(e.target.value)}} placeholder="Lütfen Bir Şehir Adı Giriniz"></input>
            
            
        </div>
    )
}
export default City;