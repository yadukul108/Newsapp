import React from 'react'

const Newsitem=(props)=>{
        let { title, description, imageUrl,newsurl,author,date } =props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <img src={imageUrl?imageUrl:"https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-dark">Read More</a>
                        

                    </div>
                    <div className="card-footer text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</div>
                </div>      
            </div>
        )
    }


export default Newsitem
