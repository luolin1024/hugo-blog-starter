document.addEventListener('DOMContentLoaded', () => {
    var umiToken = "kGVT9vDz/LDv4PnGDQzaJpE14V8Sc36DyyhajxOajBdriS1LWet4jTd1F8pZGQzvMEZTqCpZhUr5LrUA6kRmna9R8JTYzlPfSezc104PSLAFYn1//S1X4NeVtH7eRKkeAqM0jjPk0EmQOLr3f7YOweg4t/0hz0Ma5uF07sjEM6n6zNg5XNpxawrg4LRsySf9KORELjKoNiLSU2BktzPQNduXZM1t9MDLbHx4Fy81cG31PZfjZI9Vtce2RJl8NhA77ffFtW6zASz6I6ENw4stwvxJaKTt1xVpIe8rzGhDGEI0rK7t7TGIYAiU7Ddvv8xGSaXX0uMw3tJXf1wYc9gKeF01tCslIbsYyQ=="  //获取到的 token
    var umiId;
    if(window.location.host == 'www.luolin.online'){
        umiId = "3344f447-eb26-4d57-b289-50a5b9d8782c" //获取到的 websiteId
    } else {
        umiId = "c8850e2c-16aa-465e-aa6f-5392c9397317";
    }

    var umiTime = Date.parse(new Date());
    var umiUrl = `https://blogumicounter.luolin.online/api/websites/${umiId}/stats?startAt=0000000000&endAt=${umiTime}`;

    fetch(umiUrl, {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        headers: {
            'Authorization': 'Bearer ' + umiToken,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(resdata => {
            document.querySelector('#busuanzi_value_site_pv').innerText = resdata.pageviews.value;
            document.querySelector('#busuanzi_value_site_uv').innerText = resdata.visitors.value;
        })
        .catch(error => console.error('Error fetching site stats:', error));

    var activeUmiUrl = `https://blogumicounter.luolin.online/api/websites/${umiId}/active`;
    fetch(activeUmiUrl, {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        headers: {
            'Authorization': 'Bearer ' + umiToken,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(resdata => {
            document.querySelector('#busuanzi_value_active_uv').innerText = resdata.x;
        })
        .catch(error => console.error('Error fetching site stats:', error));


    var currentPage = window.location.pathname;
    var pageUmiUrl = `https://blogumicounter.luolin.online/api/websites/${umiId}/stats?unit=day&timezone=asia/shanghai&startAt=0000000000&endAt=${umiTime}&url=${currentPage}`;

    fetch(pageUmiUrl, {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
        headers: {
            'Authorization': 'Bearer ' + umiToken,
            'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(resdata => {
            document.querySelector('#busuanzi_value_page_pv').innerText = resdata.pageviews.value;
            document.querySelector('#busuanzi_value_page_uv').innerText = resdata.visitors.value;
        })
        .catch(error => console.error('Error fetching page stats:', error));

});
