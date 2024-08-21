document.addEventListener('DOMContentLoaded', () => {
    /**
     * curl --location 'https://blogcounter.luolin.us.kg/api/auth/login' \
        --header 'Content-Type: application/json' \
        --data '{
        "username":"账号",
        "password":"密码"
        }'
     */
    var umiToken = "kGVT9vDz/LDv4PnGDQzaJpE14V8Sc36DyyhajxOajBdriS1LWet4jTd1F8pZGQzvMEZTqCpZhUr5LrUA6kRmna9R8JTYzlPfSezc104PSLAFYn1//S1X4NeVtH7eRKkeAqM0jjPk0EmQOLr3f7YOweg4t/0hz0Ma5uF07sjEM6n6zNg5XNpxawrg4LRsySf9KORELjKoNiLSU2BktzPQNduXZM1t9MDLbHx4Fy81cG31PZfjZI9Vtce2RJl8NhA77ffFtW6zASz6I6ENw4stwvxJaKTt1xVpIe8rzGhDGEI0rK7t7TGIYAiU7Ddvv8xGSaXX0uMw3tJXf1wYc9gKeF01tCslIbsYyQ=="  // 获取到的 token
    var umiId = "c8850e2c-16aa-465e-aa6f-5392c9397317"  // 获取到的 websiteId
    var umiYumingUrl = "https://blogcounter.luolin.us.kg" // 域名
    var umiTime = Date.parse(new Date());
    var umiUrl = `${umiYumingUrl}/api/websites/${umiId}/stats?startAt=0000000000&endAt=${umiTime}`;

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
            document.querySelector('#umami_value_site_pv').innerText = resdata.pageviews.value;
            document.querySelector('#umami_value_site_uv').innerText = resdata.visitors.value;
        })
        .catch(error => console.error('Error fetching site stats:', error));

    var activeUmiUrl = `${umiYumingUrl}/api/websites/${umiId}/active`;
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
            document.querySelector('#umami_value_active_uv').innerText = resdata.x;
        })
        .catch(error => console.error('Error fetching site stats:', error));


    var currentPage = window.location.pathname;
    var pageUmiUrl = `${umiYumingUrl}/api/websites/${umiId}/stats?unit=day&timezone=asia/shanghai&startAt=0000000000&endAt=${umiTime}&url=${currentPage}`;

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
            document.querySelector('#umami_value_page_pv').innerText = resdata.pageviews.value;
            document.querySelector('#umami_value_page_uv').innerText = resdata.visitors.value;
        })
        .catch(error => console.error('Error fetching page stats:', error));

});
