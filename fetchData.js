const space = "m6f6h3gbsi9t";
const environment = "master"; // defaults to 'master' if not set
const accessToken = "n9XBNO-nzf-YUfy4bxqdxMSIfmeGkq34ao5RwAZr9jo";

function addPopupIfNeeded(component) {
  if (component.scrollHeight > component.clientHeight + 10) {
    const popUpTogler = document.createElement("a");
    popUpTogler.setAttribute("data-toggle", "dropdown");
    popUpTogler.setAttribute("id", "navbarDropdownMenuLink");
    popUpTogler.setAttribute("aria-haspopup", "true");
    popUpTogler.setAttribute("aria-expanded", "false");

    const showMore = document.createElement("span");
    showMore.className = "overflow-more-info";

    showMore.textContent = "... zeig mehr";
    popUpTogler.appendChild(showMore);
    component.appendChild(popUpTogler);

    const popup = document.createElement("div");
    popup.setAttribute("class", "dropdown-menu popup");
    popup.setAttribute("aria-labelledby", "navbarDropdownMenuLink");
    popup.textContent = component.textContent.replace(/... zeig mehr$/, "");

    const style = window.getComputedStyle(component);
    const lineHeight = style.getPropertyValue("line-height").split("px")[0];
    const lines = Math.floor(component.clientHeight / lineHeight);
    const finalHeight = lineHeight * lines;
    component.style.height = `${finalHeight}px`;
    component.appendChild(popup);
  }
}

function fetchHomeData() {
  const client = contentful.createClient({
    space,
    environment,
    accessToken,
  });

  client
    .getEntries({ order: "-sys.createdAt" })
    .then((response) => response.items)
    .then((data) => {
      const list = document.querySelector("#coureseList");
      data = data.slice(0, 6);
      data.forEach((course) => {
        course = course.fields;
        console.log(course);
        const container = document.createElement("div");
        container.setAttribute("class", "col-lg-4 p-3");

        const card = document.createElement("div");
        card.setAttribute("class", "cards");

        const titleBox = document.createElement("div");
        titleBox.setAttribute("class", "card-line text-center");
        const title = document.createElement("h2");
        title.setAttribute("class", "h-100");
        title.setAttribute("id", "title");
        title.textContent = course.title;
        titleBox.appendChild(title);

        const kindAndDateBox = document.createElement("div");
        kindAndDateBox.setAttribute("class", "card-line");
        const kindAndDate = document.createElement("h3");
        kindAndDate.setAttribute("class", "typo-bg-green h-100");
        kindAndDate.setAttribute("id", "kindAndDate");
        const kind = `${
          !!course.type ? course.type : "Art ist nicht angegeben"
        }`;
        const date = `${
          !!course.date ? course.date : "Termin ist nicht angegeben"
        }`;
        kindAndDate.textContent = `${kind}, ${date}`;
        kindAndDateBox.appendChild(kindAndDate);

        const descriptionBox = document.createElement("div");
        descriptionBox.setAttribute("class", "card-description");
        const description = document.createElement("h3");
        description.setAttribute("id", "description");

        description.setAttribute("class", "typo-bg-green card-item-overflow ");
        description.textContent = `${
          !!course.shortDescriptionOfContent
            ? course.shortDescriptionOfContent
            : "Beschreibung ist nicht angegeben"
        }`;
        description.textContent = course.shortDescriptionOfContent;
        descriptionBox.appendChild(description);

        const buttonsConainer = document.createElement("div");

        const bookingButtonBox = document.createElement("div");
        bookingButtonBox.setAttribute("class", "px-4");
        const bookingButton = document.createElement("button");
        bookingButton.setAttribute("class", "btn p-2");
        bookingButton.textContent = "Anmeldungslink";
        bookingButtonBox.appendChild(bookingButton);
        bookingButton.setAttribute(
          "onclick",
          `window.open('${course.registration_link}', '_blank')`
        );
        const infoButtonBox = document.createElement("div");
        infoButtonBox.setAttribute("class", "px-4 py-3");
        const infoButton = document.createElement("button");
        infoButton.setAttribute("class", "button");
        infoButton.textContent = "mehr Informationen";
        infoButtonBox.appendChild(infoButton);
        infoButton.setAttribute(
          "onclick",
          `window.location.href='kursbeschreibung.html?title=${course.title}&date=${course.date}&location=${course.location}&type=${course.type}&registration=${course.registration}&registration_link=${course.registration_link}&cost=${course.cost}&shortDescriptionOfContent=${course.shortDescriptionOfContent}&purposegoalsOfTheCourse=${course.purposegoalsOfTheCourse}&structure=${course?.structure?.content[0].content[0].value}&requirements=${course?.requirements?.content[0].content[0].value}&additionalInformation=${course?.additionalInformation?.content[0].content[0].value}'
                `
        );
        buttonsConainer.appendChild(bookingButtonBox);
        buttonsConainer.appendChild(infoButtonBox);

        card.appendChild(titleBox);
        card.appendChild(kindAndDateBox);
        card.appendChild(descriptionBox);
        card.appendChild(buttonsConainer);
        container.appendChild(card);
        list.appendChild(container);

        addPopupIfNeeded(description);
      });
    })
    .catch(console.error);
}

