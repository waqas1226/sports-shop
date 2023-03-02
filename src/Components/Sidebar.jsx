import React, { useState } from 'react';
import '../CSSfiles/Sidebar.css';
import { ArrowDropDown, ArrowRight, MenuOutlined } from '@mui/icons-material';
import { categoriesData } from './SidebarSource';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <div className='relative hidden sm:block'>
    <div className="catList cursor-pointer" onClick={()=>setVisible(!visible)}>
<MenuOutlined  className='sidebar'/>
   Departments <ArrowDropDown/>
    </div>
      {/* <div className="List"> */}
        {visible&&<ul className="parentUl py-3">
          {categoriesData.map((cat)=>
          <li className="cat w-full px-3">
            <a href="#" className='w-full flex justify-between'>
              <Link to={`/categories/${cat.name}`}>{cat.name}</Link> 
             {cat.subcat && <ArrowRight/>}
            </a>
            <ul className="subCatul w-full py-3">
{cat.subcat?.map((subca)=>
              <li className="subCatli px-3">
                <a href="#" className='w-full flex justify-between'>
                  <Link to={`/${subca.name}`}>{subca.name}</Link>
              <ArrowRight/>
                  </a>
                <ol className="1000 p-3">
                  
                  <li className="subCatli2"><a href="#"><Link to="/">ABC</Link></a></li>
                  <li className="subCatli2"><a href="#"><Link to="/">XYZ</Link></a> </li>
                </ol>

              </li>
)}
            </ul>
          </li>

)}
</ul>
}
      {/* </div> */}
    </div>
  );
};


export default SideBar;

{/* <li className="cat">
            <a href="#">
              <Link>Sports</Link> 
            </a>
            <ul className="subCatul">
              <li className="subCatli">
                <a href="#">
                  <Link>Cricket njjjjjjjjj</Link></a>
                <ol className="ol">
                  <li className="subCatli2"><a href="#"><Link>Fts</Link></a></li>
                  <li className="subCatli2"><a href="#"><Link>tables</Link></a> </li>
                  <li className="subCatli2"><a href="#"><Link>oultry</Link></a></li>
                  <li className="subCatli2"><a href="#"><Link>Seod</Link></a></li>
                </ol>

              </li>
            </ul>
          </li> */}
