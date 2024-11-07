import React, { useState, useEffect, Suspense  } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'locomotive-scroll/src/locomotive-scroll.scss';
import './fonts/fonts.css';
import './index.css';
import './media.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Barter from './components/Barter/Barter';
import Contact from './components/Contact/Contact';
import Location from './components/Location/Location';
import Objects from './components/Objects/Objects';
import MenuModal from './components/MenuModal/MenuModal';

const CallModal = React.lazy(() => import('./components/CallModal/CallModal'));
const CallModalApartments = React.lazy(() => import('./components/CallModalApartments/CallModalApartments'));
const VideoModal = React.lazy(() => import('./components/VideoModal/VideoModal'));
const InstallmentCalculator = React.lazy(() => import('./components/InstallmentCalculator/InstallmentCalculator'));

import NotFound from './components/NotFound/NotFound';
const Gallery = React.lazy(() => import('./components/Gallery/Gallery'));

// import News from './components/News/News';
// import NewsItem from './components/NewsItem/NewsItem';
import { ScrollProvider } from './ScrollContext';

const Apartments = React.lazy(() => import('./components/Apartments/Apartments'));
const SelectBlock = React.lazy(() => import('./components/Apartments/SelectBlock/SelectBlock'));
const SelectPlannedLayout = React.lazy(() => import('./components/Apartments/SelectPlannedLayout/SelectPlannedLayout'));

// import Loader from './components/Loader/Loader';
import Footer from './components/Footer/Footer';

import Login from './components/Login/Login';
// selectIsAuth
import Kochmon from './components/Kochmon/Kochmon';

const ApartmentsSelectObject = React.lazy(() => import('./components/Apartments/ApartmentsSelectObject/ApartmentsSelectObject'));
const KochmonSelectSector = React.lazy(() => import('./components/Kochmon/KochmonApartments/KochmonSelectSector/KochmonSelectSector'));
const KochmonSelectPlannedLayout = React.lazy(() => import('./components/Kochmon/KochmonApartments/KochmonSelectPlannedLayout/KochmonSelectPlannedLayout'));
const KochmonSelectHouse = React.lazy(() => import('./components/Kochmon/KochmonApartments/KochmonSelectHouse/KochmonSelectHouse'));
const KochmonApartments = React.lazy(() => import('./components/Kochmon/KochmonApartments/KochmonApartments'));

