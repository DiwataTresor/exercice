import Head from "next/head";
import { notFound } from "next/navigation";

async function getData(id) {
  console.log(id);
  const res= await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{cache:"no-store",});
  if(!res.ok)
  {
    return notFound()
   
  }
  return res.json();
}
const Post = async ({params}) => {
  const data=await getData(params.id);
  console.log(data);
  return(
  <div style={{height:"100vh"}}>
    <h1>Titre : {data.title}</h1>
    <p>{data.body}

    </p>
  </div>)
};

export default Post;
