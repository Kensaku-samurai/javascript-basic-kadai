const today = () => {
    const today = new Date();
    console.log(today.getFullYear());
    console.log(today.getMonth() + 1);
    console.log(today.getDate());
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const currenDate =new Date();
    const formatteDate = year + '年' + month + '月' + date +'日';
    console.log(formatteDate);

};

today();


