import { useParams } from 'react-router-dom';
import Spinner from './Spinner';
import DetailsModal from './DetailsModal';
import DetailsCharacter from './DetailsCharacter';

import { useGetCharacterQuery } from '../redux/api/apiSlice';
import { RootState } from '../redux/store';
import { useSelector } from 'react-redux';

function Details() {
  const { id } = useParams();
  const { viewModeDetailsOpen } = useSelector(
    (state: RootState) => state.search
  );
  const { getCharacterLoading } = useSelector(
    (state: RootState) => state.loading
  );
  const detailsOpened = viewModeDetailsOpen ? 1 : 0;

  const {
    data: details,
    isSuccess: isSuccessDetails,
    isError: isErrorDetails,
  } = useGetCharacterQuery(id);

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
