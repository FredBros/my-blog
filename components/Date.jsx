import dayjs from "dayjs";
import Image from "next/image";



function Date({date}) {
  return (
    <>
      <div className="date-container">
        <Image
          src="/calendar.svg"
          alt="calendar icon"
          width="32px"
          height="32px"
        />
        <div className="date">
          {dayjs(date).format("DD/MM/YYYY")}
        </div>
      </div>
      <style jsx>{`
        .date {
          font-size: var(--font-size-sm);
        }
        .date-container {
          
          display: flex;
          gap: 10px;
          align-items: center;
        }
      `}</style>
    </>
  );
}

export default Date