import {
    childReportDetailsUtils
} from "../report-detail-utils";
import _ from "lodash";

export async function contentReport3(track) {
    try {
        let reportDetail = await childReportDetailsUtils(
            track.userId,
            track.childId,
            track.geniuseId,
            track.parameterType,
            "peerScore",
            track.res
        );

        let peerScore,
            comparisonScore,
            peerScoreBlue = "",
            childScoreRed = "";

        _.find(reportDetail, function (paramObj) {
            if (paramObj.cardType == "PEER_SCORE_DEF") {
                peerScore = paramObj;
            } else if (paramObj.cardType == "PEER_SCORE_COMPARISON") {
                comparisonScore = paramObj;
            }
        });

        if (
            comparisonScore &&
            comparisonScore.profileBlocks &&
            comparisonScore.profileBlocks[0].score
        ) {
            for (let i = 0; i < comparisonScore.profileBlocks[0].score; i++) {
                peerScoreBlue =
                    peerScoreBlue +
                    `<img src="${comparisonScore.profileBlocks[0].icon}" class="peer-icon zoom">`;
            }
        }

        if (
            comparisonScore &&
            comparisonScore.profileBlocks &&
            comparisonScore.profileBlocks[1].score
        ) {
            for (let i = 0; i < comparisonScore.profileBlocks[1].score; i++) {
                childScoreRed =
                    childScoreRed +
                    `<img src="${comparisonScore.profileBlocks[1].icon}" class="peer-icon zoom">`;
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
        <!-- ----------------------------PAGE 3--------------------- -->

    <section>
        <div class="container container2">

        <!-- <table style="margin:20px auto">
                <thead>
                    <tr>
                        <td colspan="12">
                            <div class="flex-container">
                                <div class="circle-text">
                                    <span>56</span>
                                    <span class="circle-text-perc">%</span>
                                </div>
                                <h4 class="header-title">
                                    What is Shruti’s Selective Attention scores?
                                </h4>
                            </div>
                            <hr />
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td colspan="6">
                            <div class="statsdtlgrid2"><span>
                                    Shruti’s indicators that help her to concentrate on a task at hand without being
                                    distracted are developing at an average pace. This means that Shruti is able to
                                    manage
                                </span></div>
                        </td>
                        <td colspan="6">
                            <div class="statsdtlgrid2"><span> fairly well and focus on the work she is doing, however,
                                    when the task becomes more and more difficult she is unable to complete the
                                    same.</span></div>
                        </td>
                    </tr> 
                </tbody>
            </table>
            <hr /> -->
            <table style="margin:20px auto; width:100%">
                <thead>
                    <tr>
                        <td>
                            <div class="flex-container">
                                <div class="circle-text"
                                    style="background-color: #27c6a3 ;padding-right: 12px; min-width: 70; min-height: 70px;">
                                    <img src="https://dev-mai-cms.s3.ap-south-1.amazonaws.com/fontfamily/Polygon.png"
                                        style="position: relative; left: 30px; bottom: 24px;">
                                    <span style="margin-top: 7px;">${peerScore.score}</span>
                                    <span class="circle-text-perc" style="margin-top: 13px;">%</span>
                                </div>
                                <h4 class="header-title">
                                    ${peerScore.title}
                                </h4>
                            </div>
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="peer-comp">
                                <table style="margin:20px auto">
                                    <thead>
                                        <tr>
                                            <td colspan="12">
                                                <center class="peer-title">${comparisonScore.title}</center>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colspan="6" class="peerdiv1">
                                                <div class="flex-container" style="margin:0;">
                                                    <div id="peer-icon" className="group-icons">${peerScoreBlue}
                                                    </div>
                                                </div>
                                            </td>
                                            <td colspan="6" class="peerdiv2">
                                                <div className="pace-detail">
                                                    <span class="pace_dtl">${comparisonScore.profileBlocks[0].scoreText}</span>
                                                    <p class="stats_peer">${comparisonScore.profileBlocks[0].description}</p>
                                                </div>
                                            </td>
                                        </tr>

                                        <tr style="margin-top: 28px; margin-bottom: 20px;">
                                            <td colspan="6" class="peerdiv1">
                                                <div class="flex-container" style="margin:0">
                                                    <div id="peer-iconR" className="group-icons">${childScoreRed}
                                                    </div>
                                                </div>
                                            </td>
                                            <td colspan="6" class="peerdiv2">
                                                <div class="pace-detail" style="margin:16% 0px;">
                                                    <span class="pace_dtlR">${comparisonScore.profileBlocks[1].scoreText}</span>
                                                    <p class="stats_peer">${comparisonScore.profileBlocks[1].description}</p>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </td>
                    </tr>
                </tbody>
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