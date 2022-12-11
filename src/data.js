const data = [
  {
    quote: "Cover me",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_ct_coverme.mp3"));
      audio.play();
    },
  },
  {
    quote: "You take the Point",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_takepoint.mp3"));
      audio.play();
    },
  },
  {
    quote: "Hold this Position",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_position.mp3"));
      audio.play();
    },
  },
  {
    quote: "Storm the Front",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_stormfront.mp3"));
      audio.play();
    },
  },
  {
    quote: "Regroup Team",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_regroup.mp3"));
      audio.play();
    },
  },
  {
    quote: "Follow me",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_followme.mp3"));
      audio.play();
    },
  },
  {
    quote: "Taking fire need Assistance",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_fireassis.mp3"));
      audio.play();
    },
  },
  {
    quote: "Go go go!",
    audio: () => {
      const audio = new Audio(require("./assets/audio/gogogo.mp3"));
      audio.play();
    },
  },
  {
    quote: "Team! Fall Back",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_fallback.mp3"));
      audio.play();
    },
  },
  {
    quote: "Stick Together Team",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_sticktog.mp3"));
      audio.play();
    },
  },
  {
    quote: "Report in",
    audio: () => {
      const audio = new Audio(
        require("./assets/audio/Legacy_ct_reportingin.mp3")
      );
      audio.play();
    },
  },
  {
    quote: "Roger that",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_roger.mp3"));
      audio.play();
    },
  },
  {
    quote: "Affirmative",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_ct_affirm.mp3"));
      audio.play();
    },
  },
  {
    quote: "Enemy spotted",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_ct_enemys.mp3"));
      audio.play();
    },
  },
  {
    quote: "Need backup",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_ct_backup.mp3"));
      audio.play();
    },
  },
  {
    quote: "Sector clear",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_clear.mp3"));
      audio.play();
    },
  },
  {
    quote: "In position",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_ct_inpos.mp3"));
      audio.play();
    },
  },
  {
    quote: "Reporting in position",
    audio: () => {
      const audio = new Audio(
        require("./assets/audio/Legacy_ct_reportingin.mp3")
      );
      audio.play();
    },
  },
  {
    quote: "Get Out Of There, It's Gonna Blow!",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_blow.mp3"));
      audio.play();
    },
  },
  {
    quote: "Negative",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_negative.mp3"));
      audio.play();
    },
  },
  {
    quote: "Enemy Down",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_enemydown.mp3"));
      audio.play();
    },
  },
  {
    quote: "Fire in the hole!",
    audio: () => {
      const audio = new Audio(
        require("./assets/audio/Legacy_ct_fireinhole.mp3")
      );
      audio.play();
    },
  },
  {
    quote: "Okay,Let's Go",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_go.mp3"));
      audio.play();
    },
  },
  {
    quote: "Lock'n'load",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_locknload.mp3"));
      audio.play();
    },
  },
  {
    quote: "Let's Move out",
    audio: () => {
      const audio = new Audio(require("./assets/audio/Legacy_moveout.mp3"));
      audio.play();
    },
  },
  {
    quote: "Okay team, follow my command",
    audio: () => {
      const audio = new Audio(
        require("./assets/audio/okteamfollowmycommand.mp3")
      );
      audio.play();
    },
  },
  {
    quote: "Circle back!",
    audio: () => {
      const audio = new Audio(require("./assets/audio/circleback.mp3"));
      audio.play();
    },
  },
  {
    quote: "Flank Them!",
    audio: () => {
      const audio = new Audio(require("./assets/audio/flankthem.mp3"));
      audio.play();
    },
  },
  {
    quote: "Bomb Has Been Planted",
    audio: () => {
      const audio = new Audio(
        require("./assets/audio/Bomb Has Been Planted - CS GO - QuickSounds.com.mp3")
      );
      audio.play();
    },
  },
  {
    quote: "Firstblood",
    audio: () => {
      const audio = new Audio(require("./assets/killstreaks/firstblood.wav"));
      audio.play();
    },
  },
  {
    quote: "Doublekill",
    audio: () => {
      const audio = new Audio(require("./assets/killstreaks/doublekill.wav"));
      audio.play();
    },
  },
  {
    quote: "Triplekill",
    audio: () => {
      const audio = new Audio(require("./assets/killstreaks/triplekill.wav"));
      audio.play();
    },
  },
  {
    quote: "Headshot",
    audio: () => {
      const audio = new Audio(require("./assets/killstreaks/headshot.wav"));
      audio.play();
    },
  },
  {
    quote: "Rampage",
    audio: () => {
      const audio = new Audio(require("./assets/killstreaks/rampage.wav"));
      audio.play();
    },
  },
  {
    quote: "Killingspree",
    audio: () => {
      const audio = new Audio(require("./assets/killstreaks/killingspree.wav"));
      audio.play();
    },
  },
  {
    quote: "Unstoppable",
    audio: () => {
      const audio = new Audio(require("./assets/killstreaks/unstoppable.wav"));
      audio.play();
    },
  },
  {
    quote: "Monsterkill",
    audio: () => {
      const audio = new Audio(require("./assets/killstreaks/monsterkill.wav"));
      audio.play();
    },
  },
  {
    quote: "Multikill",
    audio: () => {
      const audio = new Audio(require("./assets/killstreaks/multikill.wav"));
      audio.play();
    },
  },
  {
    quote: "Ultrakill",
    audio: () => {
      const audio = new Audio(require("./assets/killstreaks/ultrakill.wav"));
      audio.play();
    },
  },
  {
    quote: "Dominating",
    audio: () => {
      const audio = new Audio(require("./assets/killstreaks/dominating.wav"));
      audio.play();
    },
  },
  {
    quote: "Godlike",
    audio: () => {
      const audio = new Audio(require("./assets/killstreaks/godlike.wav"));
      audio.play();
    },
  },
  {
    quote: "oh camper camper",
    play: (audio) => {
      audio.play();
    },
    pause: (audio) => {
      audio.pause();
    },
  },
  {
    quote: "Oh Camper Camper ",
  },
  {
    quote: "How was I supposed to know",
  },
  {
    quote: "you covered creaky door",
  },
  {
    quote: "I had a flashbang that I was supposed to throw",
  },
  {
    quote: "like many times before",
  },
  {
    quote: "show me, how to enter creaky without dying",
  },
  {
    quote: "cause I'm really trying damn it camper!",
  },
  {
    quote: "Your headshot scripts, are killing me (and I)",
  },
  {
    quote: "I must confess, I never see (I never see)",
  },
  {
    quote: "where you are hiding, I lose my mind",
  },
  {
    quote: "falling behiiiiiind",
  },
  {
    quote: "you killed me camper one more time",
  },
  {
    quote: "Oh camper, camper the reason I'm dead is you",
  },
  {
    quote: "your flashbang got me blinded",
  },
  {
    quote: "Oh lousy camper my stats they were supposed to grooooow",
  },
  {
    quote: "your headshots changed my mind, yeah",
  },
  {
    quote: "Oh Camper Camper ",
  },
  {
    quote: "Oh lousy camper why couldn't you let me go",
  },
  {
    quote: "oh camper, camper my stats were supposed to groooooow",
  },
  {
    quote: "And I must confess",
  },
  {
    quote: "that door's creakyness",
  },
  {
    quote: "is killing me noooooow",
  },
  {
    quote: "and I just can not believe",
  },
  {
    quote: "that you're always there",
  },
  {
    quote: "to cover that dooooooor",
  },
  {
    quote: "can't take it camper, please no more!",
  },
];

export default data;
