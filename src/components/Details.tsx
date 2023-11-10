import { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { fetchCharacter } from '../utils/fetchData';
import { AppStatus, ICharacter } from '../types/types';
import Spinner from './Spinner';
import DetailsModal from './DetailsModal';
import DetailsCharacter from './DetailsCharacter';

function Details() {
  const [details, setDetails] = useState<ICharacter | null>(null);
  const [detailsStatus, setDetailsStatus] = useState(AppStatus.active);
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const detailsOpened = Number(searchParams.get('details')) === 1 ? 1 : 0;

  useEffect(() => {
    const getCharacter = async () => {
      setDetailsStatus(AppStatus.loading);
      const { data } = await fetchCharacter(Number(id));
      if (data) {
        setDetails(data);
        // console.log(response.data);
      }
      setDetailsStatus(AppStatus.active);
    };
    getCharacter();
  }, [id]);

  return (
    <>
      {detailsOpened === 1 && (
        <>
          {detailsStatus === AppStatus.loading && (
            <DetailsModal>
              <Spinner />
            </DetailsModal>
          )}
          {detailsStatus === AppStatus.active && details !== null && (
            <DetailsModal>
              <DetailsCharacter details={details} />
            </DetailsModal>
          )}
        </>
      )}
    </>
  );
}

export default Details;
