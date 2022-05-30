function tabs(triggerContent, triggerElements, wrapper, activeClass) {
  const tabsContent = document.querySelectorAll(triggerContent);
  const tabs = document.querySelectorAll(triggerElements);
  const tabsWrapper = document.querySelector(wrapper);

  const hideTabContent = (activeClass) => {
    tabsContent.forEach((item) => {
      item.classList.add('hide');
      item.classList.remove('show', 'fade');
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  };

  const showTabsContent = (activeClass, i = 0) => {
    tabsContent[i].classList.remove('hide');
    tabsContent[i].classList.add('show', 'fade');
    tabs[i].classList.add(activeClass);
  };

  hideTabContent(activeClass);
  showTabsContent(activeClass);

  tabsWrapper.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains(triggerElements.slice(1)))
      tabs.forEach((item, index) => {
        if (item === target) {
          hideTabContent(activeClass);
          showTabsContent(activeClass, index);
        }
      });
  });
}

export default tabs;
