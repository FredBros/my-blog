import {updateViews, getViews} from "./index"


const  getOldViews = async (slug) => await getViews(slug)


const  incrementViews = async (slug) =>{
  const oldViews = await getOldViews(slug)
  console.log("old views :", oldViews)
  const newViews = oldViews +1
  const obj= {slug, newViews}
  console.log(obj)
  await updateViews(obj);
  return newViews;

}

export default incrementViews