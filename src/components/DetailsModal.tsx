import React, { ReactNode, useCallback, useEffect } from "react";
import DetailsClose from "./DetailsClose";
// import { useSearchParams } from 'react-router-dom';
import { useRouter } from "next/router";

import { useDispatch } from "react-redux";
import { changeViewMode } from "../redux/search/search";
// import { useSearchParams } from "next/navigation";

type DetailsModalProps = {
  children: ReactNode;
};

function DetailsModal({ children }: DetailsModalProps) {
  const router = useRouter();
  const { pathname, query } = router;
  const dispatch = useDispatch();
  // const [searchParams] = useSearchParams();

  const handleClose = useCallback(() => {
    // const updatedSearchParams = new URLSearchParams(query);
    // updatedSearchParams.set("details", "0");
    // updatedSearchParams.delete("details");
    dispatch(changeViewMode(false));
    router.push("/");

    // router.push(`?${updatedSearchParams.toString()}`);
  }, [router, dispatch]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.code === "Escape") {
        handleClose();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClose]);

  return (
    <div
      id="modal"
      data-testid="modal"
      className="fixed top-0 left-0 w-full h-full"
    >
      <div
        data-testid="modal-close"
        className="w-full h-full bg-gray-900/30"
        onClick={handleClose}
      ></div>
      <div className="z-20 py-20 fixed top-0 right-0 h-full w-96 bg-gray-900/50 backdrop-blur-sm">
        <DetailsClose onClose={handleClose} />
        {children}
      </div>
    </div>
  );
}

export default DetailsModal;
