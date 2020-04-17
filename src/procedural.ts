function createShareURLButtons(classNames: string[], url: string) {
  for (const className of classNames) {
    const buttons = document.getElementsByClassName(className);
    for (const button of buttons) {
      if (button instanceof HTMLButtonElement) {
        createShareURLButton(button, url);
      }
    }
  }
}

function createShareURLButton(button: HTMLButtonElement, url: string) {
  let link: string;
  if (button.classList.contains("btn--facebook")) {
    link = `https://facebook.com/share.php?u=${url}`;
  } else if (button.classList.contains("btn--twitter")) {
    link = `https://twitter.com/share?url=${url}`;
  } else if (button.classList.contains("btn--linkedin")) {
    link = `https://linkedin.com/shareArticle?url=${url}`;
  }
  button.addEventListener("click", () => open(link));
}

createShareURLButtons(
  ["btn--facebook", "btn--twitter", "btn--linkedin"],
  "https://www.google.com"
);
