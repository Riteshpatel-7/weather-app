import { useNavigate } from "react-router-dom";
import navigationIcon from "../assets/images/navigation.png";

export default function MyLocationSuggestion({
  MyLocationSuggestion,
  setMyLocalSuggestion,
  setCityData,
  setIsShimmer,
}) {
  const navigate = useNavigate();
  function getLocation() {
    if (!navigator.geolocation) {
      navigate("/error?message=Geolocation is not supported by your browser");
      return null;
    }
    // Get the current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        fetch(
          `https://nominatim.openstreetmap.org/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&format=json`
        )
          .then((res) => res.json())
          .then((data) => {
            setCityData({
              name:
                data.address.city ||
                data.address.town ||
                data.address.village ||
                data.address.county,
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              country: data.address.country,
              admin1: data.address.state || data.address.county,
            });
            setIsShimmer(false);
          });
      },
      (error) => {
        if (error.code === error.TIMEOUT) {
          navigate("/error?message=Geolocation request timed out!");
          // handle timeout (e.g., show a message or fallback location)
        } else if (error.code === error.PERMISSION_DENIED) {
          navigate("/error?message=Permission denied by the user. Please enable location permissions in your browser or device settings, then reload the page.");
        } else if (error.code === error.POSITION_UNAVAILABLE) {
          navigate("/error?message=Position unavailable.");
        }
      }, // Handle error
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );
  }

  if (!MyLocationSuggestion) return null;
  return (
    <div
      onClick={() => {
        setIsShimmer(true);
        getLocation();
        setMyLocalSuggestion(false);
      }}
      className="flex gap-4 absolute top-[-120%] lg:top-[120%] cursor-pointer border border-[hsl(243,23%,30%)] hover:bg-[hsl(244,35%,15%)] left-0 w-[100%] bg-[hsl(243,53%,13%)] rounded-lg shadow-lg z-10 p-3"
    >
      <img className="w-6" src={navigationIcon} alt="" />
      <div>Use my current Location</div>
    </div>
  );
}
