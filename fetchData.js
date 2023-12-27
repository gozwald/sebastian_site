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
        console.log(course);
        const container = document.createElement("div");
        container.setAttribute("class", "col-xl-4 p-3");

        const card = document.createElement("div");
        card.setAttribute("class", "cards");

        // Create an anchor tag for the title
        const titleBox = document.createElement("div");
        titleBox.setAttribute("class", "card-line text-center");
        titleBox.setAttribute("id", "title");
        const titleLink = document.createElement("a");
        titleLink.setAttribute(
          "href",
          `kursbeschreibung.html?title=${encodeURIComponent(
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
          )}`
        );
        titleLink.setAttribute("class", "h-100");

        const title = document.createElement("h2");
        title.textContent = course.title;

        titleLink.appendChild(title);
        titleBox.appendChild(titleLink);
        const kindAndDateAndNumberOfDaysAndPresenceOrOnlineBox =
          document.createElement("div");
        kindAndDateAndNumberOfDaysAndPresenceOrOnlineBox.setAttribute(
          "class",
          "card-line"
        );
        const kindAndDateAndNumberOfDaysAndPresenceOrOnline =
          document.createElement("h3");
        kindAndDateAndNumberOfDaysAndPresenceOrOnline.setAttribute(
          "class",
          "typo-bg-green h-100"
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
        descriptionBox.setAttribute("class", "card-description");
        const description = document.createElement("div");
        description.setAttribute("id", "description");

        description.setAttribute("class", "typo-bg-green card-item-overflow");
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
          `window.location.href='kursbeschreibung.html?title=${encodeURIComponent(
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
          )}'`
        );
        buttonsConainer.appendChild(bookingButtonBox);
        buttonsConainer.appendChild(infoButtonBox);

        card.appendChild(titleBox);
        card.appendChild(kindAndDateAndNumberOfDaysAndPresenceOrOnlineBox);
        card.appendChild(descriptionBox);
        card.appendChild(buttonsConainer);
        container.appendChild(card);
        list.appendChild(container);

        // addPopupIfNeeded(description);
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
