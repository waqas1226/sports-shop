import React, { useState } from 'react';
import '../CSSfiles/Sidebar.css';
import { ArrowDropDown, ArrowRight, MenuOutlined } from '@mui/icons-material';
import {categoriesData} from './SidebarSource';
import Accordion from 'react-bootstrap/Accordion';
import { bats, Balls, badminton, hockey, BasketBall, Football } from '../Components/ProductSource';
import { Link } from 'react-router-dom';
// Components/ProductSource';

const SideBar2 = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className='relative inline sm:hidden'>
    <div className="catList w-max">
<MenuOutlined onClick={()=>setVisible(!visible)} className='sidebar'/>
    </div>
    {visible&&<div className="a absolute w-[80rem] z-10">
          {categoriesData.map((cat)=>
                        <Accordion>
                            <Accordion.Item className='w-1/5 bg-slate-500' eventKey="0">
                                <Accordion.Header className='acc bg-slate-500'><Link to={`/categories/${cat.name}`}>{cat.name}</Link></Accordion.Header>
                                <Accordion.Body>
                                    {/* <div className="desc">Description: <span className="o">Prod1</span></div> */}
                                    {cat.subcat?.map((subca)=>
                                    <Accordion className='ml-[-20px]'>
                            <Accordion.Item className='w-[108%] border-none  bg-slate-500' eventKey="0">
                                <Accordion.Header className='bg-slate-500 pl-6'><Link to={`/categories/${subca.name}`}>{subca.name}</Link></Accordion.Header>
                                <Accordion.Body>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                                    )}
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        )}
                        </div>
                        }
                        </div>
    
  );
};


export default SideBar2;
