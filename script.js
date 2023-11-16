// Data Containers and buttons
const work = document.querySelector("#work1");
const play = document.querySelector("#play1");
const study = document.querySelector("#study1");
const excercise = document.querySelector("#excercise1");
const social = document.querySelector("#social1");
const selfCare = document.querySelector("#selfCare1");
const dailyBtn = document.querySelector("#btn1");
const weeklyBtn = document.querySelector("#btn2");
const monthlyBtn = document.querySelector("#btn3");

// changing text fuction
function changeContent(contentDiv, curr, prev) {
  if (contentDiv) {
    zero = 0;
    var childrens = contentDiv.children;

    for (var i = 0; i < childrens.length; i++) {
      if (childrens[i].nodeName == "P") {
        if (zero == 0) {
          childrens[i].textContent = curr + "Hrs";
        } else {
          childrens[i].textContent = "Last week " + prev + "Hrs";
        }
        zero += 1;
      }
    }
  }
}

// getting data from JSON
async function returnFromJson(titleValue, timeframesValue, currOrPrev) {
  return fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      const textValue = data.find((activity) => activity.title == titleValue);
      if (textValue) {
        const timeframes = textValue.timeframes[timeframesValue];
        if (timeframes) {
          if (currOrPrev == "current") {
            return timeframes.current;
          } else if (currOrPrev == "previous") {
            return timeframes.previous;
          } else {
            throw new Error("Something wrong with currOrPrev");
          }
        } else {
          throw new Error("Something wrong with timeframesValue");
        }
      } else {
        throw new Error("Something wrong with titleValue");
      }
    })
    .catch((error) => {
      console.error("Error fetching JSON:", error);
      throw error;
    });
}
async function finalResult(x, y, z) {
  return await returnFromJson(x, y, z);
}

async function daily() {
  dailyBtn.style.color = "white";
  weeklyBtn.style.color = "rgb(255, 255, 255, 0.8)";
  monthlyBtn.style.color = "rgb(255, 255, 255, 0.8)";
  // work
  currentValue = await finalResult("Work", "daily", "current");
  previousValue = await finalResult("Work", "daily", "previous");
  changeContent(work, currentValue, previousValue);
  // play
  currentValue = await finalResult("Play", "daily", "current");
  previousValue = await finalResult("Play", "daily", "previous");
  changeContent(play, currentValue, previousValue);
  // study
  currentValue = await finalResult("Study", "daily", "current");
  previousValue = await finalResult("Study", "daily", "previous");
  changeContent(study, currentValue, previousValue);
  //   excercise
  currentValue = await finalResult("Exercise", "daily", "current");
  previousValue = await finalResult("Exercise", "daily", "previous");
  changeContent(excercise, currentValue, previousValue);
  //   social
  currentValue = await finalResult("Social", "daily", "current");
  previousValue = await finalResult("Social", "daily", "previous");
  changeContent(social, currentValue, previousValue);
  // self Care
  currentValue = await finalResult("Self Care", "daily", "current");
  previousValue = await finalResult("Self Care", "daily", "previous");
  changeContent(selfCare, currentValue, previousValue);
}

async function weekly() {
  dailyBtn.style.color = "rgb(255, 255, 255, 0.8)";
  weeklyBtn.style.color = "white";
  monthlyBtn.style.color = "rgb(255, 255, 255, 0.8)";
  // work
  currentValue = await finalResult("Work", "weekly", "current");
  previousValue = await finalResult("Work", "weekly", "previous");
  changeContent(work, currentValue, previousValue);
  // play
  currentValue = await finalResult("Play", "weekly", "current");
  previousValue = await finalResult("Play", "weekly", "previous");
  changeContent(play, currentValue, previousValue);
  // study
  currentValue = await finalResult("Study", "weekly", "current");
  previousValue = await finalResult("Study", "weekly", "previous");
  changeContent(study, currentValue, previousValue);
  //   excercise
  currentValue = await finalResult("Exercise", "weekly", "current");
  previousValue = await finalResult("Exercise", "weekly", "previous");
  changeContent(excercise, currentValue, previousValue);
  //   social
  currentValue = await finalResult("Social", "weekly", "current");
  previousValue = await finalResult("Social", "weekly", "previous");
  changeContent(social, currentValue, previousValue);
  // self Care
  currentValue = await finalResult("Self Care", "weekly", "current");
  previousValue = await finalResult("Self Care", "weekly", "previous");
  changeContent(selfCare, currentValue, previousValue);
}

async function monthly() {
  dailyBtn.style.color = "rgb(255, 255, 255, 0.8)";
  weeklyBtn.style.color = "rgb(255, 255, 255, 0.8)";
  monthlyBtn.style.color = "white";
  // work
  currentValue = await finalResult("Work", "monthly", "current");
  previousValue = await finalResult("Work", "monthly", "previous");
  changeContent(work, currentValue, previousValue);
  // play
  currentValue = await finalResult("Play", "monthly", "current");
  previousValue = await finalResult("Play", "monthly", "previous");
  changeContent(play, currentValue, previousValue);
  // study
  currentValue = await finalResult("Study", "monthly", "current");
  previousValue = await finalResult("Study", "monthly", "previous");
  changeContent(study, currentValue, previousValue);
  //   excercise
  currentValue = await finalResult("Exercise", "monthly", "current");
  previousValue = await finalResult("Exercise", "monthly", "previous");
  changeContent(excercise, currentValue, previousValue);
  //   social
  currentValue = await finalResult("Social", "monthly", "current");
  previousValue = await finalResult("Social", "monthly", "previous");
  changeContent(social, currentValue, previousValue);
  // self Care
  currentValue = await finalResult("Self Care", "monthly", "current");
  previousValue = await finalResult("Self Care", "monthly", "previous");
  changeContent(selfCare, currentValue, previousValue);
}

daily();
