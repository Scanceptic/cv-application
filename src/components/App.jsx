import '../styles/App.css'
import General from './General'
import Education from './Education'
import Work from './Work'

const App = () => {
    return (
        <>
            <div id='container'>
                <General />
                <Education />
                <Work />
            </div>
        </>
    )
}

export default App