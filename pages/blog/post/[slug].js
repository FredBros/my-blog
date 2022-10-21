import React from "react";
import PostDetail from "../../../blog/components/modules/PostDetail";
import { getPosts, getPostDetails } from "../../../blog/services";
import CommentForm from "../../../blog/components/form/CommentForm";
import Comments from "../../../blog/components/modules/Comments";
import useModal from "../../../blog/utils/useModal";
import Modal from "../../../blog/components/utils/Modal";
import Button from "../../../blog/components/ui/Button";
import CarouselSimilarPosts from "../../../blog/components/modules/CarouselSimilarPosts";
// import incrementViews from "../../services/incrementViews"
import { useRouter } from "next/router";
import Loader from "../../../blog/components/ui/Loader"



function PostDetails({ post }) {

 
  const { isShowing, toggle } = useModal();

  //todo fix increment number of views .... later
  // const [views, setViews] = useState(0)
// useEffect(() => {
//   const newViews = (async function (){ await incrementViews(post.slug)
//   setViews(newViews)})()  
// }, [])

 const router = useRouter();
 if (router.isFallback) {
   return <Loader />;
 }
  


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
PostDetails.layout = "blog"
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
