

function Main(props){
    const name = props.name;
    const image = props.image;
    const description = props.description;
    return(<section className="main"> 
        <div className="web-designs">
            <div><p><b>{name}</b></p></div>
            <div className="image"><img src={image}/></div>
            <div className="description"><p>{description}</p></div>
        </div>
    </section>)
}
export default Main;