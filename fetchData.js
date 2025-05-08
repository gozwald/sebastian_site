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
      list.innerHTML = ""; // Clear existing content before adding new cards
      data.forEach((coursedata) => {
        const link = buildLink(coursedata.sys.id);
        let course = coursedata.fields;

        const columnContainer = document.createElement("div");
        columnContainer.classList.add("col-xl-4", "col-md-6", "mb-4");

        const courseCard = document.createElement("div");
        courseCard.classList.add("course-card");

        const courseCardContent = document.createElement("div");
        courseCardContent.classList.add("course-card-content");

        const titleElement = document.createElement("h5");
        titleElement.classList.add("course-card-title");
        const titleLink = document.createElement("a");
        titleLink.setAttribute("href", link);
        titleLink.textContent =
          course.shortTitle || "Kurstitel nicht verfügbar";
        // Inline styles for text-decoration and color are now handled by CSS
        titleElement.appendChild(titleLink);

        const metaInfoElement = document.createElement("p");
        metaInfoElement.classList.add("course-card-meta");
        const kind = course.type || "Art nicht angegeben";
        const date = course.date || "Termin nicht angegeben";
        const onlineOrPresence = course.onlineOrPresence || "";
        metaInfoElement.textContent = `${kind}${
          onlineOrPresence ? `, ${onlineOrPresence}` : ""
        }${date ? `, ${date}` : ""}`;
        // Inline styles for meta info are now handled by CSS

        const descriptionElement = document.createElement("p");
        descriptionElement.classList.add("course-card-description");
        descriptionElement.textContent =
          course.shortDescriptionOfContent || "Beschreibung nicht verfügbar.";

        // --- MODIFIED BUTTONS SECTION ---
        // This outer container helps with the mt-auto push
        const buttonsOuterContainer = document.createElement("div");
        buttonsOuterContainer.classList.add("mt-auto", "pt-3");

        // This inner container is for the flex layout of buttons
        const buttonsFlexContainer = document.createElement("div");
        buttonsFlexContainer.classList.add("buttons-container"); // Class for CSS flex styling

        // --- SWAPPED BUTTON ORDER ---
        // Create "Anmeldungslink" button first if it exists
        if (course.registration_link) {
          const bookingButton = document.createElement("a");
          // Add the new class 'course-card-booking-button'
          bookingButton.classList.add(
            "btn",
            "course-card-button",
            "course-card-booking-button"
          );
          bookingButton.href = course.registration_link;
          bookingButton.target = "_blank";
          bookingButton.rel = "noopener noreferrer";
          bookingButton.textContent = "Anmeldungslink";
          buttonsFlexContainer.appendChild(bookingButton); // Add to flex container
        }

        // Then create "Mehr Info" button if link exists
        if (link) {
          const infoButton = document.createElement("a");
          infoButton.classList.add("btn", "course-card-button");
          infoButton.href = link;
          infoButton.textContent = "Mehr Info";
          buttonsFlexContainer.appendChild(infoButton); // Add to flex container
        }
        // --- END OF SWAPPED BUTTON ORDER ---

        buttonsOuterContainer.appendChild(buttonsFlexContainer); // Append flex container to outer container
        // --- END OF MODIFIED BUTTONS SECTION ---

        courseCardContent.appendChild(titleElement);
        courseCardContent.appendChild(metaInfoElement);
        courseCardContent.appendChild(descriptionElement);
        courseCardContent.appendChild(buttonsOuterContainer); // Add the outer container for buttons

        courseCard.appendChild(courseCardContent);
        columnContainer.appendChild(courseCard);

        list.appendChild(columnContainer);
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

        courses.forEach((coursedata) => {
          const link = buildLink(coursedata.sys.id);

          let course = coursedata.fields;

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
          anchor.appendChild(document.createTextNode(course.title));

          title.appendChild(anchor);

          const moreInfo = document.createElement("span");
          moreInfo.className = "moreInfoButton";
          moreInfo.setAttribute(
            "onclick",
            `window.location.href='${link}'; return false;`
          );
          moreInfo.textContent = "Mehr Info"; // Adjusted text for better clarity

          const kind = course.type || "Art ist nicht angegeben";
          const date = course.date || "Termin ist nicht angegeben";
          const onlineOrPresence = course.onlineOrPresence || "";

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

function buildLink(courseid) {
  // link should only return the id of the course

  const link = `kursbeschreibung.html?id=${courseid}`;

  // legacy code for reference
  // const link = `kursbeschreibung.html?title=${encodeURIComponent(
  //   course.title
  // )}&date=${encodeURIComponent(course.date)}&location=${encodeURIComponent(
  //   course.location
  // )}&type=${encodeURIComponent(
  //   course.type
  // )}&onlineorpresence=${encodeURIComponent(
  //   course.onlineOrPresence
  // )}&registration=${encodeURIComponent(
  //   course.registration
  // )}&registration_link=${encodeURIComponent(
  //   course.registration_link
  // )}&cost=${encodeURIComponent(
  //   course.cost
  // )}&shortDescriptionOfContent=${encodeURIComponent(
  //   course.shortDescriptionOfContent
  // )}&purposegoalsOfTheCourse=${encodeURIComponent(
  //   course.purposegoalsOfTheCourse
  // )}&structure=${encodeURIComponent(
  //   parseRtf(course?.structure?.content)
  // )}&requirements=${encodeURIComponent(
  //   parseRtf(course?.requirements?.content)
  // )}&additionalInformation=${encodeURIComponent(
  //   parseRtf(course?.additionalInformation?.content)
  // )}`;

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

function fetchDescriptionData() {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get("id");

  const client = contentful.createClient({
    space,
    environment,
    accessToken,
  });

  if (!courseId) {
    console.error("Course ID not found in URL parameters.");
    return;
  }

  client
    .getEntry(courseId)
    .then((entry) => {
      const course = entry.fields;

      document.querySelector("#title").textContent =
        course.title || "Title is not provided";
      document.querySelector("#date").textContent = course.date
        ? course.date
        : "Date is not provided";
      document.querySelector("#location").textContent =
        course.location || "Location is not provided";
      document.querySelector("#type").textContent =
        course.type || "Type is not provided";
      document.querySelector("#cost").textContent =
        course.cost || "Cost is not provided";
      document.querySelector("#registration").textContent =
        course.registration || "Registration info is not provided";

      const registrationLink = document.querySelector("#registration_link");
      registrationLink.textContent =
        course.registration_link || "Registration link is not provided";

      if (course.registration_link) {
        registrationLink.setAttribute("href", course.registration_link);
        registrationLink.setAttribute("target", "_blank");
        registrationLink.setAttribute("rel", "noopener noreferrer");
        registrationLink.style.color = "#214863";
      }

      document.querySelector("#purposegoalsOfTheCourse").textContent =
        course.purposegoalsOfTheCourse ||
        "Purpose/goals of the course are not provided";

      setContentWithHtml("#structure", parseRtf(course.structure.content));
      setContentWithHtml(
        "#requirements",
        parseRtf(course.requirements.content)
      );
      setContentWithHtml(
        "#additionalInformation",
        parseRtf(course.additionalInformation.content)
      );
    })
    .catch(console.error);
}

function setContentWithHtml(selector, htmlContent) {
  const element = document.querySelector(selector);
  if (!htmlContent) {
    element.innerHTML = "Information is not provided";
    return;
  }

  const parsedHtml = new DOMParser().parseFromString(
    decodeURIComponent(htmlContent),
    "text/html"
  );
  const links = parsedHtml.querySelectorAll("a");
  if (links.length > 0) {
    links.forEach((link) => {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
      link.setAttribute("id", "registration_link");
      link.style.color = "#214863";
    });
  }

  element.innerHTML = parsedHtml.body.innerHTML;
}
