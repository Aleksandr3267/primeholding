import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import videoP from '../../assets/Prime.mp4';
import videoPKochmon from '../../assets/Kochmon/Kochmon.mp4';
import './VideoModal.css'
import modalCloseIcon from '../../assets/icons/modalCloseIcon.svg'
function VideoModal() {
    const location = useLocation();
    const [currentPathname, setCurrentPathname] = useState(location.pathname);

    const modalRef = useRef(null);
    const videoRef = useRef(null);
    function stopVideo() {
        if (videoRef.current && !videoRef.current.paused) {
            videoRef.current.pause();
        }
    }
    useEffect(() => {
        setCurrentPathname(location.pathname);
        const video = videoRef.current;
        if (video) {
            video.src = currentPathname === '/' ? videoPKochmon : videoP;
            video.load();
        }
    }, [location.pathname, currentPathname]);


    useEffect(() => {
        const modal = modalRef.current;
        const video = videoRef.current;
        function handleModalShown() {
            if (video && modal.classList.contains('show')) {
                video.play();
                video.volume = 0.5;
            }
        }
        modal.addEventListener('shown.bs.modal', handleModalShown);
        return () => {
            modal.removeEventListener('shown.bs.modal', handleModalShown);
            stopVideo();
        };
    }, [currentPathname]);



    return (
        <div className="modal fade modal-video" id="videoModal" tabIndex={-1} aria-labelledby="videoModal" aria-hidden="true" ref={modalRef}>
            <div className="modal-dialog modal-fullscreen">
                <div className="modal-content">
                    <div className="modal-body modal-video__body">
                        <button id='stopButton' type="button" className="modal-video__btn-close" data-bs-dismiss="modal" aria-label="Закрыть видео" onClick={stopVideo}>
                            <img src={modalCloseIcon} alt="Закрыть" />
                        </button>

                        <video
                            ref={videoRef}
                            id='33cqCMFuCr8'
                            preload="metadata"
                            className='h-100 w-100'
                            controls={true}>
                            <source className='h-100 w-100' src={videoP} type="video/mp4" />
                        </video>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default VideoModal;