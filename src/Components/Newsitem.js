import React from 'react'
import defaultNewsImg from './defaultNewsImg.jpg'
const  Newsitem = (props) => {
        let {title,description,imageUrl,newsUrl,author,date,source} = props;
        return (
            <div className='my-3 mx-2'>
                <div className="card " style={{width: "18rem"}}>
                    <img src={imageUrl?imageUrl:defaultNewsImg} className="card-img-top" alt="..."/>
                    <div style={{
                                        display:'flex',
                                        justifyContent:'center',
                                        position:'absolute',
                                        right:'0'
                                    }}>
                        <span className=' badge rounded-pill bg-danger' style={{left : '90%',zIndedex:1}}>{source}</span>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <div className="card-body">
                            <p className="card-text">By {!author?'unknown':author} on {new Date(date).toGMTString()}</p>
                        </div>
                        <a href={newsUrl} target='_blank' rel ='noreferrer'className="btn btn-sm btn-primary">Read more...</a>
                    </div>
                </div>        
            </div>

        )
    
}
export default Newsitem;
