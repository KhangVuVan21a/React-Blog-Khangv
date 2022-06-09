import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import {Route,Routes} from 'react-router-dom'
import './Blog.css'
import { AppFooter } from './AppFooter';
import { BlogList } from './blog/BlogList';
import { BlogCreateEdit } from './blog/BlogCreateEdit'; 
import { BlogSearchForm } from './blog/BlogSearchForm';
export function AppPage() {
    return (
        <>
            <div className='d-flex'>
                <div className='col-2'>
                </div>
                <div className='col-10 app-page'>
                    <div className='page-main'>
                        <Routes>
                            <Route path='/List' element={<BlogList/>} />
                            <Route path='/New'  element={<BlogCreateEdit/>} />
                            <Route path='/New/:id'  element={<BlogCreateEdit/>} />
                            <Route path='/Search' element={<BlogSearchForm/>} />
                        </Routes>
                    </div>
                </div>
            </div>
        </>
    )
}