document.getElementById("customTitleInput").value = `${"115th Baguio Day"} ${`National Invitational Arnis Tournament`}`;
let livestickTitleApp = document.getElementById("livestickTitleApp");
livestickTitleApp.textContent = "livestick".toUpperCase();

let customTitleInput = document.getElementById("customTitleInput");
let divisionInput = document.getElementById("division_input");
let categoryInput = document.getElementById("category_input");
let matchIndicator = document.getElementById("match_indicator");
let tablePlacement = document.getElementById("table_placement");
let viewMatchBtn = document.getElementById("view_match_table_button");
let printMatchBtn = document.getElementById("print_match_table_button");
let createMatchBtn = document.getElementById("create_match_table_button");
let removeMatchBtn = document.getElementById("remove_match_table_button");
let matchRound = 0;
// let rowNumber = 0;
let matchIndicatorValue = 0;
let redCompetitorName = [];
let blueCompetitorName = [];
let redJudgeScores = [];
let blueJudgeScores = [];
let teamWinnerResult = [];
let decisionResult = [];
let calculateButtonUnique = [];
let chooseWinnerBtn = [];
let redScoreTotal = 0;
let blueScoreTotal = 0;
let drawTotal = 0;

// divisionInput.value = "juniors division";
// categoryInput.value = "extra light weight";

