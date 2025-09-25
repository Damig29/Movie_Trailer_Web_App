import { Link } from "react-router-dom";

const MovieDesc = () => {
  return (
    <div className="flex">
      <div className="px-10 py-5">
        <div className="flex py-3">
          <div className="text-gray-100 font-bold w-80">Generes</div>
          <div className="flex gap-2">
            <span className="text-white py-1 px-3 rounded-sm bg-indigo-950">
              Adventure
            </span>
            <span className="text-white py-1 px-3 rounded-sm bg-indigo-950">
              Action
            </span>
            <span className="text-white py-1 px-3 rounded-sm bg-indigo-950">
              Drama
            </span>
          </div>
        </div>
        <div className="flex py-3">
          <div className="text-gray-100 font-bold w-80">Overview</div>
          <div className="text-white w-[700px]">
            <span>
              Hundreds of cash-strapped players accept a strange invitation to
              compete in children's games. Inside, a tempting prize awaits with
              deadly high stakes: a survival game that has a whopping 45.6
              billion-won prize at stake.
            </span>
          </div>
        </div>
        <div className="flex py-3">
          <div className="text-gray-100 font-bold w-80">Release date</div>
          <div className="text-white w-[700px]">
            <span>December 26, 2004 (Worldwide)</span>
          </div>
        </div>
        <div className="flex py-3">
          <div className="text-gray-100 font-bold w-80">Countries</div>
          <div className="text-white w-[700px]">
            <span>
              United States • Canada • UAE • Hungary • Italy • New Zealand
            </span>
          </div>
        </div>
        <div className="flex py-3">
          <div className="text-gray-100 font-bold w-80">Status</div>
          <div className="text-white w-[700px]">
            <span>Released</span>
          </div>
        </div>
        <div className="flex py-3">
          <div className="text-gray-100 font-bold w-80">Language</div>
          <div className="text-white w-[700px]">
            <span>English • Korean • Hindi • Arabic • German • Spanish</span>
          </div>
        </div>
        <div className="flex py-3">
          <div className="text-gray-100 font-bold w-80">Budget</div>
          <div className="text-white w-[700px]">
            <span>$21.4 billion</span>
          </div>
        </div>
        <div className="flex py-3">
          <div className="text-gray-100 font-bold w-80">Revenue</div>
          <div className="text-white w-[700px]">
            <span>$900 million</span>
          </div>
        </div>
        <div className="flex py-3">
          <div className="text-gray-100 font-bold w-80">Tagline</div>
          <div className="text-white w-[700px]">
            <span>45.6 billion won is Child's play</span>
          </div>
        </div>
        <div className="flex py-3">
          <div className="text-gray-100 font-bold w-80">
            Production Companies
          </div>
          <div className="text-white w-[700px]">
            <span>
              Legendary Entertainment • Warner Bros. Entertainment • Villeneuve
              Films
            </span>
          </div>
        </div>
      </div>
      <div className="px-10 py-5">
        <button className="bg-linear-to-r from-[#D6C7FF] to-[#AB8BFF] px-3 py-2 font-semibold rounded-md cursor-pointer">Visit Homepage</button>
      </div>
    </div>
  );
};

export default MovieDesc;
