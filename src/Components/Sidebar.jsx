import React, { useState } from 'react';
import '../CSSfiles/Sidebar.css';
import { ArrowDropDown, ArrowRight, MenuOutlined } from '@mui/icons-material';
import { catData } from './SidebarSource';

const SideBar = () => {
  const [visible, setVisible] = useState(false);
console.log(catData.cat)
  return (
    <>
    <div className="catList bg-black border-y-8">
<MenuOutlined onClick={()=>setVisible(!visible)} className='sidebar'/>
   Departments <ArrowDropDown/>
    </div>
      {/* <div className="List"> */}
        {visible&&<ul className="parentUl">
          {catData.map((cat)=>
          <li className="cat">
            <a href="#">
              <span>{cat.name}</span> 
              <ArrowRight/>
            </a>
            <ul className="subCatul">
{cat.subcat.map((subca)=>
              <li className="subCatli">
                <a href="#">
                  <span>{subca.name}</span>
              <ArrowRight/>
                  </a>
                <ol className="1000">
                  
                  <li className="subCatli2"><a href="#"><span>Fruits</span></a></li>
                  <li className="subCatli2"><a href="#"><span>Vegetables</span></a> </li>
                </ol>

              </li>
)}
            </ul>
          </li>

)}
</ul>
}
      {/* </div> */}
    </>
  );
};


export default SideBar;

{/* <li className="cat">
            <a href="#">
              <span>Sports</span> 
            </a>
            <ul className="subCatul">
              <li className="subCatli">
                <a href="#">
                  <span>Cricket njjjjjjjjj</span></a>
                <ol className="ol">
                  <li className="subCatli2"><a href="#"><span>Fts</span></a></li>
                  <li className="subCatli2"><a href="#"><span>tables</span></a> </li>
                  <li className="subCatli2"><a href="#"><span>oultry</span></a></li>
                  <li className="subCatli2"><a href="#"><span>Seod</span></a></li>
                </ol>

              </li>
            </ul>
          </li> */}
