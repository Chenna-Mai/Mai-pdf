// ----------------------------------------section 2

var doughntList = [
  "Cognition",
  "Emotional",
  "Communication",
  "social",
  "Cognition",
];
doughntList.map((item) => {
  $("#doughnut-list").append(`<p> 
                  <span style="width:8px; height: 8px; background: #6739B7; display: inline-block; margin-right: 9px; border-radius: 2px;">
                  </span>${item}</p>`);
});

//-------------------------doughnut---------------------------------
var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "doughnut",

  // The data for our dataset
  data: {
    // labels: ["Cognition", "Emotional", "Communication", "social", "Cognition"],
    datasets: [
      {
        data: [25, 25, 20, 20, 10],
        label: "Total ",
        backgroundColor: ["#6E4CB2", "#AA92DB", "#D5CBEA", "#ababac", "#000"],
        borderWidth: 0,
        fillColor: "#48A497",
        strokeColor: "#48A4D1",
        height: "100px",
        width: "100px",
      },
    ],
  },

  // Configuration options go here
  options: {
    cutoutPercentage: 60,
    circumference: 2 * Math.PI,
    rotation: 1.5 * Math.PI,
    legend: {
      display: true,
      position: "right",
      align: "middle",
      fullWidth: true,
      labels: {
        boxWidth: 10,
        boxHeight: 8,
        fontSize: 14,
        fontColor: "#333333",
        fontFamily: "Lato",
      },
      layout: {
        padding: {
          left: 10,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      animation: {
        // animateScale: true
      },
    },
  },
});

// ----------------------------------------section 3

function insertText() {
  var val = 76;
  var a = "a";
  var array = a.repeat(val).split("");
  var data = array.map((c) => {
    let image = document.createElement("img");
    image.src =
      "https://s3.ap-south-1.amazonaws.com/test-mai-cms/v6_icons/PeerBlue.png";
    image.setAttribute("class", "peer-icon zoom");
    document.getElementById("peer-icon").appendChild(image);
  });
  var valr = 34;
  var b = "b";

  var array = b.repeat(valr).split("");
  var data = array.map((c) => {
    let image = document.createElement("img");
    image.src =
      "https://s3.ap-south-1.amazonaws.com/test-mai-cms/v6_icons/PeerRed.png";
    image.setAttribute("class", "peer-icon zoom");
    document.getElementById("peer-iconR").appendChild(image);
  });
}

// ----------------------------------------section 4

function renderCalcMethlist() {
  var calculateMethods = [1, 2, 3, 4];
  var ksa1A = [1, 2, 3, 4];

  var ksa2A = [];
  var ksa1 = ksa1A.map((item, i) => {
    return '<div class="row margin_zero calculatecss"><span class="activity_listing"></span><span class="activity_li_text">Active Listening </span><span class="activity_li_text activity_li_textLeft">48</span></div>';
  });

  var ksa2 = ksa2A.map((item, i) => {
    return '<div class="row margin_zero calculatecss"><span class="activity_listing_blue"></span><span class="activity_li_text">Active Listening </span><span class="activity_li_text activity_li_textLeft">48</span></div>';
  });

  calculateMethods.map((item, i) => {
    $("#calculate-tables").append(`
      
      <div class=" ulboreder4 " style="width:100%;margin: 16px 0px;">
          <div class="row margin_zero calculatecss">
              <center><span class="liheaderspan">Cognitive Parameters</span></center>
          </div>

         <div style="display:flex;">
        
           ${
             ksa1.length > 0
               ? `
             <div style="flex:1;">
               <div
                 class=" margin_zero calculatecss"
                 style="background: #F22182;"
               >
                 <center>
                   <span class="spanage">Age relevant KSA’s</span>
                 </center>
               </div>
               ${ksa1.join("")}
             </div>
           `
               : ``
           }
               ${
                 ksa2.length > 0
                   ? `
                   <div style="flex:1;">
                     <div
                       class=" margin_zero calculatecss"
                       style="background: #389ACE;"
                     >
                       <center>
                         <span class="spanage">Age relevant KSA’s</span>
                       </center>
                     </div>
                     ${ksa2.join("")}
                   </div>`
                   : ``
               }         
          </div>
      </div>    
      `);
  });
}

