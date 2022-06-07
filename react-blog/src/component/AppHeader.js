import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import './Blog.css'
export function BlogHeader() {
    return (
        <div className="d-flex blog-header">
            <div className='col-md-3 col-lg-2 header-img '>
                <a className=''>
                    <img src='https://devfast.us/images/devfast-logo.png' className='headerlink'></img>
                </a>
            </div>
            <div className='col header-title '>
                <h1>Blogmanagement</h1>
            </div>
        </div>
    )
}