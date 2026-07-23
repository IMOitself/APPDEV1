import { useState } from "react";

const userData = {
  name: "Russell Jonn T. Bautista",
  avatarUrl: "https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-1/445234458_996025045478131_8139642322296173385_n.jpg?stp=dst-jpg_tt6&cstp=mx1280x1280&ctp=s200x200&_nc_cat=104&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeE9GAosEHZWbgzb_Q619uOqfIoF5zp3H9h8igXnOncf2C79QADRn3em9DXoY9swE-4cSE1rle7HdsecDIQ_71pW&_nc_ohc=KB-HPGJ0HwMQ7kNvwG9l-Ny&_nc_oc=AdoE3Y-bJjibU2N12n4CN1EY_ovxxkylLbOX6HlHif8k00SusQY_tX-9nv-mb9KD3lg&_nc_zt=24&_nc_ht=scontent.fmnl30-1.fna&_nc_gid=ck50OuD0abjTzNv6vow_uw&_nc_ss=7b2a8&oh=00_AQAY4vnTWX7lv9WHhrWvk22gzFuVbAAWOQea2_D70kAgLA&oe=6A680655", // sample avatar
  bio: "lowercase, monospace, minimalist kind of vibes :D",
  skills: ["CTF", "Java", "Python", "Bash", "HTML", "CSS", "JS", "PHP", "SQL"],
  isOnline: true,
  lastUpdated: "1 minute ago",
};

function UserProfileCard({ user }) {
  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, setFavorite] = useState(false);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  function handleFavorite() {
    setFavorite(!isFavorited)
  }

  return (
    <div className="profile-card">
      <img src={user.avatarUrl} />
      <h2>{user.name}</h2>
      <label htmlFor="bio">Bio</label>
      <p id="bio">{user.bio}</p>
      <h3>Skills</h3>
      <ul>
        {user.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <div style={{ color: "blue", fontWeight: "bold" }}>
        Messages sent: {messageCount}
      </div>
      {user.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}
      <button onClick={handleSendMessage}>Send Message</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleFavorite}>
        {user.isOnline && (
        isFavorited ? <span>★ Favorited</span> : <span>☆ Favorite</span>
        )}
      </button>
      <p className="footer">Card last updated: {user.lastUpdated}</p>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <UserProfileCard user={userData} />
    </div>
  );
}