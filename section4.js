import {
  childReportDetailsUtils
} from "../report-detail-utils";
import _ from "lodash";

export async function contentReport4(track) {
  try {
    let reportDetail = await childReportDetailsUtils(
      track.userId,
      track.childId,
      track.geniuseId,
      track.parameterType,
      "calculationMethod",
      track.res
    );

    let calculateInfo, calculateScore;

    _.find(reportDetail, function (paramObj) {
      if (paramObj.cardType == "TITLE_DESC") {
        calculateInfo = paramObj;
      } else if (paramObj.cardType == "CALCULATION_METHOD_DOMAIN_CATEGORY") {
        calculateScore = paramObj;
      }
    });

    let calculationTags = "";

    if (calculateScore) {
      calculateScore.profileBlocks[0].data.map((domain) => {
        let ksasTags = "",
          milestoneTags = "";

        if (domain.ksa && domain.ksa.data) {
          domain.ksa.data.map((k) => {
            ksasTags =
              ksasTags +
              `<div class="row margin_zero calculatecss"><span class="activity_listing"></span><span class="activity_li_text">${k.name}</span><span class="activity_li_text activity_li_textLeft">${k.scoreText}</span></div>`;
          });
        }

        if (domain.milestone && domain.milestone.data) {
          domain.milestone.data.map((ms) => {
            milestoneTags =
              milestoneTags +
              `<div class="row margin_zero calculatecss"><span class="activity_listing_blue"></span><span class="activity_li_text">${ms.name}</span><span class="activity_li_text activity_li_textLeft">${ms.scoreText}</span></div>`;
          });
        }

        calculationTags =
          calculationTags +
          `<div class=" ulboreder4 " >
                <div class="row margin_zero calculatecss">
                    <center><span class="liheaderspan">${
                      domain.name
                    }</span></center>
                </div>
                <div class="row margin_zero calculatecss" style="background: #F22182;">
                    <center><span class="spanage">${
                      domain.ksa ? domain.ksa.title : ""
                    }</span>
                    </center>
                </div>
                ${ksasTags}
        
                <div class="row margin_zero calculatecss" style="background: #389ACE;">
                    <center><span class="spanage">${
                      domain.milestone ? domain.milestone.title : ""
                    }</span>
                    </center>
                </div>
        
                ${milestoneTags}
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
        <!-- ----------------------------PAGE 4--------------------- -->

        <section>
            <div class="container container2">
                <table style="margin:10px auto;width:100%;">
                    <tbody>
                        <tr>
                            <td colspan="12">
                                <div class="flex-container">
                                    <div class="circle-textpole">
                                        <img
                                            src="https://dev-mai-cms.s3.ap-south-1.amazonaws.com/fontfamily/Icon_color.png">
                                    </div>
                                    <span class="header-title">
                                        ${calculateInfo.title}
                                    </span>
                                </div>
                                <hr />
                            </td>
                        </tr>
                        <tr>
                            <td  colspan="6" class="width50">
                                <div class="statsdtlgrid2">${calculateInfo.description}</div>
                            </td>
                        </tr>
                        </thead>
                    </tbody>
                </table>
                <table>
                    <tr>
                        <td>
                            <div id="calculate-tables" style="display: flex; flex-wrap: wrap;">${calculationTags}
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </section>
        </body>
        <script>
                
        </script>
        </html>`;

    return page;
  } catch (error) {
    console.log(error);
    throw new Error("Please try again later.");
  }
}