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

import ASCENDANT from "../styles/images/planet/ac.png";
import MIDHEAVEN from "../styles/images/planet/mc.png";
import SUN from "../styles/images/planet/Sun.png";
import PURPLEAIR from "../styles/images/planet/purple_air.png";
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

export const mapSign = sign => {
    let signs = [
        ARIES,
        TAURUS,
        GEMINI,
        CANCER,
        LEO,
        VIRGO,
        LIBRA,
        SCORPIO,
        SAGITTARIUS,
        CAPRICORN,
        AQUARIUS,
        PISCES
    ];
    return signs[sign - 1];
};

export const mapPlanet = planet => {
    let planets = [
        ASCENDANT,
        SUN,
        MOON_2,
        PURPLEAIR,
        MERCURY,
        VENUS,
        MARS,
        JUPITER,
        SATURN,
        URANUS,
        NEPTUNE,
        PLUTO,
        MIDHEAVEN,
        NORTH_NODE,
        SOUTH_NODE,
        CHIRON
    ];

    return planets[planet - 1];
};

const objNames = [
    "Ascendant",
    "Sun",
    "Moon",
    "purpleAir",
    "Mercury",
    "Venus",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
    "MC",
    "true Node",
    "southNode",
    "Chiron"
];

export const mapPlanetByName = name => (mapPlanet(objNames.indexOf(name) + 1));


const objPosition = [
    {house: 1},
    {planet: 0},
    {planet: 1},
    {planet: 16},
    {planet: 2},
    {planet: 3},
    {planet: 4},
    {planet: 5},
    {planet: 6},
    {planet: 7},
    {planet: 8},
    {planet: 9},
    {house: 10},
    {planet: 12},
    {planet: 15},
    {planet: 10}
];

export const mapObjectPositionByName = name =>
    (objPosition[objNames.indexOf(name)]);

const viObjNames = [
    "AC",
    "Mặt trời",
    "Mặt trăng",
    "Tử Khí",
    "Sao Thuỷ",
    "Sao Kim",
    "Sao Hoả",
    "Sao Mộc",
    "Sao Thổ",
    "Sao Thiên Vương",
    "Sao Hải Vương",
    "Sao Diêm Vương",
    "MC",
    "La Hầu",
    "Kế Đô",
    "Chiron"
];

export const mapViPlanetName = name => viObjNames[objNames.indexOf(name)];

const viSignName = [
    "Bạch Dương",
    "Kim Ngưu",
    "Song Tử",
    "Cự Giải",
    "Sư Tử",
    "Xử Nữ",
    "Thiên Bình",
    "Bọ Cạp",
    "Nhân Mã",
    "Ma Kết",
    "Bảo Bình",
    "Song Ngư"
];

export const mapViSignName = sign => viSignName[sign - 1];
