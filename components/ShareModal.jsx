import { useState, useEffect } from "react";
import { getBlogTitle, getPostShared } from "../services";
import { useRouter } from "next/router";
import Loader from "./Loader";
import Image from "next/image";

import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

function ShareModal() {


  const { asPath } = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";

  const URL = `${origin}${asPath}`;

  const router = useRouter();
  const slug = router.query.slug;

  const [blogTitleDefault, setBlogTitleDefault] = useState();
  const [post, setPost] = useState();

  useEffect(() => { 
    if (slug){
       getPostShared(slug).then((data) => setPost(data)); 
    }  else {
        getBlogTitle().then((data) => setBlogTitleDefault(data));
        const defaultPost = {
          title: blogTitleDefault,
          featuredImage: { url: "/public/tongs.svg" },
        };
        setPost(defaultPost);        
    }   
  }, []);


// function copy to clipboard
  const [isCopied, setIsCopied] = useState(false);
  const copyTextToClipboard = async (text) => {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  };

  const handleCopyClick = () => {
    copyTextToClipboard(URL)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  if (!post) {
    return <Loader />;
  }
  return (
    <>
      <div className="copy-container">
        <input type="text" value={URL} readOnly />
        <button onClick={handleCopyClick} className="btn-copy">
          <Image
            src="/copy-link.svg"
            alt="close article"
            width={30}
            height={30}
          />
        </button>
        <span className="copy-span">{isCopied ? "Copied!" : "Copy"}</span>
      </div>
      <div className="rs-container">
        <LinkedinShareButton url={URL} title={post.title}>
          <LinkedinIcon />
        </LinkedinShareButton>
        <EmailShareButton url={URL} title={post.title} subject={post.title}>
          <EmailIcon />
        </EmailShareButton>
        <FacebookShareButton url={URL} title={post.title} quote={post.title}>
          <FacebookIcon />
        </FacebookShareButton>
        <PinterestShareButton
          media={post.featuredImage.url}
          url={URL}
          title={post.title}
          description={post.title}
        >
          <PinterestIcon />
        </PinterestShareButton>
        <RedditShareButton url={URL} title={post.title}>
          <RedditIcon />
        </RedditShareButton>
        <TelegramShareButton url={URL} title={post.title}>
          <TelegramIcon />
        </TelegramShareButton>
        <TwitterShareButton url={URL} title={post.title}>
          <TwitterIcon />
        </TwitterShareButton>
        <WhatsappShareButton url={URL} title={post.title}>
          <WhatsappIcon />
        </WhatsappShareButton>
      </div>
      <style jsx>{`
        .copy-container {
          display: flex;
          justify-content: center;
          gap: 10px;
          align-items: center;
          margin-bottom: 10px;
          border-bottom: 2px solid;
          padding: 10px;
        }
        .btn-copy {
          border: solid 2px var(--color4);
          border-radius: 10px;
          cursor: pointer;
        }
        .copy-span {
          font-family: "Bebas Neue";
          color: var(--color4);
        }
        .rs-container {
          display: flex;          
            justify-content: space-between;
            flex-wrap: wrap;
        }
      `}</style>
    </>
  );
}

export default ShareModal;
