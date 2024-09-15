import { useState } from "react";

const Music = () => {
  // State để quản lý thứ tự sắp xếp, bài hát đang được chọn để đặt hàng, danh sách bài hát, bài hát mới và thông báo lỗi
  const [sortOrder, setSortOrder] = useState("title");
  const [selectedSongs, setSelectedSongs] = useState([]);
  const [newSong, setNewSong] = useState({
    title: "",
    artist: "",
    album: "",
    duration: "",
  });
  const [songs, setSongs] = useState([
    {
      title: "My Song Here",
      artist: "Eminem",
      album: "Spotify",
      duration: "5:35",
    },
    {
      title: "Another Song",
      artist: "Drake",
      album: "Apple Music",
      duration: "3:45",
    },
    {
      title: "One More Song",
      artist: "Ariana Grande",
      album: "YouTube Music",
      duration: "4:10",
    },
    {
      title: "Cool Song",
      artist: "Post Malone",
      album: "SoundCloud",
      duration: "2:55",
    },
    {
      title: "Nice Tune",
      artist: "Billie Eilish",
      album: "Spotify",
      duration: "3:25",
    },
    {
      title: "Chill Beat",
      artist: "The Weeknd",
      album: "Apple Music",
      duration: "4:30",
    },
    {
      title: "Upbeat Track",
      artist: "Dua Lipa",
      album: "YouTube Music",
      duration: "3:15",
    },
    {
      title: "Groovy Vibe",
      artist: "Ed Sheeran",
      album: "SoundCloud",
      duration: "5:00",
    },
  ]);
  const [error, setError] = useState("");

  // Hàm sắp xếp
  const sortSongs = (songs, order) => {
    return [...songs].sort((a, b) => {
      if (a[order] < b[order]) return -1;
      if (a[order] > b[order]) return 1;
      return 0;
    });
  };

  // Hàm xử lý việc chọn bài hát để đặt hàng
  const handleCheckboxChange = (song) => {
    setSelectedSongs((prev) => {
      const newSelection = prev.includes(song)
        ? prev.filter((item) => item !== song)
        : [...prev, song];
      return newSelection;
    });
  };

  // Hàm xử lý xóa bài hát
  const handleDeleteSong = (songToDelete) => {
    setSongs((prev) => prev.filter((song) => song !== songToDelete));
  };

  // Hàm xử lý việc đặt hàng
  const handleOrder = () => {
    console.log("Ordered songs:", selectedSongs); // Debugging line
    // Thực hiện hành động đặt hàng bài hát ở đây
  };

  // Hàm xử lý việc thêm bài hát mới
  const handleAddSong = () => {
    if (newSong.title && newSong.artist && newSong.album && newSong.duration) {
      setSongs((prev) => [...prev, newSong]);
      setNewSong({ title: "", artist: "", album: "", duration: "" }); // Reset input fields
      setError(""); // Reset error message
    } else {
      setError("Please fill out all fields before adding a song.");
    }
  };

  return (
    <div className="bg-black text-gray-300 min-h-screen p-10">
      {/* header */}
      <div className="flex">
        <img
          className="mr-6 w-48 h-48 object-cover"
          src="https://i.scdn.co/image/ab67616d0000b273956664d3d68465fc45ea5941"
          alt="Album Art"
        />
        <div className="flex flex-col justify-center">
          {/* content */}
          <h4 className="mt-0 mb-2 uppercase text-gray-500 tracking-widest text-xs">
            Playlist
          </h4>
          <h1 className="mt-0 mb-2 text-white text-4xl">
            Spotify Album Page with Tailwind CSS
          </h1>
          <p className="text-gray-600 mb-2 text-sm">
            With J. Cole, Quavo, Ty Dollar $ign
          </p>
          <p className="text-gray-600 text-sm">
            Created by <a href="#spotify">Spotify</a> - 50 songs, 3 hr 2 min
          </p>
        </div>
      </div>
      {/* action buttons */}
      <div className="mt-6 flex justify-between">
        <div className="flex">
          <button className="mr-2 bg-green-500 text-green-100 block py-2 px-8 rounded-full">
            Play
          </button>
          <button className="mr-2 border border-white block p-2 rounded-full">
            <img
              src="https://image.flaticon.com/icons/svg/2485/2485986.svg"
              height={25}
              width={25}
              alt="Like"
            />
          </button>
          <button className="mr-2 border border-white block p-2 rounded-full">
            ...
          </button>
        </div>
        <div className="text-gray-600 text-sm tracking-widest text-right">
          <h5 className="mb-1">Followers</h5>
          <p>5,055</p>
        </div>
      </div>
      {/* sort options */}
      <div className="mt-6 flex justify-end">
        <select
          className="bg-gray-700 text-gray-300 border border-gray-600 rounded px-4 py-2"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="artist">Artist</option>
          <option value="album">Album</option>
          <option value="duration">Duration</option>
        </select>
      </div>
      {/* song list */}
      <div className="mt-10">
        {/* song list header */}
        <div className="flex text-gray-600">
          <div className="p-2 w-8 flex-shrink-0" />
          <div className="p-2 w-8 flex-shrink-0" />
          <div className="p-2 w-full">Title</div>
          <div className="p-2 w-full">Artist</div>
          <div className="p-2 w-full">Album</div>
          <div className="p-2 w-12 flex-shrink-0 text-right">⏱</div>
        </div>
        {sortSongs(songs, sortOrder).map((song, index) => (
          <div
            key={index}
            className={`flex border-b border-gray-800 hover:bg-gray-800 ${
              selectedSongs.includes(song) ? "bg-gray-700" : ""
            }`}
          >
            <div className="p-3 w-8 flex-shrink-0">
              <input
                type="checkbox"
                checked={selectedSongs.includes(song)}
                onChange={() => handleCheckboxChange(song)}
                className="form-checkbox h-5 w-5 text-green-500"
              />
            </div>
            <div className="p-3 w-8 flex-shrink-0">❤️</div>
            <div className="p-3 w-full">{song.title}</div>
            <div className="p-3 w-full">{song.artist}</div>
            <div className="p-3 w-full">{song.album}</div>
            <div className="p-3 w-12 flex-shrink-0 text-right">
              {song.duration}
            </div>
            <div className="p-3 w-8 flex-shrink-0">
              <button
                onClick={() => handleDeleteSong(song)}
                className="text-red-500 hover:text-red-300"
              >
                ❌
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* order section */}
      {selectedSongs.length > 0 && (
        <div className="mt-10 bg-gray-800 p-6 rounded-lg">
          <h3 className="text-white text-xl mb-4">Selected Songs</h3>
          <ul className="text-gray-400 mb-4">
            {selectedSongs.map((song, index) => (
              <li key={index} className="mb-2">
                {song.title} by {song.artist}
              </li>
            ))}
          </ul>
          <button
            className="mt-4 bg-green-500 text-green-100 py-2 px-6 rounded-full"
            onClick={handleOrder}
          >
            Order
          </button>
        </div>
      )}
      {/* add new song section */}
      <div className="mt-10">
        <h3 className="text-white text-xl mb-4">Add New Song</h3>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <input
          type="text"
          placeholder="Title"
          value={newSong.title}
          onChange={(e) => setNewSong({ ...newSong, title: e.target.value })}
          className="bg-gray-700 text-gray-300 border border-gray-600 rounded px-4 py-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Artist"
          value={newSong.artist}
          onChange={(e) => setNewSong({ ...newSong, artist: e.target.value })}
          className="bg-gray-700 text-gray-300 border border-gray-600 rounded px-4 py-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Album"
          value={newSong.album}
          onChange={(e) => setNewSong({ ...newSong, album: e.target.value })}
          className="bg-gray-700 text-gray-300 border border-gray-600 rounded px-4 py-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="Duration"
          value={newSong.duration}
          onChange={(e) => setNewSong({ ...newSong, duration: e.target.value })}
          className="bg-gray-700 text-gray-300 border border-gray-600 rounded px-4 py-2 mb-2 w-full"
        />
        <button
          className="bg-green-500 text-green-100 py-2 px-6 rounded-full"
          onClick={handleAddSong}
        >
          Add Song
        </button>
      </div>
    </div>
  );
};

export default Music;
