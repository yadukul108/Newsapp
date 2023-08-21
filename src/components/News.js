import React, { useEffect,useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News=(props)=>{
    const [articles,setArticles]=useState([])
    const [loading,setLoading]=useState(true)
    const [page,setPage]=useState(1)
    const [totalResults,settotalResults]=useState(0)

    
      const  capital = (string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const updateNews = async ()=> {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2d48edd9a5ba48dab3cc3981f2f66832&page=${page}&pageSize=${props.pageSize}`; 
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100);

    }
    useEffect(() => {
        document.title =`${capital(props.category)}-Newsapp`; 

        updateNews(); 
    }, [])


    const handleNextClick = async () => { 
        setPage(page+1)
        updateNews()
    }
   
    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=2d48edd9a5ba48dab3cc3981f2f66832&page=${page}&pageSize=${props.pageSize}`;
        setPage(page+1) 

        let data = await fetch(url);
        let parsedData = await data.json()
 
        setArticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
      };
    
        return (
            <div className='container'>
                <h1 className='text-center'style={{margin: "30px 0px", marginTop:'90px'}}>Newsapp-Top Headlines in {capital(props.category)}</h1>
                    {loading && <Spinner/>}
                    <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader ={<Spinner/>}
                    >
                        <div className="conntainer">

                <div className="row">
                    { articles.map((element)=>{
                        return <div className="col-md-4 " key={element.url}>
                         
                        <Newsitem  title={element.title?element.title:" "} description={element.description?element.description:" "} newsurl={element.url} imageUrl={element.urlToImage} author={element.author} date={element.publishedAt}/>
                    </div>
                    })}
                </div>
                    </div>
                    </InfiniteScroll>
                    </div>
                           
        )


    }

News.defaultProps={
    country: "in",
    pageSize:8,
    category:"general"
}
News.propsTypes={
    country: PropTypes.string,
    pageSize:PropTypes.number,
    category :PropTypes.string,
}
export default News
