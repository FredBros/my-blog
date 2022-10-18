 import React from 'react'
import { useRouter } from "next/router";


function test() {
   const router = useRouter()
console.log(router.pathname);
   return (
     <div>test</div>
   )
 }
 
 export default test