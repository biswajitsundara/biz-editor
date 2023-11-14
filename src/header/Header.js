import BoldIcon from '../header/Bold.svg';
import './Header.css';
const Header = () => {
    return ( <div className="header-toolbar">
        <button>
            <span>B</span>
        </button>
        <button>
            <span><i>I</i></span>
        </button>
    </div> );
}
 
export default Header;