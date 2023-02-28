import { ClockIcon } from "@heroicons/react/24/outline";
import { FC } from "react";

interface IFeedItemProps {
  id?: number;
  image_url: string;
  title: string;
  author: string;
  date: string;
  description: string;
  source: string;
}

const FeedItem: FC<IFeedItemProps> = ({ id, title, image_url, author, date, description, source }) => {
  const truncateString = (str: string, num: number) => {
    if (str.length <= num) {
      return str
    }
    return str.slice(0, num);
  }

  return (
    <>
      <div className="my-10">
        <div className='flex justify-between w-full items-center gap-8 h-80'>
          <div className='w-1/2 relative'>
            <img className='w-full' src={image_url} alt="" />
            <div className='bg-gray-100 w-40 absolute bottom-3 left-3 text-xs p-3'>
              <p
                className='font-bold'
                dangerouslySetInnerHTML={{ __html: `By ${author}` }}
              ></p>
              <p className='text-gray-400'>{ source }</p>
              <div className='flex mt-1'>
                <ClockIcon className='w-4' />
                <p>{date}</p>
              </div>
            </div>
          </div>
          <div className='w-1/2 space-y-4'>
            <p className='text-5xl font-bold'>{title}</p>
            <p
              className='text-gray-400'
              dangerouslySetInnerHTML={{ __html: description }}
            >
              {/* {truncateString(description, 580)} <span className='text-black font-bold'> Read more...</span> */}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeedItem