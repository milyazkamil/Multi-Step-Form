const mainTitle = document.querySelector("#main-title");
const description = document.querySelector("#description");
const changingSection = document.querySelector(".changing-section");
const nextStep = document.querySelector("#next-step");
const goBack = document.querySelector("#go-back");

const stepNum1 = document.querySelector("#step-num-1");
const stepNum2 = document.querySelector("#step-num-2");
const stepNum3 = document.querySelector("#step-num-3");
const stepNum4 = document.querySelector("#step-num-4");

const steps = [stepNum1, stepNum2, stepNum3, stepNum4];

let info = ["Select Your Plan"];

let step1 = `
  <label for="name">Name</label>
  <input id="name" name="name" type="text" placeholder="e.g Milyaz Kamil">

  <label for="email">E-mail Address</label>
  <input id="email" name="email" type="email" placeholder="e.g milyazkamil@gmail.com">

  <label for="phone">Phone Number</label>
  <input id="phone" name="phone" type="number" placeholder="e.g +1 234 567 890">
`;

let step2 = `
  <div id="arcade" class="d-flex align-items-center mb-4 p-3 py-2 py-sm-3 rounded-4">
    <svg id="svg1" class="me-3 p-1 rounded-pill" stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 512 512" height="3.5em" width="3.5em" xmlns="http://www.w3.org/2000/svg"><path d="M380.95 114.46c-62.946-13.147-63.32 32.04-124.868 32.04-53.25 0-55.247-44.675-124.87-32.04C17.207 135.072-.32 385.9 60.16 399.045c33.578 7.295 50.495-31.644 94.89-59.593a51.562 51.562 0 0 0 79.77-25.78 243.665 243.665 0 0 1 21.24-.91c7.466 0 14.44.32 21.126.898a51.573 51.573 0 0 0 79.82 25.717c44.45 27.95 61.367 66.93 94.955 59.626 60.47-13.104 42.496-260.845-71.01-284.543zM147.47 242.703h-26.144V216.12H94.73v-26.143h26.594v-26.593h26.144v26.582h26.582v26.144h-26.582v26.582zm38.223 89.615a34.336 34.336 0 1 1 34.337-34.336 34.336 34.336 0 0 1-34.325 34.346zm140.602 0a34.336 34.336 0 1 1 34.367-34.325 34.336 34.336 0 0 1-34.368 34.335zM349.98 220.36A17.323 17.323 0 1 1 367.3 203.04a17.323 17.323 0 0 1-17.323 17.323zm37.518 37.52a17.323 17.323 0 1 1 17.322-17.324 17.323 17.323 0 0 1-17.365 17.334zm0-75.048a17.323 17.323 0 1 1 17.322-17.323 17.323 17.323 0 0 1-17.365 17.333zm37.518 37.518a17.323 17.323 0 1 1 17.323-17.323 17.323 17.323 0 0 1-17.367 17.334z"></path></svg>

    <div>
      <h4 class="m-0 mb-1">Arcade</h4>
      <p class="m-0 fs-6">$9/mo</p>
    </div>
  </div>

  <div id="advanced" class="d-flex align-items-center mb-4 p-3 py-2 py-sm-3 rounded-4">
    <svg id="svg2" class="me-3 p-1 rounded-pill" stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 12 16" height="3.5em" width="3.5em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"></path></svg>

    <div>
      <h4 class="m-0 mb-1">Advanced</h4>
      <p class="m-0 fs-6">$12/mo</p>
    </div>
  </div>

  <div id="pro" class="mb-3 mb-lg-5 d-flex align-items-center p-3 py-2 py-sm-3 rounded-4">
    <svg id="svg3" class="me-3 p-1 rounded-pill" stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 512 512" height="3.5em" width="3.5em" xmlns="http://www.w3.org/2000/svg"><path d="M256 421.6c-18.1 0-33.2-6.8-42.9-10.9-5.4-2.3-11.3 1.8-10.9 7.6l3.5 51c.2 3.1 3.8 4.7 6.3 2.8l14.5-11c1.8-1.4 4.5-.9 5.7 1l20.5 32.1c1.5 2.4 5.1 2.4 6.6 0l20.5-32.1c1.2-1.9 3.9-2.4 5.7-1l14.5 11c2.5 1.9 6.1.3 6.3-2.8l3.5-51c.4-5.8-5.5-10-10.9-7.6-9.8 4.1-24.8 10.9-42.9 10.9z"></path><path d="M397.7 293.1l-48-49.1c0-158-93.2-228-93.2-228s-94.1 70-94.1 228l-48 49.1c-1.8 1.8-2.6 4.5-2.2 7.1L130.6 412c.9 5.7 7.1 8.5 11.8 5.4l67.1-45.4s20.7 20 47.1 20c26.4 0 46.1-20 46.1-20l67.1 45.4c4.6 3.1 10.8.3 11.8-5.4l18.5-111.9c.2-2.6-.6-5.2-2.4-7zM256.5 192c-17 0-30.7-14.3-30.7-32s13.8-32 30.7-32c17 0 30.7 14.3 30.7 32s-13.7 32-30.7 32z"></path></svg>

    <div>
      <h4 class="m-0 mb-1">Pro</h4>
      <p class="m-0 fs-6">$15/mo</p>
    </div>
  </div>

  <div id="switch" class="d-flex justify-content-between align-items-center">
    <p class="m-0">Mounthly</p>
    <div id="switch-div">
      <div id="switch-circle"></div>
    </div>
    <p class="m-0">Yearly</p>
  </div>
`;

