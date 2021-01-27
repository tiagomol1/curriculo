function Tempo(props){

    const dynamicDate = new Date();
    const dynamicDateString =  dynamicDate.toGMTString();

    return(
        <div>
            <p>{dynamicDateString} (dinâmico)</p>
            <p>{props.staticDateString} (estatico)</p>
        </div>
    )
}

export function getStaticProps(){
    const staticDate = new Date();
    const staticDateString =  staticDate.toGMTString();
    return {
        props: {
            staticDateString
        },
        revalidate: 1
    }
}

export default Tempo;