function fetchCurrentData() {
  const client = contentful.createClient({
    space,
    environment,
    accessToken,
  });

  client
    .getEntries({ order: "-sys.createdAt" })
    .then((response) => response.items)
    .then((data) => {
      const list = document.querySelector("#coureseList");

      data.forEach((course) => {
        course = course.fields;
        const container = document.createElement("div");
        container.setAttribute("class", "p-3");

        const card = document.createElement("div");
        card.setAttribute("class", "current-cards");

        const title = document.createElement("h4");
        title.setAttribute("class", "typo-bg-green");
        title.textContent = course.title;

        const moreInfo = document.createElement("span");
        moreInfo.setAttribute("class", "moreInfoButton");
        moreInfo.setAttribute(
          "onclick",
          `window.location.href='kursbeschreibung.html?title=${course.title}&date=${course.date}&location=${course.location}&type=${course.type}&registration=${course.registration}&registration_link=${course.registration_link}&cost=${course.cost}&shortDescriptionOfContent=${course.shortDescriptionOfContent}&purposegoalsOfTheCourse=${course.purposegoalsOfTheCourse}&structure=${course?.structure?.content[0].content[0].value}&requirements=${course?.requirements?.content[0].content[0].value}&additionalInformation=${course?.additionalInformation?.content[0].content[0].value}'`
        );
        moreInfo.textContent = "mehr informationen";

        const description = document.createElement("h3");
        description.setAttribute("class", "pl-3 typo-bg-green");
        description.textContent = `${
          !!course.date ? course.date : "termin ist nicht angegeben"
        }, ${!!course.type ? course.type : "art ist nicht angegeben"}, ... `;

        description.appendChild(moreInfo);

        card.appendChild(title);
        card.appendChild(description);
        container.appendChild(card);
        list.appendChild(container);
      });
    })
    .catch(console.error);
}

function fetchDescriptionData() {
  const urlParams = new URLSearchParams(window.location.search);

  const titleText = urlParams.get("title");
  const title = document.querySelector("#title");
  title.textContent = titleText;

  const dateText = urlParams.get("date");
  const date = document.querySelector("#date");
  date.textContent = `${
    dateText !== "undefined" ? dateText : "Termin ist nicht angegeben"
  }`;

  const locationText = urlParams.get("location");
  const typeText = urlParams.get("type");
  const locationType = document.querySelector("#locationType");
  locationType.textContent = `${
    locationText !== "undefined" ? locationText : "Ort ist nicht angegeben"
  }, ${typeText !== "undefined" ? typeText : "Art ist nicht angegeben"}`;

  const costText = urlParams.get("cost");
  const cost = document.querySelector("#cost");
  cost.textContent = `${
    costText !== "undefined" ? costText : "Kosten ist nicht angegeben"
  }`;

  const registrationText = urlParams.get("registration");
  const registration = document.querySelector("#registration");
  registration.textContent = `${
    registrationText !== "undefined"
      ? registrationText
      : "Anmeldung ist nicht angegeben"
  }`;

  const registrationLinkText = urlParams.get("registration_link");
  const registrationLink = document.querySelector("#registration_link");
  registrationLink.textContent = `${
    registrationLinkText !== "undefined"
      ? registrationLinkText
      : "Anmeldung Link ist nicht angegeben"
  }`;
  registrationLink.setAttribute(
    "onclick",
    `window.open('${registrationLinkText}', '_blank')`
  );

  const purposegoalsOfTheCourseText = urlParams.get("purposegoalsOfTheCourse");
  const purposegoalsOfTheCourse = document.querySelector(
    "#purposegoalsOfTheCourse"
  );
  purposegoalsOfTheCourse.textContent = `${
    purposegoalsOfTheCourseText !== "undefined"
      ? purposegoalsOfTheCourseText
      : "Intention/Ziele des Kurses sind nicht angegeben"
  }`;

  const structureText = urlParams.get("structure");
  const structure = document.querySelector("#structure");
  structure.textContent = `${
    structureText !== "undefined" ? structureText : "Ablauf ist nicht angegeben"
  }`;

  const requirementsText = urlParams.get("requirements");
  const requirements = document.querySelector("#requirements");
  requirements.textContent = `${
    requirementsText !== "undefined"
      ? requirementsText
      : "Voraussetzungen sind nicht angegeben"
  }`;

  const additionalInformationText = urlParams.get("additionalInformation");
  const additionalInformation = document.querySelector(
    "#additionalInformation"
  );
  additionalInformation.textContent = `${
    additionalInformationText !== "undefined"
      ? additionalInformationText
      : "Vertiefende Informationen ist nicht angegeben"
  }`;
}
