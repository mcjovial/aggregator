import PageComponent from '../components/PageComponent'
import FeedItem from '../components/FeedItem'
import { useEffect, useState } from 'react'
import { INewsItem } from './Home'
import axiosClient from '../axios'
import dateFormat from 'dateformat'

const Feed = () => {
  const [news, setNews] = useState<INewsItem[]>([])
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axiosClient.post('/filter', {
      keyword: "news"
    }).then(({ data }) => {
      setNews(data.articles);
      setLoading(false);
    });
  }, [])

  return (
    <PageComponent
      title="News Feed"
      // buttons={(
      //   <TButton color='green' to='/newss/create'>
      //     <PlusCircleIcon className='h-6 w-6 mr-2' />
      //     Create new
      //   </TButton>
      // )}
    >
      <div className=''>
        {news.map((feed, i) => (
          <FeedItem
            key={i}
            title={feed.title} 
            image_url={feed.urlToImage} 
            description={feed.description}
            author={feed.author}
            date={dateFormat(feed.publishedAt, "mmmm dS, yyyy")}
            source={feed.source.name}
          />
        ))}
      </div>
    </PageComponent>
  )
}

export default Feed