renderCalcMethlist();

// ----------------------------------------section 5
var ksaAchievedList = [1, 2, 3];
async function renderKsaAchieved() {
  return new Promise(function (resolve, reject) {
    resolve(
      ksaAchievedList.map((item, i) => {
        console.log("#ksa-achieved", i);
        $("#ksa-achieved")
          .append(` <tr class="paddondall" style="margin:20px 0;">
                        <td colspan="6" style="width:60%" class="paddondall" >
                            <div class="flex-container setimg5">
                                <div class="circle_text55">
                                    <span> <img src="https://dev-mai-cms.s3.ap-south-1.amazonaws.com/fontfamily/fight.png" / style="height: 36px;
                                width: 36px;"></span>
                                </div>
                                <span class="header_title5">
                                    Verbal Memory
                                </span>
                            </div>
                    
                            <div style="padding: 10px 20px;">
                                <span class="verbalText">
                                Ability to concentrate on a task over a period of time without being
                                distracted.                    
                                    <div style="margin-bottom: 10px; margin-left: 5px; margin-top: 10px;">
                                        <div style="position: relative; display: flex; justify-content: space-between;">
                                            <h5 style="font-weight: bold; font-size: 12px; line-height: 14px; color: rgb(67, 72, 75);">
                                                Shruthi’s score
                                            </h5>
                                        </div>
                                        <div class="w3-round-xlarge" style="display: flex; border-radius: 30px; height: 9.96px; position: relative; background:rgba(33, 150, 243, 0.3);">
                                            <div class="w3-round-xlarge" style="border-radius: 30px; width: ${achieved}%; background:rgba(33, 150, 243, 0.4); height: 10px;">
                                            </div>
                                        </div>
                                        <div style="position: relative; margin-bottom: 20px;">
                                            <h5 style="position: absolute; left: ${
                                              achieved > 5 ? achieved - 5 : 0
                                            }%; font-weight: bold; font-size: 12px; line-height: 14px; color: rgb(67, 72, 75);">
                                                70%</h5>
                                            </div>
                                        </div>
                                    </span>
                            </div>
                        </td>
                    
                        <td colspan="6"  style="width:40%" class="paddondall">
                            <table>
                                <tbody>
                                    <tr>
                                        <td class="paddondall">
                                        <div id="impactscorcard${i}change" class="impactscorcard">
                                        <svg width="150" height="150" viewBox="0 0 120 120" style="stroke-linecap: round;"><path d="M 113 75 A 38 38 0 0 0 37 75" id="arc2" fill="none" stroke="#E2E2E2" stroke-linecap="round" stroke-width="7"></path><path d="M 85.60166202949071 38.50883994427616 A 38 38 0 0 0 37 75" id="arc1" fill="none" stroke="#7636DD" stroke-linecap="round" stroke-width="7"></path><text id="name" x="62%" y="49%" fill="#43484B" font-size="7px" font-weight="600" dominant-baseline="middle" text-anchor="middle">Impact Score</text><text id="name" x="62%" y="60%" fill="#43484B" font-size="14px" font-weight="bold" dominant-baseline="middle" text-anchor="middle">59%</text><circle id="smallCircle" cx="85.60166202949071" cy="38.50883994427616" r="7px" fill="#7636DD"></circle></svg>
                                        </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>`);
      })
    );
  });

  // resolve runs the first function in .then
}
renderKsaAchieved().then(
  ksaAchievedList.map((item, i) => {
    console.log("then", i);
    var bar = new ProgressBar.SemiCircle("#impactscorcard" + i, {
      strokeWidth: 7,
      color: "#7636DD",
      trailColor: "#eee",
      trailWidth: 7,
      easing: "easeInOut",
      duration: 1400,
      svgStyle: null,
      text: {
        value: "",
        alignToBottom: false,
      },
      from: {
        color: "#7636DD",
      },
      to: {
        color: "#7636DD",
      },
      // Set default step function for all animate calls
      step: (state, bar) => {
        bar.path.setAttribute("stroke", state.color);
        var value = Math.round(bar.value() * 100);
        bar.setText(
          "<p class='imp_scordcss'>Impact Score</p><p class='imp_percentage'>" +
            value +
            "%</p>"
        );
        bar.text.style.color = state.color;
      },
    });
    bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = "2rem";
    bar.svg.setAttribute("stroke-linecap", "round");
    bar.animate(0.83); // Number from 0.0 to 1.0
  })
);

