import React from "react";
import { useRouter } from "next/router";
import PostDetail from "../../components/PostDetail";
import Loader from "../../components/Loader";
import { getPosts, getPostDetails } from "../../services";
import CommentForm from "../../components/CommentForm";
import Comments from "../../components/Comments";
import useModal from "../../utils/useModal";
import Modal from "../../components/Modal";
import Button from "../../components/Button";
import CarouselSimilarPosts from "../../components/CarouselSimilarPosts";
// import incrementViews from "../../services/incrementViews"





function PostDetails({ post }) {

  console.log("post : ", post);
  const router = useRouter();

  //todo fix increment number of views .... later
  // const [views, setViews] = useState(0)
// useEffect(() => {
//   const newViews = (async function (){ await incrementViews(post.slug)
//   setViews(newViews)})()  
// }, [])

  if (router.isFallback) {
    return <Loader />;
  }

  const { isShowing, toggle } = useModal();

  return (
    <>
      <PostDetail post={post} />
      <div className="btn-comment" onClick={toggle}>
        <Button text="Réagir"></Button>
      </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
        title="Bonjour. Laissez-moi un commentaire."
      >
        <CommentForm slug={post.slug} hide={toggle} />
      </Modal>
      <Comments slug={post.slug} />
      <CarouselSimilarPosts
        categories={post.categories.map((category) => category.slug)}
        slug={post.slug}
      />

      <style jsx>{`
        .btn-comment {
          display: flex;
          justify-content: center;
          margin: 20px;
        }
      `}</style>
    </>
  );
}

export default PostDetails;

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
    revalidate: 6000,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
