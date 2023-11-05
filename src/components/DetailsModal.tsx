import React, { ReactNode, useCallback, useEffect } from 'react';
import DetailsClose from './DetailsClose';
import { useNavigate, useSearchParams } from 'react-router-dom';

type DetailsModalProps = {
  children: ReactNode;
};

function DetailsModal({ children }: DetailsModalProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const handleClose = useCallback(() => {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set('details', '0');
    updatedSearchParams.delete('details');

    navigate(`?${updatedSearchParams.toString()}`);
  }, [searchParams, navigate]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === 'Escape') {
        handleClose();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleClose]);

  return (
    <div id="modal" className="fixed top-0 left-0">
      <div className="w-full h-full bg-gray-900/30" onClick={handleClose}></div>
      <div className="z-20 py-20 fixed top-0 right-0 h-full w-96 bg-gray-900/50 backdrop-blur-sm">
        <DetailsClose onClose={handleClose} />
        {children}
      </div>
    </div>
  );
}

export default DetailsModal;
