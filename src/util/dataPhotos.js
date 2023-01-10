import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../config/firebase";

async function addPhoto(datas) {
  try {
    console.log(datas);
    return await addDoc(collection(db, "photos"), {
      title: datas.title,
      author: datas.author,
      createdAt: serverTimestamp(),
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = { addPhoto };
