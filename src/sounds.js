import fireShot from "./sounds/fire_shot.mp3";

function Sounds() {
  return {
    playFireShot() {
      const sound = new Audio(fireShot);
      sound.play();
    },
  };
}

export default Sounds;