function createTableMatch() {
    if (!redJudgeScores[matchRound]) {
        redJudgeScores[matchRound] = [];
    }

    if (!blueJudgeScores[matchRound]) {
        blueJudgeScores[matchRound] = [];
    }

    matchIndicatorValue++;
    matchRound++;
    // rowNumber++;
    matchIndicator.textContent = matchIndicatorValue;   

    var createTable = document.createElement("table");
    createTable.id = "match_table_"+ matchRound;
    createTable.className = "match_table";

    var createBody = document.createElement("tbody");
    var createHeader = document.createElement("thead");
    createHeader.className = "table_header";

    //create table header row and cell
    var headerRow1 = document.createElement("tr");
    var team = document.createElement("th");
    team.textContent = "team";   
    team.rowSpan = 2;

    var name = document.createElement("th");
    name.textContent = "competitor";    
    name.rowSpan = 2;

    var score = document.createElement("th");
    score.textContent = "scores";
    score.colSpan = 3;

    // var result = document.createElement("th");
    // result.textContent = "result";
    // result.rowSpan = 2;

    headerRow1.appendChild(team);
    headerRow1.appendChild(name);
    headerRow1.appendChild(score);
    // headerRow1.appendChild(result);

    var headerRow2 = document.createElement("tr");
    var scoreJ1 = document.createElement("th");
    scoreJ1.textContent = "j1";

    var scoreJ2 = document.createElement("th");
    scoreJ2.textContent = "j2";

    var scoreJ3 = document.createElement("th");
    scoreJ3.textContent = "j3";

    headerRow2.appendChild(scoreJ1);
    headerRow2.appendChild(scoreJ2);
    headerRow2.appendChild(scoreJ3);
    
    var redRow = document.createElement("tr");
    var redTeam = redRow.insertCell(-1);
    var divForBtnRed = document.createElement("div");
    var chooseWinnerBtnRed = document.createElement("button");
    chooseWinnerBtnRed.id = "chooseRed_"+ matchRound;
    chooseWinnerBtnRed.textContent = "red".toUpperCase();
    chooseWinnerBtnRed.className = "chooseWinnerBtnRed";
    divForBtnRed.className = "divBtn";
    divForBtnRed.appendChild(chooseWinnerBtnRed);
    redTeam.appendChild(divForBtnRed);
    // redTeam.textContent = "red".toUpperCase();
    
    // var extraSpan = document.createElement("span");
    var redCompetitorInput = document.createElement("input");
    redCompetitorInput.className = "competitor";
    redCompetitorInput.id = "competitor_name_"+ matchRound + "_" + 1;
    redCompetitorInput.type = "text";
    redCompetitorInput.placeholder = "name";
    redTeam = redRow.insertCell(-1);
    redTeam.appendChild(redCompetitorInput);
    // extraSpan.appendChild(redCompetitorInput);

    var redScoreJ1 = document.createElement("input");
    redScoreJ1.className = "judge_scores";
    redScoreJ1.id = "redScore_J1_"+ matchRound;
    redScoreJ1.type = "number";
    redScoreJ1.min = 1;
    redScoreJ1.max = 30;
    redTeam = redRow.insertCell(-1);
    redTeam.appendChild(redScoreJ1);

    var redScoreJ2 = document.createElement("input");
    redScoreJ2.className = "judge_scores";
    redScoreJ2.id = "redScore_J2_"+ matchRound;
    redScoreJ2.type = "number";
    redScoreJ2.min = 1;
    redScoreJ2.max = 30;
    redTeam = redRow.insertCell(-1);
    redTeam.appendChild(redScoreJ2);

    var redScoreJ3 = document.createElement("input");
    redScoreJ3.className = "judge_scores";
    redScoreJ3.id = "redScore_J3_"+ matchRound;
    redScoreJ3.type = "number";
    redScoreJ3.min = 1;
    redScoreJ3.max = 30;
    redTeam = redRow.insertCell(-1);
    redTeam.appendChild(redScoreJ3);

    var blueRow = document.createElement("tr");
    var blueTeam = blueRow.insertCell(-1);
    var divForBtnBlue = document.createElement("div");
    var chooseWinnerBtnBlue = document.createElement("button");
    chooseWinnerBtnBlue.id = "chooseBlue_"+ matchRound;
    chooseWinnerBtnBlue.textContent = "blue".toUpperCase();
    chooseWinnerBtnBlue.className = "chooseWinnerBtnBlue";
    divForBtnBlue.className = "divBtn";
    divForBtnBlue.appendChild(chooseWinnerBtnBlue);
    blueTeam.appendChild(divForBtnBlue);
    // blueTeam.textContent = "blue".toUpperCase();

    var blueCompetitorInput = document.createElement("input");
    blueCompetitorInput.className = "competitor";
    blueCompetitorInput.id = "competitor_name_"+ matchRound + "_" + 2;
    blueCompetitorInput.type = "text";
    blueCompetitorInput.placeholder = "name";
    blueTeam = blueRow.insertCell(-1);
    blueTeam.appendChild(blueCompetitorInput);

    var blueScoreJ1 = document.createElement("input");
    blueScoreJ1.className = "judge_scores";
    blueScoreJ1.id = "blueScore_J1_"+ matchRound;
    blueScoreJ1.type = "number";
    blueScoreJ1.min = 1;
    blueScoreJ1.max = 30;
    blueTeam = blueRow.insertCell(-1);
    blueTeam.appendChild(blueScoreJ1);

    var blueScoreJ2 = document.createElement("input");
    blueScoreJ2.className = "judge_scores";
    blueScoreJ2.id = "blueScore_J2_"+ matchRound;
    blueScoreJ2.type = "number";
    blueScoreJ2.min = 1;
    blueScoreJ2.max = 30;    
    blueTeam = blueRow.insertCell(-1);
    blueTeam.appendChild(blueScoreJ2);

    var blueScoreJ3 = document.createElement("input");
    blueScoreJ3.className = "judge_scores";
    blueScoreJ3.id = "blueScore_J3_"+ matchRound;
    blueScoreJ3.type = "number";
    blueScoreJ3.min = 1;
    blueScoreJ3.max = 30;   
    blueTeam = blueRow.insertCell(-1);
    blueTeam.appendChild(blueScoreJ3);

    var headerRow3 = document.createElement("tr");
    var resultHeader = document.createElement("th");
    resultHeader.colSpan = 2;
    resultHeader.textContent = "result".toUpperCase();

    var calculateButton = document.createElement("button");
    calculateButton.id = "calculate_"+ matchRound;
    calculateButton.className = "calculateBtn";
    calculateButton.textContent = "calculate";  

    var calculateCol = document.createElement("th");
    calculateCol.colSpan = 3;
    calculateCol.rowSpan = 2;
    calculateCol.appendChild(calculateButton);
   
    headerRow3.appendChild(resultHeader);
    headerRow3.appendChild(calculateCol);
    // headerRow3.appendChild();

    var resultRow = document.createElement("tr");
    var winnerResult = resultRow.insertCell(-1);
    winnerResult.rowSpan = 2;
    winnerResult.textContent = "winner".toUpperCase();
    
    var teamWinner = document.createElement("input");
    teamWinner.id = "team_winner_"+ matchRound;
    teamWinner.type = "text";
    teamWinner.placeholder = "team";
    teamWinner.readOnly = true;
    winnerResult = resultRow.insertCell(-1);
    winnerResult.appendChild(teamWinner);

    var resultRow2 = document.createElement("tr");
    var decision = document.createElement("input");
    decision.id = "decision_winner_"+ matchRound;
    decision.type = "text";
    decision.placeholder = "decision";
    decision.readOnly = true;
    winnerResult = resultRow2.insertCell(-1);
    winnerResult.appendChild(decision);

    winnerResult = resultRow2.insertCell(-1);
    winnerResult.colSpan = 3;
    winnerResult.textContent = "match no.: " + matchRound;

    createHeader.appendChild(headerRow1);
    createHeader.appendChild(headerRow2);

    createBody.appendChild(redRow);
    createBody.appendChild(blueRow);    
    createBody.appendChild(headerRow3);
    createBody.appendChild(resultRow);
    createBody.appendChild(resultRow2);


    createTable.appendChild(createHeader);
    createTable.appendChild(createBody);

    tablePlacement.insertBefore(createTable, tablePlacement.firstChild);

    //tester name
    // document.getElementById("competitor_name_"+ matchRound + "_" + 1).value = "red"+ matchRound;
    // document.getElementById("competitor_name_"+ matchRound + "_" + 2).value = "blue"+ matchRound;

    //storeElementArray
    redCompetitorName[matchRound-1] = [redCompetitorInput];
    blueCompetitorName[matchRound-1] = [blueCompetitorInput];
    redJudgeScores[matchRound-1] = [redScoreJ1, redScoreJ2, redScoreJ3];
    blueJudgeScores[matchRound-1] = [blueScoreJ1, blueScoreJ2, blueScoreJ3];
    teamWinnerResult[matchRound-1] = [teamWinner];
    decisionResult[matchRound-1] = [decision];
    calculateButtonUnique[matchRound-1] = [calculateButton];
    chooseWinnerBtn[matchRound-1] = [chooseWinnerBtnRed, chooseWinnerBtnBlue];   

    //tester judge
    // let max = 30;
    // for (let i = 0; i < redJudgeScores[matchRound-1].length; i++) {
    //     redJudgeScores[matchRound-1][i].value = parseInt(Math.random() * max);
    //     blueJudgeScores[matchRound-1][i].value = parseInt(Math.random() * max);
    // }

    //initializeTargetElements
    let targetRedNameElement = document.getElementById("competitor_name_"+ (matchRound) +"_1");
    let targetBlueNameElement = document.getElementById("competitor_name_"+ (matchRound) +"_2");
    let targetCalculateBtnElement = document.getElementById("calculate_"+ matchRound);
    let targetRsJ1Element = document.getElementById("redScore_J1_"+ matchRound);
    let targetRsJ2Element = document.getElementById("redScore_J2_"+ matchRound);
    let targetRsJ3Element = document.getElementById("redScore_J3_"+ matchRound);
    let targetBsJ1Element = document.getElementById("blueScore_J1_"+ matchRound);
    let targetBsJ2Element = document.getElementById("blueScore_J2_"+ matchRound);
    let targetBsJ3Element = document.getElementById("blueScore_J3_"+ matchRound);
    let targetTeamWinnerElement = document.getElementById("team_winner_"+ matchRound);
    let targetDecisionWinnerElement = document.getElementById("decision_winner_"+ matchRound);
    let targetChooseRedElement = document.getElementById("chooseRed_"+ matchRound);
    let targetChooseBlueElement = document.getElementById("chooseBlue_"+ matchRound);

    //Checking strict input
    let normalNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    for (let j = 0; j < redJudgeScores[matchRound-1].length; j++) {
        let targetElementJudgeLoopRed = redJudgeScores[matchRound-1][j];
        let targetElementJudgeLoopBlue = blueJudgeScores[matchRound-1][j];

        targetElementJudgeLoopRed.addEventListener("focusout", () => {
            if (targetElementJudgeLoopRed.value == "") {
                targetElementJudgeLoopRed.value = 0;
            }
    
            // if (targetElementJudgeLoopRed.value == 0) {
            //     targetElementJudgeLoopRed.value = parseFloat(targetElementJudgeLoopRed.value).toFixed(1);
            // }
    
            // if (targetElementJudgeLoopRed.value > 0 && targetElementJudgeLoopRed.value != 30) {
            //     targetElementJudgeLoopRed.value = parseFloat(targetElementJudgeLoopRed.value).toFixed(1);
            // }
        });

        targetElementJudgeLoopRed.addEventListener("input", () => {
            if (targetElementJudgeLoopRed.value == "") {
                targetElementJudgeLoopRed.value = "";
            }
            if (targetElementJudgeLoopRed.value.length == 3
                || targetElementJudgeLoopRed.value < 0) {
    
                    targetElementJudgeLoopRed.value = "";
            }
            if (targetElementJudgeLoopRed.value == 30
                || targetElementJudgeLoopRed.value > 30) {
    
                    targetElementJudgeLoopRed.value = 30;
            }
            for (checkNormalNumbers = 0; checkNormalNumbers < normalNumbers.length; checkNormalNumbers++) {
                if (targetElementJudgeLoopRed.value == "0"+normalNumbers[checkNormalNumbers]) {
                    targetElementJudgeLoopRed.value = "";
                }
            }
        });

        targetElementJudgeLoopBlue.addEventListener("focusout", () => {
            if (targetElementJudgeLoopBlue.value == "") {
                targetElementJudgeLoopBlue.value = 0;
            }
    
            // if (targetElementJudgeLoopBlue.value == 0) {
            //     targetElementJudgeLoopBlue.value = parseFloat(targetElementJudgeLoopBlue.value).toFixed(1);
            // }
    
            // if (targetElementJudgeLoopBlue.value > 0 && targetElementJudgeLoopBlue.value != 30) {
            //     targetElementJudgeLoopBlue.value = parseFloat(targetElementJudgeLoopBlue.value).toFixed(1);
            // }
        });

        targetElementJudgeLoopBlue.addEventListener("input", () => {
            if (targetElementJudgeLoopBlue.value == "") {
                targetElementJudgeLoopBlue.value = "";
            }
            if (targetElementJudgeLoopBlue.value.length == 4
                || targetElementJudgeLoopBlue.value < 0) {
    
                    targetElementJudgeLoopBlue.value = "";
            }
            if (targetElementJudgeLoopBlue.value == 30
                || targetElementJudgeLoopBlue.value > 30) {
    
                    targetElementJudgeLoopBlue.value = 30;
            }
            for (checkNormalNumbers = 0; checkNormalNumbers < normalNumbers.length; checkNormalNumbers++) {
                if (targetElementJudgeLoopBlue.value == "0"+normalNumbers[checkNormalNumbers]) {
                    targetElementJudgeLoopBlue.value = "";
                }
            }
        });
    }

    targetRedNameElement.addEventListener("keypress", () => {
        updateChWidths();
        targetRedNameElement.addEventListener("change", () => {
            updateChWidths();
        });
        targetBlueNameElement.addEventListener("change", () => {
            updateChWidths();
        });
    });

    targetBlueNameElement.addEventListener("keypress", () => {
        updateChWidths();
        targetBlueNameElement.addEventListener("change", () => {
            updateChWidths();
        });
        targetRedNameElement.addEventListener("change", () => {
            updateChWidths();
        });
    });    

    targetCalculateBtnElement.addEventListener("click", () => {
        if (window.confirm("Are all scores correct?")) {
            console.clear();
            redScoreTotal = 0;
            blueScoreTotal = 0;
            drawTotal = 0;
            maxTotalScore = 3;
            minTotalScore = 0;

            console.log(targetRsJ1Element);
            console.log(targetBsJ1Element);
            console.log(targetRsJ2Element);
            console.log(targetBsJ2Element);
            console.log(targetRsJ3Element);
            console.log(targetBsJ3Element);

            if (targetRsJ1Element.value > targetBsJ1Element.value) {
                redScoreTotal++;
                console.log("red", targetRsJ1Element.value, "redT", redScoreTotal);
            } else if (targetRsJ1Element.value < targetBsJ1Element.value) {
                blueScoreTotal++;
                console.log("blue", targetBsJ1Element.value, "blueT", blueScoreTotal);
            } else {                
                drawTotal++;
                console.log("draw", drawTotal);
            }
            
            if (targetRsJ2Element.value > targetBsJ2Element.value) {
                redScoreTotal++;                
                console.log("red", targetRsJ2Element.value, "redT", redScoreTotal);    
            } else if (targetRsJ2Element.value < targetBsJ2Element.value) {
                blueScoreTotal++;
                console.log("blue", targetBsJ2Element.value, "blueT", blueScoreTotal);
            } else {                
                drawTotal++;
                console.log("draw", drawTotal);
            }
            
            if (targetRsJ3Element.value > targetBsJ3Element.value) {
                redScoreTotal++;                
                console.log("red", targetRsJ3Element.value, "redT", redScoreTotal);    
            } else if (targetRsJ3Element.value < targetBsJ3Element.value) {
                blueScoreTotal++;
                console.log("blue", targetBsJ3Element.value, "blueT", blueScoreTotal);
            } else {                
                drawTotal++;
                console.log("draw", drawTotal);
            }

            if (redScoreTotal > blueScoreTotal) {
                console.log("redT Wins");
                targetTeamWinnerElement.value = "RED";
                popupBanner.classList.add("show");
                overlay.classList.add("show");
                
                if (redScoreTotal == maxTotalScore) {
                    targetDecisionWinnerElement.value = "Unanimous Decision";
                }

                if (redScoreTotal == maxTotalScore-1 && drawTotal == minTotalScore+1) {
                    targetDecisionWinnerElement.value = "Majority Decision";
                }

                if (redScoreTotal == maxTotalScore-1 && drawTotal == minTotalScore) {
                    targetDecisionWinnerElement.value = "Split Decision";
                }

                if (redScoreTotal == maxTotalScore-2 && drawTotal == maxTotalScore-1) {
                    targetDecisionWinnerElement.value = "Majority Draw";
                }
            }

            else if (redScoreTotal < blueScoreTotal) {                        
                console.log("blueT Wins");
                targetTeamWinnerElement.value = "BLUE";                        
                popupBanner2.classList.add("show");
                overlay.classList.add("show");

                if (blueScoreTotal == maxTotalScore) {
                    targetDecisionWinnerElement.value = "Unanimous Decision";
                }

                if (blueScoreTotal == maxTotalScore-1 && drawTotal == minTotalScore+1) {
                    targetDecisionWinnerElement.value = "Majority Decision";
                }

                if (blueScoreTotal == maxTotalScore-1 && drawTotal == minTotalScore) {
                    targetDecisionWinnerElement.value = "Split Decision";
                }

                if (blueScoreTotal == maxTotalScore-2 && drawTotal == maxTotalScore-1) {
                    targetDecisionWinnerElement.value = "Majority Draw";
                }
            }
    
            else if (drawTotal == maxTotalScore ||
                (redScoreTotal == 1 && blueScoreTotal == 1 && drawTotal == 1)
            ) {
                targetTeamWinnerElement.value = "N/A";
                targetDecisionWinnerElement.value = "Draw";
            }                
        }
    });

    let currentMatchRound = matchRound;

    targetChooseRedElement.addEventListener("click", () => {
        if (window.confirm("Match Round: " + currentMatchRound 
            + "\ndeclare RED as a Winner?")) {
            console.log("chooseRed"+ currentMatchRound);
            targetTeamWinnerElement.value = "red".toUpperCase();
            targetDecisionWinnerElement.value = "Winner";
            popupBanner.classList.add("show");
            overlay.classList.add("show");
        }
    });

    targetChooseBlueElement.addEventListener("click", () => {
        if (window.confirm("Match Round: " + currentMatchRound 
            + "\ndeclare Blue as a Winner?")) {
            console.log("chooseBlue"+ currentMatchRound);
            targetTeamWinnerElement.value = "blue".toUpperCase();
            targetDecisionWinnerElement.value = "Winner";
            popupBanner2.classList.add("show");
            overlay.classList.add("show");
        }
    });

}
createTableMatch();

