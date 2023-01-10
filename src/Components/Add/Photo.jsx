import { useEffect, useState } from "react";

import Modal from "./Modal";

export default function Photo() {
  const [photos, setPhotos] = useState([])
  const [edit, setEdit] = useState("")
  const [isactive, setIsactive] = useState(false)
  
  // useEffect(() => {
  //  getPhoto(setPhotos)
  //   return 
  // },[])

  function rmPhoto(id) {
    setPhotos(val => val.filter(item => item.id !== id))
  }

  function upPhoto(id) {
    const siglePhoto = photos.filter(item => item.id === id)

    setEdit(siglePhoto)
    setIsactive(true)
    
  }
  return (
    <main className="pt-16">
      <div className="pt-8 pl-8">
        <Modal setPhotos={setPhotos} isactive={isactive} setIsactive={setIsactive} edit={edit} setEdit={setEdit} />
      </div>
      <section className="p-8 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {photos?.map((item) => (
          <div key={item.id}  className="card shadow-md">
           <div className="card-body">
             <div className="card-title items-start flex-col">
               <h1>{item.title}</h1>
             </div>
             <p>Author: {item.author}</p>
             <div className="card-actions justify-end">
               <button onClick={() => rmPhoto(item.id)} className="btn btn-sm bg-red-500 hover:bg-red-700">
                 Delete
               </button>
               <button onClick={() => upPhoto(item.id)} className="btn btn-sm bg-blue-500 hover:bg-blue-600">
                 Edit
               </button>
             </div>
           </div>
         </div>
       ))}
      </section>
    </main>
  );
}
