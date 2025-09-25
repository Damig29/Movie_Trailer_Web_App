import star from '../assets/star.svg';
import stats from '../assets/stats.svg';

const Header = ({ movieInfo }) => {
    // Format runtime from minutes to hours and minutes
    const formatRuntime = (minutes) => {
        if (!minutes) return 'Unknown';
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
    };

    

    return (
        <div className="flex flex-col items-center gap-4 p-5 sm:p-10 w-full sm:flex-row sm:items-start sm:justify-between">
            <div className="flex flex-col items-center sm:items-start">
                <h1 className="text-2xl sm:text-4xl font-bold text-center sm:text-left">{movieInfo?.title || 'Unknown Title'}</h1>
                <div className="flex gap-2 text-gray-100 mt justify-center sm:justify-start">
                    <p>{movieInfo?.release_date?.split('-')[0] || 'Unknown Year'}</p>
                    <span>•</span>
                    <p>{movieInfo?.adult ? 'R' : 'PG-13'}</p>
                    <span>•</span>
                    <p>{formatRuntime(movieInfo?.runtime)}</p>
                </div>
            </div>
            <div className='flex text-gray-100 gap-3 mt-4 sm:mt-0 justify-center sm:justify-end'>
                <div className='flex bg-indigo-950 h-10 rounded-md items-center p-2'>
                    <img src={star} alt="Star Rating" className='w-5 mr-2' />
                    <span className='text-white font-bold'>{movieInfo?.vote_average?.toFixed(1) || 'N/A'}</span>
                    <span>/10 {movieInfo?.vote_count ? `(${movieInfo.vote_count.toLocaleString()})` : ''}</span>
                </div>
                <div className='flex bg-indigo-950 h-10 rounded-md items-center p-2 gap-3'>
                    <img src={stats} alt="View Stats" className='w-5' />
                    <p>{movieInfo?.popularity?.toFixed(0) || 'N/A'}</p>
                </div>
            </div>
        </div>
    );
}

export default Header;