let step3 = `
  <div id="online" class="d-flex justify-content-between align-items-center mb-4 p-3 py-2 py-sm-3 rounded-4">
    <div class="d-flex align-items-center">
      <input type="checkbox" id="online-checkbox" class="me-4 add-ons">
      <div>
        <h4 class="m-0 mb-1">Online service</h4>
        <p class="m-0 fs-6">Access to multiplayer games</p>
      </div>
    </div>
    <p class="m-0 fs-5">+$1/mo</p>
  </div>

  <div id="larger" class="d-flex justify-content-between align-items-center mb-4 p-3 py-2 py-sm-3 rounded-4">
    <div class="d-flex align-items-center">
      <input type="checkbox" id="larger-checkbox" class="me-4 add-ons">
      <div>
        <h4 class="m-0 mb-1">Larger storage</h4>
        <p class="m-0 fs-6">Extra 1TB of cloud save</p>
      </div>
    </div>
    <p class="m-0 fs-5">+$2/mo</p>
  </div>

  <div id="customizable" class="d-flex justify-content-between align-items-center mb-4 p-3 py-2 py-sm-3 rounded-4">
    <div class="d-flex align-items-center">
      <input type="checkbox" id="customizable-checkbox" class="me-4 add-ons">
      <div>
        <h4 class="m-0 mb-1">Customizable profile</h4>
        <p class="m-0 fs-6">Custom theme on your profile</p>
      </div>
    </div>
    <p class="m-0 fs-5">+$3/mo</p>
  </div>
`;

let step4 = `
  <div class="step4 p-1 rounded-4">
    <div class="d-flex border-bottom border-1 border-secondary p-3 px-4 justify-content-between align-items-center">
      <div>
        <p id="change-mod" class="m-0 fs-5"></p>
        <a class="m-0 fs-5" href="#">Change</a>
      </div>
      <p id="select-plan-money" class="m-0 fs-5">$0/mo</p>
    </div>
    <div id="others-html">
      <div id="online-service"></div>
      <div id="larger-storage"></div>
      <div id="customizable-profile"></div>
    </div>

    <div class="d-flex p-4 justify-content-between align-items-center">
      <p class="m-0 fw-semibold fs-5">Total (per mounth)</p>
      <p id="total-price" class="m-0 fw-bold fs-4">
        $0/mo
      </p>
    </div>
  </div>
`;

let step = 1;

nextStep.addEventListener("click", () => {
  if (step < 4) {
    step++;
  }

  checkStep(step);

  checkboxesControl();

  goBack.style.visibility = "visible";
});

goBack.addEventListener("click", () => {
  step--;

  checkStep(step);

  if (step === 1) {
    goBack.style.visibility = "hidden";
  } else {
    goBack.style.visibility = "visible";
  }

  if (step === 2) {
    if (info[0] === "Arcade (Mounthly)") {
      arcade.style.backgroundColor = "var(--light-purple)";
      arcade.style.borderColor = "var(--purple-color)";
    } else if (info[0] === "Advanced (Mounthly)") {
      advanced.style.backgroundColor = "var(--light-purple)";
      advanced.style.borderColor = "var(--purple-color)";
    } else if (info[0] === "Pro (Mounthly)") {
      pro.style.borderColor = "var(--purple-color)";
      pro.style.backgroundColor = "var(--light-purple)";
    }
  }

  if (step === 3) {
    checkboxesControl();
  }
});

