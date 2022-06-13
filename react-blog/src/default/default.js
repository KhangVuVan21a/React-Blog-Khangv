import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import './default.css'
import { BlogHeader } from '../component/AppHeader';
import { BlogMenu } from '../component/AppMenu';
import { AppPage } from '../component/AppPage';
import { AppFooter } from '../component/AppFooter';

export function Default(){
    return(
        <div className='layoutdefault'>
            <BlogHeader/>
            <BlogMenu/>
            <AppPage/>
            <AppFooter/>
        </div>
    )
}