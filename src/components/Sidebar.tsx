import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className=' hidden sm:flex flex-col gap4 '>
            <Link to="/">Home</Link>
            <Link to="/view1">View1</Link>
            <Link to="/view2">View2</Link>
        </div>
    )
}

export default Sidebar