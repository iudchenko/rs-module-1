import React from "react";
import Spinner from "./Spinner";
import DetailsModal from "./DetailsModal";
import DetailsCharacter from "./DetailsCharacter";

import { useGetCharacterQuery } from "../redux/api/apiSlice";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function Details() {
  const router = useRouter();

  const {
    query: { id },
  } = router;

  const { viewModeDetailsOpen } = useSelector(
    (state: RootState) => state.search
  );
  const { getCharacterLoading } = useSelector(
    (state: RootState) => state.loading
  );
  const detailsOpened = viewModeDetailsOpen ? 1 : 0;

  const skipFlag = id ? false : true;

  const {
    data: details,
    isSuccess: isSuccessDetails,
    isError: isErrorDetails,
  } = useGetCharacterQuery(id, { skip: skipFlag });

  return (
    <>
      {detailsOpened === 1 && (
        <DetailsModal>
          {getCharacterLoading && (
            <div data-testid="details-spinner">
              <Spinner />
            </div>
          )}
          {isSuccessDetails && !getCharacterLoading && details !== null && (
            <DetailsCharacter details={details} />
          )}
          {isErrorDetails && <p className="text-white">Something went wrong</p>}
        </DetailsModal>
      )}
    </>
  );
}

export default Details;
