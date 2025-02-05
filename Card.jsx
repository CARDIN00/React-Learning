import wallpaper from './1.jpg';

function Card(){
  return(
    <div className="card">
      <img src={wallpaper} alt="profile picture" />
      <h2>Karan</h2>
      <p>4th year student, play games, learning blockchain</p> 
    </div>
  );
}

export default Card