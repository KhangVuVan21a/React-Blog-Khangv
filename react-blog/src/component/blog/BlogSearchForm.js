import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import './blogList.css'
export function BlogSearchForm() {
    return (
        <div className='blog-search'>
            <div className=''>
                <div className='List-title'>
                    <h2>
                        New Blog
                    </h2>
                </div>
                <div className='box-search'>
                    <form onSubmit={""}>
                        <div class="form-group d-flex">
                            <label for="exampleInputEmail1" className='title-search'>Title: </label>
                            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="" />
                        </div>
                        <div className='box-submit'>
                            <button type="submit" class="btn btn-primary">Search</button>
                        </div>
                    </form>
                </div>
            </div>
                
        </div>
    )
}