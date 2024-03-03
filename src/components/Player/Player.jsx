/* eslint-disable react/prop-types */
import JWPlayer from "@jwplayer/jwplayer-react";
import "../../staticData/KB5zFt7A.js";

const Player = ({ showData, ck }) => {
  const configDefaults = {
    logo: {
      file: `https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto,h_150,w_150/${showData.CHANNEL_LOGO}`,
      position: "top-right",
      hide: true,
    },
    autostart: false,
    controls: true,
    pipIcon: "disabled",
    abouttext: ".",
    aboutlink: "https://github.com/",
    preload: "auto",
    skin: {
      controlbar: {
        background: "rgba(0,0,0,0)",
        icons: "rgba(255,255,255,0.8)",
        iconsActive: "#FFFFFF",
        text: "#FFFFFF",
      },
      menus: {
        background: "rgba(0,0,0,0.8)",
        text: "rgba(255,255,255,0.8)",
        textActive: "#FFFFFF",
      },
      timeslider: {
        progress: "#FF0000",
        rail: "rgba(255,255,255,0.3)",
      },
      tooltips: {
        background: "#FFFFFF",
        text: "#000000",
      },
    },
  };
  const playlist = [
    {
      title: `${showData.SHOW_TITLE}`,

      autostart: false,
      description: `${showData.SHOW_DESC}`,
      image: `https://mediaready.videoready.tv/tatasky-epg/image/fetch/f_auto,fl_lossy,q_auto${showData.SHOW_IMAGE}`,
      file: `${showData.PLAY_URL}`,
      drm: {
        clearkey: { key: `${ck[1]}`, keyId: `${ck[0]}` },
      },
      displaydescription: true,
      displaytitle: true,
    },
  ];
  document.title = `${showData.SHOW_TITLE ? "Watching " + showData.SHOW_TITLE : "Loading..."}`;
  return (
    <div className='text-black'>
      <JWPlayer
        library='KB5zFt7A.js'
        config={configDefaults}
        playlist={playlist}
        key={"Khpp2dHxlBJHC8MCmLnBuV2jK/DwDnJMniwF6EO9HC/riJ712ZmbHg=="}
      />
    </div>
  );
};

export default Player;
