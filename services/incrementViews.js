import {updateViews, getViews} from "./index"


const  oldViews = async (slug) => await getViews(slug)


const  incrementViews = async (slug) =>{
  const newViews = await oldViews(slug) +1
  console.log("old views :", await oldViews(slug))
  const obj= {slug, newViews}
  console.log(obj)
  updateViews(obj);
  

}

export default incrementViews