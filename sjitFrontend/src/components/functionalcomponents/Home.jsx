function Home(properties){
    var styling ={
        textAlign:"center",
        backgroundColor:"grey",
        color:"white",
        // margin: "25%",
        // marginLeft: "0px",
        // marginRight: "0px",

    }
    // var body={
    //     textAlign:'center',
    //     border :'1px solid',
    //     margin : 'fix-content',
        

    // }

    return(
        <div>
        <h1 style={styling}>Home Page</h1>
        <h2 > Below tag is for props</h2>
        <h2> <i>Props: {properties.properties},{properties.sjit}</i></h2>
        </div>
    )
}
export default Home;
