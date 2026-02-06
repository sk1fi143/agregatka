const tabs = document.querySelectorAll('input[name="tab"]');
const wrappers = document.querySelectorAll('.wrapper-tab1, .wrapper-tab2');

tabs.forEach(tab => {
    tab.addEventListener('change', () => {
        wrappers.forEach(wrapper => {
            wrapper.style.display = 'none';
        });

        const selectedWrapper = document.querySelector(`.wrapper-${tab.id}`);
        if (selectedWrapper) {
            selectedWrapper.style.display = 'flex';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    function setupContainers(wrapperClass, buttonId) {
        const wrapper = document.querySelector(wrapperClass);
        const containers = wrapper ? wrapper.querySelectorAll('.markstypes-wrapper__container') : [];
        const button = document.getElementById(buttonId);
        
        let currentVisibleIndex = 0;
        
        if (containers.length > 0) {
            containers[currentVisibleIndex].style.display = 'grid';
            currentVisibleIndex++;
        }

        button.addEventListener('click', () => {
            if (currentVisibleIndex < containers.length) {
                containers[currentVisibleIndex].style.display = 'grid';
                currentVisibleIndex++;
            } else {
                button.style.display = 'none';
            }
        });
    }

    setupContainers('.wrapper-tab1', 'markstypes-btn1');
    setupContainers('.wrapper-tab2', 'markstypes-btn2');
});