// ----------------progress impact scord -------------
var bar = new ProgressBar.SemiCircle("#scorcard", {
  strokeWidth: 5,
  color: "#7636DD",
  trailColor: "#eee",
  trailWidth: 5,
  easing: "easeInOut",
  duration: 1,
  svgStyle: null,
  text: {
    value: "",
    alignToBottom: false,
  },
  from: {
    color: "#7636DD",
  },
  to: {
    color: "#7636DD",
  },
  // Set default step function for all animate calls
  step: (state, bar) => {
    bar.path.setAttribute("stroke", state.color);
    bar.path.setAttribute("stroke-linecap", "round");
    var value = Math.round(bar.value() * 100);
    if (value === 0) {
      bar.setText("");
    } else {
      bar.setText(
        "<p class='scordcss'>Rahul scored</p><p class='scoredpercentage'>" +
          value +
          "%</p>"
      );
    }

    bar.text.style.color = state.color;
  },
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = "2rem";

bar.animate(0.5); // Number from 0.0 to 1.0

// ----------------------------------------section 6

function renderMilestonelist() {
  var milelist = [1, 2, 3];
  milelist.map((item, i) => {
    $("#mileList").append(`
      <li class="lisection5"><span class="bulletNums5"></span><span class="lisectionText5">Sense of fairness</span></li>
      `);
  });
}

var mileList = [1, 2, 3, 4, 5, 6];
mileList.map((item, i) => {
  $("#milestone-list")
    .append(`<td style="width:50%; border-bottom: 1px solid rgb(0,0,0,0.03);">
    <div class="row margin_zero set_backgroung5">
        <div class="flex-container setimg5">
            <div class="circle_text55">
                <span> <img src="https://dev-mai-cms.s3.ap-south-1.amazonaws.com/fontfamily/fight.png" / style="transform: scale(0.5)"></span>
            </div>
            <span class="achieved_title1">
                Ability to allocate a set amount of time for doing a task
            </span>
        </div>
    </div>
  </td>`);
});
renderMilestonelist();

// ----------------------------------------section 7
var behavioralGraph = [
  {
    school: 10,
    child: 0,
  },
  {
    school: 30,
    child: 20,
  },
  {
    school: 40,
    child: 60,
  },
  {
    school: 50,
    child: 60,
    color: "red",
  },
  {
    school: 80,
    child: 80,
    color: "red",
  },
  {
    school: 100,
    child: 100,
    color: "red",
  },
  {
    school: 100,
    child: 72,
    color: "red",
  },
  {
    school: 60,
    child: 67,
    color: "green",
  },
];
behavioralGraph.map((item) => {
  $("#behavioral-content").append(`  <div class="background-layout">
  <h4 class="graph-heading">
      Writes letters in the correct size and proportions
  </h4>
  <div style="display: flex;">
      <div style="display: flex; flex-direction: column; margin-right: 5px; margin-top: -16px;">
          <img src="https://dev-mai-cms.s3.ap-south-1.amazonaws.com/fontfamily/HighIcon.png"
              style="margin-left: 2px; width: fit-content;" alt="h" />
          <h4 class="graph-difference" style="color: ${
            item.school > item.child ? "#ee2013" : "#98E240"
          }">
          ${
            item.school > item.child
              ? item.school - item.child
              : item.child - item.school
          }%
          </h4>
      </div>
      <div style="width: 100%; position: relative;">
          <div id="graph-school-profile"
              style="position: absolute; top: -38px; left: ${
                item.school
              }%; z-index: 1; margin-left:${
    item.school > item.child ? "0px" : "-5px"
  }; margin-bottom: 8px;">
              <h4 id="graph-school-perc" style="position: absolute; left: -40px; font-weight: bold; font-size: 12px; line-height: 14px; color: #4C84FF;
                  ">
                  ${item.school}%
              </h4>
              <div style="display: flex; flex-direction: column;">
                  <img src="https://dev-mai-cms.s3.ap-south-1.amazonaws.com/fontfamily/Circle.png"
                      style="margin-left: -12px;" />
                  <svg style="stroke: none;" width="5" height="5" viewBox="0 0 5 5"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                          d="M2.71425 0.941406L4.8306 4.60702H0.597907L2.71425 0.941406Z"
                          fill="#4C84FF"
                          />
                  </svg>
              </div>
          </div>
          <div
              style="display: flex; position: relative; align-items: center; width: 100%; height: 6px; z-index: 1;">
              <div
                  style="position: absolute; background: ${
                    item.school > item.child ? "#ee2013" : "#4C84FF"
                  }; border-radius: 30px; width:  ${
    item.school > item.child ? item.child : item.school
  }%; height: 6px;">
              </div>
              <div
                  style="background: ${
                    item.school > item.child ? "#4C84FF" : "#98E240"
                  }; border-radius: 30px; width: 100%; height: 6px;">
              </div>
          </div>
          <div id="graph-child-profile"
              style="position: absolute; top: 3px; left:  ${
                item.child
              }%;z-index: 1;margin-left: -5px;">
              <svg style="stroke: none;" width="5" height="4" viewBox="0 0 5 4"
                  fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M2.77891 3.79297L0.662569 0.127354L4.89526 0.127354L2.77891 3.79297Z"
                      fill=${
                        item.school > item.child ? "#ee2013" : "#98E240"
                      } />
              </svg>

              <div style="display: flex; ">
                  <img style="min-width: 28.64px; margin-left: -11px;"
                      src="https://dev-mai-cms.s3.ap-south-1.amazonaws.com/fontfamily/Circle.png" />
                  <h4 id="graph-child-perc"
                      style="margin-left: -55px; font-weight: bold; font-size: 12px; line-height: 14px; color: ${
                        item.school > item.child ? "#ee2013" : "#98E240"
                      };">
                      ${item.child}%
                  </h4>
              </div>
          </div>
          <div id="graph-horiz"
              style="display: flex; justify-content: space-between;margin-top: 60px;">
              <div style="position: relative;">
                  <p
                      style="font-weight: bold; font-size: 8px; line-height: 10px; /* identical to box height */ text-align: center; color: #43484B;">
                      0
                  </p>
              </div>
              <div style="position: relative;">
                  <p
                      style="font-weight: bold; font-size: 8px; line-height: 10px; /* identical to box height */ text-align: center; color: #43484B;">
                      20
                  </p>
              </div>
              <div style="position: relative;">
                  <p
                      style="font-weight: bold; font-size: 8px; line-height: 10px; /* identical to box height */ text-align: center; color: #43484B;">
                      40
                  </p>
              </div>
              <div style="position: relative;">
                  <p
                      style="font-weight: bold; font-size: 8px; line-height: 10px; /* identical to box height */ text-align: center; color: #43484B;">
                      60
                  </p>
              </div>
              <div style="position: relative;">
                  <p
                      style="font-weight: bold; font-size: 8px; line-height: 10px; /* identical to box height */ text-align: center; color: #43484B;">
                      80
                  </p>
              </div>
              <div style="position: relative;">
                  <p
                      style="font-weight: bold; font-size: 8px; line-height: 10px; /* identical to box height */ text-align: center; color: #43484B;">
                      100
                  </p>
              </div>
          </div>
      </div>
  </div>

</div>`);
});

function renderLearnMethlist() {
  var learnMethods = [1, 2, 3, 4, 5, 6];

  learnMethods.map((item, i) => {
    var ksa = [1, 2, 3, 4];

    var ksa1 = ksa.map((item, i) => {
      return '<div class="row margin_zero calculatecss"><span class="activity_listing"></span><span class="activity_li_text">Active Listening </span><span class="activity_li_text activity_li_textLeft">48</span></div>';
    });

    var ksa2 = ksa.map((item, i) => {
      return '<div class="row margin_zero calculatecss"><span class="activity_listing_blue"></span><span class="activity_li_text">Active Listening </span><span class="activity_li_text activity_li_textLeft">48</span></div>';
    });

    $("#learning-tables").append(`
      
      
      
      `);
  });
}

renderLearnMethlist();
// ----------------------------------------section 10
var learningTables = [
  { val: 0 },
  { val: 97 },
  { val: 98 },
  { val: 99 },
  { val: 100 },
];
learningTables.map((item) => {
  var pointerPosition = 0;
  if (item.val > 3) {
    pointerPosition = item.val - 2;
  }
  $("#learning-tables")
    .append(`<div style="width:45.2%;background: linear-gradient(0deg, #FFFFFF, #FFFFFF);
  border: 1px solid rgba(118, 54, 221, 0.15); padding:16px; margin:17px 15px 17px 17px">
      <h4 style="font-family: Gotham Rounded;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 22px;
      
      color: #6E768A;">Visual-Spatial</h4>

      <div class="w3-round-xlarge" style="
          margin: 1.5rem 0px 2.5em;
          display: flex;
          height: 7px;
          position: relative;
          background: rgba(77, 131, 255, 0.2);
          border-radius: 30px;
          ">

          <div class="w3-round-xlarge"
              style="width: ${
                item.val
              }%; background: rgba(77, 131, 255, 0.62); height: 7px; border-radius: 30px;">
              <div class=" w3-round-xlarge" style="background: rgb(77, 131, 255); left: ${pointerPosition}%; position: absolute; height: 7px;
          width: 7px;
          border-radius: 50%;">
                  <div class="progress-bar-circle-tip" style="background: rgb(77, 131, 255); height: 5px; width: 2px;
                  margin-top: 10px;
          margin-left:2px;
          "></div>
                  <h4 id="percentage-text" class="progress-bar-tip-text" style="color: rgb(77, 131, 255);font-family: Gotham Rounded;
          font-style: normal;
          font-weight: bold;
          font-size: 12px;
          line-height: 14px;
          margin-top: 2px;
          margin-left:${item.val == 100 ? "-10px" : "-3px"}">${item.val}%</h4>
              </div>
          </div>
      </div>

      <p style="font-family: Gotham Rounded;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 25px;

      color: #6E768A;">Teste prefers to learn by using visual aids like pictures, colours,
          graphs and so on. As he tends to think in terms of visuals, he finds it easy to
          understand concepts and theories when it is supported or presented as 3-D images,
          colourful notes, flow charts or puzzles.</p>
  </div>`);
});

// ----------------------------------------section 10

var learningMethods = [1, 2, 3];
learningMethods.map((item) => {
  $("#learning-methods").append(`<div
  style="background:white; margin-left: 10px;border-bottom: 1px solid rgba(0, 0, 0, 0.05);display: flex; align-items: center; padding: 18px 0px;">
  <img src="https://s3.ap-south-1.amazonaws.com/test-mai-cms/learning-methods/1.png"
      style="width: 60px; height: 60px; margin: 0px 15px;">
      <p  style="margin: 0;" class="mi-learn-text"> Using images and photographs</p>
      </div>`);
});
