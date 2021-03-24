import { childReportDetailsUtils } from "../report-detail-utils";
import _ from "lodash";

export async function contentReport2(track) {
  try {
    let reportDetail = await childReportDetailsUtils(
      track.userId,
      track.childId,
      track.geniuseId,
      track.parameterType,
      "defination",
      track.res
    );

    let parameterInfo, domainComposition, parameterFooterInfo;

    _.find(reportDetail, function (paramObj) {
      if (paramObj.cardType == "PARAM_DEFINATION_DETAIL") {
        parameterInfo = paramObj;
      } else if (paramObj.cardType == "PARAM_DEFINATION_DOMAIN_COMPOSITION") {
        domainComposition = paramObj;
      } else if (paramObj.cardType == "PARAM_DEFINATION_PARAM_INFO") {
        parameterFooterInfo = paramObj;
      }
    });

    //domain COmposition

    let domainCompositionTag = "",
      domains = [],
      domainColor = [],
      domainScore = [],
      domainLength = 0;

    if (domainComposition && domainComposition.profileBlocks) {
      domainLength = domainComposition.profileBlocks.length;
      domainComposition.profileBlocks.map((item) => {
        domains.push(item.name);
        domainColor.push(`"${item.color}"`);
        domainScore.push(item.score);

        domainCompositionTag =
          domainCompositionTag +
          `<p> 
                <span style="width:8px; height: 8px; background: ${item.color}; display: inline-block; margin-right: 9px; border-radius: 2px;">
                </span>${item.name}</p>`;
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
        <!-- ----------------------------PAGE 2--------------------- -->

        <section>
            <div class="container container2">
                <table style="margin:30px auto; width:100%">
                    <thead>
                        <tr>
                            <td colspan="12">
                                <div class="headerdiv2">
                                    <img src=${
                                      parameterInfo.icon
                                    } style="width:58px;height:58px;border-radius: 50%;"/>
                                    <span class="headerclss2">${
                                      parameterInfo.title
                                    }</span>
                                </div>
                                <hr />
                            </td>
                        </tr>
                    
                
                        <tr>
                            <td colspan="6">
                                <div class="statsdtlgrid2">${
                                  parameterInfo.description
                                }</div>
                            </td>
                        </tr>
                        </thead>
                </table>
                ${
                  domainComposition
                    ? `<table style="margin:30px auto; width:100%">
                <tr>
                    <td style="background: #ffff; border: 1px solid rgba(118, 54, 221, 0.15);">
                        <div style="background: #ffff; margin-right: 17px;margin-left: 17px;">
                            <div class="col-sm-6" style="width: auto; height: 200px;">
                                <center>
                                    <span style="display: inline-block; margin-top: 27px; margin-bottom: 15px;"
                                        class="doughnutcss">${
                                          domainComposition
                                            ? domainComposition.title
                                            : ""
                                        }</span>
                                </center>
                                <div style="display: flex; justify-content: center; width: 100%;">
                                    <div style="width: 200px; height: 200px;">
                                        <canvas id="myChart" style=""></canvas>
                                    </div>
                                    <div id="doughnut-list" class="doughnut-list">${domainCompositionTag}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </table>`
                    : ""
                }
                
            ${
              parameterFooterInfo
                ? `<table style="margin:30px auto; width:100%">
            <tbody>
                <tr>
                    <td>
                        <div class="slective_action2">
                            <span class="selectiveText">${parameterFooterInfo.title}</span><br><br>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>`
                : ""
            }
            </div>
        </section>
        </body>
        <script>

        var ctx = document.getElementById("myChart").getContext("2d");
        var chart = new Chart(ctx, {
          // The type of chart we want to create
          type: "doughnut",
        
          // The data for our dataset
          data: {
            datasets: [
              {
                data: ${domainScore},
                label: "Total ",
                backgroundColor: ${domainColor},
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
            circumference:  ${domainScore.length + 1} * Math.PI,
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
            },
          },
        });
        </script>
        </html>`;

    return page;
  } catch (error) {
    console.log(error);
    throw new Error("Please try again later.");
  }
}
