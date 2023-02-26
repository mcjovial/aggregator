import { PlusCircleIcon } from '@heroicons/react/24/outline'
import TButton from '../components/core/TButton'
import PageComponent from '../components/PageComponent'
import NewsListItem from '../components/NewsListItem'
import { useStateContext } from '../contexts/ContextProvider'

const Feed = () => {
  const { news } = useStateContext()
  const onDeleteClick = () => {
    console.log("Delete news")
  }

  return (
    <PageComponent
      title="News Feed"
      buttons={(
        <TButton color='green' to='/newss/create'>
          <PlusCircleIcon className='h-6 w-6 mr-2' />
          Create new
        </TButton>
      )}
    >
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3'>
        {news.map((feed, i) => (
          <NewsListItem key={i} news={feed} onDeleteClick={onDeleteClick} />
        ))}
      </div>
    </PageComponent>
  )
}

export default Feed