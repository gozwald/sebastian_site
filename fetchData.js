const space = "m6f6h3gbsi9t";
const environment = "master"; // defaults to 'master' if not set
const accessToken = "n9XBNO-nzf-YUfy4bxqdxMSIfmeGkq34ao5RwAZr9jo";

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

        const link = `kursbeschreibung.html?title=${encodeURIComponent(
          course.title
        )}&date=${encodeURIComponent(
          course.date
        )}&location=${encodeURIComponent(
          course.location
        )}&type=${encodeURIComponent(
          course.type
        )}&onlineorpresence=${encodeURIComponent(
          course.onlineOrPresence
        )}&registration=${encodeURIComponent(
          course.registration
        )}&registration_link=${encodeURIComponent(
          course.registration_link
        )}&cost=${encodeURIComponent(
          course.cost
        )}&shortDescriptionOfContent=${encodeURIComponent(
          course.shortDescriptionOfContent
        )}&purposegoalsOfTheCourse=${encodeURIComponent(
          course.purposegoalsOfTheCourse
        )}&structure=${encodeURIComponent(
          course?.structure?.content[0].content[0].value
        )}&requirements=${encodeURIComponent(
          course?.requirements?.content[0].content[0].value
        )}&additionalInformation=${encodeURIComponent(
          course?.additionalInformation?.content[0].content[0].value
        )}`;

        const container = document.createElement("div");
        container.classList.add("col-xl-4", "p-3");

        const card = document.createElement("div");
        card.classList.add("cards", "card-container");

        const titleBox = document.createElement("div");
        titleBox.classList.add("card-line", "text-center");
        titleBox.setAttribute("id", "title");
        const titleLink = document.createElement("a");
        titleLink.setAttribute("href", link);
        titleLink.setAttribute("class", "h-100");

        const title = document.createElement("h2");
        title.textContent = course.title;

        titleLink.appendChild(title);
        titleBox.appendChild(titleLink);

        const kindAndDateAndNumberOfDaysAndPresenceOrOnlineBox =
          document.createElement("div");
        kindAndDateAndNumberOfDaysAndPresenceOrOnlineBox.classList.add(
          "card-line"
        );
        const kindAndDateAndNumberOfDaysAndPresenceOrOnline =
          document.createElement("h3");
        kindAndDateAndNumberOfDaysAndPresenceOrOnline.classList.add(
          "typo-bg-green",
          "h-100"
        );
        kindAndDateAndNumberOfDaysAndPresenceOrOnline.setAttribute(
          "id",
          "kindAndDateAndNumberOfDaysAndPresenceOrOnline"
        );

        const kind = `${
          !!course.type ? course.type : "Art ist nicht angegeben"
        }`;
        const date = `${
          !!course.date ? course.date : "Termin ist nicht angegeben"
        }`;

        const onlineOrPresence = `${
          !!course.onlineOrPresence ? course.onlineOrPresence : ""
        }`;

        kindAndDateAndNumberOfDaysAndPresenceOrOnline.textContent = `${kind}, ${date}, ${onlineOrPresence}`;

        kindAndDateAndNumberOfDaysAndPresenceOrOnlineBox.appendChild(
          kindAndDateAndNumberOfDaysAndPresenceOrOnline
        );

        const descriptionBox = document.createElement("div");
        descriptionBox.classList.add("card-description", "overflow-auto");
        const description = document.createElement("div");
        description.setAttribute("id", "description");
        description.classList.add("typo-bg-green", "card-item-overflow");

        description.textContent = `${
          !!course.shortDescriptionOfContent
            ? course.shortDescriptionOfContent
            : "Beschreibung ist nicht angegeben"
        }`;

        descriptionBox.appendChild(description);

        const buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("d-flex", "justify-content-end");

        const bookingButtonBox = document.createElement("div");
        bookingButtonBox.classList.add("px-2");
        const bookingButton = document.createElement("button");
        bookingButton.classList.add("button", "p-2");
        bookingButton.textContent = "Anmeldungslink";
        bookingButtonBox.appendChild(bookingButton);
        bookingButton.setAttribute(
          "onclick",
          `window.open('${course.registration_link}', '_blank')`
        );

        const infoButtonBox = document.createElement("div");
        infoButtonBox.classList.add("px-2");
        const infoButton = document.createElement("button");
        infoButton.classList.add("btn", "p-2");
        infoButton.textContent = "Mehr Info"; // Updated text content
        infoButtonBox.appendChild(infoButton);
        infoButton.setAttribute(
          "onclick",
          `window.location.href='${link}'; return false;`
        );

        buttonsContainer.appendChild(bookingButtonBox);
        buttonsContainer.appendChild(infoButtonBox);

        card.appendChild(titleBox);
        card.appendChild(kindAndDateAndNumberOfDaysAndPresenceOrOnlineBox);
        card.appendChild(descriptionBox);
        card.appendChild(buttonsContainer);
        container.appendChild(card);
        list.appendChild(container);
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

        const link = `kursbeschreibung.html?title=${encodeURIComponent(
          course.title
        )}&date=${encodeURIComponent(
          course.date
        )}&location=${encodeURIComponent(
          course.location
        )}&type=${encodeURIComponent(
          course.type
        )}&onlineorpresence=${encodeURIComponent(
          course.onlineOrPresence
        )}&registration=${encodeURIComponent(
          course.registration
        )}&registration_link=${encodeURIComponent(
          course.registration_link
        )}&cost=${encodeURIComponent(
          course.cost
        )}&shortDescriptionOfContent=${encodeURIComponent(
          course.shortDescriptionOfContent
        )}&purposegoalsOfTheCourse=${encodeURIComponent(
          course.purposegoalsOfTheCourse
        )}&structure=${encodeURIComponent(
          course?.structure?.content[0].content[0].value
        )}&requirements=${encodeURIComponent(
          course?.requirements?.content[0].content[0].value
        )}&additionalInformation=${encodeURIComponent(
          course?.additionalInformation?.content[0].content[0].value
        )}`;

        const container = document.createElement("div");
        container.setAttribute("class", "p-3");

        const card = document.createElement("div");
        card.setAttribute("class", "current-cards");

        const title = document.createElement("h4");
        title.setAttribute("class", "typo-bg-green");
        title.setAttribute("id", "title");

        // Create an anchor element
        const anchor = document.createElement("a");
        // Set the href attribute to the link
        anchor.setAttribute("href", link);
        // Set the onclick event for redirection through JavaScript
        anchor.setAttribute(
          "onclick",
          `window.location.href='${link}'; return false;`
        );

        // Append the title to the anchor
        anchor.appendChild(document.createTextNode(course.title));

        // Append the anchor to the title
        title.appendChild(anchor);

        const moreInfo = document.createElement("span");
        moreInfo.setAttribute("class", "moreInfoButton");

        // Set the onclick event for redirection through JavaScript
        moreInfo.setAttribute(
          "onclick",
          `window.location.href='${link}'; return false;`
        );
        moreInfo.textContent = "mehr informationen";

        const kind = `${
          !!course.type ? course.type : "Art ist nicht angegeben"
        }`;
        const date = `${
          !!course.date ? course.date : "Termin ist nicht angegeben"
        }`;
        const onlineOrPresence = `${
          !!course.onlineOrPresence ? course.onlineOrPresence : ""
        }`;

        const description = document.createElement("h3");
        description.setAttribute("class", "pl-3 typo-bg-green");

        description.textContent = `${kind}, ${date}, ${onlineOrPresence}`;

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
  title.textContent = decodeURIComponent(titleText);

  const dateText = urlParams.get("date");
  const date = document.querySelector("#date");
  date.textContent = `${
    dateText !== "undefined"
      ? decodeURIComponent(dateText)
      : "Termin ist nicht angegeben"
  }`;

  const locationText = urlParams.get("location");
  // const onlineorpresence = urlParams.get("onlineorpresence");
  // ${onlineorpresence !== "undefined" ? onlineorpresence : ""}

  const location = document.querySelector("#location");
  location.textContent = `${
    locationText !== "undefined"
      ? decodeURIComponent(locationText)
      : "Ort ist nicht angegeben"
  }`;

  const typeText = urlParams.get("type");
  const type = document.querySelector("#type");
  type.textContent = `${
    typeText !== "undefined"
      ? decodeURIComponent(typeText)
      : "Ort ist nicht angegeben"
  }`;

  const costText = urlParams.get("cost");
  const cost = document.querySelector("#cost");
  cost.textContent = `${
    costText !== "undefined"
      ? decodeURIComponent(costText)
      : "Kosten ist nicht angegeben"
  }`;

  const registrationText = urlParams.get("registration");
  const registration = document.querySelector("#registration");
  registration.textContent = `${
    registrationText !== "undefined"
      ? decodeURIComponent(registrationText)
      : "Anmeldung ist nicht angegeben"
  }`;

  const registrationLinkText = urlParams.get("registration_link");
  const registrationLink = document.querySelector("#registration_link");
  registrationLink.textContent = `${
    registrationLinkText !== "undefined"
      ? decodeURIComponent(registrationLinkText)
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
      ? decodeURIComponent(purposegoalsOfTheCourseText)
      : "Intention/Ziele des Kurses sind nicht angegeben"
  }`;

  const structureText = urlParams.get("structure");
  const structure = document.querySelector("#structure");
  structure.textContent = `${
    structureText !== "undefined"
      ? decodeURIComponent(structureText)
      : "Ablauf ist nicht angegeben"
  }`;

  const requirementsText = urlParams.get("requirements");
  const requirements = document.querySelector("#requirements");
  requirements.textContent = `${
    requirementsText !== "undefined"
      ? decodeURIComponent(requirementsText)
      : "Voraussetzungen sind nicht angegeben"
  }`;

  const additionalInformationText = urlParams.get("additionalInformation");
  const additionalInformation = document.querySelector(
    "#additionalInformation"
  );
  additionalInformation.textContent = `${
    additionalInformationText !== "undefined"
      ? decodeURIComponent(additionalInformationText)
      : "Vertiefende Informationen ist nicht angegeben"
  }`;
}
