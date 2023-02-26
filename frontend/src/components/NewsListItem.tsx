import { ArrowTopRightOnSquareIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import TButton from './core/TButton';

interface INewsItem {
  id: number;
  image_url: string;
  title: string;
  slug: string;
  description: string;
}
interface INewsProps {
  news: INewsItem
  onDeleteClick: () => void;
}

const NewsListItem:FC<INewsProps> = ({news, onDeleteClick}) => {
  return (
    <div className='flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]'>
      <img
        src={news.image_url}
        alt={news.title}
        className='w-full h-48 object-cover'
      />
      <h4 className='mt-4 text-lg font-bold'>{news.title}</h4>
      <div
        dangerouslySetInnerHTML={{ __html: news.description }}
        className='overflow-hidden flex-1'
      ></div>

      <div className='flex justify-between items-center mt-3'>
        <TButton to={`news/${news.id}`}>
          <PencilIcon className='w-5 h-5 mr-2' />
          Edit
        </TButton>
        <div className='flex items-center'>
          <TButton href={`/view/news/${news.slug}`} circle link>
            <ArrowTopRightOnSquareIcon className='w-5 h-5' />
          </TButton>
          {news.id && (
            <TButton onClick={onDeleteClick} circle link color="red">
              <TrashIcon className='w-5 h-5' />
            </TButton>
          )}
        </div>
      </div>
    </div>
  )
}

export default NewsListItem