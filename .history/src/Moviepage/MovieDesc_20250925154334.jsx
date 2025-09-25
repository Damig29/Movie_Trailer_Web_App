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
      <div className="px-5 py-5 sm:px-10">
        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-start">
          <div className="text-gray-100 font-bold sm:w-80">Genres</div>
          <div className="flex gap-2 flex-wrap">
            {movieInfo?.genres?.map((genre) => (
              <span key={genre.id} className="text-white py-1 px-3 rounded-sm bg-indigo-950">
                {genre.name}
              </span>
            )) || <span className="text-white">Unknown</span>}
          </div>
        </div>
        
        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-start">
          <div className="text-gray-100 font-bold sm:w-80">Overview</div>
          <div className="text-white sm:max-w-[700px]">
            <span>
              {movieInfo?.overview || 'No overview available'}
            </span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-start">
          <div className="text-gray-100 font-bold sm:w-80">Release date</div>
          <div className="text-white sm:max-w-[700px]">
            <span>{formatReleaseDate(movieInfo?.release_date)}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-start">
          <div className="text-gray-100 font-bold sm:w-80">Countries</div>
          <div className="text-white sm:max-w-[700px]">
            <span>{formatCountries(movieInfo?.production_countries)}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-start">
          <div className="text-gray-100 font-bold sm:w-80">Status</div>
          <div className="text-white sm:max-w-[700px]">
            <span>{movieInfo?.status || 'Unknown'}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-start">
          <div className="text-gray-100 font-bold sm:w-80">Language</div>
          <div className="text-white sm:max-w-[700px]">
            <span>{formatLanguages(movieInfo?.spoken_languages)}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-start">
          <div className="text-gray-100 font-bold sm:w-80">Budget</div>
          <div className="text-white sm:max-w-[700px]">
            <span>{formatCurrency(movieInfo?.budget)}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-start">
          <div className="text-gray-100 font-bold sm:w-80">Revenue</div>
          <div className="text-white sm:max-w-[700px]">
            <span>{formatCurrency(movieInfo?.revenue)}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-start">
          <div className="text-gray-100 font-bold sm:w-80">Tagline</div>
          <div className="text-white sm:max-w-[700px]">
            <span>{movieInfo?.tagline || 'No tagline available'}</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2 py-3 sm:flex-row sm:items-start">
          <div className="text-gray-100 font-bold sm:w-80">
            Production Companies
          </div>
          <div className="text-white sm:max-w-[700px]">
            <span>{formatCompanies(movieInfo?.production_companies)}</span>
          </div>
        </div>
      </div>
      
      <Link to="/"> 
        <div className="px-5 py-3 sm:px-10 sm:py-5">
          <button className="bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] px-3 py-2 font-semibold rounded-md cursor-pointer">
            Back to Home
          </button>
        </div>
      </Link>
    </div>
  );
};

export default MovieDesc;
