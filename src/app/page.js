"use client"
import { useState, useEffect } from 'react';
import { addDocument, getAllDocuments } from '../app/utils/firebaseUtils';
import { db } from 'firebase.config';
import LoginForm from "./components/LoginForm";
import LogoutButton from './components/LogoutButton';

export default function Home() {

  const [stocks, setStocks] = useState([]);;

  const loadStocks = async () => {
    const docs = await getAllDocuments(db, "stocks");
    console.log(docs);
    setStocks(docs);
  }

  useEffect(() => {

    loadStocks();

  }, [])


  return (
    <div className="container mx-auto p-4">
        
      < LoginForm />
      <a href = "/registerForm">click here to register</a>

    </div>
  );
}