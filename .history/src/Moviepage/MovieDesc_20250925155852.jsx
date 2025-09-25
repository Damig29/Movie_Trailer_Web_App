import { Link } from "react-router-dom";

const MovieDesc = ({ movieInfo }) => {
  // Format currency
  const formatCurrency = (amount) => {
    if (!amount || amount === 0) return 'Unknown';
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Format release date
  const formatReleaseDate = (dateString) => {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  // Format production countries
  const formatCountries = (countries) => {
    if (!countries || countries.length === 0) return 'Unknown';
    return countries.map(country => country.name).join(' • ');
  };

  // Format spoken languages
  const formatLanguages = (languages) => {
    if (!languages || languages.length === 0) return 'Unknown';
    return languages.map(lang => lang.english_name).join(' • ');
  };

  // Format production companies
  const formatCompanies = (companies) => {
    if (!companies || companies.length === 0) return 'Unknown';
    return companies.map(company => company.name).join(' • ');
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <div className="px-5 py-5 sm:px-10 w-full">
        <div className="max-w-5xl mx-auto grid grid-cols-1 gap-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
            <div className="text-gray-100 font-bold sm:col-span-3">Genres</div>
            <div className="flex gap-2 flex-wrap sm:col-span-9">
            {movieInfo?.genres?.map((genre) => (
              <span key={genre.id} className="text-white py-1 px-3 rounded-sm bg-indigo-950">
                {genre.name}
              </span>
            )) || <span className="text-white">Unknown</span>}
            </div>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
            <div className="text-gray-100 font-bold sm:col-span-3">Overview</div>
            <div className="text-white sm:col-span-9">
            <span>
              {movieInfo?.overview || 'No overview available'}
            </span>
            </div>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
            <div className="text-gray-100 font-bold sm:col-span-3">Release date</div>
            <div className="text-white sm:col-span-9">
              <span>{formatReleaseDate(movieInfo?.release_date)}</span>
            </div>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
            <div className="text-gray-100 font-bold sm:col-span-3">Countries</div>
            <div className="text-white sm:col-span-9">
              <span>{formatCountries(movieInfo?.production_countries)}</span>
            </div>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
            <div className="text-gray-100 font-bold sm:col-span-3">Status</div>
            <div className="text-white sm:col-span-9">
              <span>{movieInfo?.status || 'Unknown'}</span>
            </div>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
            <div className="text-gray-100 font-bold sm:col-span-3">Language</div>
            <div className="text-white sm:col-span-9">
              <span>{formatLanguages(movieInfo?.spoken_languages)}</span>
            </div>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
            <div className="text-gray-100 font-bold sm:col-span-3">Budget</div>
            <div className="text-white sm:col-span-9">
              <span>{formatCurrency(movieInfo?.budget)}</span>
            </div>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
            <div className="text-gray-100 font-bold sm:col-span-3">Revenue</div>
            <div className="text-white sm:col-span-9">
              <span>{formatCurrency(movieInfo?.revenue)}</span>
            </div>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
            <div className="text-gray-100 font-bold sm:col-span-3">Tagline</div>
            <div className="text-white sm:col-span-9">
              <span>{movieInfo?.tagline || 'No tagline available'}</span>
            </div>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-start">
            <div className="text-gray-100 font-bold sm:col-span-3">Production Companies</div>
            <div className="text-white sm:col-span-9">
              <span>{formatCompanies(movieInfo?.production_companies)}</span>
            </div>
          </div>
        </div>
      </div>
      
      <Link to="/"> 
        <div className="px-5 py-3 sm:px-10 sm:py-5">
          <button className="bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] flex-shrink-0 whitespace-nowrap px-3 py-2 font-semibold rounded-md cursor-pointer">
            Back to Home
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MovieDesc;
