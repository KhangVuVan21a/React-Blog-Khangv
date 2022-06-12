import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import 'react-icons';
import { BsListUl } from 'react-icons/bs';
import { GoDiffAdded } from 'react-icons/go'
import {BsSearch} from 'react-icons/bs'
import React, { useEffect, useState } from 'react';
import './Blog.css'
const contextmenu='List';
function changeContext(context){
}
export function BlogMenu() {
    const [context,setContext]=useState('List');
    return (
        <div className='col-2 menu-position'>
            <div className=''>
                <ul className='p-0 flex-column'>
                    <li>
                        <a className='box-list' href='/List'>
                            <BsListUl  className='icons-mg'/>
                            List
                        </a>
                    </li>
                    <li>
                        <a className='box-list' href='/New/'>
                            <GoDiffAdded className='icons-mg'/>
                            New
                        </a>
                    </li>
                    <li>
                        <a className='box-list' href='/Search'>
                            <BsSearch className='icons-mg' />
                            Search
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}