function updateChWidths() {
    let maxChLength = 0;
    let selectRedNameElement = redCompetitorName;
    let selectBlueNameElement = blueCompetitorName;
    let selectRedNameElementPerI;
    let selectBlueNameElementPerI;
    // redCompetitorName[matchRound-1]
    for (let i = 0; i < matchRound; i++) {
        selectRedNameElementPerI = redCompetitorName[i][0];
        selectBlueNameElementPerI = blueCompetitorName[i][0];

        selectRedNameElement.forEach(() => {
            maxChLength = Math.max(maxChLength, selectRedNameElementPerI.value.length);
        });

        selectRedNameElement.forEach(() => {
            selectRedNameElementPerI.style.width = `${maxChLength-1}ch`;
        });        

        selectBlueNameElement.forEach(() => {
            maxChLength = Math.max(maxChLength, selectBlueNameElementPerI.value.length);
        });

        selectBlueNameElement.forEach(() => {
            selectBlueNameElementPerI.style.width = `${maxChLength-1}ch`;
        });        
    }
};

let viewHideMatches = 1;
viewMatchBtn.addEventListener("click", () => {
    if (matchRound > 1) {
        let targetTableElement = "";
        if (viewHideMatches == 0) { //hide
            console.log(viewHideMatches);
            for (let i = 1; i < matchRound; i++) {
                targetTableElement = document.getElementById("match_table_"+ i);
                console.log(targetTableElement);
                targetTableElement.classList.replace("match_table", "match_table_hide");
            }
            viewHideMatches = 1;
            viewMatchBtn.textContent = "view matches";
        }

        else if (viewHideMatches == 1) { //view
            console.log(viewHideMatches);            
            for (let i = 1; i < matchRound; i++) {
                targetTableElement = document.getElementById("match_table_"+ i);
                console.log(targetTableElement);
                targetTableElement.classList.replace("match_table_hide", "match_table");
            }
            viewHideMatches = 0;
            viewMatchBtn.textContent = "hide matches";
        }
    }
});

