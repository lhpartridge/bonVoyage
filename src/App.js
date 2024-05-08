import Header from './components/Header'
import Europe from './components/Europe'
import Figure from './components/Figure'
import data from './data'


const App =()=> {
    
    const regions = data.map(item => {
        console.log(item.region)
    })

    console.log(regions)

    const figures = data.map(item => {

        return <Figure
                    key={item.id}
                    region={item.region}
                    image={item.image}
                    location={item.location}
                    name={item.name}
                    date={item.date}
                    companions={item.companions}
                    rating={item.rating}
                />
    })

    return(
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <h2 className='subheading'>Top Vacations</h2>
                    {figures}
                </div>
                <div className="row">
                    <Europe />
                </div>
            </div>


        </>
    )
}

export default App