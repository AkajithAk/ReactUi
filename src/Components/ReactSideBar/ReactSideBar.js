import { useState } from 'react';
import './ReactSideBar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineHome,AiFillSetting } from 'react-icons/ai';
import { TbLayoutDashboard } from 'react-icons/tb';
import { CgProfile } from 'react-icons/cg';
import { BsFillBookFill } from 'react-icons/bs';

function ReactSideBar(){
    const [show,setShow]=useState(false);
    return(
        <div>
          <div className={show?'sidebar1':'sidebar'}>
            <ul>
                <div className='main' onClick={()=>setShow(!show)}>
                    <GiHamburgerMenu className='icon' />
                </div>
                <li>
                    <AiOutlineHome className='icon' />
                    {show?"":<h2>Home</h2>}
                </li>
                <li>
                    <TbLayoutDashboard className='icon' />
                    {show?"":<h2>Dashboard</h2>}
                </li>
                <li>
                    <CgProfile className='icon' />
                    {show?"":<h2>My Profile</h2>}
                </li>
                <li>
                    <AiFillSetting className='icon' />
                    {show?"":<h2>Settings</h2>}
                </li>
                <li>
                    <BsFillBookFill className='icon' />
                    {show?"":<h2>About us</h2>}
                </li>
            </ul>
          </div>
        </div>
    );
}
export default ReactSideBar;