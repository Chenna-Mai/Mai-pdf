import { childReportDetailsUtils } from "../report-detail-utils";
import _ from "lodash";

export async function contentReport5(track, paramArgs) {
  try {
    let reportDetail = await childReportDetailsUtils(
      track.userId,
      track.childId,
      track.geniuseId,
      track.parameterType,
      paramArgs,
      track.res
    );

    let ksaDetailInfo, ksaInsightCards;

    _.find(reportDetail, function (paramObj) {
      if (paramObj.cardType == "TITLE_DESC") {
        ksaDetailInfo = paramObj;
      } else if (paramObj.cardType == "KSA_INSIGHT_CARDS") {
        ksaInsightCards = paramObj;
      }
    });

    let ksaInsightTags = "",
      ksaScriptTags = "";

    if (ksaInsightCards && ksaInsightCards.profileBlocks) {
      ksaInsightCards.profileBlocks.map((ksa, i) => {
        let pathVal = SemiCircularProgressBar(ksa.impactScore);

        ksaInsightTags =
          ksaInsightTags +
          `<tr class="paddondall" style="margin:20px 0;">
                            
                <td colspan="6" class="paddondall" style="width:60%;">
                    <div class="flex-container setimg5">
                        <div class="circle_text55">
                            <span> <img src=${ksa.icon} / style="height: 36px;
                        width: 36px;"></span>
                        </div>
                        <span class="header_title5">
                            ${ksa.name}
                        </span>
                    </div>
            
                    <div style="padding: 10px 20px;">
                        <span class="verbalText">${ksa.description}
            
                            <div style="margin-bottom: 10px; margin-left: 5px; margin-top: 10px;">
                                <div style="position: relative; display: flex; justify-content: space-between;">
                                    <h5 style="font-weight: bold; font-size: 12px; line-height: 14px; color: rgb(67, 72, 75);">
                                        ${track.child.child.firstName}’s score
                                    </h5>
                                </div>
                                <div class="w3-round-xlarge" style="display: flex; border-radius: 30px; height: 9.96px; position: relative; background:rgba(33, 150, 243, 0.3);">
                                    <div class="w3-round-xlarge" style="border-radius: 30px; width: 70%; background:rgba(33, 150, 243, 0.4); height: 10px;">
                                    </div>
                                </div>
                                <div style="position: relative; margin-bottom: 20px;">
                                    <h5 style="position: absolute; left: 65%; font-weight: bold; font-size: 12px; line-height: 14px; color: rgb(67, 72, 75);">
                                        ${ksa.achieved}%</h5>
                                    </div>
                                </div>
                            </span>
                    </div>
                </td>
            
                <td colspan="6" class="paddondall" style="width:40%;">
                    <table>
                        <tbody>
                            <tr>
                                <td class="paddondall">
                                    <div id="impactscorcard" class="impactscorcard">
                                    
                                    <svg width="150" height="150" viewBox="0 0 120 120" style="stroke-linecap: round;"><path d="${pathVal.grayPathData}" id="arc2" fill="none" stroke="#E2E2E2" stroke-linecap="round" stroke-width="7"></path><path d="${pathVal.pathData}" id="arc1" fill="none" stroke="#7636DD" stroke-linecap="round" stroke-width="7"></path><text id="name" x="62%" y="15%" fill="#43484B" font-size="7px" font-weight="600" dominant-baseline="middle" text-anchor="middle">Impact Score</text><text id="name" x="62%" y="55%" fill="#43484B" font-size="14px" font-weight="bold" dominant-baseline="middle" text-anchor="middle">${ksa.impactScore}%</text></svg>
                                    
                                    </div>

                                    

                                </td>
                            </tr>
                            <!-- <tr>
                                <td class="paddondall">
                                    <div style="margin: 0px auto 50px;">
                                        <span class="verbalText">
                                            Children with a good Verbal Memory are able to quickly grasp
                                            information and learn things faster. Since they now do not have to
                                            focus on the small procedures involved, they can devote their
                                        </span>
                                    </div>
                                </td>
                            </tr> -->
                        </tbody>
                    </table>
                </td>
            </tr>`;

        ksaScriptTags = ksaScriptTags + ``;
      });
    }

    const page = `
        <!-- ----------------------------PAGE 5--------------------- -->

        <section>
        <div class="container container2">

            <table>
                <thead>
                    <tr>
                        <td colspan="12">
                            <div class="flex-container">
                                <div class="circle-textpole">
                                    <img
                                        src="https://dev-mai-cms.s3.ap-south-1.amazonaws.com/fontfamily/Icon_color.png">
                                </div>
                                <span class="header-title">
                                    ${ksaDetailInfo.title}
                                </span>
                            </div>
                            <hr />
                        </td>
                    </tr>
                    <tr>
                        <td  colspan="6" class="width50">
                            <div class="statsdtlgrid2">${ksaDetailInfo.description}</div>
                        </td>
                    </tr>
                </thead>
            </table>

            <table style="margin:20px auto">
                <tbody id="ksa-achieved" class="set_backgroung5">${ksaInsightTags}
                </tbody>
            </table>
        </div>
    </section>`;

    return page;
  } catch (error) {
    console.log(error);
    throw new Error("Please try again later.");
  }
}

function SemiCircularProgressBar(impactScore) {
  let name = "Amit",
    score = impactScore,
    angle = (score * 180) / 100 - 90,
    pathData = describeArc(75, 75, 38, 0 - 90, angle),
    grayPath = describeArc(75, 75, 38, 0 - 90, 90);

  return {
    pathData: pathData.join(" "),
    grayPathData: grayPath.join(" "),
    circleX: pathData[1],
    circleY: pathData[2],
  };
}

function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  var angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;

  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
}

function describeArc(x, y, radius, startAngle, endAngle) {
  var start = polarToCartesian(x, y, radius, endAngle);
  var end = polarToCartesian(x, y, radius, startAngle);

  var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M",
    start.x,
    start.y,
    "A",
    radius,
    radius,
    0,
    largeArcFlag,
    0,
    end.x,
    end.y,
  ];

  return d;
}
