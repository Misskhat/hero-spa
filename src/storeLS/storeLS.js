const getFromLS = () => {
    const storedData = localStorage.getItem("app");
    if (storedData) {
        const storedDataConvert = JSON.parse(storedData);
        return storedDataConvert;
    } else {
        // console.log([]);
        return [];
    }
};

export const savedLS = (appID) => {
    const savedDataInLS = getFromLS();
    // console.log(savedDataInLS);
    if (savedDataInLS?.includes(appID)) {
        alert("this app already exit in you install item");
    } else {
        const newData = savedDataInLS.push(appID);
        const newDataSTR = JSON.stringify(newData)
        const newDataConvert = localStorage.setItem("app", newDataSTR)
        return newDataConvert
        // console.log(newDataConvert);
    }
};