printMatchBtn.addEventListener("click", () => {
    if (viewHideMatches == 1) {                
        viewMatchBtn.click();
    }
    printPDF();
});

createMatchBtn.addEventListener("click", () => {
    if (window.confirm("Proceed to next match table?")) {
        createTableMatch();
        console.log(matchRound);
        if (matchRound > 1) {
            if (viewHideMatches == 0) {                
                viewMatchBtn.click();
            }
            let targetTableElement = document.getElementById("match_table_"+ (matchRound-1));
            targetTableElement.classList.replace("match_table", "match_table_hide");
        }
    }
});

removeMatchBtn.addEventListener("click", () => {    
    if (matchRound > 1) {        
            if (window.confirm("Delete current match table?")) {
                let targetTableElement = document.getElementById("match_table_"+ matchRound);
                targetTableElement.remove();
                
                matchIndicatorValue--;
                matchRound--;
                matchIndicator.textContent = matchIndicatorValue;

                console.log(matchRound);
                let targetTableElement2 = document.getElementById("match_table_"+ matchRound);
                targetTableElement2.classList.replace("match_table_hide", "match_table");
        }
    }
});

customTitleInput.addEventListener("keypress", () => {
    let maxChLength = customTitleInput.value.length;
    maxChLength = Math.max(maxChLength, customTitleInput.value.length);
    customTitleInput.style.width = `${maxChLength}ch`;

    customTitleInput.addEventListener("change", () => {
        maxChLength = Math.max(maxChLength, customTitleInput.value.length);
        customTitleInput.style.width = `${maxChLength}ch`;
    });
});

