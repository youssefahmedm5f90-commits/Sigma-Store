import { IoMenu } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { PiSignInBold } from "react-icons/pi";
import { RiUserAddLine } from "react-icons/ri";
import './header.css'

const NavLinks =[
  {title:"Home" , link:'/'},
  {title:"About" , link:'/about'},
  {title:"Accessories" , link:'/accessories'},
  {title:"Blog" , link:'/blog'},
  {title:"Contact" , link:'/contact'}
]

const BtmHeader = () => {
  const location = useLocation()
  const  [categorys, setCategorys ] = useState([]);
  const [isCategorys , setIsCategorys] =useState(false)

    useEffect(() => {
    setIsCategorys(false)
  },[location])


  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => setCategorys(data));
  },[]);





  return (
    <div className="btm-header">
      <div className="container">
        <nav className="nav">


          <div className="category-nav">

            <div className="category-btn" onClick={() => setIsCategorys(!isCategorys)}>
              <IoMenu />
              <p>Browse Category</p>
              <IoIosArrowDown />
            </div>

            <div className={`category-nav-list ${isCategorys ? 'active' : ''}`}>
              {categorys.map((category)=>(
                <Link key={category.slug} to={`/category/${category.slug}`}>{category.name}</Link>
              ))}
            </div>

          </div>


          <div className="nav-links">
            {NavLinks.map((item)=>(
              <li className={location.pathname === item.link ? "active" : ''}><Link to = {item.link}> {item.title}</Link></li>
            ))}
          </div>

        </nav>

          <div className="sign-regs-icon">
            <Link to='/'><PiSignInBold /></Link>
            <Link to='/'><RiUserAddLine /></Link>
          </div>
      </div>
    </div>
  );
};

export default BtmHeader;
