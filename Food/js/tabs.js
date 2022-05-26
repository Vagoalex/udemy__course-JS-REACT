export function tabs() {
	const tabsContent = document.querySelectorAll('.tabcontent');
	const tabs = document.querySelectorAll('.tabheader__item');
	const tabsWrapper = document.querySelector('.tabheader__items');

	const hideTabContent = () => {
		tabsContent.forEach((item) => {
			item.classList.add('hide');
			item.classList.remove('show', 'fade');
		});
		tabs.forEach((item) => {
			item.classList.remove('tabheader__item_active');
		});
	};

	const showTabsContent = (i = 0) => {
		tabsContent[i].classList.remove('hide');
		tabsContent[i].classList.add('show', 'fade');
		tabs[i].classList.add('tabheader__item_active');
	};

	hideTabContent();
	showTabsContent();

	tabsWrapper.addEventListener('click', (e) => {
		const target = e.target;

		if (target && target.classList.contains('tabheader__item'))
			tabs.forEach((item, index) => {
				if (item === target) {
					hideTabContent();
					showTabsContent(index);
				}
			});
	});
}