customTitleInput.addEventListener("click", () => {
    let maxChLength = customTitleInput.value.length;
    maxChLength = Math.max(maxChLength, customTitleInput.value.length);
    customTitleInput.style.width = `${maxChLength}ch`;

    customTitleInput.addEventListener("change", () => {
        maxChLength = Math.max(maxChLength, customTitleInput.value.length);
        customTitleInput.style.width = `${maxChLength}ch`;
    });

    customTitleInput.addEventListener("focus", () => {
        maxChLength = Math.max(maxChLength, customTitleInput.value.length);
        customTitleInput.style.width = `${maxChLength}ch`;
    });
});
customTitleInput.click();

divisionInput.addEventListener("click", () => {
    let maxChLength = divisionInput.value.length;
    maxChLength = Math.max(maxChLength, divisionInput.value.length);
    divisionInput.style.width = `${maxChLength}ch`;

    divisionInput.addEventListener("keypress", () => {
        maxChLength = divisionInput.value.length;
        maxChLength = Math.max(maxChLength, divisionInput.value.length);
        divisionInput.style.width = `${maxChLength}ch`;
    });

    divisionInput.addEventListener("focus", () => {
        maxChLength = divisionInput.value.length;
        maxChLength = Math.max(maxChLength, divisionInput.value.length);
        divisionInput.style.width = `${maxChLength}ch`;
    });
});
divisionInput.click();

categoryInput.addEventListener("click", () => {
    let maxChLength = categoryInput.value.length;
    maxChLength = Math.max(maxChLength, categoryInput.value.length);
    categoryInput.style.width = `${maxChLength}ch`;

    categoryInput.addEventListener("keypress", () => {
        maxChLength = categoryInput.value.length;
        maxChLength = Math.max(maxChLength, categoryInput.value.length);
        categoryInput.style.width = `${maxChLength}ch`;
    });

    categoryInput.addEventListener("focus", () => {
        maxChLength = categoryInput.value.length;
        maxChLength = Math.max(maxChLength, categoryInput.value.length);
        categoryInput.style.width = `${maxChLength}ch`;
    });
});
categoryInput.click();