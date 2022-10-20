import React from "react";
import { useRouter } from "next/router";
import PostDetail from "../../blog/components/modules/PostDetail";
import Loader from "../../blog/components/utils/Loader";
import { getPosts, getPostDetails } from "../../blog/services";
import CommentForm from "../../blog/components/form/CommentForm";
import Comments from "../../blog/components/modules/Comments";
import useModal from "../../blog/utils/useModal";
import Modal from "../../blog/components/utils/Modal";
import Button from "../../blog/components/ui/Button";
import CarouselSimilarPosts from "../../blog/components/modules/CarouselSimilarPosts";
// import incrementViews from "../../services/incrementViews"





function PostDetails({ post }) {

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
