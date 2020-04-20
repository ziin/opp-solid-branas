function addListenerToButtons (
  event: string,
  classNames: string[],
  cb: (event: Event, button: HTMLButtonElement) => void
) {
  for (const className of classNames) {
    const buttons = document.getElementsByClassName(className)
    for (const button of buttons) {
      if (button instanceof HTMLButtonElement) {
        button.addEventListener(event, (event) => cb(event, button))
      }
    }
  }
}

// addListenerToButtons(
//   "click",
//   ["btn--facebook", "btn--twitter", "btn--linkedin", "btn--print"],
//   (e, button) => {
//     const url = "https://www.google.com";
//     if (button.classList.contains("btn--facebook")) {
//       window.open(`https://facebook.com/share.php?u=${url}`);
//     } else if (button.classList.contains("btn--twitter")) {
//       window.open(`https://twitter.com/share?url=${url}`);
//     } else if (button.classList.contains("btn--linkedin")) {
//       window.open(`https://linkedin.com/shareArticle?url=${url}`);
//     } else if (button.classList.contains("btn--print")) {
//       window.print();
//     }
//   }
// );

// Alternative way
function bindEventListenerToClassNames (
  event: string,
  classNames: string | string[],
  cb: () => void
) {
  for (const element of document.getElementsByClassName(
    typeof classNames === 'string' ? classNames : classNames.join(' ')
  )) {
    element.addEventListener(event, cb)
  }
}

bindEventListenerToClassNames('click', ['btn--twitter'], () =>
  window.open('https://twitter.com/share?url=https://www.google.com')
)

bindEventListenerToClassNames('click', 'btn--print', () => window.print())

// Alternative
function bindOnClickOpenUrlByClassNames (classNames: string[], url: string) {
  for (const element of document.getElementsByClassName(classNames.join(' '))) {
    element.addEventListener('click', () => window.open(url))
  }
}

function bindOnClickOpenPrint (classNames: string[]) {
  for (const element of document.getElementsByClassName(classNames.join(' '))) {
    element.addEventListener('click', () => window.print())
  }
}
