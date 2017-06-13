/**
 * Created by murkrow on 6/10/17.
 */

import ARIES from "../styles/images/signs/1.png";
import TAURUS from "../styles/images/signs/2.png";
import GEMINI from "../styles/images/signs/3.png";
import CANCER from "../styles/images/signs/4.png";
import LEO from "../styles/images/signs/5.png";
import VIRGO from "../styles/images/signs/6.png";
import LIBRA from "../styles/images/signs/7.png";
import SCORPIO from "../styles/images/signs/8.png";
import SAGITTARIUS from "../styles/images/signs/9.png";
import CAPRICORN from "../styles/images/signs/10.png";
import AQUARIUS from "../styles/images/signs/11.png";
import PISCES from "../styles/images/signs/12.png";

import SUN from "../styles/images/planet/Sun.png";
import MOON from "../styles/images/planet/Moon.png";
import MOON_2 from "../styles/images/planet/Moon_2.png";
import MERCURY from "../styles/images/planet/Mercury.png";
import VENUS from "../styles/images/planet/Venus.png";
import MARS from "../styles/images/planet/Mars.png";
import JUPITER from "../styles/images/planet/Jupiter.png";
import SATURN from "../styles/images/planet/Saturn.png";
import URANUS from "../styles/images/planet/Uranus.png";
import NEPTUNE from "../styles/images/planet/Neptune.png";
import PLUTO from "../styles/images/planet/Pluto.png";
import NORTH_NODE from "../styles/images/planet/NorthNode.png";
import SOUTH_NODE from "../styles/images/planet/SouthNode.png";
import CHIRON from "../styles/images/planet/Chiron.png";


export const mapSign = (sign) => {
    let signs = [ARIES, TAURUS, GEMINI, CANCER, LEO, VIRGO, LIBRA, SCORPIO, SAGITTARIUS, CAPRICORN, AQUARIUS, PISCES];
    return signs[sign - 1];
};

export const mapPlanet = (planet) => {
    let planets = [SUN, MOON_2, MERCURY, VENUS, MARS, JUPITER, SATURN, URANUS, NEPTUNE, PLUTO, NORTH_NODE, SOUTH_NODE, CHIRON];
    return planets[planet - 1];
};