import React, { useState, useEffect } from 'react';
import Colab from './colab';
import { db } from "./firebase";
import { storage } from "./firebase";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL, listAll } from 'firebase/storage';
import { BookmarkAltIcon, BookmarkIcon, ChatAlt2Icon, CodeIcon, CogIcon, LightningBoltIcon, LinkIcon, MenuIcon, PlusCircleIcon, SparklesIcon, UserCircleIcon, UserIcon } from "@heroicons/react/solid"

function App() {

  const [popUp, setPopUp] = useState(false);

  const toggle = () => {
    setPopUp(!popUp)
  }

  useEffect(() => {
    document.title = "Yumi experimental"
  }, [])

  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    fetch('http://localhost:5000/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    })
      .then((response) => response.json())
      .then((data) => {
        setAnswer(data.answer);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  const publicationsRef = collection(db, "publications");
  const [newDescription, setNewDescription] = useState("");
  const [newMainText, setMainText] = useState("");

  const createPublication = async () => {
    await addDoc(publicationsRef, {
      description: newDescription,
      maintext: newMainText,
      timestamp: serverTimestamp() // Use serverTimestamp() here
    });
    alert("Gracias por contribuir");
  }

  return (
    <div className="-screen">
      <div className='w-full flex py-8'>
        <div className='w-3/4 sm:w-1/4 flex justify-evenly'>
          <MenuIcon className='text-gray-600 cursor-pointer w-6 h-auto' />
          <button className='px-5 py-2 rounded border-2 font-semibold border-blue-600 text-blue-600'>Yumi experimental</button>
        </div>
        <div className='w-1/2 flex justify-end'>
        </div>
        {popUp && <Colab createPublication={createPublication} setNewDescription={setNewDescription} setMainText={setMainText} newMainText={newMainText} newDescription={newDescription} toggle={toggle} />}
        <div className='w-1/4 hidden sm:flex justify-evenly'>
          <PlusCircleIcon onClick={toggle} className='text-gray-600 hover:text-gray-800 cursor-pointer w-6 h-auto' />
          <CodeIcon className='text-gray-600 w-6 hover:text-gray-800 cursor-pointer h-auto' />
          <CogIcon className='text-gray-600 hover:text-gray-800 w-6 cursor-pointer h-auto' />
          <UserCircleIcon className='text-gray-600 hover:text-gray-800 cursor-pointer w-6 h-auto' />
        </div>
      </div>
      <div className='w-full h-full flex'>
        <div className='w-0 sm:w-1/4 pl-10 pr-8 border-2 border-green-500 rounded-tr-xl pb-44'>
          <p className='text-blue-600 hidden sm:flex font-semibold pt-5 mb-8'>Tus elementos guardados</p>
          <ul>
            <li className='hidden sm:flex items-center'><ChatAlt2Icon className='w-4 h-auto text-blue-400' /> <p className='text-gray-500 my-2 line-clamp-1 ml-1'>Traducción de agua</p> </li>
            <li className='hidden sm:flex items-center'><ChatAlt2Icon className='w-4 h-auto text-blue-400' /> <p className='text-gray-500 my-2 line-clamp-1 ml-1'>Traduce historia de la ciencia en Europa y Asia en el siglo XX</p> </li>
            <li className='hidden sm:flex items-center'><ChatAlt2Icon className='w-4 h-auto text-blue-400' /> <p className='text-gray-500 my-2 line-clamp-1 ml-1'>Traduce el agua es importante para los animales</p> </li>
          </ul>
          <div className='hidden sm:flex pt-10 justify-center'>
            <PlusCircleIcon className='text-gray-600 hover:text-gray-800 h-6 cursor-pointer w-6' />
          </div>
          <div className='bottom-10 fixed left-10 hidden sm:flex'>
            <LinkIcon className='text-gray-600 hover:text-gray-800 cursor-pointer w-5 h-5' />
            <p className='underline text-gray-600 cursor-pointer'>Política de Privacidad</p>
          </div>
        </div>
        <div className='w-3/4 pl-8'>
          <div className=''>
            <p className='font-semibold py-4 text-gray-600'>
              Accede a traducción en tiempo real del idioma español a awajun y viceversa.
            </p>
          </div>
          <form onSubmit={(e) => e.preventDefault()} type="submit" className="flex w-3/5 border-2 p-2 rounded-xl border-gray-300 mb-4">
            <input
              type="text"
              placeholder='Escribe acá'
              className=" w-11/12 outline-none p-2"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
            />
            <div className='w-1/12 flex justify-center'>
              <LightningBoltIcon
                className="text-blue-500 cursor-pointer w-6 h-auto"
                onClick={handleSubmit}
              />
            </div>
          </form>
          {answer ? (
            <div className="my-6 flex border border-gray-300 px-2 py-4 rounded w-3/5">
              <div className='w-1/12 flex justify-center'><SparklesIcon className='text-purple-600 w-6 h-auto cursor-pointer' /></div>
              <div className='w-5/6'>{answer}</div>
              <div className='w-1/12 flex justify-center'><BookmarkIcon className='text-blue-600 w-6 h-auto cursor-pointer' /></div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
