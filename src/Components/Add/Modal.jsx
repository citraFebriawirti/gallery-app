import { useEffect, useState } from "react";
import {
  addPhoto
} from "../../util/dataPhotos";

import Input from "./Input";


export default function Modal({setPhotos, isactive,  setIsactive, edit,  setEdit}) {
  const [modal, setModal] = useState("");
  const [inputs, setInputs] = useState({});

  function toggleModal() {
    setModal((val) => (val === "modal-open" ? "" : "modal-open"));
    setIsactive(false)
    if (!isactive) {
      setInputs({})
    }
  }

  // munculkan dapat menulis input di modal
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    
    setInputs(val => ({
      ...val,
      [name] : value
    }))
  }

  useEffect(() => {
    if (isactive) {
      setInputs(edit[0])
      return toggleModal()
    }
    return 
  },[isactive])

async function handleSubmit(e) {
    e.preventDefault()

    if (edit.length > 0) {
      setPhotos(val => {
        const index = val.findIndex(item => item.id === edit[0].id)
        const newValue = {
          id: inputs.id,
          title: inputs.title,
          author: inputs.author
        }
        val[index] = newValue
        return val
      })
      setEdit("")
      return setModal("")
  };
  
  await addPhoto(inputs)
  
    // setPhotos(old => {
    //   return [
    //     ...old,
    //     {
    //       id: +new Date(),
    //       title: inputs.title,
    //       author: inputs.author
    //     }
    //   ]
    // })
     
    setInputs("")
    setModal("")
  }

  return (
    <>
      <label onClick={toggleModal} className="btn btn-[#213644]">
        Add Photos
      </label>

      <div className={`modal ${modal}`}>
        <div className="modal-box relative">
          <label
            onClick={toggleModal}
            className="absolute font-bold right-4 top-2 cursor-pointer"
          >
            ✕
          </label>
          <form onSubmit={handleSubmit} className="pt-6 space-y-6">
            <div className="form-control">
              <Input
                type="text"
                name="title"
                onChange={handleInput}
                value={inputs.title || ""}
                placeholder="Title"
              />
            </div>
            <div className="form-control">
              <Input
                type="text"
                name="author"
                onChange={handleInput}
                value={inputs.author || ""}
                placeholder="Author"
              />
            </div>
          
            <button
              type="submit"
              className="btn btn-md bg-blue-500 hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
