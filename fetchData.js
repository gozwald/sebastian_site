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

    switch (component.id) {
      case "title":
        showMore.style = "bottom: -4px";
        break;
      case "description":
        showMore.style = "bottom: -10px";
        break;
      default:
        showMore.style = "bottom: 2px";
    }

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
        const container = document.createElement("div");
        container.setAttribute("class", "col-lg-4 p-3");

        const card = document.createElement("div");
        card.setAttribute("class", "cards");

        const titleBox = document.createElement("div");
        titleBox.setAttribute("class", "card-line mb-3");
        const title = document.createElement("h2");
        title.setAttribute("class", "h-100 card-item-overflow");
        title.setAttribute("id", "title");
        title.textContent = course.title;
        titleBox.appendChild(title);

        const kindAndDateBox = document.createElement("div");
        kindAndDateBox.setAttribute("class", "card-line mb-3");
        const kindAndDate = document.createElement("h3");
        kindAndDate.setAttribute(
          "class",
          "typo-bg-green h-100 card-item-overflow"
        );
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
        descriptionBox.setAttribute("class", "card-description mb-3");
        const description = document.createElement("h3");
        description.setAttribute("id", "description");

        description.setAttribute(
          "class",
          "typo-bg-green card-item-overflow h-100"
        );
        description.textContent = `${
          !!course.shortDescriptionOfContent
            ? course.shortDescriptionOfContent
            : "Beschreibung ist nicht angegeben"
        }`;
        description.textContent = course.shortDescriptionOfContent;
        descriptionBox.appendChild(description);

        const bookingButtonBox = document.createElement("div");
        bookingButtonBox.setAttribute("class", "px-4 py-3");
        const bookingButton = document.createElement("button");
        bookingButton.setAttribute("class", "btn p-2");
        bookingButton.textContent = "Anmeldungslink";
        bookingButtonBox.appendChild(bookingButton);

        const infoButtonBox = document.createElement("div");
        infoButtonBox.setAttribute("class", "px-4 py-3");
        const infoButton = document.createElement("button");
        infoButton.setAttribute("class", "button");
        infoButton.textContent = "mehr Informationen";
        infoButtonBox.appendChild(infoButton);
        infoButton.setAttribute(
          "onclick",
          `window.location.href='kursbeschreibung.html?title=${course.title}&date=${course.date}&location=${course.location}&type=${course.type}&cost=${course.cost}&shortDescriptionOfContent=${course.shortDescriptionOfContent}&purposegoalsOfTheCourse=${course.purposegoalsOfTheCourse}&structure=${course?.structure?.content[0].content[0].value}&requirements=${course?.requirements?.content[0].content[0].value}&additionalInformation=${course?.additionalInformation?.content[0].content[0].value}'
                `
        );

        card.appendChild(titleBox);
        card.appendChild(kindAndDateBox);
        card.appendChild(descriptionBox);
        card.appendChild(bookingButtonBox);
        card.appendChild(infoButtonBox);
        container.appendChild(card);
        list.appendChild(container);

        addPopupIfNeeded(title);
        addPopupIfNeeded(kindAndDate);
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
          `window.location.href='kursbeschreibung.html?title=${course.title}&date=${course.date}&location=${course.location}&type=${course.type}&cost=${course.cost}&shortDescriptionOfContent=${course.shortDescriptionOfContent}&purposegoalsOfTheCourse=${course.purposegoalsOfTheCourse}&structure=${course?.structure?.content[0].content[0].value}&requirements=${course?.requirements?.content[0].content[0].value}&additionalInformation=${course?.additionalInformation?.content[0].content[0].value}'
              `
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
