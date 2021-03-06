import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import './blogList.css'
import { Button, Container, Table } from 'react-bootstrap';
import './blogList.css'
import blogsAxios from '../../axios';
import { Component, useEffect, useState } from 'react';
import {ReactDOM,React}  from 'react';
import { Link } from 'react-router-dom';
export function BlogSearchForm() {
    const [blogList, setBlogList] = useState(null)
    const [titleseach,setTitle] =useState();
    const [blogListsearch ,setBlogSearch]=useState();

    return (
        <div id="check">
            <div className='blog-search' >
                <div className=''>
                    <div className='List-title'>
                        <h2>
                            New Blog
                        </h2>
                    </div>
                    <div className='box-search'>
                        <form>
                            <div className="form-group d-flex">
                                <label htmlFor="exampleInputEmail1" className='title-search'>Title: </label>
                                <input type="text" className="form-control" id="exampleInputEmail1" onChange={(e)=>{setTitle(e.target.value)
                                }} placeholder="" />
                            </div>
                            <div className='box-submit'>
                                <button type="button" className="btn btn-primary" onClick={(e)=>{
                                    setBlogList(<BlogList text={titleseach}/>)
                                   // console.log(titleseach);
                                }}>Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div id="seachtitle">
                {blogList}
            </div>
        </div>
    )
}
function BlogList(props) {
    const [blogList, setBlogList] = useState()
    const [id, setId] = useState(null);
    const [texttitle,setText]=useState("")

    function isPublic(ispublic) {
        console.log(ispublic);
        return (<p>{ispublic ? 'Yes' : 'No'}</p>);
    }
    useEffect(()=>{

        getJsonToTable();
       
    },[props.text])
    function getJsonToTable() {
        blogsAxios.get("http://localhost:8083/Blog/findall")
            .then(res => {
                setBlogList(res.data);
            })
            .catch(error => console.log(error));
    }
    function findposition(position) {
        const positions = ["Vi???t Nam", "Ch??u ??", "Ch??u ??u", "Ch??u M???"];
        let positionlist = "";
        //console.log(position);
        Object.values(position).forEach(i => { positionlist += positions[i - 1] + "  " });
        return (<p>{positionlist}</p>);

    }
    function getcategory(category) {
        const listCategory = ["Lo???i 1", "Lo???i 2", "Lo???i 3", "Lo???i 4", "Lo???i 5", "Lo???i 6", "Lo???i 7", "Lo???i 8", "Lo???i 9", "Lo???i 10", "Lo???i 11", "Lo???i 12", "Lo???i 13",
            "Lo???i 14", "Lo???i 15", "Lo???i 16", "Lo???i 17", "Lo???i 18", "Lo???i 19", "Lo???i 20", "Lo???i 21", "Lo???i 22", "Lo???i 23", "Lo???i 24", "Lo???i 25"];
        return (<p>{listCategory[category]}</p>);
    }
    function deleteJsonById(id) {
        blogsAxios.delete(`http://localhost:8083/Blog/deletebyid/` + id)
            .then(res => {
                console.log(id);
            })
            .catch(error => console.log(error));
    }
    const CreateTable = () => {
        return (
            blogList?.map((val, key) => {
                return (
                    props.text==val.title?(<tr key={key} >
                    <td className='col-id' >{val.id}</td>
                    <td className='col-title'>{val.title}</td>
                    <td className='col-category'>{getcategory(val.category)}</td>
                    <td className='col-public'>{isPublic(val.public)}</td>
                    <td className='col-position'>{findposition(val.position)}</td>
                    <td className='col-datapublic'>{val.datapublic}</td>

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
                </tr>):null
                )
            })
        )
    }
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
                            <th >Lo???i</th>
                            <th >Tr???ng th??i</th>
                            <th >V??? tr??</th>
                            <th >Ng??y public</th>
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
