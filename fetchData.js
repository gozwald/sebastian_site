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
    .getEntries({
      content_type: "course",
      "metadata.tags.sys.id[in]": "landingpage",
    })
    .then((response) => response.items)
    .then((data) => {
      const list = document.querySelector("#courseList");
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
        container.classList.add("col-xl-4", "p-3", "position-relative");

        const card = document.createElement("div");
        card.classList.add("cards", "d-flex", "flex-column");

        const titleBox = document.createElement("div");
        titleBox.classList.add(
          "card-line",
          "text-center",
          "fixed-height-title"
        );
        titleBox.setAttribute("id", "title");
        const titleLink = document.createElement("a");
        titleLink.setAttribute("href", link);

        const title = document.createElement("div");
        title.classList.add("font-weight-bold", "fixed-height-content");
        title.textContent = course.title;

        if (title.textContent.length > 50) {
          title.classList.add("h6");
        } else {
          title.classList.add("h5");
        }

        titleLink.appendChild(title);
        titleBox.appendChild(titleLink);

        const kindAndDateAndNumberOfDaysAndPresenceOrOnlineBox =
          document.createElement("div");
        kindAndDateAndNumberOfDaysAndPresenceOrOnlineBox.classList.add(
          "card-line",
          "fixed-height-subtitle"
        );
        const kindAndDateAndNumberOfDaysAndPresenceOrOnline =
          document.createElement("div");
        kindAndDateAndNumberOfDaysAndPresenceOrOnline.classList.add(
          "typo-bg-green",
          "fixed-height-content"
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

        kindAndDateAndNumberOfDaysAndPresenceOrOnline.textContent = `${kind}, ${onlineOrPresence}, ${date}`;

        kindAndDateAndNumberOfDaysAndPresenceOrOnlineBox.appendChild(
          kindAndDateAndNumberOfDaysAndPresenceOrOnline
        );

        const descriptionBox = document.createElement("div");
        descriptionBox.classList.add(
          "card-description",
          "overflow-auto",
          "fixed-height-description"
        );
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
        buttonsContainer.classList.add(
          "mt-auto",
          "d-flex",
          "justify-content-center"
        );

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
    .getEntries({
      content_type: "course",
      order: "fields.courseStartingDate",
    })
    .then((response) => response.items)
    .then((data) => {
      const groupedCourses = groupByCourseType(data);

      const list = document.querySelector("#courseList");

      for (const [courseType, courses] of Object.entries(groupedCourses)) {
        const typeContainer = document.createElement("div");
        typeContainer.className = "course-type-container";

        const typeHeader = document.createElement("h5");
        typeHeader.textContent = `${courseType}`;
        typeContainer.appendChild(typeHeader);

        courses.forEach((course) => {
          const link = buildLink(course.fields);

          const container = document.createElement("div");
          container.className = "p-1"; // Adjusted padding for a more compact design
          container.style.fontSize = "10px"; // Set the font size to make it smaller

          const card = document.createElement("div");
          card.className = "current-cards border"; // Added a border for better separation

          const title = document.createElement("h6");
          title.className = "typo-bg-green mb-1"; // Adjusted margin for better spacing

          const anchor = document.createElement("span");
          anchor.className = "titleTextDescription";
          anchor.setAttribute(
            "onclick",
            `window.location.href='${link}'; return false;`
          );
          anchor.appendChild(document.createTextNode(course.fields.title));

          title.appendChild(anchor);

          const moreInfo = document.createElement("span");
          moreInfo.className = "moreInfoButton";
          moreInfo.setAttribute(
            "onclick",
            `window.location.href='${link}'; return false;`
          );
          moreInfo.textContent = "Mehr Info"; // Adjusted text for better clarity

          const kind = course.fields.type || "Art ist nicht angegeben";
          const date = course.fields.date || "Termin ist nicht angegeben";
          const onlineOrPresence = course.fields.onlineOrPresence || "";

          const description = document.createElement("h6");
          description.className = "pl-1 typo-bg-green";
          description.textContent = `${kind}, ${onlineOrPresence}, ${date}`;
          description.appendChild(moreInfo);

          card.appendChild(title);
          card.appendChild(description);
          container.appendChild(card);
          typeContainer.appendChild(container);
        });

        list.appendChild(typeContainer);
      }
    })
    .catch(console.error);
}

function groupByCourseType(data) {
  const groupedCourses = {};

  data.forEach((course) => {
    const courseType = course.fields.courseType || "Unspecified";

    if (!groupedCourses[courseType]) {
      groupedCourses[courseType] = [];
    }

    groupedCourses[courseType].push(course);
  });

  return groupedCourses;
}

function buildLink(course) {
  const link = `kursbeschreibung.html?title=${encodeURIComponent(
    course.title
  )}&date=${encodeURIComponent(course.date)}&location=${encodeURIComponent(
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

  return link;
}

function groupByCourseType(data) {
  const groupedCourses = {};

  data.forEach((course) => {
    const courseType = course.fields.courseType || "Unspecified";

    if (!groupedCourses[courseType]) {
      groupedCourses[courseType] = [];
    }

    groupedCourses[courseType].push(course);
  });

  return groupedCourses;
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
