import {
    childReportDetailsUtils
} from "../report-detail-utils";
import _ from "lodash";

export async function contentReport6(track, paramArgs) {
    try {
        let reportDetail = await childReportDetailsUtils(
            track.userId,
            track.childId,
            track.geniuseId,
            track.parameterType,
            paramArgs,
            track.res
        );

        let MSDetailInfo, MSInsightCards;

        _.find(reportDetail, function (paramObj) {
            if (paramObj.cardType == "TITLE_DESC") {
                MSDetailInfo = paramObj;
            } else if (paramObj.cardType == "MILESTONE_DETAIL_CARD") {
                MSInsightCards = paramObj;
            }
        });

        let MSInsightTags = "";

        if (MSInsightCards && MSInsightCards.profileBlocks) {
            MSInsightCards.profileBlocks.map((ms, i) => {
                MSInsightTags =
                    MSInsightTags +
                    `<div style="width:50%; border-bottom: 1px solid rgb(0,0,0,0.03);" class="row margin_zero set_backgroung5">
                <div class="flex-container setimg5">
                    <div class="circle_text55">
                        <span> <img src=${ms.icon} style="width:38px;height:38px""></span>
                    </div>
                    <span class="achieved_title1">${ms.name}</span>
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
        <!-- ----------------------------PAGE 6--------------------- -->

        <section>
        <div class="container container2">
            <table style="margin:10px 0px;width:100%;">
                <thead>
                    <tr>
                        <td colspan="4">
                            <div class="flex-container">
                                <div class="circle-textpole">
                                    <img
                                        src="https://dev-mai-cms.s3.ap-south-1.amazonaws.com/fontfamily/Icon_color.png">
                                </div>
                                <span class="header-title">${MSDetailInfo.title}</span>
                            </div>
                            <hr />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="4"> <span class="divtext6">${MSDetailInfo.description}</span></td>
                    </tr>
                </tbody>
            </table>

            <table style="margin:20px 0px;width:100%;">
                <thead>
                    <tr style="border-bottom: 0.1px solid rgb(0,0,0,0.03);">
                        <td colspan="6">
                            <div class="row margin_zero set_backgroung5">
                                <center class="milestone-ach">
                                <img src=${MSInsightCards.icon} style="width:48px;height:48px"/>
                                    <span class="achievCss">${MSInsightCards.title}</span>
                                </center>
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody >
                    <tr>
                        <td>
                            <div id="milestone-list" class="set_backgroung5"
                            style="display: flex; flex-direction: row; flex-wrap: wrap;">
                            ${MSInsightTags}
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