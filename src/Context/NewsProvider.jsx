import axios from "axios";
import { useState, useEffect, createContext } from "react";

const NewsContext = createContext()

const NewsProvider = ({children}) => {

    const [category, setCategory] = useState("general")
    const [newsData, setNewsData] = useState([])
    const [page, setPage] = useState(1)
    const [totalNews, seTotalNews] = useState(0)

    useEffect(() => {
        const getNewsAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_NEWS_API}`

            const { data } = await axios(url)

            setNewsData(data.articles)
            seTotalNews(data.totalResults)
            setPage(1)
        }
        getNewsAPI()
    }, [category])

    useEffect(() => {
        const getNewsAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&apiKey=${import.meta.env.VITE_NEWS_API}`

            const { data } = await axios(url)

            setNewsData(data.articles)
            seTotalNews(data.totalResults)
        }
        getNewsAPI()
    }, [page])

    const handleChangeCategory = e => {
        setCategory(e.target.value)
    }

    const handleChangePage = (e,value) => {
        setPage(value)
    }

    return (
        <NewsContext.Provider 
        value={{
            category,
            handleChangeCategory,
            newsData,
            totalNews,
            handleChangePage,
            page
        }}
        >
            {children}
        </NewsContext.Provider>
    )
}

export {
    NewsProvider
}

export default NewsContext