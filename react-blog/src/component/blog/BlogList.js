import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import { Button, Table } from 'react-bootstrap';
import './blogList.css'
import blogsAxios from '../../axios';
import { Component, useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
export function BlogList() {
    const [blogList, setBlogList] = useState(null)
    const [id, setId] = useState(null);
    function isPublic(ispublic) {
        console.log(ispublic);
        return (<p>{ispublic ? 'Yes' : 'No'}</p>);
    }
    function findposition(position) {
        const positions = ["Việt Nam", "Châu Á", "Châu Âu", "Châu Mỹ"];
        let positionlist = "";
        //console.log(position);
        Object.values(position).forEach(i => { positionlist += positions[i - 1] + "  " });
        return (<p>{positionlist}</p>);

    }
    function getcategory(category) {
        const listCategory = ["Loại 1", "Loại 2", "Loại 3", "Loại 4", "Loại 5", "Loại 6", "Loại 7", "Loại 8", "Loại 9", "Loại 10", "Loại 11", "Loại 12", "Loại 13",
            "Loại 14", "Loại 15", "Loại 16", "Loại 17", "Loại 18", "Loại 19", "Loại 20", "Loại 21", "Loại 22", "Loại 23", "Loại 24", "Loại 25"];
        return (<p>{listCategory[category]}</p>);
    }
    function GetJsonToTable() {
        blogsAxios.get("http://localhost:8083/Blog/findall")
            .then(res => {
                setBlogList(res.data);
            })
            .catch(error => console.log(error));
    }
    function deleteJsonById(id) {
        blogsAxios.delete(`http://localhost:8083/Blog/deletebyid/` + id)
            .then(res => {
                console.log(id);
            })
            .catch(error => console.log(error));
    }
    useEffect(() => {
        console.log(id);
    }, [id]);
    const CreateTable = () => {
        return (
            blogList?.map((val, key) => {
                return (
                    <tr key={key} >
                        <td className='col-id' >{val.id}</td>
                        <td className='col-title'>{val.title}</td>
                        <td className='col-category'>{getcategory(val.category)}</td>
                        <td className='col-public'>{isPublic(val.public)}</td>
                        <td className='col-position'>{findposition(val.position)}</td>
                        <td className='col-datapublic'>{val.data_pubblic}</td>

                        <td className='col-edit'>
                            <Link to={'/New/' + id}>
                                <button type="button" className="btn btn-outline-primary" value={val.id} onFocus={(e) => { setId(e.target.value); }}>Edit</button>
                            </Link>
                        </td>
                        <td className='col-delete'>
                            <Link to={'/List'}>
                                <button type="submit" className="btn btn-outline-danger" value={val.id} onClick={(e) => { deleteJsonById(e.target.value); window.location.reload()}}>Delete</button>
                            </Link>
                        </td>
                    </tr>
                )
            })
        )
    }

    useEffect(() => {
        GetJsonToTable()
    }, [])
    return (
        <div className='blog-list'>
            <div className='List-title'>
                <h2>List Blog</h2>
            </div>
            <div >
                <Table >
                    <thead>
                        <tr>
                            <th >Id</th>
                            <th >Tin</th>
                            <th >Loại</th>
                            <th >Trạng thái</th>
                            <th >Vị trí</th>
                            <th >Ngày public</th>
                            <th >Edit</th>
                            <th >Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CreateTable()}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}
