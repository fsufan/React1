const Card = ({direccion,titulo,descripcion}) =>{
    return(
    <div className="contenedor"> 
        <div className="carta">
         
        <img src={direccion} alt="Imagen 1"className="carta-img"/>
            <div className="carta-body">
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
            </div>
        
        </div>
    </div>
    );
};

export default Card;

//Universal Orlando Resort es un complejo Turistico, especializado en parques tematicos  
//../imgs/universal_Orlando.jpg