"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "@/components/header/Header";
import HeaderTop from "@/components/headertop/HeaderTop";
import NewCards from '@/components/newCards/NewCards';
import Middle from '@/components/middle/Middle';
import Footer from '@/components/footer/Footer';




export default function Home() {
  return (
    <>
    <HeaderTop/>
    <Header/>
    <NewCards/>  
    <Middle/>
    <Footer/>
    
    
    
    </>
  )
}
