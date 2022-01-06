import Details from "../components/Details";
import Map from "../components/Map";

function App() {
    return (
        <div className="App">
            <section className='map'>
                <Map />
            </section>
            <section className='details'>
                <Details />
            </section>
        </div>
    );
}

export default App;
