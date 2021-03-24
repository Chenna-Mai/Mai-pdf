import {
  childReportDetailsUtils
} from "../report-detail-utils";
import _ from "lodash";

export async function contentReport9(track) {
  try {
    let reportDetail = await childReportDetailsUtils(
      track.userId,
      track.childId,
      track.geniuseId,
      track.parameterType,
      "learningmethods",
      track.res
    );

    let lsDetailInfo, lsStyle;

    _.find(reportDetail, function (paramObj) {
      if (paramObj.cardType == "PARAM_DEFINATION_DETAIL") {
        lsDetailInfo = paramObj;
      } else if (paramObj.cardType == "MI_LEARNING_METHODS") {
        lsStyle = paramObj;
      }
    });

    let lsStyleTags = "";

    if (lsStyle && lsStyle.bulletItems) {
      lsStyle.bulletItems.map((ls, i) => {
        lsStyleTags =
          lsStyleTags +
          `<div
                style="background:white;border-bottom: 1px solid rgba(0, 0, 0, 0.05);display: flex; align-items: center; padding: 18px 0px;">
                <img src=${ls.icon}
                    style="width: 60px; height: 60px; margin: 0px 15px;">
                    <p  style="margin: 0;" class="mi-learn-text">${ls.text}</p>
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
        <!-- ----------------------------PAGE 9--------------------- -->

        <section>
        <div class="container container2">
            <table style="margin:10px auto; width: 100%;">
                <tbody>
                    <tr>
                    <td>
                    <div class="flex-container">
                        <div class="circle-textpole">
                            <img
                                src=${lsDetailInfo.icon} style="width:60px;height:60px"/>
                        </div>
                        <h4 class="header-title">${lsDetailInfo.title}</h4>
                    </div>
                    <hr>
                </td>
                    </tr>
                    <tr>
                        <td colspan="6" style="padding: 0;" class="statsdtlgrid2 bordernone  textCstm">
                            <span>${lsDetailInfo.description}
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table style="width: 100%;">
                <tr>
                    <td>
                        <div id="learning-methods" style="background: linear-gradient(0deg, #FFFFFF, #FFFFFF);
                        border: 1px solid rgba(118, 54, 221, 0.15); margin: 10px 0 20px; width: 100%;">
                        ${lsStyleTags}
                        </div>
                    </td>
                </tr>
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