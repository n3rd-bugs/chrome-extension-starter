chrome.webRequest.onBeforeRequest.addListener(
    function (details) 
    {
        var host = new URL(details.url).host;
        var visited = localStorage.getItem(host);
        if (visited)
        {
            visited = parseInt(visited) + 1;
        }
        else
        {
            visited = 1;
        }
        console.log(visited)
        localStorage.setItem(host, visited);
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
);
