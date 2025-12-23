

const RestarauntCard=(props)=>
{
    const {resdata}=props;
    const {image,name,cuisine,rating}=resdata?.info;
    return(
        <div className="res-card">
            <img alt="res-logo" src={image.url} className="res-img"></img>
            <h3>{name}</h3>
            <h4>{cuisine.map(c => c.name).join(", ")}</h4>
           <h4>{rating.aggregate_rating}</h4>
        </div>
    );
};

export default RestarauntCard;