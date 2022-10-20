import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Link from "next/link";
import Image from "next/image";
import dayjs from "dayjs";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 6,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1400 },
    items: 5,
  },
  smalldesktop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function CarouselPosts({ posts }) {
  return (
    <div className="carousel">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlaySpeed={5000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {posts.map((post, index) => (
          <div key={index} className="carousel-item-container">
            <Link href={`/blog/post/${post.slug}`}>
              <div className="carousel-item">
                <div className="image">
                  <Image
                    src={post.featuredImage.url}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="layout"></div>
                <div className="carousel-item-content">
                  <p className="date">
                    {dayjs(post.createdAt).format("DD/MM/YYYY")}
                  </p>
                  <h3 className="title">{post.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </Carousel>
      <style jsx>{`
        .carousel-item-container {
          padding: 0 5px;
          height: 100%;
        }
        .carousel-item {
          position: relative;
          height: 250px;
        }
        .next-image {
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
        }
        .layout {
          position: absolute;
          background: linear-gradient(to bottom, #bcbbbb77, #01010177);
          width: 100%;
          height: 100%;
        }
        .carousel-item-content {
          position: absolute;
          display: flex;
          flex-direction: column;
          padding: 20px;
          color: var(--font-color-dark);
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default CarouselPosts;
