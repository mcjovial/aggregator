import { MagnifyingGlassIcon, PlusCircleIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import axiosClient from "../axios"
import TButton from "../components/core/TButton"
import NewsListItem from "../components/NewsListItem"
import PageComponent from "../components/PageComponent"
import dateFormat from 'dateformat';

export interface INewsItem {
  title: string;
  urlToImage: string;
  author: string;
  publishedAt: string;
  description: string;
  source: {
    id: string;
    name: string;
  }
}

const Home = () => {
  const [news, setNews] = useState<INewsItem[]>([])
  const [keyword, setKeyword] = useState('')
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axiosClient.get('/everything').then(({ data }) => {
      setNews(data.articles);
      setLoading(false);
    });
  }, [])

  const onsubmit = () => {
    axiosClient.post('/feed', {
      keyword,
    }).then(({ data }) => {
      console.log(data);
      setNews(data.articles);
    })
  }
  
  return (
    <PageComponent
      title="Hot News"
      buttons={(
        <form onSubmit={onsubmit}>
          <div className="relative w-80">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MagnifyingGlassIcon className="w-5 h-5"/>
            </div>
            <input
              type="search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search News..."
              onChange={(e)=> setKeyword(e.target.value)}
            />
            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
          </div>
        </form>
      )}
    >
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
        {news?.map((feed, i) => (
          <NewsListItem
            key={i}
            title={feed.title} 
            image_url={feed.urlToImage} 
            author={feed.author}
            date={dateFormat(feed.publishedAt, "mmmm dS, yyyy")}
            source={feed.source.name}
          />
        ))}
      </div>
    </PageComponent>
  )
}

export default Home