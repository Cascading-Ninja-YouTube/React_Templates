import React from 'react'
import './blog.css'
import Heading from '../headings/Heading'
import BlogList from './BlogList.json'
function Blog() {
    return (
        <section className="BlogSection paddingDiv" id="blogs">
            <Heading backText="Blogs" frontText="Writings"/>

            <div className=" row blogWrapper">
                {BlogList.length>0?
                <>
                {BlogList.map(blog=>(
                    <>
                    <div className="blogDiv col-md-5 col-lg-3" key={blog.id}>
                        <div className="blogImage">
                            <img src={blog.image} alt="" />
                        </div>
                        <div className="blogDetails">
                            <div className="blogDate italicText">{blog.date}</div>
                            <div className="blogContent">
                                <span id="blogTitle">{blog.title}</span>
                                <span id="blogDesc">{blog.description}</span>
                                </div>
                        </div>
                    </div>
                    </>
                ))}
                </>
                :
                <>You Currently donot have any blogs</>}

            </div>
        </section>
        
    )
}

export default Blog
