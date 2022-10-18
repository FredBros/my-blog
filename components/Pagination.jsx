import React, {useEffect, useState} from 'react'
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";



function Pagination({
  currentPageNumber,
  hasNextPage,
  hasPreviousPage,
  limit,  
  count
}) {
const totalPages = Math.ceil(count / limit);
const [isPageLoaded, setIsPageLoaded] = useState(false)


useEffect(() => {  
  setIsPageLoaded(true)
}, [])


const router = useRouter();
const folderPathName= router.query.category;


const hrefNextPage = () => {
  const folderPathName = router.query.category;
  if (folderPathName) {
  return `/${folderPathName}/${currentPageNumber + 1}`
} else {
  return "/posts/2";  
}
}
  

  return (totalPages != 1) & isPageLoaded ? (
    <>
      <div className="pagination-container">
        {hasPreviousPage && (
          <Link href={`/${folderPathName}/${currentPageNumber - 1}`}>
            <div className="previous-button button">
              <Image
                src="/chevron-up.svg"
                alt="menu"
                width={30}
                height={20}
                className="left"
              />
            </div>
          </Link>
        )}

        <div className="count-page">
          {`${currentPageNumber} / ${totalPages}`}
        </div>

        {hasNextPage && (
          <Link href={hrefNextPage()}>
            <div className="next-button button">
              <Image
                src="/chevron-up.svg"
                alt="menu"
                width={30}
                height={20}
                className="right"
              />
            </div>
          </Link>
        )}
      </div>
      <style jsx>{`
        .pagination-container {
          margin-top: 30px;
          display: flex;
          justify-content: center;
          gap: 5px;
        }
        .button {
          background-color: var(--color5);
          cursor: pointer;
          bottom: 10px;
          right: 10px;
          padding: 4px;
          border-radius: 4px;
          height: 38px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .previous-button {
          transform: rotate(-90deg);
        }
        .next-button {
          transform: rotate(90deg);
        }
        .count-page {
          line-height: 38px;
        }
      `}</style>
    </>
  ) : (
    ""
  );
}

export default Pagination