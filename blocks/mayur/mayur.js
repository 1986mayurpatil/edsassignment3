export default function decorate(block) {
  const children = block.querySelectorAll("div");

  children.forEach((child, index) => {
    let parent = child.parentNode;
    while (
      parent &&
      !parent.classList.contains("whychooseus") &&
      !parent.classList.contains("helpyouwith")
    ) {
      parent = parent.parentNode;
    }

    if (parent) {
      const dynamicClassName = parent.classList[1];
      child.classList.add(`${dynamicClassName}${index + 1}`);
    }
  });
}
