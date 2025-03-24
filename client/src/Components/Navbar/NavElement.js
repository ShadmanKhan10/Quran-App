import home from "../../assets/home.png";
import quran from "../../assets/quran.png";
import sajdah from "../../assets/sajdah.png";
import user from "../../assets/user.png";
import userActive from "../../assets/user-active.png";
import homeActive from "../../assets/home-active.png";
import quranAvtive from "../../assets/quran-active.png";
import sajdahActive from "../../assets/sajdah-active.png";

export const NavElement = [
  {
    imgSource: home,
    activeImgSource: homeActive,
    menuName: "Home",
    path: "",
  },
  {
    imgSource: quran,
    activeImgSource: quranAvtive,
    menuName: "Quran",
    path: "quran",
  },
  {
    imgSource: sajdah,
    activeImgSource: sajdahActive,
    menuName: "Prayer",
    path: "prayer",
  },
  {
    imgSource: user,
    activeImgSource: userActive,
    menuName: "Profile",
    path: "profile",
  },
];
