import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap'
import './blogList.css'
import { useForm, useFormState, useWatch } from 'react-hook-form'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export function BlogCreate() {
    const { id } = useParams(null)
    const { register, useWatch, handleSubmit, watch, formState: { errors } } = useForm();
    const [logBlog, setEditBlog] = useState({
        category: [],
        data_pubblic: "",
        des: "",
        detail: "",
        position: [],
        public: true,
        thumbs: "",
        title: ''

    });
    const [test, setTest] = useState();
    const onSubmit = data => {
        console.log('logBlog', logBlog)
        if (id == null) {
            axios.post(`http://localhost:3000/blogs`, data)
                .then(res => {
                    console.log(data);
                    console.log(res.data);
                })
        } else {
            axios.put(`http://localhost:3000/blogs/` + id, logBlog)
                .then(res => {
                    console.log(logBlog);
                    console.log(logBlog);
                })
        }
    };
    function getDataById() {
        axios.get(`http://localhost:3000/blogs/` + id)
            .then(res => {
                setEditBlog(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));
        document.getElementById("checkBoxVietNam").checked = checkedPosition(1);
        document.getElementById("checkBoxChauA").checked = checkedPosition(2);
        document.getElementById("checkBoxChauAu").checked = checkedPosition(3);
        document.getElementById("checKBoxChauMy").checked = checkedPosition(4);
    }
    useEffect(() => {
        getDataById()
    }, [id])
    function checkedPosition(id) {
        return logBlog.position.filter(res => id === res) > 0 ? true : false;
    }

    const getcategory = () => {
        const listCategory = [{ id: 1, value: "Loại 1" }, { id: 2, value: "Loại 2" }, { id: 3, value: "Loại 3" }, { id: 4, value: "Loại 4" }, { id: 5, value: "Loại 5" }, { id: 6, value: "Loại 6" },
        { id: 7, value: "Loại 7" }, { id: 8, value: "Loại 8" }, { id: 9, value: "Loại 9" }, { id: 10, value: "Loại 10" }, { id: 11, value: "Loại 11" }, { id: 12, value: "Loại 12" }, { id: 13, value: "Loại 13" },
        { id: 14, value: "Loại 14" }, { id: 15, value: "Loại 15" }, { id: 16, value: "Loại 16" }, { id: 17, value: "Loại 17" }, { id: 18, value: "Loại 18" }, { id: 19, value: "Loại 19" }, { id: 20, value: "Loại 20" },
        { id: 21, value: "Loại 21" }, { id: 22, value: "Loại 22" }, { id: 23, value: "Loại 23" }, { id: 24, value: "Loại 24" }, { id: 25, value: "Loại 25" }, { id: 26, value: "Loại 27" },];
        return listCategory.map((val) => { return (<option value={val.id} key={val.id}>{val.value}</option>) });
    }
    return (
        <div className='blog-create-edit'>
            <div className='List-title border-title'>
                <h2>
                    New Blog
                </h2>
            </div>
            <div className='main-blog-edit'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-group mt-3'>
                        <label htmlFor="titleInput">Tiêu đề: </label>
                        <input {...register("title", { minLength: 10 })} className="form-control" type="text" id='titleInput' defaultValue={logBlog.title} onChange={(e) => { logBlog.title = e.target.value }} />
                    </div>
                    <div className='form-group mt-3'>
                        <label htmlFor="desInput">Mô tả ngắn: </label>
                        <textarea {...register("des")} className='form-control' id='desInput' rows={5} defaultValue={logBlog?.des} onChange={(e) => { logBlog.des = e.target.des }} />
                    </div>
                    <div className='form-group mt-3'>
                        <label htmlFor="detailInput">Chi tiết: </label>
                        <textarea {...register("detail")} className='form-control' id='detailInput' rows={10} defaultValue={logBlog.detail} onChange={(e) => { logBlog.detail = e.target.value }}></textarea>
                    </div>
                    <div className='form-group mt-3'>
                        <label htmlFor="inputFile">Example file input</label>
                        <br></br>
                        <input {...register("thumbs")} type="text" className="form-control" id="inputFile" defaultValue={logBlog.thumbs} onChange={(e) => { logBlog.thumbs = e.target.value }} />
                    </div>
                    <div className='form-group mt-3'>
                        <div className="form-check form-check-inline">
                            <input {...register("position")} className="form-check-input" type="checkbox" id="checkBoxVietNam" value={1} />
                            <label className="form-check-label" htmlFor="checkBoxVietNam">Việt Nam</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input {...register("position")} className="form-check-input" type="checkbox" id="checkBoxChauA" value={2} />
                            <label className="form-check-label" htmlFor="checkBoxChauA">Châu Á</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input {...register("position")} className="form-check-input" type="checkbox" id="checkBoxChauAu" value={3} />
                            <label className="form-check-label" htmlFor="checkBoxChauAu">Châu Âu</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input {...register("position")} className="form-check-input" type="checkbox" id="checKBoxChauMy" value={4} />
                            <label className="form-check-label" htmlFor="checKBoxChauMy">Châu Mỹ</label>
                        </div>
                    </div>
                    <div className='form-group mt-3'>
                        <label className='label-public'>Public:</label>
                        <div className="form-check form-check-inline">
                            <input {...register("public", { valueAsNumber: true })} className="form-check-input" type="radio" name="exampleRadios" id="radioTrue" value='true' defaultChecked={logBlog.public} />
                            <label className="form-check-label" htmlFor="radioTrue" >
                                True
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input {...register("public")} className="form-check-input" type="radio" name="exampleRadios" id="radioFalse" value="false" defaultChecked={!logBlog.public} />
                            <label className="form-check-label" htmlFor="radioFalse">
                                False
                            </label>
                        </div>
                    </div>
                    <div className='form-group d-flex'>
                        <div className="form-group col-6 form-type">
                            <label htmlFor="exampleFormControlSelect2">Loại:</label>
                            <select {...register("category")} className="form-control" id="exampleFormControlSelect2" multiple={false} defaultValue={logBlog.category || 1} onChange={(e) => (logBlog.category = e.target.value)} >
                                {getcategory()}
                            </select>
                        </div>
                        <div className='form-group col'>
                            <label htmlFor="datapublic">Date public:</label>
                            <input {...register("data_pubblic")} className='form-control' type="date" id='datapublic' defaultValue={logBlog.data_pubblic} />
                        </div>
                    </div>
                    <div className='form-group form-submit'>
                        <button type="submit" className="btn btn-success m-2">Submit</button>
                        <button type="button" className="btn btn-primary">Clear</button>
                    </div>

                </form>
            </div>
        </div>
    )

}
export function BlogCreateEdit() {
    const { id } = useParams(null)
    const { register, useWatch, handleSubmit, watch, formState: { errors } } = useForm();
    const [logBlog, setEditBlog] = useState({
        category: [],
        data_pubblic: "",
        des: "",
        detail: "",
        position: [],
        public: true,
        thumbs: "",
        title: ''

    });
    const [test, setTest] = useState();
    const onSubmit = data => {
        axios.put(`http://localhost:3000/blogs/` + id, logBlog)
            .then(res => {
                console.log(logBlog);
                console.log(logBlog);
            })
    };
    function getDataById() {
        axios.get(`http://localhost:3000/blogs/` + id)
            .then(res => {
                setEditBlog(res.data);
                console.log(res.data);
            })
            .catch(error => console.log(error));

    }
    useEffect(() => {
        getDataById()
    }, [id])
    useEffect(()=>{
        document.getElementById("checkBoxVietNam").checked=checkedPosition(1);
        document.getElementById("checkBoxChauA").checked=checkedPosition(2);
        document.getElementById("checkBoxChauAu").checked=checkedPosition(3);
        document.getElementById("checKBoxChauMy").checked=checkedPosition(4);
        document.getElementById("exampleFormControlSelect2").value=logBlog.category||1;
    },[logBlog])
    function checkedPosition(id) {
        return logBlog.position.filter(res => id === res) > 0 ? true : false;
    }

    const getcategory = () => {
        const listCategory = [{ id: 1, value: "Loại 1" }, { id: 2, value: "Loại 2" }, { id: 3, value: "Loại 3" }, { id: 4, value: "Loại 4" }, { id: 5, value: "Loại 5" }, { id: 6, value: "Loại 6" },
        { id: 7, value: "Loại 7" }, { id: 8, value: "Loại 8" }, { id: 9, value: "Loại 9" }, { id: 10, value: "Loại 10" }, { id: 11, value: "Loại 11" }, { id: 12, value: "Loại 12" }, { id: 13, value: "Loại 13" },
        { id: 14, value: "Loại 14" }, { id: 15, value: "Loại 15" }, { id: 16, value: "Loại 16" }, { id: 17, value: "Loại 17" }, { id: 18, value: "Loại 18" }, { id: 19, value: "Loại 19" }, { id: 20, value: "Loại 20" },
        { id: 21, value: "Loại 21" }, { id: 22, value: "Loại 22" }, { id: 23, value: "Loại 23" }, { id: 24, value: "Loại 24" }, { id: 25, value: "Loại 25" }, { id: 26, value: "Loại 27" },];
        return listCategory.map((val) => { return (<option value={val.id-1} key={val.id}>{val.value}</option>) });
    }
    return (
        <div className='blog-create-edit'>
            <div className='List-title border-title'>
                <h2>
                    New Blog
                </h2>
            </div>
            <div className='main-blog-edit'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='form-group mt-3'>
                        <label htmlFor="titleInput">Tiêu đề: </label>
                        <input {...register("title", { minLength: 10 })} className="form-control" type="text" id='titleInput' defaultValue={logBlog.title} onChange={(e) => { logBlog.title = e.target.value }} />
                    </div>
                    <div className='form-group mt-3'>
                        <label htmlFor="desInput">Mô tả ngắn: </label>
                        <textarea {...register("des")} className='form-control' id='desInput' rows={5} defaultValue={logBlog?.des} onChange={(e) => { logBlog.des = e.target.des }} />
                    </div>
                    <div className='form-group mt-3'>
                        <label htmlFor="detailInput">Chi tiết: </label>
                        <textarea {...register("detail")} className='form-control' id='detailInput' rows={10} defaultValue={logBlog.detail} onChange={(e) => { logBlog.detail = e.target.value }}></textarea>
                    </div>
                    <div className='form-group mt-3'>
                        <label htmlFor="inputFile">Example file input</label>
                        <br></br>
                        <input {...register("thumbs")} type="text" className="form-control" id="inputFile" defaultValue={logBlog.thumbs} onChange={(e) => { logBlog.thumbs = e.target.value }} />
                    </div>
                    <div className='form-group mt-3'>
                        <div className="form-check form-check-inline">
                            <input {...register("position")} className="form-check-input" type="checkbox" id="checkBoxVietNam" value={1} />
                            <label className="form-check-label" htmlFor="checkBoxVietNam">Việt Nam</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input {...register("position")} className="form-check-input" type="checkbox" id="checkBoxChauA" value={2} />
                            <label className="form-check-label" htmlFor="checkBoxChauA">Châu Á</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input {...register("position")} className="form-check-input" type="checkbox" id="checkBoxChauAu" value={3} />
                            <label className="form-check-label" htmlFor="checkBoxChauAu">Châu Âu</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input {...register("position")} className="form-check-input" type="checkbox" id="checKBoxChauMy" value={4} />
                            <label className="form-check-label" htmlFor="checKBoxChauMy">Châu Mỹ</label>
                        </div>
                    </div>
                    <div className='form-group mt-3'>
                        <label className='label-public'>Public:</label>
                        <div className="form-check form-check-inline">
                            <input {...register("public", { valueAsNumber: true })} className="form-check-input" type="radio" name="exampleRadios" id="radioTrue" value='true' defaultChecked={logBlog.public} />
                            <label className="form-check-label" htmlFor="radioTrue" >
                                True
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input {...register("public")} className="form-check-input" type="radio" name="exampleRadios" id="radioFalse" value="false" defaultChecked={!logBlog.public} />
                            <label className="form-check-label" htmlFor="radioFalse">
                                False
                            </label>
                        </div>
                    </div>
                    <div className='form-group d-flex'>
                        <div className="form-group col-6 form-type">
                            <label htmlFor="exampleFormControlSelect2">Loại:</label>
                            <select {...register("category")} className="form-control" id="exampleFormControlSelect2"  onChange={(e) => (logBlog.category = e.target.value)} >
                                {getcategory()}
                            </select>
                        </div>
                        <div className='form-group col'>
                            <label htmlFor="datapublic">Date public:</label>
                            <input {...register("data_pubblic")} className='form-control' type="date" id='datapublic' defaultValue={logBlog.data_pubblic} />
                        </div>
                    </div>
                    <div className='form-group form-submit'>
                        <button type="submit" className="btn btn-success m-2">Submit</button>
                        <button type="button" className="btn btn-primary">Clear</button>
                    </div>

                </form>
            </div>
        </div>
    )
}