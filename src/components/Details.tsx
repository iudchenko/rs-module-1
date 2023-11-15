import { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { ICharacter } from '../types/types';
import Spinner from './Spinner';
import DetailsModal from './DetailsModal';
import DetailsCharacter from './DetailsCharacter';
import { useGetCharacterQuery } from '../redux/api/apiSlice';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

function Details() {
  // const [details, setDetails] = useState<ICharacter | null>(null);
  const { id } = useParams();
  // const [searchParams, setSearchParams] = useSearchParams();
  const { viewModeDetailsOpen } = useSelector(
    (state: RootState) => state.search
  );
  const detailsOpened = viewModeDetailsOpen ? 1 : 0;

  const {
    data: details,
    isLoading: isLoadingDetails,
    isFetching: isFetchingDetails,
    isSuccess: isSuccessDetails,
    isError: isErrorDetails,
    error: errorDetails,
  } = useGetCharacterQuery(id);

  return (
    <>
      {detailsOpened === 1 && (
        <DetailsModal>
          {isFetchingDetails && <Spinner />}
          {isSuccessDetails &&
            !(isLoadingDetails || isFetchingDetails) &&
            details !== null && <DetailsCharacter details={details} />}
          {isErrorDetails && <p className="text-white">Something went wrong</p>}
        </DetailsModal>
      )}
    </>
  );
}

export default Details;
