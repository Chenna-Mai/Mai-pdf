import { childReportDetailsUtils } from "../report-detail-utils";
import _ from "lodash";

export async function contentReport7(track, paramArgs) {
  try {
    let reportDetail = await childReportDetailsUtils(
      track.userId,
      track.childId,
      track.geniuseId,
      track.parameterType,
      paramArgs,
      track.res
    );

    console.log(reportDetail);

    let IndicatorDetailInfo, IndicatorInsightCards;

    _.find(reportDetail, function (paramObj) {
      if (paramObj.cardType == "TITLE_DESC") {
        IndicatorDetailInfo = paramObj;
      } else if (paramObj.cardType == "INDICATOR_CARD_LIST") {
        IndicatorInsightCards = paramObj;
      }
    });

    let indicatorInsightTags = "";

    if (IndicatorInsightCards && IndicatorInsightCards.profileBlocks) {
      IndicatorInsightCards.profileBlocks.map((indicator, i) => {
        indicatorInsightTags =
          indicatorInsightTags +
          `<div class="background-layout">
                <h4 class="graph-heading">${indicator.name}</h4>
                <div style="display: flex;">
                <div style="display: flex; flex-direction: column; margin-right: 5px; margin-top: -16px;">
                    <img src=${indicator.deltaScoreIcon}
                        style="width:13px; height:7px; margin-left: 2px;" alt="h" />
                    <h4 class="graph-difference" style="color:${
                      indicator.deltaScoreColor
                    }">${indicator.deltaScore}</h4>
                </div>
                <div style="width: 100%; position: relative;">
                    <div id="graph-school-profile"
                        style="position: absolute; top: -38px; left: ${
                          indicator.data[1].score
                        }%; z-index: 1; margin-left: ${
            indicator.data[1].score > indicator.data[0].score ? "0px" : "-5px"
          }; margin-bottom: 8px;">
                        <h4 id="graph-school-perc" style="position: absolute; left: -40px; font-weight: bold; font-size: 12px; line-height: 14px; color: #4C84FF;
                            ">
                            ${indicator.data[1].scoreText}
                        </h4>
                        <div style="display: flex; flex-direction: column;">
                            <img src=${indicator.data[1].profilePic}
                                style="width:30px; height:30px; margin-left: -12px;" />
                            <svg style="stroke: none;" width="5" height="5" viewBox="0 0 5 5"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M2.71425 0.941406L4.8306 4.60702H0.597907L2.71425 0.941406Z"
                                    fill="#4C84FF" />
                            </svg>
                        </div>
                    </div>
                    <div
                        style="display: flex; position: relative; align-items: center; width: 100%; height: 6px; z-index: 1;">
                        <div
                            style="position: absolute; background:  ${
                              indicator.data[1].score > indicator.data[0].score
                                ? "#ee2013"
                                : "#4C84FF"
                            }; border-radius: 30px; width:  ${
            indicator.data[1].score > indicator.data[0].score
              ? indicator.data[0].score
              : indicator.data[1].score
          }%; height: 6px;">
                        </div>
                        <div
                            style="background:  ${
                              indicator.data[1].score > indicator.data[0].score
                                ? "#4C84FF"
                                : "#98E240"
                            }; border-radius: 30px; width: 100%; height: 6px;">
                        </div>
                    </div>
                    <div id="graph-child-profile"
                        style="position: absolute; top: 3px; left:  ${
                          indicator.data[0].score
                        }%;z-index: 1;">
                        <svg style="stroke: none;" width="5" height="4" viewBox="0 0 5 4"
                            fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.77891 3.79297L0.662569 0.127354L4.89526 0.127354L2.77891 3.79297Z"
                                fill=${
                                  indicator.data[1].score >
                                  indicator.data[0].score
                                    ? "#ee2013"
                                    : "#98E240"
                                } />
                        </svg>

                        <div style="display: flex; ">
                            <img style="width:30px; height:30px; border-radius:50%; margin-left: -11px;"    
                                src=${indicator.data[0].profilePic} />
                            <h4 id="graph-child-perc"
                                style="margin-left: -55px; font-weight: bold; font-size: 12px; line-height: 14px; color: ${
                                  indicator.data[1].score >
                                  indicator.data[0].score
                                    ? "#ee2013"
                                    : "#98E240"
                                };">
                                ${indicator.data[0].scoreText}
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

                </div>`;
      });
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
        <!-- ----------------------------PAGE 7--------------------- -->

        <section>
        <div class="container container2" style="padding :0 17px 0 17px">
            <table class="full-width" style="margin:10px 0px">
                <thead>
                    <tr>
                        <td>
                            <div class="flex-container">
                                <div class="circle-textpole">
                                    <img
                                        src="https://dev-mai-cms.s3.ap-south-1.amazonaws.com/fontfamily/Icon_color.png">
                                </div>
                                <h4 class="header-title">${IndicatorDetailInfo.title}</h4>
                            </div>
                            <hr>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span class="divtext6">${IndicatorDetailInfo.description}</span>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table class="full-width">
                <tbody>
                    <tr>
                        <td>
                            <div id="behavioral-content" class="row margin_zero"
                                style="display: flex; flex-wrap: wrap; background: linear-gradient(0deg, #FFFFFF, #FFFFFF);
                                    border: 1px solid rgba(118, 54, 221, 0.15); margin-top: 20px; margin-bottom: 20px; padding: 7.5px;">
                                ${indicatorInsightTags}
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
        </body>
        </html>`;

    return page;
  } catch (error) {
    console.log(error);
    throw new Error("Please try again later.");
  }
}
