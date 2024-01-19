const { createSlice } = require("@reduxjs/toolkit");

let initialState = {
  showShortMenu: false,
  searchbarCategoryList: [
    "All Categories",
    "Power Banks",
    "Housing",
    "LCD & Touch screens",
    "Battery",
    "Flip Cover",
    "Ear Phones",
    "Ringer",
    "Ear Speaker",
    "Tempered Tool Glass",
    "Opening Tool Set",
  ],

  whichNav: "none",

  navOneList: {
    one: ["Display Screen", "Touch Screen", "LCD"],
    two: null,
    three: null,
    four: null,
  },
  navTwoList: {
    one: ["Battery", "Cases & Covers", "Headphones & Earphones", "Chargers"],
    two: [
      "Tempered Glass",
      "Protective Films and Glasses",
      "Adapters & Cables",
      "Power Bank",
    ],
    three: [
      "Selfie Flash Light",
      "Selfie Stick",
      "Mobile Docks & Stands",
      "Bluetooth KeyBoard",
    ],
    four: ["Keyboard", "Mini Selfie Stick", "Fitness Band", "IP Camera"],
  },
  navThreeList: {
    one: ["Display Screen", "Touch Screen", "LCD", "Front Glass"],
    two: ["Camera", "Loud Speaker", "Ringer", "Charging Jacks"],
    three: ["Ear Speaker", "Microphone - Mic", "Housing", "Connectors"],
    four: [
      "Handfree Jack",
      "Vibrator",
      "Buttons & Joysticks",
      "Sim Tray - Holder",
    ],
  },
  navFourList: {
    one: ["Opening Tool Set", "Screw Driver", "Glue", "Suction Cup Tool"],
    two: [
      "Sim Cutter",
      "Soldering Equipment",
      "Touch Changing Machine",
      "Screw Set",
    ],
    three: ["Battery Booster", "BGA Kit", "Multimeter", "Sim Ejector Pin"],
    four: ["Paste & Gel", "Tape"],
  },
  navFiveList: {
    one: [
      "Face Masks",
      "Indoor LED Lighting",
      "Street Light Fixtures",
      "Solar Panels",
    ],
    two: null,
    three: null,
    four: null,
  },
};

const slice = createSlice({
  name: "firstslice",
  initialState, // Corrected variable name
  reducers: {
    updateMenuStatus: (state, action) => {
      let data = action;
      console.log(data.payload);
      state.menuStatus = data.payload;
    },
    menuStatusAction: (state, action) => {
      state.showMenu = action.payload;
    },
    updateWhichNav: (state, action) => {
      state.whichNav = action.payload;
    },
    updateShortMenu: (state, action) => {
      state.showShortMenu = !state.showShortMenu;
    },
  },
});

export const {
  updateMenuStatus,
  menuStatusAction,
  updateWhichNav,
  updateShortMenu,
} = slice.actions;
export default slice.reducer;