// import DelayedPage from './DelayedPage';
const FormBuying = React.lazy(() => import('./components/Admin/FormBuying/FormBuying'));
const FormBooking = React.lazy(() => import('./components/Admin/FormBooking/FormBooking'));
const FormCancellation = React.lazy(() => import('./components/Admin/FormCancellation/FormCancellation'));
const FormInstallment = React.lazy(() => import('./components/Admin/FormInstallment/FormInstallment'));
const FormBarter = React.lazy(() => import('./components/Admin/FormBarter/FormBarter'));

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [updateStatus, setUpdateStatus] = useState('');

  const locationS = useLocation();
  const [selectedArrFloor, setSelectedArrFloor] = useState('');
  const [selectedFlRooms, setSelectedFlRooms] = useState('');

  // const [selectedObject, setSelectedObject] = useState('');
  const [selectedSector, setSelectedSector] = useState('');
  const [selectedKochmonFloor, setSelectedKochmonFloor] = useState(1);
  const [selectedBlock, setSelectedBlock] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedFloor, setSelectedFloor] = useState('');
  const [maxNumFl, setMaxNumFl] = useState('');
  // for Modal -----------------------------------------------
  const [isOpenSelectObject, setIsOpenSelectObject] = useState(false);

  const [isKochmonOpenSelectSector, setIsKochmonOpenSelectSector] = useState(false);
  const [isKochmonOpenSelectBlock, setIsKochmonOpenSelectBlock] = useState(false);
  const [isKochmonOpenSelectPlannedLayout, setIsKochmonOpenSelectPlannedLayout] = useState(false);
  const [isKochmonOpenApartments, setIsKochmonOpenApartments] = useState(false);

  const [isOpenSelectBlock, setIsOpenSelectBlock] = useState(false);
  const [isOpenSelectPlannedLayout, setIsOpenSelectPlannedLayout] = useState(false);
  const [isOpenApartments, setIsOpenApartments] = useState(false);

  const handleOpenSelectObjectModal = () => {
    setIsOpenSelectObject(true);
  }
  const handleCloseSelectObjectModal = () => {
    setIsOpenSelectObject(false);
  }


  const handleOpenKochmonSelectSectorModal = () => {
    setIsKochmonOpenSelectSector(true);
  }
  const handleCloseKochmonSelectSectorModal = () => {
    setIsKochmonOpenSelectSector(false);
  }
  const handleOpenKochmonSelectBlockModal = () => {
    setIsKochmonOpenSelectBlock(true);
  }
  const handleCloseKochmonSelectBlockModal = () => {
    setIsKochmonOpenSelectBlock(false);
  }
  const handleOpenKochmonSelectPlannedLayoutModal = () => {
    setIsKochmonOpenSelectPlannedLayout(true);
  }
  const handleCloseKochmonSelectPlannedLayoutModal = () => {
    setIsKochmonOpenSelectPlannedLayout(false);
  }
  const handleOpenKochmonApartmentsModal = () => {
    setIsKochmonOpenApartments(true);
  }
  const handleCloseKochmonApartmentsModal = () => {
    setIsKochmonOpenApartments(false);
  }

  const handleOpenSelectBlockModal = () => {
    setIsOpenSelectBlock(true);
  }
  const handleCloseSelectBlockModal = () => {
    setIsOpenSelectBlock(false);
  }
  const handleOpenSelectPlannedLayoutModal = () => {
    setIsOpenSelectPlannedLayout(true);
  }
  const handleCloseSelectPlannedLayoutModal = () => {
    setIsOpenSelectPlannedLayout(false);
  }
  const handleOpenApartmentsModal = () => {
    setIsOpenApartments(true);
  }
  const handleCloseApartmentsModal = () => {
    setIsOpenApartments(false);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    if (isOpenSelectObject || isOpenSelectBlock || isOpenSelectPlannedLayout || isOpenApartments) {
      document.body.classList.add('lockA');
    } else {
      document.body.classList.remove('lockA');
    }
  }, [isOpenSelectObject, isOpenSelectBlock, isOpenSelectPlannedLayout, isOpenApartments]);
  // -----------------------------------------------------------

  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   window.onload = () => {
  //     setLoading(false);
  //   };
  // }, []);
  const hideHeader = locationS.pathname.startsWith('/admin');
  const hideFooter = locationS.pathname === '/location' || locationS.pathname === '/objects' || locationS.pathname.startsWith('/admin');

  const [scrollInstancesD, setScrollInstancesD] = useState(null);



  return (
    // {loading ? (
    //   <Loader />
    // ) : (
    <>

      {!hideHeader && <Header scrollInstancesD={scrollInstancesD} />}

      {/* <DelayedPage location={locationS}> */}
      <ScrollProvider location={locationS} setScrollInstancesD={setScrollInstancesD}>
        <Routes>
          <Route path="/" element={<Kochmon onOpenKochmonSelectSectorModal={handleOpenKochmonSelectSectorModal} setSelectedSector={setSelectedSector} onOpenKochmonSelectBlockModal={handleOpenKochmonSelectBlockModal} />} />
          <Route path="/prime" element={<Home onOpenSelectBlockModal={handleOpenSelectBlockModal} />} />
          <Route path="/about" element={<About />} />
          <Route path="/barter" element={<Barter />} />
          <Route path="/contact" element={<Contact setIsModalOpen={setIsModalOpen} />} />
          <Route path="/location" element={<Location />} />
          <Route path="/objects" element={<Objects />} />
          {/* <Route path="/news" element={<News />} />
          <Route path="/newsItem" element={<NewsItem />} /> */}
          <Route path="/login" element={<Login />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        {!hideFooter && <Footer onOpenSelectBlockModal={handleOpenSelectObjectModal} />}
      </ScrollProvider>
      {/* </DelayedPage> */}


      <MenuModal onOpenSelectObjectModal={handleOpenSelectObjectModal} />

      <Suspense fallback={<div>Loading...</div>}>
        <CallModal />
        <CallModalApartments selectedBlock={selectedBlock} selectedFloor={selectedFloor} selectedArrFloor={selectedArrFloor} selectedFlRooms={selectedFlRooms} />
        <VideoModal />
        <InstallmentCalculator selectedOption={selectedOption} costOfApart={[0]} />

        <Gallery />

        <ApartmentsSelectObject
          isOpen={isOpenSelectObject}
          onCloseModal={handleCloseSelectObjectModal}
          onOpenSelectBlockModal={handleOpenSelectBlockModal}
          onOpenKochmonSelectSectorModal={handleOpenKochmonSelectSectorModal}
        />

        <KochmonSelectSector
          setSelectedSector={setSelectedSector}
          isOpen={isKochmonOpenSelectSector}
          onCloseModal={handleCloseKochmonSelectSectorModal}
          onOpenKochmonSelectBlockModal={handleOpenKochmonSelectBlockModal}
        />
        <KochmonSelectHouse
          setSelectedBlock={setSelectedBlock}
          isOpen={isKochmonOpenSelectBlock}
          onCloseModal={handleCloseKochmonSelectBlockModal}
          selectedSector={selectedSector}
          onOpenSelectPlannedLayoutModal={handleOpenKochmonSelectPlannedLayoutModal}
        />
        <KochmonSelectPlannedLayout
          setSelectedFloor={setSelectedKochmonFloor}
          selectedFloor={selectedKochmonFloor}
          setMaxNumFl={setMaxNumFl}
          selectedBlock={selectedBlock}
          selectedSector={selectedSector}
          setSelectedOption={setSelectedOption}
          isOpen={isKochmonOpenSelectPlannedLayout}
          onCloseModal={handleCloseKochmonSelectPlannedLayoutModal}
          onOpenApartmentsModal={handleOpenKochmonApartmentsModal}
        />
        <KochmonApartments
          selectedFloor={selectedKochmonFloor}
          maxNumFl={maxNumFl}
          selectedBlock={selectedBlock}
          selectedSector={selectedSector}
          changeSetSelectedFloor={setSelectedKochmonFloor}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          isOpen={isKochmonOpenApartments}
          onCloseModal={handleCloseKochmonApartmentsModal}
          onCloseModalPlannedLayout={handleCloseKochmonSelectPlannedLayoutModal}
          onCloseModalHouse={handleCloseKochmonSelectBlockModal}
          setSelectedFlRooms={setSelectedFlRooms}
          updateStatus={updateStatus}
        />

        <SelectBlock
          setSelectedBlock={setSelectedBlock}
          isOpen={isOpenSelectBlock}
          onCloseModal={handleCloseSelectBlockModal}
          onOpenSelectPlannedLayoutModal={handleOpenSelectPlannedLayoutModal} />
        <SelectPlannedLayout
          setSelectedFloor={setSelectedFloor}
          selectedFloor={selectedFloor}
          selectedBlock={selectedBlock}
          setSelectedOption={setSelectedOption}
          isOpen={isOpenSelectPlannedLayout}
          onCloseModal={handleCloseSelectPlannedLayoutModal}
          onOpenApartmentsModal={handleOpenApartmentsModal} />
        <Apartments
          selectedFloor={selectedFloor}
          selectedBlock={selectedBlock}
          changeSetSelectedFloor={setSelectedFloor}
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
          isOpen={isOpenApartments}
          onCloseModal={handleCloseApartmentsModal}
          onCloseModalPlannedLayout={handleCloseSelectPlannedLayoutModal}
          setSelectedArrFloor={setSelectedArrFloor}
          setSelectedFlRooms={setSelectedFlRooms}
        />

        <FormBuying setUpdateStatus={setUpdateStatus}/>
        <FormBooking setUpdateStatus={setUpdateStatus}/>
        <FormCancellation setUpdateStatus={setUpdateStatus}/>
        <FormInstallment setUpdateStatus={setUpdateStatus}/>
        <FormBarter setUpdateStatus={setUpdateStatus}/>
      </Suspense>

        <ToastContainer
            position="top-right"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeButton
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            className="main-toast-container"
        />
      {isModalOpen ? <div className="loading-form-contact"> <div className="loading-form-content-contact">Спасибо за заявку!</div></div> : ''}
    </>
    //  )}
  )
}

export default App
