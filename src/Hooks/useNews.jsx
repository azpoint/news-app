import { useContext } from "react"

import NewsContext from "../Context/NewsProvider"

const useNews = () => {
    return useContext(NewsContext)
}

export default useNews