import userStore from "./store/user-store";

/**
 * 
 * @param {HTMLDivElement} element 
 */
export const usersApp = async(element) => {

    element.innerHTML = 'Loading...';
    await userStore.loadNextPage();


}