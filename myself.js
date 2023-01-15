import slam from "./slam.mp4";
import fb from "./Frisbee.mp4";

const Self = () => {
    return (
        <div className="mine">

          <p>
            Hi! I am Haoqi Zhang! You can call me HQ (just like my friends' preference). I am 
            a foodie but sometimes also a good chef. I wish I am an athelete (but not the competitive one).
            I love basketball, badminton, swim, and marathon. I go to the gym somethimes, to enhance my exolosive power.
            I am not a pure gym work-out guy. I am glad you are here, hope we can be friends.
          </p>
          
          <h2>When I was fit</h2>
          <video width="300" height="400" src={slam} controls />
          
          <h2>Now I..., but still cool!</h2>
          <video width="300" height="400" src={fb} controls />
        </div>
      );
}
 
export default Self;
