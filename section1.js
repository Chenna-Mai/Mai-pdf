export function contentReport1(track) {
  try {
    let contentList = "",
      j = 1;

    for (let i = 0; i < track.response.length; i++) {
      if (
        track.response[i].cardType == "MAI_PERFORMANCE_INDEX" ||
        track.response[i].cardType == "CALCULATION_METHOD" ||
        track.response[i].cardType == "LEARNING_METHODS"
      ) {
        contentList =
          contentList +
          `<li><span class='bulletNums'>${j}</span> ${track.response[i].title}<hr></li>`;
        j++;
      } else if (
        track.response[i].cardType == "PARAM_DEF_SCORE" ||
        track.response[i].cardType == "KSA_OVERALL_CARDS" ||
        track.response[i].cardType == "MILESTONE_OVERALL_CARDS" ||
        track.response[i].cardType == "INDICATOR_OVERALL_CARDS"
      ) {
        track.response[i].profileBlocks.map((block) => {
          contentList =
            contentList +
            `<li><span class='bulletNums'>${j}</span> ${block.title}<hr></li>`;

          j++;
        });
      }
    }

    const page = `<!DOCTYPE html>
        <html lang="en">
        
        <head>
            <title>PDF Designs</title>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
            <link href="https://fontfamily.s3.ap-south-1.amazonaws.com/report.css" rel="stylesheet" type="text/css">
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
        
            <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.js" integrity="sha256-qSIshlknROr4J8GMHRlW3fGKrPki733tLq+qeMCR05Q=" crossorigin="anonymous"></script> -->
            <!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script> -->
            <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
            <!-- <script src="https://www.chartjs.org/dist/master/Chart.min.js"></script> -->
            <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.min.js"
                integrity="sha512-s+xg36jbIujB2S2VKfpGmlC3T5V2TF3lY48DX7u2r9XzGzgPsa6wTpOQA7J9iffvdeBN0q9tKzRxVxw1JviZPg=="
                crossorigin="anonymous"></script>
            <!-- progres bar -->
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
            <script src="https://rawgit.com/kimmobrunfeldt/progressbar.js/1.0.0/dist/progressbar.js"></script>
            <link href="https://fonts.googleapis.com/css?family=Raleway:400,300,600,800,900" rel="stylesheet" type="text/css">
        </head>
        
        <body>
            <!-- ----------------------------PAGE 1--------------------- -->
            <section>
                <div class="container containercls">
                    <table cellpadding="0" cellspacing="0" style="margin:0 auto; width: 100%;">
                        <tr>
                            <td colspan="12">
                                <center>
                                    <div class="row headerdiv">
                                        <span class="headerclss">${
                                          track.title
                                        }</span>
                                        <p class="headertext">${
                                          track.description
                                        }</p>
                                    </div>
                                </center>
                            </td>
                        </tr>
        
                    </table>
                    ${
                      track.parameterType == "track" &&
                      track.geniuses[0].key == "7"
                        ? `<table cellpadding="0" cellspacing="0" style="width: 100%;">
                    <tr>
                        <td colspan="" class="paddond0 padding-right padding-left bordernone">
    
                            <center> <span class="overall" style="margin-bottom:0px; font-weight:600 ;line-height:34px">${track.preferredLearningStyle.text}</span>
                                <!-- <div id="scorcard"></div> -->
                                <div>
    
                                    <img style="width: 60px;
                                height: 60px;
                                margin-top: 15px;
                                " src=${track.preferredLearningStyle.icon}
                                        alt="Image" />
                                    <h2 style="font-family: Gotham Rounded;
                                    font-style: normal;
                                    font-weight: bold;
                                    font-size: 24px;
                                    line-height: 29px;
                                    text-align: center;
                                    
                                    color: #98E240;">${track.preferredLearningStyle.name}</h2>
                                </div>
                            </center>
                        </td>
    
    
    
                    </tr>
                </table>`
                        : `<table cellpadding="0" cellspacing="0" style="width: 100%;">
                    <tr>

                        ${
                          track.parameterType.toLowerCase() == "ms" ||
                          track.parameterType.toLowerCase() == "milestone"
                            ? `<td colspan="5" class="paddond0 padding-right padding-left bordernone" style="width:40%">

                        <center> <span class="overall" style="margin-bottom:0px;">${track.maiPerformanceObj.title}</span>
                            <!-- <div id="scorcard"></div> -->
                            <div>
                                <h2 style="font-family: Gotham Rounded;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 24px;
                            line-height: 29px;
                            text-align: center;
                            
                            color: #98E240;">${track.maiPerformanceObj.scoreText}</h2>
                                <img style="width: 60px;
                            height: 60px;
                            margin-top: 15px;
                            margin-bottom: 20px;"
                                    src=${track.maiPerformanceObj.icon}
                                    alt="Image" />
                                <h4 style="font-family: Gotham Rounded;
                            font-style: normal;
                            font-weight: bold;
                            font-size: 12px;
                            line-height: 19px;
                            margin:0;
                            text-align: center;
                            
                            color: #43484B;">${track.maiPerformanceObj.text}</h4>
                            </div>
                        </center>
                    </td>`
                            : `<td colspan="5" class="paddond0 padding-right padding-left bordernone" style="width:40%">
    
                        <center> <span class="overall">${track.child.child.firstName}'s Scorecard</span></center>
                        <div id="scorcard"></div>

                    </td>`
                        }
                    
                        <td colspan="7" class="paddond0 padding-right  bordernone"
                        style="width:60%">
                            <table style="width:90%">
                                <thead>
                                    <tr>
                                        <th colspan="12">
                                            <span class="statscss">An Overview</span>
                                            <p class="seatText">Here is a summary of ${
                                              track.child.child.firstName
                                            }'s report</p>
                                        </th>
                                    </tr>
    
                                </thead>
                                <!-- <div class= "col-sm-7 " style="border-left: 1px solid rgba(0, 0, 0, 0.05);"> -->
                                <tbody>
                                    <tr>
                                        <td colspan="6" class="colgrid">
                                            <!-- <div class="col-sm-6 colgrid"> -->
                                            <span class="statsgride">${
                                              track
                                                .maiPerformanceIndexParameters[0]
                                                .score
                                            }</span>
                                            <span class="statsdtlcss">${
                                              track
                                                .maiPerformanceIndexParameters[0]
                                                .title
                                            }</span>
                                            <!-- </div> -->
                                        </td>
    
                                        <td colspan="6" class="colgrid">
                                            <!-- <div class="col-sm-6 colgrid"> -->
                                            <span class="statsgride">${
                                              track
                                                .maiPerformanceIndexParameters[1]
                                                .score
                                            }</span>
                                            <span class="statsdtlcss">${
                                              track
                                                .maiPerformanceIndexParameters[1]
                                                .title
                                            }</span>
                                            <!-- </div> -->
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="6" class="colgrid">
                                            <!-- <div class="col-sm-6 colgrid"> -->
                                            <span class="statsgride">${
                                              track
                                                .maiPerformanceIndexParameters[2]
                                                .score
                                            }</span>
                                            <span class="statsdtlcss">${
                                              track
                                                .maiPerformanceIndexParameters[2]
                                                .title
                                            }</span>
                                            <!-- </div> -->
                                        </td>
    
                                        <td colspan="6" class="colgrid">
                                            <!-- <div class="col-sm-6 colgrid"> -->
                                            <span class="statsgride">${
                                              track
                                                .maiPerformanceIndexParameters[3]
                                                .score
                                            }</span>
                                            <span class="statsdtlcss">${
                                              track
                                                .maiPerformanceIndexParameters[3]
                                                .title
                                            }</span>
                                            <!-- </div> -->
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                        </td>
                    </tr>
                </table>`
                    }
        
                    <table cellpadding="0" cellspacing="0" style="width:100%">
                        <tr>
                            <td><br><br>
                                <hr>
                                <center>
                                    <div class="row Theaderdiv">
                                        <span class="Theaderclss">Table of Contents</span>
                                    </div>
                                </center><br>
                                <div class="row" style="margin-bottom: 30px;">
                                    <div class="col-sm-6">
                                        <ul class="li_sction1" style="list-style-type: none;${j > 5?`column-count:2;`:''}">${contentList}   
                                        </ul>
                                    </div>
                                </div>
        
                            </td>
                        </tr>
                    </table>
                </div>
            </section>
        </body>
        <script>
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
                  "<p class='scordcss'>Current Score</p><p class='scoredpercentage'>" +
                    value +
                    "%</p>"
                );
              }
          
              bar.text.style.color = state.color;
            },
          });
          bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
          bar.text.style.fontSize = "2rem";
          
          bar.animate(${track.childScore / 100}); // Number from 0.0 to 1.0

        </script>
        </html>`;
    console.log(page)
    return page;
  } catch (error) {
    console.log(error);
    throw new Error("Please try again later.");
  }
}