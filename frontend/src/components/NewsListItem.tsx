import { ArrowTopRightOnSquareIcon, ClockIcon, PencilIcon, TrashIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import TButton from './core/TButton';

interface INewsItemProps {
  image_url: string;
  title: string;
  author: string;
  date: string;
  source: string;
}
// interface INewsProps {
//   news: INewsItem
//   onDeleteClick: () => void;
// }

const NewsListItem: FC<INewsItemProps> = ({ title, image_url, author, date, source }) => {
  return (
    // <div className='flex flex-col py-4 px-6 shadow-md bg-white hover:bg-gray-50 h-[470px]'>
    //   <img
    //     src={news.image_url}
    //     alt={news.title}
    //     className='w-full h-48 object-cover'
    //   />
    //   <h4 className='mt-4 text-lg font-bold'>{news.title}</h4>
    //   <div
    //     dangerouslySetInnerHTML={{ __html: news.description }}
    //     className='overflow-hidden flex-1'
    //   ></div>

    //   <div className='flex justify-between items-center mt-3'>
    //     <TButton to={`news/${news.id}`}>
    //       <PencilIcon className='w-5 h-5 mr-2' />
    //       Edit
    //     </TButton>
    //     <div className='flex items-center'>
    //       <TButton href={`/view/news/${news.slug}`} circle link>
    //         <ArrowTopRightOnSquareIcon className='w-5 h-5' />
    //       </TButton>
    //       {news.id && (
    //         <TButton onClick={onDeleteClick} circle link color="red">
    //           <TrashIcon className='w-5 h-5' />
    //         </TButton>
    //       )}
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="w-full">
        <img className="w-full" src={image_url} alt="" />
      </div>
      <div className="flex justify-between items-center">
        <div className="text-xs">
          <p className="font-light">By {author}</p>
          <p className="text-gray-500">{source}</p>
        </div>
        <div className='flex mt-1'>
          <ClockIcon className='w-4' />
          <p className="text-gray-500 text-xs">{date}</p>
        </div>
      </div>
      <div>
        <p className="font-bold">{title}</p>
      </div>
    </div>
  )
}

export default NewsListItem