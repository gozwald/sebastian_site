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
      order: "fields.courseStartingDate",
    })
    .then((response) => response.items)
    .then((data) => {
      const list = document.querySelector("#courseList");
      data.forEach((course) => {
        course = course.fields;

        const link = buildLink(course);

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
        title.textContent = course.shortTitle;

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

      // ensure the following order in groups

      const order = [
        "Gewaltfreie Kommunikation",
        "Emotionale Selbstregulation",
        "Schluss mit Aufschieben",
        "Grenzen setzen",
        "Konflikte meistern",
        "New Work",
        "Sonstiges",
      ];

      const orderedGroups = {};

      order.forEach((courseType) => {
        orderedGroups[courseType] = groupedCourses[courseType];
        // check for course tag "prio" and move to top

        if (orderedGroups[courseType]) {
          const prioIndex = orderedGroups[courseType].findIndex((course) => {
            return course.metadata.tags.find((tag) => tag.sys.id === "prio");
          });

          if (prioIndex > -1) {
            const prioCourse = orderedGroups[courseType].splice(prioIndex, 1);
            orderedGroups[courseType].unshift(prioCourse[0]);
          }
        }
      });

      const list = document.querySelector("#courseList");

      for (const [courseType, courses] of Object.entries(orderedGroups)) {
        // only show course types with courses

        if (!courses) {
          continue;
        }

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
    parseRtf(course?.structure?.content)
  )}&requirements=${encodeURIComponent(
    parseRtf(course?.requirements?.content)
  )}&additionalInformation=${encodeURIComponent(
    parseRtf(course?.additionalInformation?.content)
  )}`;

  return link;
}

function parseRtf(rtf) {
  const result = rtf.map((item) => {
    const contentArray = item.content;

    const content = contentArray.map((item) => {
      if (item.nodeType === "text") {
        return `<p>${item.value}</p>`;
      } else if (item.nodeType === "hyperlink") {
        return `<a href="${item.data.uri}">${item.content[0].value}</a>`;
      } else if (item.nodeType === "embedded-asset-block") {
        return `<img src="${item.data.target.fields.file.url}" alt="${item.data.target.fields.title}" />`;
      } else if (item.nodeType === "paragraph") {
        return `<p>${item.content[0].value}</p>`;
      } else if (item.nodeType === "unordered-list") {
        const listItems = item.content.map((item) => {
          return `<li>${item.content[0].value}</li>`;
        });

        return `<ul>${listItems.join("")}</ul>`;
      } else if (item.nodeType === "ordered-list") {
        const listItems = item.content.map((item) => {
          return `<li>${item.content[0].value}</li>`;
        });

        return `<ol>${listItems.join("")}</ol>`;
      } else if (item.nodeType === "blockquote") {
        return `<blockquote>${item.content[0].value}</blockquote>`;
      }
    });

    return content.join("");
  });

  return result.join("");
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

  const parseedHtmlStructure = decodeURIComponent(structureText);

  const htmlDocStructure = new DOMParser().parseFromString(
    parseedHtmlStructure,
    "text/html"
  );

  const linksStructure = htmlDocStructure.querySelectorAll("a");

  if (linksStructure.length > 0) {
    linksStructure.forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.setAttribute("id", "registration_link");
      link.style.color = "#214863";
    });
  }

  structure.innerHTML = `${
    structureText !== "undefined"
      ? htmlDocStructure.body.innerHTML
      : "Ablauf ist nicht angegeben"
  }`;

  const requirementsText = urlParams.get("requirements");
  const requirements = document.querySelector("#requirements");

  const parseedHtmlRequirements = decodeURIComponent(requirementsText);
  const htmlDocRequirements = new DOMParser().parseFromString(
    parseedHtmlRequirements,
    "text/html"
  );

  const linksRequirements = htmlDocRequirements.querySelectorAll("a");

  if (linksRequirements.length > 0) {
    linksRequirements.forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.setAttribute("id", "registration_link");
      link.style.color = "#214863";
    });
  }

  requirements.innerHTML = `${
    requirementsText !== "undefined"
      ? htmlDocRequirements.body.innerHTML
      : "Voraussetzungen sind nicht angegeben"
  }`;

  const additionalInformationText = urlParams.get("additionalInformation");
  const additionalInformation = document.querySelector(
    "#additionalInformation"
  );

  const parseedHtml = decodeURIComponent(additionalInformationText);
  const htmlDoc = new DOMParser().parseFromString(parseedHtml, "text/html");

  const links = htmlDoc.querySelectorAll("a");

  if (links.length > 0) {
    links.forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.setAttribute("id", "registration_link");
      link.style.color = "#214863";
    });
  }

  additionalInformation.innerHTML = `${
    additionalInformationText !== "undefined"
      ? htmlDoc.body.innerHTML
      : "Vertiefende Informationen ist nicht angegeben"
  }`;
}
