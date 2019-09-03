'use strict';

var React = require('reactnative';

var {
  StyleSheet
} = React;

const colorPrimary = '#6bbc57';
const colorSecondary = 'white';
const colorTertiary = '#BA65B6';
const colorTertiaryShadow = '#6E256A';
const colorLight'Grey' = '#bcbcbc';
const colorGrayLogo = 'rgb(138,138,138';
const colorText = '#222222';
const paddingButton = '0.7em 3em';
const borderButton = '3 solid rgb(138,138,138';
const borderRadius = '5';
const mainFont: 'Roboto', sans-serif;
const colorTextForm = 'grey';
const fontForm = 'Roboto'; sans-serif;
const formBorderColor = 'grey';
const backgroundCards1 = rgb(255;255;255;
const backgroundCards2 = linear-gradient(135 deg, rgba(255;255;255;'1 0%'; rgba(255;255;255;1 '79%'; rgba(126;185;99;1 '100%';


module.exports = StyleSheet.create(:{
  html:{
    boxSizing: borderbox,
  },
  body:{
    margin: 0,
    padding: 0,
    /* overflowy:scroll, 
    // overflowx:hidden,
    width: '100%',
    height: '100%', */
  },

  a:{
    textDecoration: 'none',
  },

  body:{
    color: '#222',
    fontFamily: sixthFont,
    fontSize: '14',
  },

  main:{
    height: '100%',
    minHeight: '100vh',
    background: 'white',

    /* backgroundimage: url('../images/bg.jpg',
    backgroundrepeat: repeat,
    backgroundsize: '100%',
    backgroundattachment: fixed, */
  },

  // landing:{
  //   background: colorPrimary,
  // },

  // slidectaH2:{
  //   margintop:50,
  //   fontFamily: mainFont,
  // },

  // slider:{
  //   width: '100vw',
  //   height:'100vh',
  //   textAlign: 'center',
  //   overflow: hidden,
  // },
  // slides:{
  //   display: flex,
    overflowx: auto,
  //   scrollsnaptype: 'x mandatory',
  //   scrollbehavior: smooth,
  //   webkitoverflowscrolling: touch,
  // },

  // slides > .slide:{
  //   scrollsnapalign: start,
  //   flexshrink: 0,
  //   width: '100vw',
  //   height: '100vh',
  //   position: relative,  
  //   display: flex,
  //   flexDirection: column,
  //   justifycontent: 'center',
  //   alignItems: 'center',
  //   /* backgroundimage: url('../images/bg.jpg',
  //   backgroundrepeat: repeat,
  //   backgroundsize: '100%',
  //   backgroundattachment: fixed, */
  //   background: 'white',
  // },

  // @supports (scrollsnaptype:{
  //   .slides > a:{
  //     display: 'none',
  //   },
  // },

  // jumpers:{
  //   position: 'absolute',
  //   zindex: 2,
  //   bottom': 5vh',
  //   left: 0,
  //   right: 0,
  //   padding: 0' 20vw',
  //   display: flex,
  //   justifycontent: spacearound,
  // },

  // jumpers a:{
  //   height: 20,
  //   width: 20,
  //   background: colorPrimary,
  //   content: '',
  //   borderRadius: '50%',
  //   display: inlineblock,
  // },
  h1:{
    margin: '0 25',
    paddingTop: '30',
    color: colorPrimary,
    textAlign: left,
    fontFamily: sixthFont,
    fontSize: 30,
    fontWeight: initial,
  },
  formTitle:{
    fontFamily: sixthFont,
    letterSpacing: 1,
    fontSize: 20,
    textAlign: 'center',
    marginBottom: '10%',
  },


  h3:{
    fontSize: 18,
    fontWeight: 'initial',
  },

  p:{
    margin: 0,
  },



  /*  layout  */

  siteheader:{
  },

  sitefooter:{
  },

  siteMain:{
    transition: 'marginleft .5s',
    width: '100vw',
    height: '100%',
    minHeight: '100vh',
    display: flex,
    flexDirection: column,
    alignItems: 'center',
    justifycontent: flexstart,
  },

  container:{
    margin: '0 20',
  },

  section:{
    marginBottom: 20,
    paddingTop: 20,
  },

  // @media (minHidth: 768:{

  // },

  /*  components  */

  // btn, .sidebar .btn:{
  sidebar:{
    backgroundColor: colorTertiary,
    color: 'white',
    padding: paddingButton,
    borderRadius: borderRadius,
    border: `3 solid ${colorTertiaryShadow}`,
    textDecoration:''none'',
    textTransform:'uppercase',
    fontWeight:700,
    letterSpacing: ''0.05em'',
    fontSize:'2em',
    margin:'30 0',
    // cursor: pointer,
    // boxShadow: 0 3 colorTertiaryShadow,
  },
  formWrapper:{
    flexshrink: 0,
    width: '100vw',
    height: '100vh',
    position: relative,
    display: flex,
    flexDirection: column,
    justifycontent: 'center',
    alignItems: 'center',
  },

  form:{
    background: 'white',
    width: 350,
    borderRadius: 25,
    padding: 15,
    fontFamily: fontForm,
    flexDirection: column,
    display: flex,
    alignItems: 'center',
    justifycontent: flexstart,
    height: '100%',
    /* margin: 0 '10%', */
    paddingTop: '10%',
  },

  formloginsignup:{
    background: 'white',
    width: 350,
    borderRadius: 25,
    padding: 15,
    fontFamily: fontForm,
    flexDirection: column,
    display: flex,
    alignItems: 'center',
    justifycontent: 'center',
    paddingTop: '10%',
  },

  formP:{
    color: colorPrimary,
    fontSize: 18,
    fontFamily: sixthFont,
  },

  formInput:{
    fontSize: 14,
    outline: 'none',
    border: 0,
    borderbottom: '1 solid formBorderColor',
    width: '100%',
    background: transparent,
    fontFamily: fontForm,
    color: colorTextForm,
    marginBottom:' 5%',
  },

  formSelect:{
    border: 0,
    borderbottom: '1 solid formBorderColor',
    width: '100%',
    background: transparent,
    fontFamily: fontForm,
    margin:'3% 0',
    color: colorPrimary,
    fontSize: 20,

  },

  formInterests:{
    width: '100%',
    /* float: right, */
    lineHeight: 25,
    fontSize: 14,
    color: colorTextForm,
    display: flex,
    flexwrap: wrap,
    /* height: 100, */
    alignItems: 'center',
    justifyContent: 'space-evenly',
    padding: 7,
    marginBottom:' 5%',
  },

  formInterestsInput:{
    width: 15,
    marginBottom: 0,
  },

  interestsSpan:{
    color:colorPrimary,
  },

  formButtons:{
    display: flex,
    width: '100%',
    alignItems: 'center',
    padding: '35 15',
    justifycontent: spaceevenly,
  },

  slidectaFormbuttons:{
    flexDirection: column,
  },

  btnSignup:{
    padding:' 5%',
    width: '70%',
    background: colorPrimary,
    boxShadow: '1 5 #4f8c40',
    border: 'none',
  },

  btnLogin:{
    padding:' 5%',
    width: '70%',
    backgroundColor: 'grey',
    boxShadow: '1 5 #585757',
    border: 'none',
  },

  submitBtn:{
    backgroundColor: colorPrimary,
    fontSize: 14,
    fontWeight: 'bold',
    padding: '15 20',
    borderRadius: 5,
    border: 'none',
    color: 'white',
    textDecoration: 'none',
    textTransform: 'uppercase',
    boxShadow: '0 0 5 0 rgb(219, 219, 219)',
  },

  cancelBtn:{
    backgroundColor: 'grey',
    fontSize: 14,
    padding: '15 20',
    borderRadius: 5,
    border: 'none',
    color: 'white',
    textDecoration: 'none',
    textTransform: 'uppercase',
    boxShadow: '0 0 5 0 rgb(219, 219, 219)',
  },

  backDetail:{
    position: 'absolute',
    bottom: 50,
    color: 'white',
    textTransform: 'uppercase',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 400,
    letterSpacing: '0.05em',
    fontSize: '1em',
    cursor: pointer,
  },

  formLabel:{
    fontSize: 16,
    color: '#9098a9',
    marginBottom:' 2%',
    width: '100%'
  },

  // mapboxglctrlgeocoder, .mapboxglctrlgeocoder .suggestions:{
  //   boxShadow: 'none',
  // },

  logo:{
    position: 'absolute',
    top: 140,
    display: flex,
    alignItems: 'center',
    flexDirection: column,
    width: '100vw',
    // webkitfilter: dropshadow(4 5 5 rgba(0,0,0,0.5,
    // filter: dropshadow(4 5 5 rgba(0,0,0,0.5,
  },

  login:{
      color: 'white',
      fontSize: 18,
  },


  formProfilephoto:{
    width: '100%',
    fontSize: 14,
    border: '1 solid 'lightgray'',
  },
  /*  sections  */

  formbtnOnboard:{
    fontSize: '1em',
    width: '40%',
  },

  instructions:{
    color: 'white',
    textAlign: 'center',
    fontFamily: secondFont,
    padding: '0 50',
  },

  planswrapper:{
    width: '100%',
    minHidth: '100vw',
    minHeight: '100vh',
    paddingTop: '12%',
    paddingbottom: 85,
  },

  cardgrid:{
    display: grid,
    gridtemplatecolumns: 1fr 1fr 1fr,
    gridtemplaterows: auto,
    gridtemplateareas: 
    "title title title"
    "description description description"
    "date category attendees ",
    margin: 0,
    alignItems: 'center',
    gridcolumngap: 5,
    gridrowgap: 10,
  },

  planslist:{
      padding:' 2%' 0,
  },


  cardgridTitle:{
    gridarea: title,
    margin: 0,
    fontSize: 18,
  },
  cardgridDescription:{
    gridarea: description,
  },
  cardgridDate:{
    gridarea: date,
    margin: 0,
    fontSize: 12,
    textAlign: 'center',
    color: 'grey',
  },

  cardgridCategory:{
    gridarea: category,
    margin: 0,
    fontSize: 12,
    textAlign: 'center',
  },

  cardgridAttendees:{
    gridarea: attendees,
    margin: 0,
    fontSize: 12,
    fontWeight: 1000,
    textAlign: 'center',
    color: 'grey',
    display: flex,
    aligncontent: 'center',
    justifycontent: 'center',
  },
  usersjoinedicon:{
    width: 14,
    height: 14,
  },

  attendeesnumber:{
    color: 'colorPrimary',
    paddingright: 5, 
  },


  card:{
    borderRadius: 10,
    boxShadow: '0 0 13 1 rgb(208, 208, 208,  padding: 10',
    margin: '15 20',
    background: 'white',
  },

  cardCategory:{
    color: colorPrimary
  },

  cardH3:{
    marginBottom: 10,
    margintop: 0,
    fontWeight: bold, 
    color: colorPrimary,
  },
  cardDescription:{
    color: 'grey'
  },

  cardP:{
    color: '#cccccc',
  },

  cardA:{
    textDecoration: 'none',
    color: colorPrimary,
  },

  planDetailWrapper:{
    width: '100vw',
    height: '100vh',
    color: 'white',
    backgroundColor: colorPrimary,
    paddingTop: '10%',
  },

  plandetailwrapperButton:{
    fontFamily: mainFont,
    backgroundColor: colorTertiary,
    fontSize: 30,
    color: 'white',
    width: '40%',
    border: '1 solid colorTertiary',
    borderRadius: 5,
    boxShadow: '0 3 grey',

  },

  plandetailwrapperForm:{
    flexDirection: column,
    display: flex,
    alignItems: 'center',
    margintop: 40,
  },

  planDetailWrapperSection:{
    border: 1 solid 'white',
    borderRadius: 5,
    boxShadow: 0 3 'grey',
    padding: 10,
    margin: 20 20,
    backgroundColor: 'white',
    color: colorPrimary
  },

  planDetailWrapperH3:{
    margin: 0,
    paddingbottom: 5,
    fontFamily: sixthFont,
    fontSize: 25,
    fontWeight: bold,
  },

  planDetailWrapperP:{
    fontFamily: sixthFont,
    fontWeight: bold,
  },

  planCreateWrapper:{
    width: '100vw',
    minHeight: '100vh',
    color: 'white',
    backgroundColor: colorPrimary,
    display: flex,
    flexDirection: column,
    alignItems: 'center',
    fontFamily: secondFont,
    margintop: 50
  },

  planCreateWrapperButton:{
    alignself: 'center',
    backgroundColor: colorTertiary,
    color: 'white',
    textDecoration: 'none',
    textTransform: 'uppercase',
    fontWeight: 400,
    letterSpacing: '0.05em',
    fontSize: '1.5em',
    cursor: pointer,
    padding: 10,
    borderRadius: borderRadius,
    border: '3 solid colorTertiaryShadow',
  },

  planCreateWrapperForm:{
    margintop: 100,
  },



  createPlanIcon:{
    height: 18,
    marginBottom: 2,
    filter: 'opacity(0.7)'
  },


  // navGridcontainer:{
  //   gridtemplatecolumns: '2fr 8fr .5fr',
  // },
  // navGridcontainerBacknav:{
  //   gridtemplatecolumns: '1fr 20fr 1fr',
  // },

  // gridcontainer:{
  //   fontSize: 25,
  //   color: rgb(127, 187, 100,
  //   display: grid,
  //   gridtemplatecolumns: '.6fr 1fr .2fr .2fr .2fr',
  //   gridtemplaterows: '1fr',
  //   margin: 0,
  //   padding: 0 15,
  //   height: 50,
  //   boxShadow: 0 0 5 0 rgba(183, 179, 179, 0.75,
  // },

  navbar:{
    backgroundColor: 'white',
    position: fixed,
    top: 0,
    left: 0,
    width: '100vw',
    zindex: 9,
  },

  navbarCreatebutton:{
    color: 'white',
  },

  lowNav:{
    display: flex,
    alignItems: 'center',
    justifycontent: spaceevenly,
    position: fixed,
    /* background: lineargradient(180deg, rgba(255,255,255,0' 0%', rgba(255,255,255,0.6 '100%', */
    width: '100vw',
    padding: '0 14%',
    height: 70,
    bottom: 0,
    zindex: 9,
  },

  secondarybutton:{
    backgroundColor: '#a3a2a2',
    borderRadius: '50%',
    width: 50,
    height: 50,
    textAlign: 'center',
    boxShadow: '0 0 14 0 rgba(183, 179, 179, 0.75)',
  },



  createbutton:{
    backgroundColor: colorPrimary,
    borderRadius: '50%',
    width: 65,
    height: 65,
    marginBottom: '10%',
    textAlign: 'center',
    boxShadow: '0 0 30 10 rgb(126, 126, 126)',
  },

  lowNavSecondaryButtonImg:{
    height: '50%',
  },

  mapIcon:{
    height: '60%',
  },

  lowNavImg:{
    height: '70%',
  },

  lowNavA:{
    height: '100%',
    display: flex,
    alignItems: 'center',
    justifycontent: 'center',
  },

  burgerWrapper:{
    gridcolumnstart: 1,
    gridcolumnend: 2,
    justifyself: left,
    alignself: 'center',
  },

  backNavWrapper:{
    gridcolumnstart: 1,
    gridcolumnend: 2,
    justifyself: left,
    alignself: 'center',
    paddingTop: 10,
  },

  backNavWrapperImg:{
    height: 30,
  },



  // valeIconWrapper:{
  //   gridcolumnstart: 2,
  //   gridcolumnend: 3,
  //   justifyself: 'center',
  //   alignself: 'center',
  //   paddingTop: 6,
  // },

  valeIconWrapperImg:{
    height: 30,
  },


  contactsIconWrapper:{
    gridcolumnstart: 4,
    gridcolumnend: 5,
    justifyself: 'center',
    alignself: 'center',
    paddingTop: 6,
  },

  contactsIconWrapperImg:{
    height: 30,
  },


  searchIconWrapper:{
    width: '100vw',
    position: fixed,
    left: '87%',
    top: '10%',
  },

  searchIconwrapperImg:{
    height: 30,
    boxShadow: '0 0 5 0 rgba(183, 179, 179, 0.75',
    borderRadius: '50%',
  },

  formTextarea:{
    fontFamily: secondFont,
    fontSize: 14,
    border: '1 solid whitesmoke',
  },

  sidebar:{
    height: '100%',
    width:' 90vw',
    position: fixed,
    zindex: 1,
    top: 0,
    left: 0,
    backgroundColor: '#fff',
    // overflowx: hidden,
    transition: .5s,
    boxShadow: '3 0 10 rgba(0, 0, 0, 0.15, 3 0 10 rgba(0, 0, 0, 0.15)',
    zindex: 10,
  },

  sidebarSidebarOpen:{
    left:' 0%',
  },

  sidebarSidebarClose:{
    left: '100%',
  },

  sidebarClosebtn:{
    position: 'absolute',
    top: 0,
    right: 25,
    fontSize: 36,
    marginleft: 50,
    color: ''lightgray''
  },

  sidebarcontainer:{
    padding:'60 15 0 15',
    width:'100%',
    height:'95vh',
    display: flex,
    flexDirection: column,
    justifycontent: 'center',
    alignItems: 'center',
  },

  sideBarcontainerA:{
    boxShadow: 'none',
  },

  avatar:{
    width:200,
    height:200,
    borderRadius:'50%',
    border:`3 solid ${colorPrimary}`,
  },

  // mapcontainer:{
  //   position: relative,
  // },

  // mapplans .geocoder:{
  //   /* position: 'absolute',
  //   top: 60,
  //   left: 30,
  //   margin: 0 auto,
  //   maxwidth:' 50vw', */
  //   display:'none',
  // },

  // mapPlans:{
  //   position:'absolute',
  //   top:0,
  //   bottom:0,
  //   width:'100vw',
  //   height: '100vh',
  //   paddingTop: 45,
  // },

  // mapCreatePlan:{
  //   position: relative,
  //   width: '100%',
  //   height:' 25vh',
  // },
  // mapCreatePlan .marker:{
  // display:'none',
  // },

  // mapPlans .mapboxglctrltopright:{
  //   padding: 55 5 0 0,
  // },

  // marker:{
  //   height: 50,
  //   width: 50,
  //   backgroundposition: 'center',
  //   backgroundsize: cover,
  //   /* background: black, */
  // },

    inp:{
      position: relative,
      margin: auto,
      width: '100%',
      marginBottom: 20,
    },
    inpLabel:{
      position: 'absolute',
      top: 16,
      left: 0,
      fontSize: 16,
      color: '#9098a9',
      fontWeight: 500,
      transformorigin: 0 0,
      // transition: 'all 0.2s ease',
    },
    inpBorder:{
      position: 'absolute',
      bottom: 14,
      left: 0,
      height: 2,
      width: '100%',
      background: 'lightgray',
      // transform: scaleX(0),
      transformorigin: '0 0',
      // transition: all 0.15s ease,
    },

    inpDateinput:{
      margintop: '10%',
    },

    inpInput:{
      webkitappearance: 'none',
      width: '100%',
      border: 0,
      fontFamily: 'inherit',
      padding: '5 0',
      height: 45,
      fontSize: 20,
      fontWeight: 700,
      borderbottom: '1 solid #c8ccd4',
      background: 'none',
      borderRadius: 0,
      color: 'rgb(126,185,99)'
      // transition: all 0.15s ease,
    },

  profileInfo:{
    width: '100%',
    padding:' 0% 10%',
  },

  profileInfoP:{
      /* borderbottom: 1 solid #d3d3d3, */
      marginBottom: 10,
      fontSize: 15,
  },

  profileInfoLabel:{
    fontSize: 15,
    color: '#9098a9',
    /* marginBottom:' 2%', */
    width: '100%',
  },

  editProfile:{
    width: '100vw',
    alignItems: 'unset',
    borderRadius: 0,
    paddingTop: 90,
  },

  editProfileInput:{
    color: colorPrimary,
    fontSize: 18,
  },

  editProfileSelect:{
    color: colorPrimary,
    fontSize: 18,
  },

  viewProfile:{
    width: '100vw',
    height: '100%',
    minHeight: '100vh',
    borderRadius: 0,
    paddingTop: '20%',
  },

  alignCenterVertical:{
    display: flex,
    padding: '30% 10%',
    flexDirection: column,
    alignItems: 'center',
    justifycontent: 'space-between',
    height: '100vh',
    width: '100vw',
  },

  alignCenterVerticalLogointro:{
    width: '100%',
  },

  alignCenterVerticalFriends:{
    height: '35%'
  },
  subtitle:{
    fontSize: 20,
    color: #8a8a8a
  },
  maintitle:{
    fontSize: 35,
    color: colorPrimary
  },

  chatimg:{
    width: '30%',
  },

  featuredescription1:{
    marginleft: '10%',
    textAlign: right

  },
  featuredescription2:{
    marginright: '10%',
    textAlign: left
  },
  featuredescription3:{
    marginleft: '10%',
    textAlign: right
  },

  feature:{
    height: 120,
    display: flex,
    alignItems: 'center',
  },

  slide2AlignCenterVertical:{
    justifycontent: spacearound,
    padding: '25% 10%',
    fontSize: 16,
  },

  formwrapperA:{
    textDecoration: 'none',
    color: 'white',
  },

  btnBtnsignupFinal:{
    width: '40%',
    fontSize: 20,
  },

  formWrapperPlandetail:{
    alignItems: 'center',
    padding: '20%' '10%',
  },

  planDetailBtnSignup:{
    width: '60%',
    fontFamily: fourthfont,
    background:  colorPrimary,
    boxShadow: '1 5 #4f8c40',
    border: 'none',
    borderRadius: 5,
    margin:0 ,
    fontFamily: sixthFont,
    fontSize: 30,
    textAlign: 'center',
    margintop: '10%', 
    
  },

  formWrapperForm:{
    width: '100%',
  },

  plandetailFormbuttons:{
    justifycontent: 'space-between',
    display: flex,
    flexDirection: column,
    aligncontent: 'center',
    justifycontent: 'center',
    
  },

  plandetailP:{
    fontSize: 15,
  },

  back:{
    width: '30%',
    position: 'inherit',
    color: 'grey',
    backgroundColor: transparent,
    fontSize: 15,
    fontFamily: sixthFont,
    boxShadow: 'none',
  },

  formwrapperH3:{
    color: colorPrimary,
    fontFamily: sixthFont,
  },

  cardgridPlandetailTitle:{
    fontSize: 30,
    paddingbottom: '1vh',
  },

  cardgridPlandetailDate:{
    color: 'grey'
  },


  cardGridPlanDetailDescription:{
    color: 'grey',
    fontSize: 18,
    paddingbottom: '4vh',
  },

  cardGridPlanDetailCategory:{
    color: colorPrimary
  },

  formButtonsSignup:{
    flexDirection: column,
  },

  formSignupBack:{
    position: 'absolute',
    textAlign: 'center',
  },

  loginSignupWrapper:{
    margintop:0,
    display: flex,
    flexDirection: column,
    justifycontent: 'center',
    alignItems: 'center',
    height: '100vh',
  },

  loginsignuplink:{
    color: colorPrimary,
    fontSize: 15,
    liststyle: 'none',
    textDecoration: 'none',
    paddingTop: 15,
  },

  loginSignuplinkOnboarding:{
    fontSize: 25,
    /* paddingTop: '20%', */
    border: '1 solid green',
    margintop: 30,
    borderRadius: 5,
    padding: 15,
  },

  sidebarA:{
    padding:' 5% 0',
    textDecoration: 'none',
    fontSize: 25,
    color: '#818181',
    display: block,
    // transition: 0.3s,
  },

  sidebarcontainerH3H4:{
    margin: 0,
    color: gray
  },

  backdetail:{
    position: 'absolute',
    textAlign: 'center',
    width: '30%',
    right: '36%',
    color: 'grey',
    backgroundColor: transparent,
    fontSize: 15,
    fontFamily: sixthFont,
    boxShadow: 'none',
  },

  categoriesA:{
    textDecoration: 'none',
  },

  categoriesCard:{
    display: flex,
    justifycontent: 'space-between',
    alignItems: 'center',
    padding:' 7% 15%',
  },

  categoriesP:{
    fontSize: 20,
  },

  categoriesH3:{
    margin: 0,
    padding: 0,
  },

  formInpBorder:{
    bottom: 17,
  },

  formInp:{
    margin: 0,
  },

  formEdit:{
    height: '100%',
    minHeight: '100vh',
    margin: 0,
    paddingTop: 90,
  },

  noPlans:{
    position: 'absolute',
    right: '34%',
    color: '#b9b9b9',
    position: 'absolute',
    bottom: '43%',
  },

  usernameProfile:{
    color: colorPrimary
  },

  emailProfile:{
    color: gray,
    paddingTop: 10,
  },

  logoutBtn:{
    fontSize: 15,
    color: colorGrayLogo
  },

  moreDetails:{
    color: 'grey',
    fontSize: 20
  },

  moreDetails:{
    color: 'grey',
    fontSize: 20,
    letterSpacing: 1,
    textAlign: 'center',
    marginBottom: 10,
  },

  popupA:{
    textDecoration: 'none',
  },

  popupDetailsname:{
    color: colorPrimary,
    fontWeight: bold,
    fontSize: 14,
  },

  popupDescription:{
    color: 'grey',
  },

  formWithTitleWrapper:{
    paddingTop: '12%',
  },

  twoCols:{
    display: flex,
    justifycontent: 'center',
    aligncontent: 'center',
  },

  col:{
    width: '50%'
  },

  colFirstchild:{
    paddingright: 5
  },

  colLastchild:{
    paddingleft: 5
  },

  error:{
    color: red,
    paddingTop: 10
  },

  profile:{
    margin: 0,
    padding: 0,
  },

  profileA:{
    margin: 0,
    margintop:' 2%',
    padding: 10 20,
    width: auto,
  },

  save:{
    margintop:' 5%',
    padding:' 5 20',
    width: '40%',
    margin: '20 auto',
  },

  usersWrapper:{
    width: '100%',
    minHidth: '100vw',
    minHeight: '100vh',
    paddingTop: '12%',
    paddingbottom: 85,
  },
  usersList:{
      padding:' 2%' 0,
  },

  usersImage:{
    width:' 20vw'
  },



  // cardgridusers:{
  //   display: grid,
  //   gridtemplatecolumns: 1fr 1fr 1fr,
  //   gridtemplaterows: auto,
  //   gridtemplateareas: 
  //   "image description description"
  //   "image description description"
  //   "name age proximity ",
  //   margin: 0,
  //   alignItems: 'center',
  //   gridcolumngap: 5,
  //   gridrowgap: 10,
  // },
  // usersimage:{
  //   gridarea: image,
  //   margin: 0,
  //   width: 80,
  //   height: 80,
  //   border: 2 solid colorPrimary,
  //   margin: 0 auto,
  // },

  // username:{
  //   gridarea: name,
  // },

  // userdescription:{
  //   gridarea: description,
  //   fontSize: 15,
  //   color: colorprimary,
  //   fontstyle: italic,
  //   fontWeight: bold,
  //   textAlign: left,
  // },

  // userproximity:{
  //   gridarea: proximity
  // },

  // cardgridusers a:{
  //   textDecoration: 'none',
  // },

  // cardgridusers h3:{
  //   color: colorPrimary,
  //   margin: 0,
  //   textAlign: 'center',
  // },

  // cardgridusers p:{
  //   color: 'grey',
  //   margin: 0,
  //   textAlign: 'center',
  // },

  // cardgridusers time:{
  //   color: 'grey',
  //   margin: 0,
  //   textAlign: 'center',
  //   fontstyle: italic,
  //   fontSize: 15,
  // },

  usersDetail:{
    display: flex,
    flexDirection: column,
    justifycontent: 'center',
    paddingbottom: 0,
    paddingTop: '14%',
  },

  uploadPhoto:{
    paddingTop:' 5%',
    paddingbottom:' 3%',
    margin: '0 auto',
  },

  searchbar:{
    position: 'fixed',
    right: '17%',
    top: '10 .4%',
    borderRadius: 20,
    border: `1 solid ${colorPrimary}`,
    height: '4vh',
    padding: '0 10',
    color: colorprimary,
    fontSize: 18,
    fontFamily: fontForm,
  },

  searchbarFocus:{
    outline: colorPrimary 
  },

  searchBarOpen:{
    width: '49vw',
    transformorigin: 'right',
    // transition: all 0.5s,
  },

  searchBarClose:{
    transformorigin: 'right',
    width: 0,
    // transition: all 0.5s,
    padding: 0,
    borderColor:transparent,
    backgroundColor: transparent,
  },

  unreadMessages:{
    width: 25,
    /* paddingright: 10, */
    /* verticalalign: webkitbaselinemiddle, */
    position: 'absolute',
    left: 34,
    bottom: 18,
  },

  chats:{
    position: relative
  },

  mode:{
    textDecoration: 'none',
    color: colorLight'Grey',
    
  },

  textAreaDescription:{
    height: 40
  },

  /* PLAN DETAIL */
  planDetailOwnerInfo:{
    display: flex,
    alignItems: 'center',
    alignself: baseline,
    paddingbottom: 15,
  },

  planDetailOwnerInfoName:{
    fontSize: 18,
    color: colorPrimary,
    paddingleft: 15,
  },

  planDetailOwnerAvatar:{
    width: 50,
    height: 50,
  },

  planDetailJoinerInfo:{
    gridarea: attendees,
    display: flex,
    alignItems: 'center',
    alignself: baseline,
  },

  planDetailJoinerAvatar:{
    width: 30,
    height: 30,
    /* border: 0.5 solid colorPrimary, */
  },

  descriptionCreate:{
    fontSize: 15,
  },

  uploadPhotoLabel:{
    border: 1 solid colorPrimary,
  },

  // usersDetailGrid:{
  //   display: grid,
  //   gridtemplatecolumns: 1fr 1fr 1fr,
  //   gridtemplaterows: auto,
  //   gridtemplateareas: 
  //   "image description description"
  //   "name date proximity",
  //   margin: '0 20',
  //   alignItems: 'center',
  //   gridcolumngap: 15,
  //   gridrowgap: 10,
  // },
  // usersdetailgrid .usersimage:{
  //   gridarea: image,
  //   margin: 0,
  //   width: 120,
  //   height: 120,
  //   border: 2 solid colorPrimary,
  //   margin: 0 auto,
  // },
  // usersdetailgrid time:{
  //   gridarea: date,
  //   margin: 0,
  //   fontSize: 25,
  //   textAlign: 'center',
  //   color: 'grey',
  // },

  // usersdetailgrid #userproximity:{
  //   gridarea: proximity,
  //   margin: 0,
  //   fontSize: 15,
  //   textAlign: 'center',
  //   color: 'grey',
  // },

  // usersdetailgrid .username:{
  //   gridarea: name,
  //   fontSize: 30,
  //   color: #6bbc57,
  //   margin: 0,
  //   textAlign: 'center',
  // },

  // usersdetailgrid #userdescription:{
  //   gridarea: description,
  //   fontSize: 18,
  //   color: #6bbc57,
  //   fontstyle: italic,
  //   fontWeight: bold,
  //   textAlign: left,
  // }

  map:{
    position: 'inherit',
  },
  loadingGif:{
    position: 'absolute',
    left: 0,
    top: '30%',
    width: '100vw',
  }
},