function checkStep(stepNumber) {
  if (stepNumber === 1) {
    nextStep.innerText = "Next Step";
    nextStep.style.backgroundColor = "var(--dark-blue)";
    mainTitle.innerHTML = "Personal Info";
    description.innerHTML = "Please provide your name, email, address and phone number.";
    stepsClear();
    stepNum1.style.color = "var(--black-color)";
    stepNum1.style.backgroundColor = "var(--light-blue)";
    changingSection.innerHTML = step1;

  } else if (stepNumber === 2) {
    nextStep.style.backgroundColor = "var(--dark-blue)";
    nextStep.innerText = "Next Step";
    mainTitle.innerHTML = "Select Your Plan";
    description.innerHTML = "You have the option of mounthly or yearly billing.";
    stepsClear();
    stepNum2.style.color = "var(--black-color)";
    stepNum2.style.backgroundColor = "var(--light-blue)";
    changingSection.innerHTML = step2;

    const arcade = document.querySelector("#arcade");
    const advanced = document.querySelector("#advanced");
    const pro = document.querySelector("#pro");

    const selectYourPlan = [arcade, advanced, pro];

    selectYourPlan.forEach(e => {
      e.style.backgroundColor = "var(--white-color)";
      e.style.border = "1px solid var(--gray-color)";
    });

    arcade.addEventListener("click", () => {
      info[0] = "Arcade (Mounthly)";

      if (arcade.style.backgroundColor === "var(--white-color)") {
        arcade.style.backgroundColor = "var(--light-purple)";
        arcade.style.borderColor = "var(--purple-color)";
        advanced.style.backgroundColor = "var(--white-color)";
        advanced.style.borderColor = "var(--gray-color)";
        pro.style.backgroundColor = "var(--white-color)";
        pro.style.borderColor = "var(--gray-color)";
      } else {
        arcade.style.backgroundColor = "var(--white-color)";
        arcade.style.borderColor = "var(--gray-color)";
      }
    });

    advanced.addEventListener("click", () => {
      info[0] = "Advanced (Mounthly)";

      if (advanced.style.backgroundColor === "var(--white-color)") {
        advanced.style.backgroundColor = "var(--light-purple)";
        advanced.style.borderColor = "var(--purple-color)";
        arcade.style.backgroundColor = "var(--white-color)";
        arcade.style.borderColor = "var(--gray-color)";
        pro.style.backgroundColor = "var(--white-color)";
        pro.style.borderColor = "var(--gray-color)";
      } else {
        advanced.style.backgroundColor = "var(--white-color)";
        advanced.style.borderColor = "var(--gray-color)";
      }
    });

    pro.addEventListener("click", () => {
      info[0] = "Pro (Mounthly)";

      if (pro.style.backgroundColor === "var(--white-color)") {
        pro.style.backgroundColor = "var(--light-purple)";
        pro.style.borderColor = "var(--purple-color)";
        arcade.style.backgroundColor = "var(--white-color)";
        arcade.style.borderColor = "var(--gray-color)";
        advanced.style.backgroundColor = "var(--white-color)";
        advanced.style.borderColor = "var(--gray-color)";
      } else {
        pro.style.backgroundColor = "var(--white-color)";
        pro.style.borderColor = "var(--gray-color)";
      }
    });

    const switchDiv = document.querySelector("#switch-div");
    const switchCircle = document.querySelector("#switch-circle");

    let isSwitched = true;

    switchDiv.addEventListener("click", () => {
      if (isSwitched) {
        switchCircle.style.left = "55px";
        isSwitched = false;
      } else {
        switchCircle.style.left = "5px";
        isSwitched = true;
      }
    });

  } else if (stepNumber === 3) {
    nextStep.style.backgroundColor = "var(--dark-blue)";
    nextStep.innerText = "Next Step";
    mainTitle.innerHTML = "Pick Add-Ons";
    description.innerHTML = "Add-ons help enhance your gaming experience.";
    stepsClear();
    stepNum3.style.color = "var(--black-color)";
    stepNum3.style.backgroundColor = "var(--light-blue)";
    changingSection.innerHTML = step3;

    const online = document.querySelector("#online");
    const larger = document.querySelector("#larger");
    const customizable = document.querySelector("#customizable");

    const onlineCheckbox = document.querySelector("#online-checkbox");
    const largerCheckbox = document.querySelector("#larger-checkbox");
    const customizableCheckbox = document.querySelector("#customizable-checkbox");

    online.addEventListener("click", () => {
      if (onlineCheckbox.checked === false) {
        onlineCheckbox.checked = true;
        online.style.backgroundColor = "var(--light-purple)";
        online.style.borderColor = "var(--purple-color)";
      } else {
        onlineCheckbox.checked = false;
        online.style.backgroundColor = "var(--white-color)";
        online.style.borderColor = "var(--black-color)";
      }
    });

    larger.addEventListener("click", () => {
      if (largerCheckbox.checked === false) {
        largerCheckbox.checked = true;
        larger.style.backgroundColor = "var(--light-purple)";
        larger.style.borderColor = "var(--purple-color)";
      } else {
        largerCheckbox.checked = false;
        larger.style.backgroundColor = "var(--white-color)";
        larger.style.borderColor = "var(--black-color)";
      }
    });

    customizable.addEventListener("click", () => {
      if (customizableCheckbox.checked === false) {
        customizableCheckbox.checked = true;
        customizable.style.backgroundColor = "var(--light-purple)";
        customizable.style.borderColor = "var(--purple-color)";
      } else {
        customizableCheckbox.checked = false;
        customizable.style.backgroundColor = "var(--white-color)";
        customizable.style.borderColor = "var(--black-color)";
      }
    });

    online.addEventListener("click", () => {
      if (!(info.includes("online"))) {
        info.push("online");
      } else {
        info = info.filter(e => e !== "online");
      }
    });

    larger.addEventListener("click", () => {
      if (!(info.includes("larger"))) {
        info.push("larger");
      } else {
        info = info.filter(e => e !== "larger");
      }
    });

    customizable.addEventListener("click", () => {
      if (!(info.includes("customizable"))) {
        info.push("customizable");
      } else {
        info = info.filter(e => e !== "customizable");
      }
    });

  } else if (stepNumber === 4) {
    nextStep.style.backgroundColor = "var(--purple-color)";
    nextStep.innerText = "Confirm";
    mainTitle.innerHTML = "Finishing Up";
    description.innerHTML = "Double-check everything looks OK before confirming.";
    stepsClear();
    stepNum4.style.color = "var(--black-color)";
    stepNum4.style.backgroundColor = "var(--light-blue)";
    changingSection.innerHTML = step4;

    const changeMod = document.querySelector("#change-mod");
    const othersHtml = document.querySelector("#others-html");
    const onlineService = document.querySelector("#online-service");
    const largerStorage = document.querySelector("#larger-storage");
    const customizableProfile = document.querySelector("#customizable-profile");
    const selectPlanMoney = document.querySelector("#select-plan-money");
    const totalPrice = document.querySelector("#total-price");

    let money = 0;

    changeMod.innerText = info[0];

    if (info[0] === "Arcade (Mounthly)") {
      selectPlanMoney.innerHTML = `$9/mo`;
      money += 9;
    } else if (info[0] === "Advanced (Mounthly)") {
      selectPlanMoney.innerHTML = "$12/mo";
      money += 12;
    } else if (info[0] === "Pro (Mounthly)") {
      selectPlanMoney.innerHTML = "$15/mo";
      money += 15;
    }
    
    if (info.includes("online")) {
      onlineService.innerHTML = `
        <div class="d-flex p-4 pb-0 pb-sm-2 justify-content-between align-items-center">
          <p class="m-0 fs-5">Online service</p>
          <p class="m-0 fs-5">+$1/mo</p>
        </div>
      `;
      othersHtml.append(onlineService);
      money++;
    }

    if (info.includes("larger")) {
      largerStorage.innerHTML = `
        <div class="d-flex p-4 pb-0 pb-sm-2 justify-content-between align-items-center">
          <p class="m-0 fs-5">Larger storage</p>
          <p class="m-0 fs-5">+$2/mo</p>
        </div>
      `;
      othersHtml.append(largerStorage);
      money += 2;
    }

    if (info.includes("customizable")) {
      customizableProfile.innerHTML = `
        <div class="d-flex p-4 pb-0 pb-sm-2 justify-content-between align-items-center">
          <p class="m-0 fs-5">Customizable profile</p>
          <p class="m-0 fs-5">+$3/mo</p>
        </div>
      `;
      othersHtml.append(customizableProfile);
      money += 3;
    }
    totalPrice.innerText = `+$${money}/mo`;
  }
}

function stepsClear() {
  steps.forEach(e => {
    e.style.color = "var(--white-color)";
    e.style.backgroundColor = "var(--transparent)";
  });
}

function checkboxesControl() {
  const onlineCheckbox = document.querySelector("#online-checkbox");
  const largerCheckbox = document.querySelector("#larger-checkbox");
  const customizableCheckbox = document.querySelector("#customizable-checkbox");

  if (info.includes("online")) {
    onlineCheckbox.checked = true;
    online.style.borderColor = "var(--purple-color)";
    online.style.backgroundColor = "var(--light-purple)";
  } 
  
  if (info.includes("larger")) {
    largerCheckbox.checked = true;
    larger.style.borderColor = "var(--purple-color)";
    larger.style.backgroundColor = "var(--light-purple)";
  }
  
  if (info.includes("customizable")) {
    customizableCheckbox.checked = true;
    customizable.style.borderColor = "var(--purple-color)";
    customizable.style.backgroundColor = "var(--light-purple)";
  }
}