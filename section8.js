import {
    childReportDetailsUtils
} from "../report-detail-utils";
import _ from "lodash";

export async function contentReport8(track) {
    try {

        let reportDetail = await childReportDetailsUtils(track.userId, track.childId, track.geniuseId, track.parameterType, "learningstyle", track.res);

        console.log(reportDetail)

        let lsDetailInfo, lsStyle;

        _.find(reportDetail, function (paramObj) {
            if (paramObj.cardType == "PARAM_DEFINATION_DETAIL") {
                lsDetailInfo = paramObj;
            } else if (paramObj.cardType == "LEARNING_STYLE_LIST") {
                lsStyle = paramObj;
            }
        })

        let lsStyleTags = "";

        if (lsStyle && lsStyle.profileBlocks) {
            lsStyle.profileBlocks.map((ls, i) => {
                lsStyleTags = lsStyleTags + `<div style="width:45.2%;background: linear-gradient(0deg, #FFFFFF, #FFFFFF);
                border: 1px solid rgba(118, 54, 221, 0.15); padding:16px; margin:17px 15px 17px 17px">
                    <h4 style="font-family: Gotham Rounded;
                    font-style: normal;
                    font-weight: bold;
                    font-size: 14px;
                    line-height: 22px;
                    
                    color: #6E768A;">${ls.name}</h4>
              
                    <div class="w3-round-xlarge" style="
                        margin: 1.5rem 0px 2.5em;
                        display: flex;
                        height: 7px;
                        position: relative;
                        background: rgba(77, 131, 255, 0.2);
                        border-radius: 30px;
                        ">
              
                        <div class="w3-round-xlarge"
                            style="width: ${ls.score}%; background: rgba(77, 131, 255, 0.62); height: 7px; border-radius: 30px;">
                            <div class=" w3-round-xlarge" style="background: rgb(77, 131, 255); left: ${ls.score>3?ls.score-2:0}%; position: absolute; height: 7px;
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
                        margin-left:${ls.score == 100 ? "-10px" : "-3px"}">${ls.score}%</h4>
                            </div>
                        </div>
                    </div>
              
                    <p style="font-family: Gotham Rounded;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 14px;
                    line-height: 25px;
              
                    color: #6E768A;">${ls.description}</p>
                </div>`
            })
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
        <!-- ----------------------------PAGE 8--------------------- -->

        <section>
        <div class="container container2" style="padding: 0;">
            <table class="full-width" style="margin:10px auto;width: 100%;">
                <tbody>
                    <tr>
                        <td>
                            <div class="flex-container">
                                <div class="circle-textpole">
                                    <img
                                        src="https://dev-mai-cms.s3.ap-south-1.amazonaws.com/fontfamily/Icon_color.png">
                                </div>
                                <h4 class="header-title">${lsDetailInfo.title}</h4>
                            </div>
                            <hr>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="6" style="padding-left: 20px;" class="statsdtlgrid2 bordernone  textCstm">${lsDetailInfo.description}</td>

                    </tr>
                </tbody>
            </table>
            <table>
                <tr>
                    <td>
                        <div id="learning-tables" style="display: flex; flex-wrap: wrap;">${lsStyleTags}
                        </div>
                    </td>
                </tr>
            </table>



        </div>
    </section>
        </body>
        </html>`

        return page;

    } catch (error) {
        console.log(error);
        throw new Error("Please try again later.");
    }
}