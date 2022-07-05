import React, { useContext, useState } from 'react';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext } from '../../store/Context';
import { useNavigate, Link } from 'react-router-dom';
import { SearchContext } from '../../store/SearchContext';
import { ProductContext } from '../../store/FpostContext';
import { useGlobalContext } from '../../store/PlaceContext'
import Place from './Place';

function Header() {
  const { openplace } = useGlobalContext()
  const { product, setProduct } = useContext(ProductContext)

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))


  const searchSubmit = () => {

  }

  const { searching, setSearching } = useContext(SearchContext)
  // const { user, setUser } = useContext(AuthContext)
const handleLogout = ()=>{
  localStorage.clear()
  setUser(null)
}
  const handlechange = (e) => {

  }
  const navigate = useNavigate()
  return (
    <>
      <div className="headerParentDiv">
        <div className="headerChildDiv">
          <div className="brandName">
            <OlxLogo />
          </div>
          <div className="placeSearch">
            <Search></Search>
            <input type="text" defaultValue="India" />
            <div>
              <Arrow></Arrow>
            </div>

          </div>
          <div className="productSearch">
            <div className="input">
              <input
                type="text"
                placeholder="Find car,mobile phone and more..."
              // value={searching}
              // onChange={handlechange}
              />
            </div>
            <div className="searchAction" onClick={searchSubmit}>
              <Search color="#ffffff"></Search>
            </div>
          </div>
          <div className="language">
            <span> ENGLISH </span>
            <Arrow></Arrow>
          </div>
          <div className="loginPage">
            <span>{user ? `${user?.result?.username} ` : <button onClick={()=> navigate('/login')}>Login</button>}</span>
            <hr />
          </div>
          { user?.result && <button onClick={handleLogout} >Logout</button>}

          <div className="sellMenu">
            <SellButton></SellButton>
            <div className="sellMenuContent"
              onClick={() => user?.result ? navigate('/create') : navigate('/login') }>
              <SellButtonPlus></SellButtonPlus>
              <span>SELL</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Header;
