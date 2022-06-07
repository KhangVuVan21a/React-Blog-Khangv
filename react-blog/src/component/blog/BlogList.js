import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import { Button, Table } from 'react-bootstrap';
import './blogList.css'
import blogsAxios from '../../axios';

export function BlogList() {
    return (
        <div className='blog-list'>
            <div className='List-title'>
                <h2>List Blog</h2>
                <GetJsonToTable/>
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
                        <tr>
                            <th>1</th>
                            <td>Hôm nay là thứ 2</td>
                            <td>Kinh doanh</td>
                            <td>Yes</td>
                            <td>Châu âu, Châu Mỹ</td>
                            <td>2019-06-28</td>
                            <td><button type="button" className="btn btn-outline-primary">Edit</button></td>
                            <td><button type="button" className="btn btn-outline-danger">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Hôm nay là thứ 2</td>
                            <td>Kinh doanh</td>
                            <td>Yes</td>
                            <td>Châu âu, Châu Mỹ</td>
                            <td>2019-06-28</td>
                            <td><button type="button" className="btn btn-outline-primary">Edit</button></td>
                            <td><button type="button" className="btn btn-outline-danger">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Hôm nay là thứ 2</td>
                            <td>Kinh doanh</td>
                            <td>Yes</td>
                            <td>Châu âu, Châu Mỹ</td>
                            <td>2019-06-28</td>
                            <td><button type="button" className="btn btn-outline-primary">Edit</button></td>
                            <td><button type="button" className="btn btn-outline-danger">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Hôm nay là thứ 2</td>
                            <td>Kinh doanh</td>
                            <td>Yes</td>
                            <td>Châu âu, Châu Mỹ</td>
                            <td>2019-06-28</td>
                            <td><button type="button" className="btn btn-outline-primary">Edit</button></td>
                            <td><button type="button" className="btn btn-outline-danger">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Hôm nay là thứ 2</td>
                            <td>Kinh doanh</td>
                            <td>Yes</td>
                            <td>Châu âu, Châu Mỹ</td>
                            <td>2019-06-28</td>
                            <td><button type="button" className="btn btn-outline-primary">Edit</button></td>
                            <td><button type="button" className="btn btn-outline-danger">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Hôm nay là thứ 2</td>
                            <td>Kinh doanh</td>
                            <td>Yes</td>
                            <td>Châu âu, Châu Mỹ</td>
                            <td>2019-06-28</td>
                            <td><button type="button" className="btn btn-outline-primary">Edit</button></td>
                            <td><button type="button" className="btn btn-outline-danger">Delete</button></td>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td>Hôm nay là thứ 2</td>
                            <td>Kinh doanh</td>
                            <td>Yes</td>
                            <td>Châu âu, Châu Mỹ</td>
                            <td>2019-06-28</td>
                            <td><button type="button" className="btn btn-outline-primary">Edit</button></td>
                            <td><button type="button" className="btn btn-outline-danger">Delete</button></td>
                        </tr>

                    </tbody>
                </Table>
            </div>
        </div>
    )
}
function GetJsonToTable() {
    blogsAxios.get("")
    .then(res => {
        const data=res.data;
      console.log(res.data);
    })
    .catch(error => console.log(error));
}